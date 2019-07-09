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
    color: ${p => p.theme.colors.yellow};
  }
  transition: color 0.15s;
`

const post_archive_query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YY")
            subtitle
          }
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
            <li css="margin-bottom: 40px" key={node.frontmatter.title}>
              <Title to={`/blog/${slugify(node.frontmatter.title)}`}>
                {node.frontmatter.title}
              </Title>
              <Text
                fontWeight="500"
                color="greyLight"
                as="p"
                fontWeight="400"
                fontSize="13px"
                mb="8px"
              >
                {node.frontmatter.date}
              </Text>
              <Text fontWeight="500" color="greyLight" as="p">
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
