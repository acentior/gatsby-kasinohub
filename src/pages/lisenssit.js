// Lisenssit - sivu
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

class Lisenssit extends React.Component {
  render() {
    const maksutapa = get(this, 'props.data.allContentfulLisenssi')
    const katalogi = get(this, 'props.data.contentfulPagesKatalogiSivut')

    return (
      <Layout location={this.props.location}>
          <GatsbySeo
            title={katalogi.seoBrowserTitle}
            description={katalogi.seoMetaDescription}
            canonical='https://kasinohub.com/lisenssit/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/lisenssit/',
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
              <PageTitle>{katalogi.title}</PageTitle>
            </div>
            <div className="wrapper">
            <div className="wrapperText">{documentToReactComponents(katalogi.ylaosanTeksti1.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <div className="games">
                {maksutapa.edges.map(({ node }) => (
                  <div className="li" key={node.slug}>
                    <a href={`/lisenssit/${node.slug}/`}>
                      <img data-src={node.kansikuva.file.url} alt={node.kansikuva.title} className="lazyload" width="313" height="200"/>
                      <h5>{node.lisenssiOtsikko}</h5>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default Lisenssit

export const pageQuery = graphql`
  query  Lisenssit{
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagesKatalogiSivut(title: {eq: "Lisenssit ja maat"}){
      title
      seoBrowserTitle
      seoMetaDescription
      ylaosanTeksti1 {
        json
      }
    }
    allContentfulLisenssi(filter: {node_locale: {eq: "fi-FI"}}) {
      edges {
        node {
          lisenssiOtsikko
          slug
          kansikuva {
            file {url}
            title
          }
        }
      }
    }
}
`
