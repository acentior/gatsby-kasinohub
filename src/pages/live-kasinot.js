// Livekasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class LiveKasinot extends React.Component {
  componentDidMount() {
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
          }
    }
    var collapse = document.getElementsByClassName("accordion-title");
    var c;
    for (c = 0; c < collapse.length; c++) {
      collapse[c].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");  
      })
    }
    var elem = document.getElementById("lk");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageLivekasinotSivu')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/live-kasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/live-kasinot/',
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
          <ArticleJsonLd
            url='https://kasinohub.com/live-kasinot/'
            headline={`${page.title}`}
            images={[
              `${page.kuva.file.url}`
            ]}
            datePublished={`${page.publishDate}`}
            dateModified={`${page.modifyDate}`}
            authorName={`${page.kirjoittaja.kirjoittajanNimi}`}
            description={`${page.seoMetaDescription}`}
            publisherName='KasinoHub'
            publisherLogo='https://kasinohub.com/images/kasino-hub.png'
            overrides={{
              '@type': 'TechArticle',
              'proficiencyLevel': 'Expert'
            }}
          />
          <FAQJsonLd
            questions={[
              { question: 'L??ytyyk?? jokaiselta casinolta aina oma livekasino?', answer: 'Kyll??, l??hes aina. Arviomme perusteella nykyisin noin 99% netin pelipaikoista tarjoaa sivustollaan my??s livekasinon muiden eri pelityyppien ohessa. Livekasinoiden suosio onkin kasvanut viime vuosina yksinkertaisesti niin isolle tasolle, etteiv??t casinot voi oikein en???? j??tt???? t??t?? pelikategoriaa ulos valikoimastaan.' },
              { question: 'Mist?? netin parhaat live kasinot tunnistaa?', answer: 'T??h??n on helppo vastaus: parhaista live-peleist?? tietty. Ne netin parhaat livekasinot onkin koottu vahvasti Evolutionin luomien live-p??ytien kautta, mutta toisaalta tietyt pelurit voivat arvostaa my??s muita pelitaloja t??ss?? sektorissa. Parhailla livekasinoilla voikin olla pelkki?? live-pelej?? tarjottuna jopa viidelt?? eri pelivalmistajalta, jolloin erilaisten live-p??ytien m????r?? voi kasvaa jopa kolminumeroisiin lukemiin.' },
              { question: 'Miten livekasinot oikein toimivat?', answer: 'Nimen ei kannata antaa h??m??t??, sill?? live kasinot toimivat hyvin pitk??lti samalla tapaa kuin kukin casino normaalistikin. Kyseess?? onkin vain tietyn pelipaikan yksitt??inen pelikategoria, jolloin livekasino-p??ytiin p????see siis viihtym????n yksinkertaisesti vain siirtym??ll?? casinon sis??ll?? kyseiseen kategoriaan ja avaamalla halutun pelip??yd??n.' },
              { question: 'Millaisia pelej?? live kasinoilla voi pelata?', answer: 'Hyvin pitk????n livekasinot tarjoilivat pelaajilleen k??yt??nn??ss?? vain erilaisia p??yti?? blackjackin, ruletin ja pokerin pariin, mutta viime vuosina valikoima on live-pelien osalta kasvanut ja monipuolistunut huomattavasti muun muassa erilaisten onnenpy??r??pelien ja muiden game show -henkisten kisailujen muodossa.' },
              { question: 'Tarjoaako live kasinot bonareita pelaajilleen?', answer: 'Kyll?? tarjoavat, mutta varsin harvoin. Pelk??st????n livekasinolle suunnattuja bonareita l??ytyy vain joiltakin yksitt??isilt?? pelipaikoilta, mutta t??m??n ei kannata antaa h??mment????. Normaalisti nimitt??in kaikki talletusbonarit ovat automaattisesti hy??dynnett??viss?? my??s livekasinoiden pelien parissa, eli useimmiten tervetuliaiseduilla p????see siis viihtym????n my??s live-pelien parissa kevyemm??ll?? riskill??.' },
              { question: 'Live casino ei suostu toimimaan - mist?? t??m?? voi johtua?', answer: 'Mik??li vain pelipaikan verkkosivusto toimii normaalisti, tulisi my??s pelipaikan live casino olla toiminnassa automaattisesti. Mik??li livekasinon pelip??yd??t eiv??t kuitenkaan suostu syyst?? tai toisesta aukeamaan, kannattaa sinun tarkastaa onko nettiselaimesi p??ivitettyn?? ajantasalle. Usein live kasinot vaativat my??s Adobe Flash -selainliit??nn??isen lataamisen toimiakseen.' },
            ]}
          />
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanTeksti1.json, {
                    renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                        />
                      ),
                    },
                  })}
              </div>
              <h3 className="listHead">Parhaat live-kasinot juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.livekasinotSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`ikit${kasinonSlug}`}>
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
                        {poistaLinkkiArvosteluun !== true && <a href={`/kokemuksia/${kasinonSlug}/`} className="linkki">Lue arvostelu</a>}
                        </div>
                        <div className="contentBox first">
                        <div className="contentInfo">
                            <div className="offerItem">
                            <i>Bonukset:</i>
                            <div className="offer">{bonusRaha}</div>
                            </div>
                            <div className="offerItem">
                            <i>Kierrokset:</i>
                            <div className="offer">{ilmaiskierrokset}</div>
                            </div>
                        </div>
                        </div>
                        <div className="contentBox second">
                            <div className="contentText">
                              {listatekstit !== null &&
                                <div>{listatekstit.livekasinotSivuTopLista.livekasinotSivuTopLista}</div>
                              }
                              {listatekstit == null &&
                                <div>-</div>
                              }
                            </div>
                        </div>
                        <div className="contentButton">
                            <div className="contentBtn only">
                                <a className="btn" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">S????nn??t ja ehdot</a>
                            }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/kaikki-nettikasinot/">Tsekkaa kaikki nettikasinot -lista...</a>
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage" width="300" height="300"/>
              {documentToReactComponents(page.ylaosanTeksti2.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
               <h3 className="listHead">Livekasino-poimintoja viime vuosilta - toimituksen valinnat</h3>
               <table className="casinoTable">
                <tbody>
                  {page.viimeVuosienLivekasinotLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">S????nn??t ja ehdot</a>
                            }
                          </div>
                        : <div className="contentButton nolink">
                            <div className="contentBtn">
                              <a className="btn scd" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">S????nn??t ja ehdot</a>
                            }
                          </div>
                        }
                    </td>
                  </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/uudet-nettikasinot/">Lis???? uusia kasinoita 2022...</a>
              <div className="wrapperText">{documentToReactComponents(page.ylaosanTeksti3.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <div className="accordions">
                <h2>Usein kysyttyj?? kysymyksi?? livekasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>L??ytyyk?? jokaiselta casinolta aina oma livekasino? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll??, l??hes aina. Arviomme perusteella nykyisin noin 99% netin pelipaikoista tarjoaa sivustollaan my??s livekasinon muiden eri pelityyppien ohessa. Livekasinoiden suosio onkin kasvanut viime vuosina yksinkertaisesti niin isolle tasolle, etteiv??t casinot voi oikein en???? j??tt???? t??t?? pelikategoriaa ulos valikoimastaan.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? netin parhaat live kasinot tunnistaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??h??n on helppo vastaus: parhaista live-peleist?? tietty. Ne netin parhaat livekasinot onkin koottu vahvasti Evolutionin luomien live-p??ytien kautta, mutta toisaalta tietyt pelurit voivat arvostaa my??s muita pelitaloja t??ss?? sektorissa. Parhailla livekasinoilla voikin olla pelkki?? live-pelej?? tarjottuna jopa viidelt?? eri pelivalmistajalta, jolloin erilaisten live-p??ytien m????r?? voi kasvaa jopa kolminumeroisiin lukemiin.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten livekasinot oikein toimivat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Nimen ei kannata antaa h??m??t??, sill?? live kasinot toimivat hyvin pitk??lti samalla tapaa kuin kukin casino normaalistikin. Kyseess?? onkin vain tietyn pelipaikan yksitt??inen pelikategoria, jolloin livekasino-p??ytiin p????see siis viihtym????n yksinkertaisesti vain siirtym??ll?? casinon sis??ll?? kyseiseen kategoriaan ja avaamalla halutun pelip??yd??n.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia pelej?? live kasinoilla voi pelata? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Hyvin pitk????n livekasinot tarjoilivat pelaajilleen k??yt??nn??ss?? vain erilaisia p??yti?? blackjackin, ruletin ja pokerin pariin, mutta viime vuosina valikoima on live-pelien osalta kasvanut ja monipuolistunut huomattavasti muun muassa erilaisten onnenpy??r??pelien ja muiden game show -henkisten kisailujen muodossa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarjoaako live kasinot bonareita pelaajilleen? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? tarjoavat, mutta varsin harvoin. Pelk??st????n livekasinolle suunnattuja bonareita l??ytyy vain joiltakin yksitt??isilt?? pelipaikoilta, mutta t??m??n ei kannata antaa h??mment????. Normaalisti nimitt??in kaikki talletusbonarit ovat automaattisesti hy??dynnett??viss?? my??s livekasinoiden pelien parissa, eli useimmiten tervetuliaiseduilla p????see siis viihtym????n my??s live-pelien parissa kevyemm??ll?? riskill??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Live casino ei suostu toimimaan - mist?? t??m?? voi johtua? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mik??li vain pelipaikan verkkosivusto toimii normaalisti, tulisi my??s pelipaikan live casino olla toiminnassa automaattisesti. Mik??li livekasinon pelip??yd??t eiv??t kuitenkaan suostu syyst?? tai toisesta aukeamaan, kannattaa sinun tarkastaa onko nettiselaimesi p??ivitettyn?? ajantasalle. Usein live kasinot vaativat my??s Adobe Flash -selainliit??nn??isen lataamisen toimiakseen.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><h5>{page.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>Viimeksi p??ivitetty: {page.modify}</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default LiveKasinot

export const pageQuery = graphql`
  query LiveKasinotQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageLivekasinotSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        livekasinotSivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            livekasinotSivuTopLista {
              livekasinotSivuTopLista
            }
          }
          kasinonPieniLogo {
              file {
                  url
              }
              title
          }
        }
        viimeVuosienLivekasinotLista {
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
        ylaosanTeksti1 {
          json
        }
        ylaosanTeksti2 {
          json
        }
        ylaosanTeksti3 {
          json
        }
        kuva {
          file {
            url
          }
          title
        }
        kirjoittaja {
          kirjoittajanNimi
          kirjoittajanKuva {
            file {
              url
            }
            title
          }
          slug
        }
        modify: modifyDate(formatString:"DD.MM.YYYY")
        publish: publishDate(formatString:"DD.MM.YYYY")
        modifyDate
        publishDate
      }
  }
`
