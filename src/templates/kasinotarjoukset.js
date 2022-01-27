// Kasinotarjoukset - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from "./artikkeli.module.scss"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

class UutinenTemplate extends React.Component {
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
    const artikkeli = get(this.props, 'data.contentfulUutinen')
    const similar = get(this.props, 'data.allContentfulUutinen')

    const {
      breadcrumb: { crumbs },
    } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <div className={styles.article}>
        <GatsbySeo
            title={artikkeli.seoBrowserTitle}
            description={artikkeli.seoMetaDescription}
            canonical={`https://kasinohub.com/kasinotarjoukset/${artikkeli.slug}/`}
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: `https://kasinohub.com/kasinotarjoukset/${artikkeli.slug}/`,
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
          <BreadcrumbJsonLd
            itemListElements={[
              {
                position: 1,
                name: 'KasinoHub',
                item: 'https://kasinohub.com/',
              },
              {
                position: 2,
                name: 'Kasinotarjoukset ja uutiset',
                item: 'https://kasinohub.com/kasinotarjoukset/',
              },
              {
                position: 3,
                name: `${artikkeli.title}`,
                item: `https://kasinohub.com/kasinotarjoukset/${artikkeli.slug}/`,
              },
            ]}
          />
          <div className={`${styles.wrapper} wrapper artikkeli`}>
            <img src={artikkeli.heroImage.file.url} alt={artikkeli.heroImage.title} className={styles.image} loading="lazy" width="1200" height="410"/>
            <div className={styles.wrapperContent}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={artikkeli.title}/>
              <i>{artikkeli.publishDate}</i>
              <h1><center>{artikkeli.title}</center></h1>
              <div className="wrapperText">{documentToReactComponents(artikkeli.body.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                    data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                    alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              {artikkeli.kasinopainikkeenTeksti !== null &&
                <a className="listBtn news" href={artikkeli.kasino.affiliateLinkki} target="_blank" rel="noreferrer">{artikkeli.kasinopainikkeenTeksti}</a>
              }
              {artikkeli.uutislista !== null &&
              <div>
                <h3 className="listHead">Kuumimmat pelipaikat juuri nyt:</h3>
                <table className="casinoTable">
                  <tbody>
                    {artikkeli.uutislista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                    <tr className="casino smaller tarjous" key={kasinonSlug}>
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
                        <div className="contentButton nolink">
                            <div className="contentBtn">
                              <a className="btn scd" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
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
              </div>
              }        
               <div className={styles.author}>
                  <div className={styles.authorBlock}>
                  <a href={`/kirjoittaja/${artikkeli.kirjoittaja.slug}/`}><img data-src={artikkeli.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={artikkeli.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className={styles.text}>
                    <h5>Kirjoittaja: {artikkeli.kirjoittaja.kirjoittajanNimi}</h5>
                    <p>{artikkeli.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${artikkeli.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                  </div>
                  </div>
                </div>
              <div className="related2">
                <h2>Viimeisimmät uutiset</h2>
                {similar.edges.map(({node})=>(
                  <div key={node.slug} className="card">
                    <a href={`/kasinotarjoukset/${node.slug}/`}>
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

export default UutinenTemplate

export const pageQuery = graphql`
  query UutinenBySlug($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    contentfulUutinen (slug: {eq: $slug}) {
        title
        slug
        seoBrowserTitle
        seoMetaDescription
          heroImage{
          file{
            url
          }
          title
        }
        uutislista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file{url}
            title
          }
        }
        body {
          json
        }
        kasino {
          affiliateLinkki
        }
        kasinopainikkeenTeksti
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
      allContentfulUutinen(sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}}, limit: 3) {
        edges {
          node {
            title
            slug
            body {
              json
            }
            publishDate(formatString: "DD.MM.YYYY")
            heroImage {
              file {url}
              title
            }
          }
        }
      }
  }
`
