import React from 'react'
import base from './base.scss'
import Navbar from "./Navbar/Navbar"
import Footer from "../components/Footer"
import { BlogPostJsonLd  } from 'gatsby-plugin-next-seo'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="casinoContainer">
        <BlogPostJsonLd 
        overrides = {{
          "@type": "WebSite",
          "url": "https://kasinohub.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://kasinohub.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
        />
        <span id="scroll"></span>
        <Navbar />
        {children}
        <Footer/>
      </div>
    )
  }
}

export default Template
