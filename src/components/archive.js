import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { slugify } from "helpers"
import Text from "components/text"

const post_archive_query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
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
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={`/blog/${slugify(node.frontmatter.title)}`}>
                <Text fontWeight="500" as="h3">
                  {node.frontmatter.title}
                </Text>
              </Link>
              <Text color="grey" fontWeight="400" as="p">
                {node.frontmatter.subtitle}
              </Text>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
