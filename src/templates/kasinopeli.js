// Kasinopeli template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./kasinopeli.module.scss"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo, BreadcrumbJsonLd, ArticleJsonLd } from 'gatsby-plugin-next-seo'

class KasinoPeliTemplate extends React.Component {
  componentDidMount(){
    // EXTERNAL LINKS _blank 
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    } 
    // SIMILAR POSTS
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
    var text = document.getElementById("ssText");
    var h = document.getElementById("ssText").querySelector('h2');
    text.prepend(h);
  }

  render() {
    const peli = get(this.props, 'data.contentfulKasinopeli')
    const similar = get(this.props, 'data.allContentfulKasinopeli')    
    const { breadcrumb: { crumbs }} = this.props.pageContext
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
            title={peli.seoBrowserTitle}
            description={peli.seoMetaDescription}
            canonical={`https://kasinohub.com/kasinopelit/${peli.slug}/`} 
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: `https://kasinohub.com/kasinopelit/${peli.slug}/`,
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
                name: 'Kasinopelit',
                item: 'https://kasinohub.com/kasinopelit/',
              },
              {
                position: 3,
                name: `${peli.pelinNimi}`,
                item: `https://kasinohub.com/kasinopelit/${peli.slug}/`,
              },
            ]}
          />
          <ArticleJsonLd
            url={`https://kasinohub.com/kasinopelit/${peli.slug}/`}
            headline={`${peli.pelinNimi}`}
            images={[
              `${peli.pkuva.file.url}`
            ]}
            datePublished={`${peli.publishDate}`}
            dateModified={`${peli.modifyDate}`}
            authorName={`${peli.kirjoittaja.kirjoittajanNimi}`}
            publisherName='KasinoHub'
            publisherLogo='https://kasinohub.com/images/kasino-hub.png'
            description={`${peli.seoMetaDescription}`}
            overrides={{
              '@type': 'Review',
              'itemReviewed': {
                '@type': 'Game',
                'name' : `${peli.pelinNimi}`,
                'url' : `https://kasinohub.com/kasinopelit/${peli.slug}/`
              },
            }}
          />
        <div className={styles.pageContent}>
          <div className={`${styles.kasinopeli}`} id="kasinopeli">
            <img className={styles.img} src={peli.pkuva.file.url} alt={peli.pkuva.title} width="1000" height="320"/>
            <div className={styles.content}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={peli.pelinNimi}/>
              <h1 className={styles.title}>{peli.pelinNimi}</h1>
              <div className={styles.text}>{documentToReactComponents(peli.ylateksti.json)}</div>
              <h2>Testaa {peli.pelinNimi} -peliä näillä casinoilla</h2>
              <table className="casinoTable">
                <tbody>
                  {peli.lista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,arvostelu,poistaLinkkiArvosteluun,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <h2 className={styles.subTitle} id="info">{peli.pelinNimi} -perustiedot</h2>
              <div className={styles.ala}>
                <div className={styles.right}>
                  <div className={styles.box}>
                  <div className={styles.boxContent}>
                      <table className={styles.info}>
                        <tbody>
                        <tr>
                          <td className={styles.trH}>Valmistaja: </td>
                          <td>
                            {peli.pelinValmistaja === "1x2 Games" && <a href="/pelinvalmistajat/1x2games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Amatic" && <a href="/pelinvalmistajat/amatic/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Betsoft" && <a href="/pelinvalmistajat/betsoft/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Bf Games" && <a href="/pelinvalmistajat/bf-games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Big Time Gaming" && <a href="/pelinvalmistajat/bigtimegaming/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Blueprint" && <a href="/pelinvalmistajat/blueprint/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Booming Games" && <a href="/pelinvalmistajat/booming-games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Elk Studios" && <a href="/pelinvalmistajat/elk-studios/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Endorphina" && <a href="/pelinvalmistajat/endorphina/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Evolution Gaming" && <a href="/pelinvalmistajat/evolution-gaming/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "GIG Games" && <a href="/pelinvalmistajat/gig-games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "IGT" && <a href="/pelinvalmistajat/igt/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Iron Dog Studios" && <a href="/pelinvalmistajat/iron-dog-studio/"><b className="empty" id="valmistaja">Iron Dog Studio</b></a>}
                            {peli.pelinValmistaja === "iSoftBet" && <a href="/pelinvalmistajat/isoftbet/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Kalamba Games" && <a href="/pelinvalmistajat/kalamba-games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Microgaming" && <a href="/pelinvalmistajat/microgaming/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Net Entertainment" && <a href="/pelinvalmistajat/net-entertainment/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "NextGen Gaming (NYX)" && <a href="/pelinvalmistajat/nextgen-gaming/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Nolimit City" && <a href="/pelinvalmistajat/nolimit-city/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Play’n Go" && <a href="/pelinvalmistajat/playn-go/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Playtech" && <a href="/pelinvalmistajat/playtech/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Pragmatic Play" && <a href="/pelinvalmistajat/pragmatic-play/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Push Gaming" && <a href="/pelinvalmistajat/push-gaming/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Quickspin" && <a href="/pelinvalmistajat/quickspin/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Red Tiger" && <a href="/pelinvalmistajat/red-tiger/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Scientific Games" && <a href="/pelinvalmistajat/scientific-games/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Thunderkick" && <a href="/pelinvalmistajat/thunderkick/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                            {peli.pelinValmistaja === "Yggdrasil" && <a href="/pelinvalmistajat/Yggdrasil/"><b className="empty" id="valmistaja">{peli.pelinValmistaja}</b></a>}
                          </td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Julkaisuvuosi: </td>
                          <td><b className="empty">{peli.julkaisuvuosi}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Minimipanos: </td>
                          <td><b className="empty">{peli.minimipanos}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Maksimipanos: </td>
                          <td><b className="empty">{peli.maksimipanos}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Rullien määrä: </td>
                          <td><b className="empty">{peli.rullat}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Rivien määrä: </td>
                          <td><b className="empty">{peli.rivit}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Voittolinjat: </td>
                          <td><b className="empty">{peli.voittolinjat}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Suurin mahdollinen voitto: </td>
                          <td><b className="empty">{peli.suurinMahdollinenVoitto}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Palautusprosentti: </td>
                          <td><b className="empty">{peli.palautusprosentti}</b></td>
                        </tr>
                        <tr>
                          <td className={styles.trH}>Volatiliteetti: </td>
                          <td><b className="empty">{peli.volatiliteetti}</b></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <table className={styles.boxContent}>
                      <tbody>
                      <tr>
                        <td className={styles.trH}>Bonuspeli: </td>
                        <td className="boolean">
                          {peli.bonuspeli.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.bonuspeli.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Jackpot: </td>
                        <td className="boolean">
                          {peli.progressiivinenJackpot.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.progressiivinenJackpot.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Wild symbolit: </td>
                        <td className="boolean">
                          {peli.wildSymbolit.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.wildSymbolit.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Sticky Wild symbolit: </td>
                        <td className="boolean">
                          {peli.stickyWildSymbolit.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.stickyWildSymbolit.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Scatter symbolit: </td>
                        <td className="boolean">
                          {peli.scatterSymbolit.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.scatterSymbolit.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Autoplay ominaisuus: </td>
                        <td className="boolean">
                          {peli.autoplayOminaisuus.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.autoplayOminaisuus.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Kertautuvat voitot: </td>
                        <td className="boolean">
                          {peli.kertautuvatVoitot.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.kertautuvatVoitot.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Ilmaiskierrokset: </td>
                        <td className="boolean">
                          {peli.ilmaiskierrokset.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.ilmaiskierrokset.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.trH}>Mobiiliversio: </td>
                        <td className="boolean">
                          {peli.mobiiliversio.toString() === 'true' && <img data-src='/images/boolean/true.svg' className="lazyload" alt="true" width="15" height="15"/>}
                          {peli.mobiiliversio.toString() === 'false' && <img data-src='/images/boolean/false.svg' className="lazyload" alt="false" width="15" height="15"/>}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="wrapperTop" id="ssText">
                <img className={`${styles.ss} lazyload`} src={peli.screenshot.file.url} alt={peli.screenshot.title} width="370" height="185"/>
                {documentToReactComponents(peli.alateksti.json)}
              </div>
            </div>
            <div className={styles.author}>
              <div className={styles.authorBlock}>
              <a href={`/kirjoittaja/${peli.kirjoittaja.slug}/`}><img data-src={peli.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={peli.kirjoittaja.kirjoittajanKuva.title} /></a>
              <div className={styles.text}>
                <h5>Kirjoittaja: {peli.kirjoittaja.kirjoittajanNimi}</h5>
                <p>{peli.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${peli.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
              </div>
              </div>
            </div>
          </div>
          <div className="related2">
            <h2>Tsekkaa myös nämä peliesittelyt</h2>
            {similar.edges.slice(0, 4).map(({node}) => (
              <div key={node.slug} className="card" >
              <a href={`/kasinopelit/${node.slug}/`}>
                <img className="cardImg lazyload" data-src={node.kuvaKategoriaSivulle.file.url} alt={node.kuvaKategoriaSivulle.title} width="319" height="140"/>
                <h4>{node.pelinNimi}</h4>
              </a>
            </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default KasinoPeliTemplate
export const pageQuery = graphql`
  query KasinopeliBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulKasinopeli (slug: { eq: $slug }) {
      id
      pelinNimi
      slug
      seoBrowserTitle
      seoMetaDescription
      pelinValmistaja
    	julkaisuvuosi
      minimipanos
      maksimipanos
      rivit
      suurinMahdollinenVoitto
      volatiliteetti
    	mobiiliversio
    	stickyWildSymbolit
      voittolinjat
      rullat
      palautusprosentti
      bonuspeli
      progressiivinenJackpot
      wildSymbolit
      scatterSymbolit
      autoplayOminaisuus
      kertautuvatVoitot
      ilmaiskierrokset
      pkuva {
        file {
          url
        }
        title
      }
      kuvaKategoriaSivulle {
        file {
          url
        }
        title
      }
      screenshot {
        file {
          url
        }
        title
      }
      ylateksti {
        json
      }
      alateksti {
        json
      }
      lista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        kasinonKategoriat
        kasinonKotisivut
        kasinonOmistaja
        kasinonPerustamisvuosi
        kasinonLisenssi
        kasinonPlussat
        tuotevalikoima
        pelinvalmistajat
        kasinonEmail
        aspaPuhelin
        livechat
        sivutkaannetty
        suomiAsiakaspalvelu
        suomiKampanjat
        rahansiirrot
        minimitalletus
        snntJaEhdot
        poistaLinkkiArvosteluun
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      publishDate
      modifyDate
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
    allContentfulKasinopeli(filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}}, sort: {fields: julkaisuvuosi, order: DESC}) {
      edges {
        node {
          pelinNimi
          slug
          pelinValmistaja 
          kuvaKategoriaSivulle {
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