import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: 20px 0 0;
  flex: 0 1 36px;
  float: left;
  @media (max-width: 997px) {
    margin: 10px 0 0;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
  &:hover {
    color: #373F49;
  }
img {
  width: 140px;
  height: auto; 
    @media (max-width: 997px) {
    width: 120px;
  }
}

`
const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <img src="/images/kasino-hub.png" alt="KasinoHub" width="140" height="38"/>
    </LogoWrap>
  )
}

export default Logo