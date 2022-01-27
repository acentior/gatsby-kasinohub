// 404 - sivu
import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"

const Wrap = styled.div`
background: rgb(156,235,100);
background: linear-gradient(0deg, #fff 11%, #5e3994 97%);
padding: 5em 0;
text-align:center;
@media(max-width: 997px) {
  margin-top: 102px;
}
@media(max-width: 400px) {
  margin-top: 98px;
}
h1 {
  font-size: 6em;
  margin: 0;
}
`

const NotFoundPage = () => (
  <Layout>
    <Wrap>
      <h1>404</h1>
      <p >Valitettavasti etsimääsi sivua ei löytynyt</p>
    </Wrap>
  </Layout>
)

export default NotFoundPage