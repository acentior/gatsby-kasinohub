import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2em' : '3em')};
  text-transform: uppercase;
  font-family: 'Dosis',sans-serif;
  padding: 0 0 0.2em 0;
  margin: auto;
  line-height: 1.2;
  border-bottom: 2px solid;
  border-image: linear-gradient( to right, #5e3994, #fff ) 1;
  border-image: radial-gradient(circle, rgba(94,57,148,1) 0%, rgba(255,255,255,1) 100%) 1/1/ 0 stretch;
  max-width: 1000px;
  @media (max-width: 1100px) {
    margin: 0 1em 0.2em;
  }
  @media (max-width: 500px) {
    font-size: 2em;
    margin: 0 .5em;
  }
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: #C1F257;
    &:hover {
      color: #C1F257;
    }
  }
`

const PageTitle = props => {
  return <Title small={props.small}><center>{props.children}</center></Title>
}

export default PageTitle