// Artikkelit - sivu
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

class Artikkelit extends React.Component {
  //LOAD MORE 
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 12,
      error: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 12};
    });
  }
  showLess() {
    this.setState((prev) => {
      return {visible: 12};
    });
  }
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
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulArtikkeli')

    return (
      <Layout location={this.props.location}>
        <GatsbySeo
            title={`Artikkelit | ${siteTitle}`}
            canonical='https://kasinohub.com/artikkelit/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/artikkelit/',
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
        <div style={{ background: '#fff' }} className="container">
          <div className="top">
            <PageTitle>Artikkelit</PageTitle>
          </div>
          <div className="wrapper">
            <div className="related2">
              {posts.edges.slice(0, this.state.visible).map(({node})=>(
                <a href={`/artikkelit/${node.slug}/`} key={node.slug} className="card art">
                  <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title} width="310" height="140"/>
                  <h4>{node.title}</h4>
                  <p className="text">{node.introTextArtikkelitSivunGrid.introTextArtikkelitSivunGrid}</p>
                </a>
              ))}
              <div className="loadBtn">
                {this.state.visible > 12 &&
                  <button onClick={this.showLess} type="button" id="showLess">Vähemmän</button>
                }
                {this.state.visible < posts.totalCount &&
                  <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Artikkelit

export const pageQuery = graphql`
  query Artikkeliquery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulArtikkeli (filter: {node_locale: {eq: "fi-FI"}},sort: {fields: publishDate, order: DESC}) {
      totalCount  
      edges {
          node {
            title
            slug
            publishDate(formatString: "d.M.YYYY")
            heroImage {
              file {
                url
                fileName
              }
              title
            }
            introTextArtikkelitSivunGrid {
              introTextArtikkelitSivunGrid
            }
          }
        }
      }
  }
`
