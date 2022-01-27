import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import { Casino } from "@styled-icons/material/Casino"
import { Whatshot } from "@styled-icons/material/Whatshot"
import { PlayCircleFilled } from "@styled-icons/material/PlayCircleFilled" 
import { ListUl } from "@styled-icons/fa-solid/ListUl"
import Search from "../search"

const Header = styled.div`
  width: 100%;
  background-color: #5e3994;
  top: 0;
  z-index: 999;
  justify-content: center;
  transition: transform 0.4s;
  @media (max-width: 997px) {
    background-color: #5e3994;
  }
`
const Navigation = styled.nav`
  height: 70px;
  max-width: 1200px;
  display: flex;
  background-color: #5e3994;
  color: white;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1em;
  z-index: 3;
  align-self: center;
  @media (max-width: 997px) {
    box-shadow: none;
    background-color: #5e3994;
    position: fixed;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding: 5px 5vw 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  float: right;
  @media (max-width: 997px) {
    display: flex;
    padding: 0;
    order: 3;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 997px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 93%;
    justify-content: flex-start;
    padding-top: 1vh;
    background-color: rgb(255 255 255 / 100%);
    transition: all 0.3s ease-in;
    top: 60px;
    right: ${props => (props.open ? "-100%" : "0")};
    overflow-y: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
const Hamburger = styled.div`
  background-color: white;
  width: 22px;
  height: 2px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 22px;
    height: 2px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-7px, 0px)" : "rotate(0deg)"};
    top: -7px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 7px;
  }
`
const Bottom = styled.div`
position: fixed;
background-color: white;
width: 100%;
top: 59px;
padding: 5px 0px;
z-index: 1;
-webkit-box-shadow:0px 3px 15px 0px rgba(160, 160, 160, 0.251);
-moz-box-shadow:0px 3px 15px 0px rgba(160, 160, 160, 0.251);
box-shadow:0px 3px 15px 0px rgba(160, 160, 160, 0.251);
@media (min-width: 998px) {
  display: none;
}
`
const Element = styled.a`
display: inline-grid;
width: 25%;
cursor: pointer;
.material-icons {
  margin: auto;
  fill: #5e3994;
  color: #5e3994;
  width: 18px;
  justify-self: center;
  @media (max-width: 500px) {
    width: 16px;
    height: 16px;
  }
}
i {
  margin: auto;
  text-transform: uppercase;
  font-style: unset;
  font-weight: 500;
  font-size: 0.75em;
  letter-spacing: 0.2px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
}
`
const List = styled.div`
  display: flex;
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <Header className="navigation" data-fixed-menu itemScope itemType="https://schema.org/WebPageElement">
      <Navigation id="sticky-wrapper" className="sticky-wrapper" itemScope itemType="https://schema.org/SiteNavigationElement">
        <Logo />
        <List>
          <Toggle className="trigger-menu"
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? <Hamburger className="ham" open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox navbarOpen={navbarOpen} className="navboxOpen"
            onClick={() => setNavbarOpen(!navbarOpen)}>
              <NavbarLinks />
            </Navbox>          
          ) : (
            <Navbox open>
              <NavbarLinks />
            </Navbox>
          )}
          <Search />
        </List>
      </Navigation>
      <Bottom>
          <Element href="/nettikasinot/"><Casino className="material-icons" /><i>Nettikasinot</i></Element>
          <Element href="/pnp-kasinot/"><PlayCircleFilled className="material-icons"/><i>PnP-kasinot</i></Element>
          <Element href="/casino-bonukset/"><Whatshot className="material-icons"/><i className="ik">Bonukset</i></Element>
          <Element href="/kaikki-nettikasinot/"><ListUl className="material-icons"/><i>Kaikki</i></Element>
      </Bottom>
    </Header>
  )
}

export default Navbar