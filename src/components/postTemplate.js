import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const MarkdownContainer = styled.div``

export const PostTemplate = ({ html, frontmatter }) => {
  return (
    <>
      <h1>{frontmatter.title}</h1>
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
