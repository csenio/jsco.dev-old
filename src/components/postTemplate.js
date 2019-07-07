import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Text from "components/text"

const MarkdownContainer = styled.div`
  color: #fff;
  font-family: Open Sans;
  hr {
    margin: 20px 0;
    border-color: ${p => p.theme.colors.greyLight};
  }
  em {
    color: ${p => p.theme.colors.greyLight};
  }
  p {
    margin-bottom: 1em;
    line-height: 1.5;
  }
  blockquote {
    border-left: 2px solid ${p => p.theme.colors.greyLight};
    padding-left: 10px;
    color: ${p => p.theme.colors.greyLight};
  }
  img {
    width: 100%;
  }
`

export const PostTemplate = ({ html, frontmatter }) => {
  return (
    <>
      <Text as="h1" color="white">
        {frontmatter.title}
      </Text>
      <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <PostTemplate html={html} frontmatter={frontmatter} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostQuery($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      frontmatter {
        title
        date
      }
      html
    }
  }
`
