import React from "react"
import styled from "styled-components"

const Outer = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`

const blob = () => {
  return (
    <Outer>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M 10 10, 100 10, 100 100, 10 100 Z"
            fill="rgba(0, 208, 132, 1)"
            stroke="none"
            stroke-width="0"
          />
        </g>
      </svg>
    </Outer>
  )
}

export default blob
