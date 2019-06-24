import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

const postTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default postTemplate

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        slug
        date
      }
      html
    }
  }
`
