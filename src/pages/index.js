import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        height: "200vh",
        background: "#ff8e71",
      }}
    ></div>
  </Layout>
)

export default IndexPage
