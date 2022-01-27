// Maksutapa - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./kasinopeli.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

class MaksutapaTemplate extends React.Component {
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
    const maksutapa = get(this.props, 'data.contentfulMaksutapa')
    const similar = get(this.props, 'data.allContentfulMaksutapa')
    
    const { breadcrumb: { crumbs }} = this.props.pageContext
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
            title={maksutapa.seoBrowserTitle}
            description={maksutapa.seoMetaDescription}
            canonical={`https://kasinohub.com/maksutavat/${maksutapa.slug}/`}
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: `https://kasinohub.com/maksutavat/${maksutapa.slug}/`,
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
              name: 'Maksutavat',
              item: 'https://kasinohub.com/maksutavat/',
            },
            {
              position: 3,
              name: `${maksutapa.maksutavanNimi}`,
              item: `https://kasinohub.com/maksutavat/${maksutapa.slug}/`,
            },
          ]}
        />
        <div className={styles.pageContent}>
          <div className={`${styles.kasinopeli}`} id="kasinopeli">
          <img className={styles.img} src={maksutapa.kansikuva.file.url} alt={maksutapa.kansikuva.title} width="1080" height="350"/>
            <div className={styles.content}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={maksutapa.maksutavanNimi}/>
              <h1 className={styles.title}><center>{maksutapa.maksutavanNimi}</center></h1>
              <div className={styles.text}>{documentToReactComponents(maksutapa.ylateksti.json, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img className="lazyload page-img"
                        data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                        alt={node.data.target.fields.title["fi-FI"]}
                        />
                    ),
                },
              })}</div>
              {maksutapa.peliLista != null &&
              <div>
              <h3 className="listHead">{maksutapa.maksutavanNimi} kasinot - testaa nämä pelipaikat!</h3>
                <table className="casinoTable">
                  <tbody>
                    {maksutapa.peliLista.slice(0, this.state.visible).map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                  {this.state.visible < maksutapa.peliLista.length &&
                    <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                  }
                </div>
              </div>
              } 
              <div className={styles.text}>{documentToReactComponents(maksutapa.alateksti.json, {
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
                  <a href={`/kirjoittaja/${maksutapa.kirjoittaja.slug}/`}><img data-src={maksutapa.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={maksutapa.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className={styles.text}>
                    <h5>Kirjoittaja: {maksutapa.kirjoittaja.kirjoittajanNimi}</h5>
                    <p>{maksutapa.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${maksutapa.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                  </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="related2">
            <h2>Muita maksutapoja: </h2>
            {similar.edges.map(({node})=>(
              <div key={node.slug} className="card">
                <a href={`/maksutavat/${node.slug}/`}>
                <img className="cardImg lazyload" data-src={node.kansikuva.file.url} alt={node.kansikuva.title} width="337" height="140"/>
                <h4>{node.maksutavanNimi}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default MaksutapaTemplate
export const pageQuery = graphql`
  query MaksutapaBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulMaksutapa (slug: {eq: $slug}) {
        id
        maksutavanNimi
        slug
        seoBrowserTitle
        seoMetaDescription
        kansikuva {
          file {url}
          title
        }
        ylateksti {
          json
        }
        alateksti {
          json
        }
        peliLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
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
      allContentfulMaksutapa(filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}},limit:4) {
        edges {
          node {
            id
            maksutavanNimi
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