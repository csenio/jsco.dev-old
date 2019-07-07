import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { slugify } from "helpers"
import Text from "components/text"
import styled from "styled-components"

const Title = styled(Link)`
  font-weight: 700;
  color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.red};
  }
  transition: color 0.2s;
`

const post_archive_query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date
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
              <Title to={`/blog/${slugify(node.frontmatter.title)}`}>
                {node.frontmatter.title}
              </Title>
              <Text
                fontWeight="500"
                mt="10px"
                color="greyLight"
                fontWeight="400"
                as="p"
              >
                {node.frontmatter.date}
              </Text>
              <Text
                fontWeight="500"
                mt="10px"
                color="greyLight"
                fontWeight="400"
                as="p"
              >
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
