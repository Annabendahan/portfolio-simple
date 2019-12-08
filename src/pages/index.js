import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Landing from "../components/landing"
import Main from "../components/main"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />

      <Main />
    </Layout>
  </div>
)

export default IndexPage
