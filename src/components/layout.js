import React from 'react'
import base from './base.scss'
import Navbar from "./Navbar/Navbar"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Footer from "../components/Footer"
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Template extends React.Component {
  componentDidMount() {
    let scrollpos = window.scrollY
    const header = document.getElementById("scrollToTop")
    const header_height = header.offsetHeight
    const add_class_on_scroll = () => header.classList.add("show")
    const remove_class_on_scroll = () => header.classList.remove("show")
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })
  }
  render() {
    const { children } = this.props

   /* let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }*/

    return (
      <div className="layoutContainer" style={{ margin: '0 auto', position: 'relative'}} >
        <span id="scroll"></span>
        <Navbar />
        {children}
        <div id="scrollToTop" onClick={() => scrollTo('#scroll')}><AngleUp className="arrowUp"/></div>
        <Footer/>
      </div>
    )
  }
}

export default Template
