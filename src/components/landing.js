import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          background: `red`,
          zIndex: `300`,
          position: `relative`,
          width: `100%`,
          height: `100vh`,

          overflow: `hidden`,
        }}
      >
        landing
      </div>
    )
  }
}

export default Landing
