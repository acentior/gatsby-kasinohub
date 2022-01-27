// Lisenssi - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./kasinopeli.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

class LisenssiTemplate extends React.Component {
  //LOAD MORE 
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 20,
      error: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 20};
    });
  }
  showLess() {
    this.setState((prev) => {
      return {visible: 20};
    });
  }
  componentDidMount(){
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
    //similar posts
    var valmis = document.getElementById('maksutapa');
    var relate = document.getElementsByClassName('same');
    var card = document.getElementsByClassName('card');
    var r;
    for (r = 0; r < relate.length; r++) {
        var eka = relate[r].innerHTML;
        var toka = valmis.innerHTML;
        if(eka !== toka) {
          card[r].remove()
        }
    }
  }
  render() {
    const lisenssi = get(this.props, 'data.contentfulLisenssi')
    const similar = get(this.props, 'data.allContentfulLisenssi')

    const { breadcrumb: { crumbs }} = this.props.pageContext
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
          title={lisenssi.seoBrowserTitle}
          description={lisenssi.seoMetaDescription}
          canonical={`https://kasinohub.com/lisenssit/${lisenssi.slug}/`}
          languageAlternates={[
            {
              hrefLang: 'fi-FI',
              href: `https://kasinohub.com/lisenssit/${lisenssi.slug}/`,
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
              name: 'Lisenssit',
              item: 'https://kasinohub.com/lisenssit/',
            },
            {
              position: 3,
              name: `${lisenssi.lisenssiOtsikko}`,
              item: `https://kasinohub.com/lisenssit/${lisenssi.slug}/`,
            },
          ]}
        />
        <div className={styles.pageContent}>
          <div className={`${styles.kasinopeli}`} id="kasinopeli">
          <img className={styles.img} src={lisenssi.kansikuva.file.url} alt={lisenssi.kansikuva.title} width="1080" height="350"/>
            <div className={styles.content}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={lisenssi.lisenssiOtsikko}/>
              <h1 className={styles.title}><center>{lisenssi.lisenssiOtsikko}</center></h1>
              <div className={styles.text}>{documentToReactComponents(lisenssi.ylateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
              {lisenssi.lisenssilista != null &&
              <div>
              {lisenssi.lisenssiOtsikko !== "UK Gambling Commission" &&
                <h3 className="listHead">{lisenssi.lisenssiOtsikko} kasinot - testaa nämä nettikasinot!</h3>
              }
              {lisenssi.lisenssiOtsikko === "UK Gambling Commission" &&
                <h3 className="listHead">UK kasinot - testaa nämä nettikasinot!</h3>
              }
              <table className="casinoTable">
                  <tbody>
                    {lisenssi.lisenssilista.slice(0, this.state.visible).map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                        {poistaLinkkiArvosteluun !== true 
                        ? <div className="contentButton">
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
                        : <div className="contentButton nolink">
                            <div className="contentBtn">
                              <a className="btn scd" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                            <a className="saannot" target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>

                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        }
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>  
                <div className="loadBtn">
                  {this.state.visible > 20 &&
                    <button onClick={this.showLess} type="button" id="showLess">Vähemmän</button>
                  }
                  {this.state.visible < lisenssi.lisenssilista.length &&
                    <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                  }
                </div>
              </div>
              }
              <div className={styles.text}>{documentToReactComponents(lisenssi.alateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
              <div className={styles.author}>
                <div className={styles.authorBlock}>
                <a href={`/kirjoittaja/${lisenssi.kirjoittaja.slug}/`}><img data-src={lisenssi.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={lisenssi.kirjoittaja.kirjoittajanKuva.title} /></a>
                <div className={styles.text}>
                  <h5>Kirjoittaja: {lisenssi.kirjoittaja.kirjoittajanNimi}</h5>
                  <p>{lisenssi.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${lisenssi.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related2">
            <h2>Muita lisenssejä: </h2>
            {similar.edges.map(({node})=>(
              <a href={`/lisenssit/${node.slug}/`} key={node.slug} className="card">
                <img className="cardImg lazyload" data-src={node.kansikuva.file.url} alt={node.kansikuva.title} width="338" height="140"/>
                <h4>{node.lisenssiOtsikko}</h4>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default LisenssiTemplate
export const pageQuery = graphql`
  query LisenssiBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLisenssi(slug: {eq: $slug}) {
        lisenssiOtsikko
        slug
        seoBrowserTitle
        seoMetaDescription
        kansikuva {
            file {url}
            title
        }
        lisenssilista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          lyhytBonuskuvaus
          snntJaEhdot
          kasinonPieniLogo {
          file {url}
          title
          }
          poistaLinkkiArvosteluun
        }
        ylateksti {
            json
        }
        alateksti {
          json
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
    allContentfulLisenssi(filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}},limit:4) {
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