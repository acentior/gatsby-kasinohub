import React from 'react'
import styled from "styled-components"

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  bottom: 0;
  width: 100%;
  background: #1d1d1d;
  border-top: 1px solid #1d1d1d;
`

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  padding: 1em 0;
  margin: 0 auto;
  bottom: 0;
  list-style-type:none;
  &:last-child {
    padding: 1em 0;
  }
  p {
    color: #d4d5d0;
    line-height: 1.4;
  }
`

const Item = styled.div`
  display: inline-block;
  padding: 0.25em;
  width: 100%;
  text-align: center;
  ::before {
    content: none;
  }
  a {
    display: inline-block;
  }
  .logo {
    margin: auto;
    width: 200px;
  }
  .infos {
    display: flex;
  }
  .material-icons {
    width: 20px;
    color: #fff;
    line-height: 1.4;
    padding-right: .5em;
  }
  a {
    transition: all 0.2s;
    color: #d4d5d0;
    padding: 10px 0;
    &:hover {
      color: #5e3994;
    }
    @media (max-width: 700px) {
      display: inline-block;
    }
  }
  h4 {
    text-transform: uppercase;
    margin: 0 0 0.5em;
    color: #d4d5d0;
  }
  .imgs {
    margin: auto auto auto 2em;
    align-items: center;
    display: inline-block;
    @media(max-widht: 900px) {
      margin: auto;
    }
    img {
      width: auto;
      height: 60px;
      float: left;
    }
  }
  div a {
    text-decoration: underline;
  }
`
const Copyright = styled.div`
text-align: center;
width: 100%;
margin: auto;
color: #d4d5d0;
border-top: 1px solid #373F49;
padding-top: 1em;
  p {
    display: contents;
  }
`
const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a href="/"><img alt="KasinoHub" data-src="../../images/kasinohub-ala.png" className="logo lazyload" width="200" height="174"/></a>
      </Item>
    </List>
    <List>  
      <Item>
        <h4>K18 | Pelaa vastuullisesti</h4>
        <div><p><small>Kasinolla pelaaminen voi aiheuttaa riippuvuutta. Pelaa ainoastaan panoksilla jotka sinulla on varaa hävitä!</small></p>
            <p><small>Peluurin auttava puhelin palvelee ongelmapelaamiseen liittyvissä asioissa: 0800-100101 (ma-pe 12-18)</small></p>   
            <p><small><a href="https://www.peluuri.fi/" target="_blank"> Peluuri.fi </a> | <a href="https://www.tiltti.fi/" target="_blank"> Tiltti.fi </a> | <a href="https://pelirajaton.fi/"> Pelirajaton.fi </a></small></p>           
            <div className="imgs">
              <img src="/images/icon18.png" alt="K18" width="61" height="60"/>
              <img src="/images/turvallisuus.png" alt="Shield" width="61" height="60"/>
            </div>
        </div>
      </Item>
    </List>
    <List>
      <Copyright>
      <p>@ 2022 Kasinohub.com</p> | <a href="/kayttoehdot/"> Käyttöehdot </a> | <a href="/tietosuoja/"> Tietosuoja </a> | <a href="/evasteet/"> Evästekäytänteet </a> | <a href="/tietoa/"> Tietoa meistä </a> | <a href="/yhteystiedot/"> Yhteys </a>
      </Copyright>
    </List> 
  </Wrapper>
)

export default Footer