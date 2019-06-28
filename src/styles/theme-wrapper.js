import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import GlobalStyle from "./GlobalStyle"

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
