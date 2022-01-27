import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/Contact'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

const Contact = ({ data }) => {
  return (
    <Layout>
      <GatsbySeo
        title='Ota Yhteyttä / Contact Us | KasinoHub'
        description='Lähetä viesti kasinohub.com :lle'
        languageAlternates={[
          {
            hrefLang: 'fi-FI',
            href: 'https://kasinohub.com/yhteystiedot/',
          },
        ]}
        metaTags={[ 
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
          },
          {
            name: 'theme-color',
            content: '#5e3994'
          },
        ]}
        />
        <div className="container">
            <div className="top">
                <PageTitle>Ota yhteyttä / Contact Us</PageTitle>
                <p style={{'maxWidth': '1000px','padding':'1em','margin':'auto'}}>Tuliko mieleesi kysyttävää sivustostamme tai mahdollisesti yhteistyöehdotus?
                   Täällä voit jättää meille yhteydenottopyynnön. Vastaamme aina pikaisesti. Voit laittaa myös viestiä suoraan sähköpostiosoitteeseemme info@kasinohub.com</p>        
            </div>
            <div className="wrapper">
                <ContactForm />
            </div>
        </div>
    </Layout>
  )
}

export default Contact