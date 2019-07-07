import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { withTheme } from "styled-components"

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${p => p.theme.colors.red};
  background: ${p => p.theme.gradients.fire};
`

const Header = ({ siteTitle, theme }) => (
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
        css={`
          text-decoration: none;

          font-size: 20px;
          font-family: IBM Plex Sans;
          font-weight: 700;
        `}
      >
        <span role="img" aria-label="flame">
          🔥{" "}
          <span
            css={`
              color: ${theme.colors.red};
              background: ${theme.gradients.fire};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            {siteTitle}
          </span>
        </span>
      </Link>
    </div>
    {/* <Line /> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)
