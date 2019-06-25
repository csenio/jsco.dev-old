import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { slugify } from "helpers"

const post_archive_query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 60)
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(post_archive_query)

  console.log(data)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={`/blog/${slugify(node.frontmatter.title)}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
