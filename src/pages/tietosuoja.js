// Tietosuoja - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

class Tietosuoja extends React.Component {
  componentDidMount() {
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
  }
  render() {
    const page = get(this, 'props.data.contentfulPageTietoaMeista')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/tietosuoja/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/tietosuoja/',
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
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
            <div className="wrapperText">{documentToReactComponents(page.ylaosanTeksti1.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default Tietosuoja

export const pageQuery = graphql`
  query TietosuojaQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageTietoaMeista(title: {eq: "Tietosuoja"}) {
        title
        seoBrowserTitle
        seoMetaDescription
        ylaosanTeksti1 {
          json
        }
      }
  }
`
