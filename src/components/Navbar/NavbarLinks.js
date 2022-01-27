import React, {Component} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AngleDown } from "@styled-icons/fa-solid/AngleDown"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-transform: uppercase;
  font-size: 9.5pt;
  letter-spacing: 0.5pt;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #fff;
    height: 1px;
    transition: all 0.2s ease-in;
  }
  :hover {
    color: #fff;
    ::after {
      width: 100%;
    }
  }
  :focus {
    color: #fff;
  }
  @media (max-width: 997px) {
    padding: 10px 0;
    font-size: 15px;
    z-index: 6;
    border-bottom: 1px solid lightgrey;
    width: 70%;
    text-align: center;
    color: #0f0f0f;
  }
`
const Drop = styled.div`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-transform: uppercase;
  font-size: 9.5pt;
  letter-spacing: 0.5pt;
  cursor: pointer;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #fff;
    height: 1px;
    transition: all 0.2s ease-in;
  }
  @media (max-width: 997px) {
    padding: 10px 0;
    font-size: 15px;
    z-index: 6;
    border-bottom: 1px solid lightgrey;
    width: 70%;
    text-align: center;
    color: #0f0f0f;
    :hover {
      ::after {
        width: 0%;
      }
    }
  }
  .down {
    width: 6.5pt;
    line-height: 9.5pt;
    vertical-align: text-top;
    color: #fff;
    @media (max-width: 997px) {
      vertical-align: sub;
      color: #5e3994;
    }
  }
`
const DropList = styled.ul`
  display: none;
  list-style: none;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  padding: .1em 0 0;
  margin-top: 0;
  top: 45px;
  margin-left: .8em;
  box-shadow: 0px 2px 3px 0px #e2e2e2;
  li {
    padding: .5em;
    a {
      margin: 0;
      color: #0f0f0f;
      text-transform: none;
      &:hover {
        color: #5e3994;
      }
      @media (max-width: 997px) {
        padding: 5px 0;
        font-size: 14px;
      }
    }
  }
  .parent {
    border-bottom: none;
  }
  @media (max-width: 997px) {
    padding: 0;
    width: 70%;
    margin: auto;
    text-align: center;
    position: relative;
    display: contents;
    li {
      padding: 0;
      a {
        text-transform: unset;
        padding: 7px 0;
      }
    }
  }
  .all {
    border-top: 1px solid #5e3994;
    @media (max-width: 997px) {
      border: none;
    }
    a {
      color: #5e3994;
      font-weight: bold;
    }
  }
`
const Submenu = styled.div`
  @media (min-width: 997px) {
    &:hover {
      .parent {
        color: #fff;
        ::after {
          width: 100%;
        }
      }
      .List {
        display: block;
        a::after {
          background: linear-gradient(90deg, #5e3994 30%, #fff 100%);
        }
      }
    }
  }
  @media (max-width: 997px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`

class NavbarLinks extends Component {
  render() {
    return (
      <>
        <NavItem to="/" id="kh">Kasinohub</NavItem>
        <Submenu>
          <Drop className="parent">Kasinohakemisto <AngleDown className="down"/></Drop>
          <DropList className="List">
            <li><NavItem to="/nettikasinot/" id="nk">Nettikasinot</NavItem></li>
            <li><NavItem to="/uudet-nettikasinot/" id="un">Uudet nettikasinot</NavItem></li>
            <li><NavItem to="/live-kasinot/" id="lk">Live-kasinot</NavItem></li>
            <li><NavItem to="/pnp-kasinot/" id="pnp">PnP-kasinot</NavItem></li>
            <li><NavItem to="/suomalaiset-nettikasinot/" id="sn">Suomalaiset nettikasinot</NavItem></li>
            <li><NavItem to="/mobiilikasino/" id="mk">Mobiilikasino</NavItem></li>
            <li><NavItem to="/pelikasinot/" id="pek">Pelikasinot</NavItem></li>
            <li><NavItem to="/nettikasinot-ilman-rekisteroitymista/" id="nir">Nettikasinot ilman rekisteröitymistä</NavItem></li>
            <li className="all"><NavItem to="/kaikki-nettikasinot/" id="kk">Näytä kaikki kasinot »</NavItem></li>
          </DropList>
        </Submenu>
        <Submenu>
          <Drop className="parent">Bonukset <AngleDown className="down"/></Drop>
          <DropList className="List">
            <li><NavItem to="/casino-bonukset/" id="cb">Casino bonukset</NavItem></li>
            <li><NavItem to="/talletusbonus/" id="tb">Talletusbonus</NavItem></li>
            <li><NavItem to="/tervetuliaisbonus/" id="teb">Tervetuliaisbonus</NavItem></li>
            <li><NavItem to="/non-sticky-bonus/" id="nsb">Non Sticky Bonus</NavItem></li>
            <li><NavItem to="/ilmaiskierrokset-ilman-talletusta/" id="ik">Ilmaiskierrokset</NavItem></li>
            <li><NavItem to="/ilmaista-pelirahaa/" id="ip">Ilmaista pelirahaa</NavItem></li>
            <li className="all"><NavItem to="/kasinotarjoukset/" id="kt">Katso uudet tarjoukset »</NavItem></li>
          </DropList>
        </Submenu>
        <Submenu>
          <Drop className="parent">Kasinotietoa <AngleDown className="down"/></Drop>
          <DropList className="List">
            <li><NavItem to="/nopea-kotiutus/" id="nok">Nopea kotiutus</NavItem></li>
            <li><NavItem to="/verottomat-voitot/" id="vv">Verottomat voitot</NavItem></li>
            <li><NavItem to="/rahapelit/" id="rp">Rahapelit</NavItem></li>
            <li><NavItem to="/pelisivustot/" id="ps">Pelisivustot</NavItem></li>
          </DropList>
        </Submenu>
      </>
    )
  }
}

export default NavbarLinks