// Rahapelit - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Rahapelit extends React.Component {
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
    var elem = document.getElementById("rp");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageRahapelitSivu')
    return (
     <Layout location={this.props.location}>
        <GatsbySeo
          title={page.seoBrowserTitle}
          description={page.seoMetaDescription}
          canonical='https://kasinohub.com/rahapelit/'
          languageAlternates={[
            {
              hrefLang: 'fi-FI',
              href: 'https://kasinohub.com/rahapelit/',
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
          url='https://kasinohub.com/rahapelit/'
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
            { question: 'Voiko rahapelist?? netiss?? voittaa oikeaa rahaa?', answer: 'Kyll?? voi, mutta mit????n takuuvarmoja voittoja netin rahapelit eiv??t tietty jaa. Uhkapelaamisessa onkin aina ??kkirikastumisen ohessa my??s mahdollisuus siihen, etteiv??t panosttuja euroja saa koskaan takaisin. Mik??li kuitenkin pelaat rahapelej?? oikealla rahalla - etk?? bonusrahalla - ovat voitot my??s aina oikeaa rahaa.' },
            { question: 'Onko rahapelej?? mahdollista pelata ilmaiseksi?', answer: 'Jos haluat pelata rahapelej?? netiss?? ilmaiseksi, onnistuu t??m?? toiminta k??yt??nn??ss?? kahdella eri tapaa. Ensimm??inen vaihtoehto on lunastaa erin??isi?? ilmaiseksi saatavia bonareita, kuten vaikkapa talletusvapaita spinnej??, joiden avulla p????set py??ritt??m????n rahapelej?? veloituksetta. Voit toki my??s testata eri pelej?? ilmaiseksi demo-versioina, jolloin pelaaminen tapahtuu leikkirahalla.' },
            { question: 'Mink??laisia ominaisuuksia parhaat rahapelit pit??v??t sis??ll????n?', answer: 'Nykyisin markkinoilta voi l??yt???? jopa useita tuhansia erilaisia rahapelej??, jotka vaihtelevat ominaisuuksiltaan, ulkoasuiltaan ja muilta teemoiltaan huomattavasti. Toimituksemme mielest?? parhaat rahapelit ovat kuitenkin sis??ll??ilt????n sellaisia, joissa graafinen ilotulitus on monipuolisten ominaisuuksien ja korkean palautusprosentin kanssa hyv??ss?? tasapainossa.' },
            { question: 'Voiko rahapelej?? pelata my??s ilman rekister??inti???', answer: 'Kyll?? voit. Rahapelit ilman rekister??inti?? on mahdollista l??yt???? niin sanotuilta tilivapailta casinoilta, joissa pelaamisen voi aloittaa ilman rekister??itymiskaavakkeen t??ytt???? vaivattomalla verkkopankkitunnistautumisella. Pelaamisen aloittaminen on siis t??llaisessa tapauksessa todella yksinkertaista ja helppoa.' },
            { question: 'Miten Veikkaus-casinon rahapelit eroavat muista netin peleist???', answer: 'Teknologinen kehitys on ollut viimeisten vuosien aikana huimaa, ja sama kehityskulku on n??kynyt my??s rahapeleiss??. Veikkauksen rahapelit ovat kuitenkin teknologisilta ratkaisuiltaan huomattavasti heikompia kuin muut markkinoiden pelituotokset, sill?? Veikkaus ei ole mill????n mittarilla tunnettu rahapeli-aiheisista innovaatioista. Veikkauksen pelit sis??lt??v??t my??s j??rjest????n huonommat palautusprosentit muihin rahapeleihin verrattuna.' },
            { question: 'Ovatko kaikki rahapelit turvallisia?', answer: 'Turvallisuus korostuu koko rahapeli-alalla siin?? m????rin, ettei ep??luotettavia toimijoita markkinoilla kykene edes toimimaan. Jatkuva viranomaisten valvonta takaakin sen, ett?? kaikki rahapelit netiss?? ovatkin sataprosenttisen turvallisia ja kaikin puolin luotettavia oli kyseess?? sitten mik?? pelipaikka tai casino tahansa.' },
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
              <h3 className="listHead">Parhaat rahapelisivustot juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.rahapelitSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.rahapelitSivuTopLista.rahapelitSivuTopLista}</div>
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
              <a className="listBtn" href="/nettikasinot/">Selaa lis???? nettikasinoita...</a>
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
              <h3 className="listHead">Pelaa rahapelej?? ilman rekister??inti??</h3>
              <table className="casinoTable">
                <tbody>
                  {page.rahapelitIlmanRekisterintiLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pikakasinot/">Lis???? pikakasinoita 2022...</a>
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
              <h3 className="listHead">Parhaat mobiilisivustot rahapelaamiseen</h3>
              <table className="casinoTable">
                <tbody>
                  {page.rahapelitMobiilissaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/mobiilikasino/">Lis???? laadukkaita mobiilikasinoita...</a>
              <div className="wrapperText">{documentToReactComponents(page.alaosanTeksti.json, {
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
                <h2>Usein kysyttyj?? kysymyksi?? rahapeleist??</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko rahapelist?? netiss?? voittaa oikeaa rahaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? voi, mutta mit????n takuuvarmoja voittoja netin rahapelit eiv??t tietty jaa. Uhkapelaamisessa onkin aina ??kkirikastumisen ohessa my??s mahdollisuus siihen, etteiv??t panosttuja euroja saa koskaan takaisin. Mik??li kuitenkin pelaat rahapelej?? oikealla rahalla - etk?? bonusrahalla - ovat voitot my??s aina oikeaa rahaa.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko rahapelej?? mahdollista pelata ilmaiseksi? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos haluat pelata rahapelej?? netiss?? ilmaiseksi, onnistuu t??m?? toiminta k??yt??nn??ss?? kahdella eri tapaa. Ensimm??inen vaihtoehto on lunastaa erin??isi?? ilmaiseksi saatavia bonareita, kuten vaikkapa talletusvapaita spinnej??, joiden avulla p????set py??ritt??m????n rahapelej?? veloituksetta. Voit toki my??s testata eri pelej?? ilmaiseksi demo-versioina, jolloin pelaaminen tapahtuu leikkirahalla.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mink??laisia ominaisuuksia parhaat rahapelit pit??v??t sis??ll????n? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Nykyisin markkinoilta voi l??yt???? jopa useita tuhansia erilaisia rahapelej??, jotka vaihtelevat ominaisuuksiltaan, ulkoasuiltaan ja muilta teemoiltaan huomattavasti. Toimituksemme mielest?? parhaat rahapelit ovat kuitenkin sis??ll??ilt????n sellaisia, joissa graafinen ilotulitus on monipuolisten ominaisuuksien ja korkean palautusprosentin kanssa hyv??ss?? tasapainossa.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko rahapelej?? pelata my??s ilman rekister??inti??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? voit. Rahapelit ilman rekister??inti?? on mahdollista l??yt???? niin sanotuilta tilivapailta casinoilta, joissa pelaamisen voi aloittaa ilman rekister??itymiskaavakkeen t??ytt???? vaivattomalla verkkopankkitunnistautumisella. Pelaamisen aloittaminen on siis t??llaisessa tapauksessa todella yksinkertaista ja helppoa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten Veikkaus-casinon rahapelit eroavat muista netin peleist??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Teknologinen kehitys on ollut viimeisten vuosien aikana huimaa, ja sama kehityskulku on n??kynyt my??s rahapeleiss??. Veikkauksen rahapelit ovat kuitenkin teknologisilta ratkaisuiltaan huomattavasti heikompia kuin muut markkinoiden pelituotokset, sill?? Veikkaus ei ole mill????n mittarilla tunnettu rahapeli-aiheisista innovaatioista. Veikkauksen pelit sis??lt??v??t my??s j??rjest????n huonommat palautusprosentit muihin rahapeleihin verrattuna.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko kaikki rahapelit turvallisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Turvallisuus korostuu koko rahapeli-alalla siin?? m????rin, ettei ep??luotettavia toimijoita markkinoilla kykene edes toimimaan. Jatkuva viranomaisten valvonta takaakin sen, ett?? kaikki rahapelit netiss?? ovatkin sataprosenttisen turvallisia ja kaikin puolin luotettavia oli kyseess?? sitten mik?? pelipaikka tai casino tahansa.</p>
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

export default Rahapelit

export const pageQuery = graphql`
  query RahapelitQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageRahapelitSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        rahapelitSivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            rahapelitSivuTopLista {
              rahapelitSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
        }
        rahapelitMobiilissaLista {
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
        rahapelitIlmanRekisterintiLista {
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
        alaosanTeksti {
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
