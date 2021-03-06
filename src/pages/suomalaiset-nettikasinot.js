// Suomalaiset nettikasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Suomalaiset extends React.Component {
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
    var elem = document.getElementById("sn");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageSuomalaisetNettikasinotSivu')

    return (
     <Layout location={this.props.location}>
       <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/suomalaiset-nettikasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/suomalaiset-nettikasinot/',
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
            url='https://kasinohub.com/suomalaiset-nettikasinot/'
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
              { question: 'Onko suomalaisia nettikasinoita oikeasti olemassa?', answer: 'Veikkauksen monopoli hallitsee kotoisia markkinoitamme siihen malliin, ettei casinoita voida py??ritt???? suoraan valtiomme rajojen sis??puolelta. T??st?? huolimatta suomalaisia kasinoita voidaan kuitenkin sanoa olevan olemassa, sill?? sinivalkoiset alan ammattilaiset ovat yksinkertaisesti l??hteneet maailmalle, ja laittaneet n??m?? suomalaiset nettikasinot toimimaan muista maista k??sin.' },
              { question: 'Mist?? tunnistan suomalaisen nettikasinon?', answer: 'T??m?? on varsin helppoa, sill?? suomalaiset nettikasinot on toisin sanoen suunnattu vain ja ainoastaan suomalaisille pelaajille. N??in ollen t??llaiset sinivalkoiset pelipaikat on siis mahdollista tunnistaa helpoiten casinon nimest??. Jos t??m?? nimi on sellainen, mit?? suomen kielt?? osaamattomat eiv??t ymm??rr??, on kyseess?? satavarmasti pelk??st????n suomalaisille pelaajille suunnattu, kotimainen nettikasino!' },
              { question: 'Ovatko suomalaiset nettikasinot muita pelipaikkoja parempia?', answer: 'Eiv??t ne tietty v??ltt??m??tt?? ole, mutta joskus ehdottomasti. Jos esimerkiksi arvostat sit??, ett?? pystyt toiminaan casinolla suomeksi sek?? itse pelaamisen ett?? vaikkapa asiakaspalvelun suhteen, ovat suomalaiset nettikasinot ehdottomasti sinulle hyv?? valinta. Suomalaisilta kasinoilta voi my??s useimmiten l??yt???? vain suomalaispelureille suunnattuja kampanjoita, jotka ovat tietty aina mukavaa plussaa pelurille kuin pelurille.' },
              { question: 'Mist?? l??yd??n netin suomenkieliset kasinot helpoiten?', answer: 'Seuraamalla sivustomme tarjontaa aktiivisesti. Listaammekin t??lle sivulle sek?? ne t??ysin suomalaiset kasinot, ett?? ne pelipaikat, jotka tarjoavat t??ysin suomenkielist?? viihdett?? kasinopelureille laadukkaaseen tapaan. Suomenkielisi?? nettikasinoita l??ytyykin markkinoilta pitk??t litanjat, sill?? suomalaispelaajia arvostetaan casino-markkinoilla hyvinkin suuresti.' },
              { question: 'Kuinka usein uusia suomalaisia nettikasinoita tulee markkinoille?', answer: 'Uusia pelipaikkoja l??v??htelee markkinoille l??hes jatkuvaan tahtiin, mutta uudet suomalaiset nettikasinot eiv??t ole aivan yht?? tuttu n??ky t??ll?? alalla. Nyrkkis????nt??n?? voitaisiinkin sanoa, ett?? siin?? miss?? tuoreita nettipelaamoja julkaistaan markkinoille l??hes jokaviikkoisella tahdilla, tulee tuoreita suomalaiskasinoita julki ehk?? pari vuodessa.' },
              { question: 'Millaisia suomalaiset kivijalka-kasinot ovat?', answer: 'Koska Veikkauksella on Suomessa monopoliasema uhkapelien tarjoamiseen, ovat suomalaiset kivijalkatason kasinot toden totta Veikkauksen hallinnassa. Casino Helsinki onkin t??ll?? hetkell?? Suomen ainoa oikea casino, ja Tampereelle avautuu piakkoin toinen t??llainen pelipaikka. Veikkauksen pieni?? Pelaamoja emme t??ss?? tarkastelussa laske suomalaisiksi kasinoiksi.' },
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
              <h3 className="listHead">Suomalaiset nettikasinot - valitse sinivalkoinen pelipaikka!</h3>
              <table className="casinoTable">
                <tbody>
                {page.suomalaisetNettikasinotSivunTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                            <div>{listatekstit.suomalaisetKasinotSivuTopLista.suomalaisetKasinotSivuTopLista}</div>
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
              <a className="listBtn" href="/kaikki-nettikasinot/">Kaikki nettikasinot listattuna...</a>
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
              <h3 className="listHead">Laadukkaimmat suomenkieliset nettikasinot</h3>
              <table className="casinoTable">
                <tbody>
                  {page.suomenkielisetNettikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/uudet-nettikasinot/">Lis???? uusia nettikasinoita...</a>
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
                <h2>Usein kysyttyj?? kysymyksi?? suomalaisista nettikasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko suomalaisia nettikasinoita oikeasti olemassa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Veikkauksen monopoli hallitsee kotoisia markkinoitamme siihen malliin, ettei casinoita voida py??ritt???? suoraan valtiomme rajojen sis??puolelta. T??st?? huolimatta suomalaisia kasinoita voidaan kuitenkin sanoa olevan olemassa, sill?? sinivalkoiset alan ammattilaiset ovat yksinkertaisesti l??hteneet maailmalle, ja laittaneet n??m?? suomalaiset nettikasinot toimimaan muista maista k??sin.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? tunnistan suomalaisen nettikasinon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??m?? on varsin helppoa, sill?? suomalaiset nettikasinot on toisin sanoen suunnattu vain ja ainoastaan suomalaisille pelaajille. N??in ollen t??llaiset sinivalkoiset pelipaikat on siis mahdollista tunnistaa helpoiten casinon nimest??. Jos t??m?? nimi on sellainen, mit?? suomen kielt?? osaamattomat eiv??t ymm??rr??, on kyseess?? satavarmasti pelk??st????n suomalaisille pelaajille suunnattu, kotimainen nettikasino!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko suomalaiset nettikasinot muita pelipaikkoja parempia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Eiv??t ne tietty v??ltt??m??tt?? ole, mutta joskus ehdottomasti. Jos esimerkiksi arvostat sit??, ett?? pystyt toiminaan casinolla suomeksi sek?? itse pelaamisen ett?? vaikkapa asiakaspalvelun suhteen, ovat suomalaiset nettikasinot ehdottomasti sinulle hyv?? valinta. Suomalaisilta kasinoilta voi my??s useimmiten l??yt???? vain suomalaispelureille suunnattuja kampanjoita, jotka ovat tietty aina mukavaa plussaa pelurille kuin pelurille.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? l??yd??n netin suomenkieliset kasinot helpoiten? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Seuraamalla sivustomme tarjontaa aktiivisesti. Listaammekin t??lle sivulle sek?? ne t??ysin suomalaiset kasinot, ett?? ne pelipaikat, jotka tarjoavat t??ysin suomenkielist?? viihdett?? kasinopelureille laadukkaaseen tapaan. Suomenkielisi?? nettikasinoita l??ytyykin markkinoilta pitk??t litanjat, sill?? suomalaispelaajia arvostetaan casino-markkinoilla hyvinkin suuresti.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka usein uusia suomalaisia nettikasinoita tulee markkinoille? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Uusia pelipaikkoja l??v??htelee markkinoille l??hes jatkuvaan tahtiin, mutta uudet suomalaiset nettikasinot eiv??t ole aivan yht?? tuttu n??ky t??ll?? alalla. Nyrkkis????nt??n?? voitaisiinkin sanoa, ett?? siin?? miss?? tuoreita nettipelaamoja julkaistaan markkinoille l??hes jokaviikkoisella tahdilla, tulee tuoreita suomalaiskasinoita julki ehk?? pari vuodessa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia suomalaiset kivijalka-kasinot ovat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Koska Veikkauksella on Suomessa monopoliasema uhkapelien tarjoamiseen, ovat suomalaiset kivijalkatason kasinot toden totta Veikkauksen hallinnassa. Casino Helsinki onkin t??ll?? hetkell?? Suomen ainoa oikea casino, ja Tampereelle avautuu piakkoin toinen t??llainen pelipaikka. Veikkauksen pieni?? Pelaamoja emme t??ss?? tarkastelussa laske suomalaisiksi kasinoiksi.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" alt={page.kirjoittaja.kirjoittajanKuva.title} className="lazyload"/></a>
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

export default Suomalaiset

export const pageQuery = graphql`
  query SuomalaisetQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageSuomalaisetNettikasinotSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        suomalaisetNettikasinotSivunTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            suomalaisetKasinotSivuTopLista {
              suomalaisetKasinotSivuTopLista
            }
          }
          kasinonPieniLogo {
              file {
                  url
              }
              title
          }
        }
        suomenkielisetNettikasinotLista {
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
