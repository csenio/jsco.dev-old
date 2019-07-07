import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import Archive from "components/archive"
import Blob from "components/blob"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Archive />
  </Layout>
)

export default IndexPage
