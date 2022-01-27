// Artikkeli - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import styles from "./artikkeli.module.scss"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

class ArtikkeliTemplate extends React.Component {
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
    const artikkeli = get(this.props, 'data.contentfulArtikkeli')
    const similar = get(this.props, 'data.allContentfulArtikkeli')

    const {
      breadcrumb: { crumbs },
    } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <div className={styles.article}>
        <GatsbySeo
            title={artikkeli.seoBrowserTitle}
            description={artikkeli.metaDescription.metaDescription}
            canonical={`https://kasinohub.com/artikkelit/${artikkeli.slug}/`}
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: `https://kasinohub.com/artikkelit/${artikkeli.slug}/`,
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

          <div className={`${styles.wrapper} wrapper artikkeli`}>
            <img src={artikkeli.heroImage.file.url} alt={artikkeli.heroImage.title} className={styles.image} width="1200" height="410"/>
            <div className={styles.wrapperContent}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={artikkeli.title}/>
              <i>{artikkeli.publishDate}</i>
              <h1><center>{artikkeli.title}</center></h1>
              <div className="wrapperText">{documentToReactComponents(artikkeli.artikkeliTeksti.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              {artikkeli.reference2 !== null &&
              <div>
                <h3 className="listHead">Kuumimmat pelipaikat juuri nyt:</h3>
                <table className="casinoTable">
                  <tbody>
                    {artikkeli.reference2.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                    <tr className="casino smaller" key={kasinonSlug}>
                      <td className="casinotop">
                        <div className="logo">
                          <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload" width="120" height="51"/>
                          <div className="name">
                              <h5 className="title">{kasinonNimi}</h5>
                          </div>
                        </div>
                        <div className="casinoRate"> 
                          <div className="arvostelu tahti">
                            {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                            {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                            {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                            {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                            {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                            {arvostelu == null && <span>-</span>}
                          </div>
                        </div>
                        <div className="contentBox first">
                          <div className="contentInfo">
                              <div className="offerItem">
                              <i>Bonukset:</i>
                              <h4>{bonusRaha}</h4>
                              </div>
                              <div className="offerItem">
                              <i>Kierrokset:</i>
                              <h4>{ilmaiskierrokset}</h4>
                              </div>
                          </div>
                        </div>
                        <div className="contentButton ">
                          <div className="contentBtn">
                            <a className="btn" href={`/kokemuksia/${kasinonSlug}/`}>Lue arvostelu</a>
                          </div>
                          <div className="contentBtn">
                            <a className="btn" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                          </div>
                          {snntJaEhdot != null &&
                            <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table> 
                <a className="listBtn" href={artikkeli.listButton.slug}>{artikkeli.listButton.title}</a>       
              </div>}  
              <div className={styles.author}>
                  <div className={styles.authorBlock}>
                  <a href={`/kirjoittaja/${artikkeli.kirjoittaja.slug}/`}><img data-src={artikkeli.kirjoittaja.kirjoittajanKuva.file.url} className="lazyload" width="100" height="100" alt={artikkeli.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className={styles.text}>
                    <h5>Kirjoittaja: {artikkeli.kirjoittaja.kirjoittajanNimi}</h5>
                    <p>{artikkeli.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${artikkeli.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                  </div>
                  </div>
                </div>
              <div className="related2">
                <h2>Viimeisimmät artikkelit</h2>
                {similar.edges.map(({node})=>(
                  <div key={node.slug} className="card">
                    <a href={`/artikkelit/${node.slug}/`}>
                    <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title} width="319" height="140"/>
                    <h4>{node.title}</h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArtikkeliTemplate

export const pageQuery = graphql`
  query ArtikkeliBySlug($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    contentfulArtikkeli (slug: {eq: $slug}) {
        title
        slug
        seoBrowserTitle
        metaDescription {
          metaDescription
        }
        heroImage {
          file {
            url
          }
          title
        }
        artikkeliTeksti {
          json
        }
        reference2 {
          ...on ContentfulKasino {
            kasinonNimi
            kasinonSlug
            affiliateLinkki
            arvostelu
            bonusRaha
            ilmaiskierrokset
            snntJaEhdot
            kasinonPieniLogo {
              file {
                url
              }
              title
            }
          }
          
        }
        listButton {
            slug
            title
        }
        publishDate(formatString:"DD.MM.YYYY")
        modifyDate(formatString:"DD.MM.YYYY")
        kirjoittaja{
          kirjoittajanNimi
          esittelyteksti
          slug
          kirjoittajanKuva {
            file {
              url
            }
            title
          }
        }
      }
      allContentfulArtikkeli(sort: {order: DESC, fields: title}, filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}}, limit: 3) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "d.M.YYYY")
            artikkeliTeksti {
              json
            }
            heroImage {
              file {
                url
              }
              title
            }
          }
        }
      }
  }
`
