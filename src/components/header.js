import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #ff1f4b;
  background: linear-gradient(to left, #fff 0%, #ff1f4b 100%);
`

const Header = ({ siteTitle }) => (
  <header
    css={`
      margin-bottom: 1.5rem;
    `}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        css="text-decoration: none;
          color: #ff1f4b;
          font-size: 20px;
          font-family: IBM Plex Sans;
          font-weight: 700;
        "
      >
        {siteTitle}
      </Link>
    </div>
    <Line />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
