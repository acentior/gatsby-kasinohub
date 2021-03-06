// Pelikasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Pelikasinot extends React.Component {
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
    var elem = document.getElementById("pek");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPagePelikasinot')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/pelikasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/pelikasinot/',
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
            url='https://kasinohub.com/pelikasinot/'
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
              { question: 'Mik?? on t??ll?? hetkell?? paras pelikasino netiss???', answer: 'Yksil??kohtaista vastausta laadukkaimman pelikasinon suhteen ei voida oikein antaa, sill?? kukin peluri tietty m????rittelee itse sen, mit?? he pelipaikoiltaan vaativat. Sivustomme toimitustiimin mielest?? parhaat pelikasinot ovat sellaisia, jotka mahdollistavat helpot ja pikaiset nostot, tarjoavat hyv??t bonarit ja muut edut pelaajilleen sek?? tottakai sis??lt??v??t my??s kaikki suosituimmat pelit pelattavaksi.' },
              { question: 'Ovatko kaikki pelikasinot luotettavia ja turvallisia?', answer: 'Kyll?? ovat! Okei, joskus tiettyj?? pelikasinoita on suljettu viranomaistahojen puolesta erin??isten v????rink??yt??sten vuoksi, mutta t??llaiset typeryydet ovat olleet hyvin harvoja yksitt??istapauksia. N??in ollen voimme kyll?? vakuuttaa, ett?? kaikki pelikasinot ovat turvallisia pelipaikkoja netiss??. Etenk????n meid??n sivustoltamme et voi mit????n ep??luotettavia pelipaikkoja edes l??yt????, sill?? emme sellaisia sivuille kelpuuta!' },
              { question: 'Onko olemassa t??ysin suomalaisia pelikasinoita?', answer: 'Veikkauksen monopolin vuoksi suomalaisia kivijalkatason pelikasinoita ei katukuvassamme n??y, mutta t??m?? monopoli ei kuitenkaan pysty vaikuttamaan Internetin ihmeelliseen maailmaan. Pelikasinot netiss?? ovatkin sataprosenttisen laillisia toimijoita, ja n??iden seassa on my??s huomattavan monia suomalaisia pelipaikkoja, joiden taustoilta ja perustajista l??ytyy sinivalkoista osaamista vaikka mill?? mitalla.' },
              { question: 'Suomi on ahkerimmin pelikasinoilla viihtyv?? kansa - mist?? t??m?? johtuu?', answer: 'T??t?? asiaa onkin ihmetelty ihan globaalillakin tasolla, sill?? vaikka valtiovaltamme on perustellut Veikkauksen monopolin pelihaittojen minimoimisen n??k??kulmasta, olemme yksi eniten rahaa pelikasinoihin k??ytt??v?? kansa maailmassa. Yksi syy t??h??n onkin varmasti juuri Veikkaus itse, joka on muun muassa jatkuvalla mainonnallaan luonut vahvasti pelikasinoihin ja uhkapeleihin nojaavan kulttuurin rajojemme sis??lle.' },
              { question: 'Miksi uusia pelikasinoita avautuu markkinoilla niin paljon?', answer: 'Erilaiset uhkapelaamisen muodot ovat olleet maailmanlaajuisesti suuren suuressa suosiossa jo aikojen alkutaipaleelta saakka, ja pelikasinoiden kova julkaisutahti perustuukin t??h??n jatkuvaan suosioon. Uhkapeli-alan onkin suuri miljarditason bisnes, ja t??st?? syyst?? kaikki uudet pelikasinot pyrkiv??tkin saamaan t??st?? piirakasta osuuden itselleen.' },
              { question: 'Voiko netin pelikasinoilla pelata ilmaiseksi?', answer: 'Kyll??h??n t??m?? onnistuu! Esimerkiksi talletuksetta saatavien bonarietujen avulla ihan kuka tahansa voi ottaa netin pelikasinot haltuun t??ysin ilmaiseksi ja riskitt??m??sti. N??ilt?? pelikasinoilta voi my??s l??yt???? demo-versioita eri peleist??, joita voit testailla t??ll?? tapaa veloituksetta leikkirahalla pelaamalla.' },
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
              <h3 className="listHead">Parhaat pelikasinot netiss?? juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.pelikasinotSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`top${kasinonSlug}`}>
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
                                <div>{listatekstit.pelikasinotSivuTopLista.pelikasinotSivuTopLista}</div>
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
              <a className="listBtn" href="/nettikasinot/">Lis???? nettikasinoita!</a>
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
              <h3 className="listHead">Uudet pelikasinot 2022</h3>
              <table className="casinoTable">
                <tbody>
                {page.uudetPelikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`top${kasinonSlug}`}>
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
                                <div>{listatekstit.pelikasinotSivuUudetLista.pelikasinotSivuUudetLista}</div>
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
              <a className="listBtn" href="/uudet-nettikasinot/">Lis???? uusia nettikasinoita...</a>
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanTeksti3.json, {
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
              <h3 className="listHead">Pelaa ilman tilin avaamista</h3>
              <table className="casinoTable">
                <tbody>
                  {page.tilivapaatPelikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pikakasinot/">Katso kaikki pikakasinot t????lt??!</a>
              <div className="wrapperText">
                {documentToReactComponents(page.alaosanTeksti.json, {
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
              <div className="accordions">
                <h2>Usein kysyttyj?? kysymyksi?? pelikasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mik?? on t??ll?? hetkell?? paras pelikasino netiss??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Yksil??kohtaista vastausta laadukkaimman pelikasinon suhteen ei voida oikein antaa, sill?? kukin peluri tietty m????rittelee itse sen, mit?? he pelipaikoiltaan vaativat. Sivustomme toimitustiimin mielest?? parhaat pelikasinot ovat sellaisia, jotka mahdollistavat helpot ja pikaiset nostot, tarjoavat hyv??t bonarit ja muut edut pelaajilleen sek?? tottakai sis??lt??v??t my??s kaikki suosituimmat pelit pelattavaksi.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko kaikki pelikasinot luotettavia ja turvallisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? ovat! Okei, joskus tiettyj?? pelikasinoita on suljettu viranomaistahojen puolesta erin??isten v????rink??yt??sten vuoksi, mutta t??llaiset typeryydet ovat olleet hyvin harvoja yksitt??istapauksia. N??in ollen voimme kyll?? vakuuttaa, ett?? kaikki pelikasinot ovat turvallisia pelipaikkoja netiss??. Etenk????n meid??n sivustoltamme et voi mit????n ep??luotettavia pelipaikkoja edes l??yt????, sill?? emme sellaisia sivuille kelpuuta!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa t??ysin suomalaisia pelikasinoita? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Veikkauksen monopolin vuoksi suomalaisia kivijalkatason pelikasinoita ei katukuvassamme n??y, mutta t??m?? monopoli ei kuitenkaan pysty vaikuttamaan Internetin ihmeelliseen maailmaan. Pelikasinot netiss?? ovatkin sataprosenttisen laillisia toimijoita, ja n??iden seassa on my??s huomattavan monia suomalaisia pelipaikkoja, joiden taustoilta ja perustajista l??ytyy sinivalkoista osaamista vaikka mill?? mitalla.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Suomi on ahkerimmin pelikasinoilla viihtyv?? kansa - mist?? t??m?? johtuu? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??t?? asiaa onkin ihmetelty ihan globaalillakin tasolla, sill?? vaikka valtiovaltamme on perustellut Veikkauksen monopolin pelihaittojen minimoimisen n??k??kulmasta, olemme yksi eniten rahaa pelikasinoihin k??ytt??v?? kansa maailmassa. Yksi syy t??h??n onkin varmasti juuri Veikkaus itse, joka on muun muassa jatkuvalla mainonnallaan luonut vahvasti pelikasinoihin ja uhkapeleihin nojaavan kulttuurin rajojemme sis??lle.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi uusia pelikasinoita avautuu markkinoilla niin paljon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Erilaiset uhkapelaamisen muodot ovat olleet maailmanlaajuisesti suuren suuressa suosiossa jo aikojen alkutaipaleelta saakka, ja pelikasinoiden kova julkaisutahti perustuukin t??h??n jatkuvaan suosioon. Uhkapeli-alan onkin suuri miljarditason bisnes, ja t??st?? syyst?? kaikki uudet pelikasinot pyrkiv??tkin saamaan t??st?? piirakasta osuuden itselleen.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko netin pelikasinoilla pelata ilmaiseksi? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll??h??n t??m?? onnistuu! Esimerkiksi talletuksetta saatavien bonarietujen avulla ihan kuka tahansa voi ottaa netin pelikasinot haltuun t??ysin ilmaiseksi ja riskitt??m??sti. N??ilt?? pelikasinoilta voi my??s l??yt???? demo-versioita eri peleist??, joita voit testailla t??ll?? tapaa veloituksetta leikkirahalla pelaamalla.</p>
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

export default Pelikasinot

export const pageQuery = graphql`
  query PelikasinotQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePelikasinot {
        title
        seoBrowserTitle
        seoMetaDescription
        alaosanTeksti {
          json
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
        pelikasinotSivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          lyhytBonuskuvaus
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit{
            pelikasinotSivuTopLista {
              pelikasinotSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        uudetPelikasinotLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          lyhytBonuskuvaus
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit{
            pelikasinotSivuUudetLista {
              pelikasinotSivuUudetLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        tilivapaatPelikasinotLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          lyhytBonuskuvaus
          snntJaEhdot
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file {url}
            title
          }
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
