// Pelinvalmistaja - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./kasinopeli.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

class PelinValmistajaTemplate extends React.Component {
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
    var valmis = document.getElementById('valmistaja');
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
    const valmistaja = get(this.props, 'data.contentfulPelinvalmistaja')
    const similar = get(this.props, 'data.allContentfulPelinvalmistaja')
    const { breadcrumb: { crumbs }} = this.props.pageContext
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
          title={valmistaja.seoBrowserTitle}
          description={valmistaja.seoMetaDescription}
          canonical={`https://kasinohub.com/pelinvalmistajat/${valmistaja.slug}/`}
          languageAlternates={[
            {
              hrefLang: 'fi-FI',
              href: `https://kasinohub.com/pelinvalmistajat/${valmistaja.slug}/`,
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
              name: 'Pelinvalmistajat',
              item: 'https://kasinohub.com/pelinvalmistajat/',
            },
            {
              position: 3,
              name: `${valmistaja.pelinvalmistajanNimi}`,
              item: `https://kasinohub.com/pelinvalmistajat/${valmistaja.slug}/`,
            },
          ]}
        />
        <div className={styles.pageContent}>
          <div className={`${styles.kasinopeli}`} id="kasinopeli">
          <img className={styles.img} src={valmistaja.kansikuva.file.url} alt={valmistaja.kansikuva.title} width="1080" height="350"/>
            <div className={styles.content}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={valmistaja.pelinvalmistajanNimi}/>
              <h1 className={styles.title}><center>{valmistaja.pelinvalmistajanNimi}</center></h1>
              <div className={styles.text}>{documentToReactComponents(valmistaja.ylateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
              <div>
              <h2>Näillä kasinoilla voit pelata tämän valmistajan pelejä:</h2>
              <table className="casinoTable">
                <tbody>
                  {valmistaja.peliLista.slice(0, this.state.visible).map(({kasinonNimi, kasinonSlug, poistaLinkkiArvosteluun, affiliateLinkki, snntJaEhdot, arvostelu, bonusRaha, ilmaiskierrokset,kasinonPieniLogo}) => (
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
                {this.state.visible < valmistaja.peliLista.length &&
                  <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                }
              </div>
              </div> 

              <div className={styles.text}>{documentToReactComponents(valmistaja.alateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
            <h2>Valmistajan pelit:</h2>
              {valmistaja.valmistajanPelit != null && valmistaja.valmistajanPelit.map(({pelinNimi, slug, kuvaKategoriaSivulle}) => (
                <div className="game" key={slug}>
                  <a href={`/kasinopelit/${slug}/`} className="linkki">
                  <div className="gametop">
                      <div className="logo">
                        <img data-src={kuvaKategoriaSivulle.file.url} alt={kuvaKategoriaSivulle.title} className="lazyload" width="315" height="150"/>
                      </div>
                      <div className="gameName"> 
                        <div className="name">
                            <h4 className="title">{pelinNimi}</h4>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
                <div className={styles.text}>{documentToReactComponents(valmistaja.alateksti2.json, {
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
                <a href={`/kirjoittaja/${valmistaja.kirjoittaja.slug}/`}><img data-src={valmistaja.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={valmistaja.kirjoittaja.kirjoittajanKuva.title} /></a>
                <div className={styles.text}>
                  <h5>Kirjoittaja: {valmistaja.kirjoittaja.kirjoittajanNimi}</h5>
                  <p>{valmistaja.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${valmistaja.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related2">
            <h2>Muita pelinvalmistajia: </h2>
            {similar.edges.map(({node})=>(
              <div key={node.slug} className="card">
                <a href={`/pelinvalmistajat/${node.slug}/`}>
                <img className="cardImg lazyload" data-src={node.kansikuva.file.url} alt={node.kansikuva.title} width="338" height="140"/>
                <h4>{node.pelinvalmistajanNimi}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default PelinValmistajaTemplate
export const pageQuery = graphql`
  query ValmistajaBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPelinvalmistaja (slug: {eq: $slug}) {
        id
        pelinvalmistajanNimi
        slug
        seoBrowserTitle
        seoMetaDescription
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
            file {url}
            title
          }
          lyhytBonuskuvaus
        }
        valmistajanPelit {
          pelinNimi
          slug
          voittolinjat
          rullat
          palautusprosentti
          bonuspeli
          kuvaKategoriaSivulle {
            file {url}
            title
          }
        }
        ylateksti {
          json
        }
        alateksti {
          json
        }
        alateksti2 {
          json
        }
        kansikuva {
          file {url}
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
      allContentfulPelinvalmistaja(filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}}, limit: 4) {
        edges {
          node {
            pelinvalmistajanNimi
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