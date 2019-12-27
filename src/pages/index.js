import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Landing from "../components/landing"
import Main from "../components/main"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    mounted: false,
    num: "03",
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ mounted: true })
      }.bind(this),
      3200
    )
    setTimeout(
      function() {
        this.setState({ num: "02" })
      }.bind(this),
      1000
    )
    setTimeout(
      function() {
        this.setState({ num: "01" })
      }.bind(this),
      2000
    )
    setTimeout(
      function() {
        this.setState({ num: "00" })
      }.bind(this),
      3000
    )
  }
  render() {
    const isLoading = !this.state.mounted
    let div
    if (isLoading) {
      div = (
        <div className="landing">
          {" "}
          <div className="landing__content">
            <p className="num">{this.state.num}</p>
            <p>HELLOOO</p>
          </div>
        </div>
      )
    } else {
      div = (
        <div
          style={{
            display: this.state.mounted,
          }}
        >
          <Layout>
            <SEO title="Home" />

            <Main />
          </Layout>
        </div>
      )
    }

    return <div>{div}</div>
  }
}

export default IndexPage
