// Kasinot - sivu (ent. nettikasinot)
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, FAQJsonLd, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Kasino extends React.Component {
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
    var elem = document.getElementById("nk");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageNettikasinotSivu')
    const similarU = get(this.props, 'data.allContentfulUutinen')
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/nettikasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/nettikasinot/',
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
          <FAQJsonLd
            questions={[
              { question: 'Miten voin tunnistaa luotettavat nettikasinot markkinoilta?', answer: 'P????s????nt??isesti nettikasinot ovat aina luotettavia ja turvallisia. Etenkin, mik??li valitset pelipaikkasi t????lt?? sivustomme kautta, jolloin voit olla aivan sataprosenttisen varma siit??, ett?? kyseess?? on luotettava nettikasino. Muutoin turvalliset nettikasinot voi tunnistaa helpoiten muun muassa laadukkaasta lisenssist??, tunnetuista maksutavoista ja sivuston yleisest?? laadukkuudesta.' },
              { question: 'Miksi nettikasinot ovat niin suosittuja?', answer: 'Ihmiset ovat pelanneet erilaisia uhkapelej?? jo aikojen alusta saakka, joten n??in modernilla, tietotekniikkaa suosivalla aikakaudella nettikasinoiden suursuosio onkin ollut l??hestulkoon itsest????nselvyys. Nettikasinot tarjoavatkin nykyisin viihteen ja j??nnityksen ohessa my??s aidot mahdollisuudet ??kkirikastumiseen sielt?? omalta kotisohvalta k??sin, ja n??ist?? syist?? ihmiset tykk????v??t niiden parissa viihty??.' },
              { question: 'Millaisella nettikasinolla minun kannattaisi pelata?', answer: 'Jokaisella pelaajalla on tietty omat mieltymykset mit?? nettikasinoihin ja niiden sis??lt??miin ominaisuuksiin tulee, eli yksitt??isen vastauksen antaminen on t??h??n kysymykseen jotakuinkin mahdotonta. Suosittelemme kuitenkin kaikille eritoten sellaisia nettikasinoita, jotka tarjovat nostot verottomina tuloina kaikille suomalaispelureille. T??ll?? tapaa voit maksimoida mahdolliset voittosi helpoiten!' },
              { question: 'Ovatko nettikasinot aina samanlaisia?', answer: 'Pohjimmiltaan nettikasinot toimivat hyvin pitk??lti samoilla tavoilla, ja pelaaminen hoituu niill?? l??hes identtiseen tyyliin. Joitakin selkeit?? eroja voidaan kuitenkin l??yt???? - esimerkiksi tilivapaiden ja normaalisti toimivien nettikasinoiden v??lill??. On toki my??s huomautettava, ett?? kukin nettikasino voi tarjota sivuistoillaan my??s erilaisia pelej?? sek?? kampanjoita, mitk?? luovat eroja eri pelipaikkojen v??lille.' },
              { question: 'Miksi nettikasinoita julkaistaan niin paljon?', answer: 'Kova nettikasinoiden julkaisutahti kertoo kovaa kielt?? juurikin niiden suuresta suosiosta, sill?? kyseess?? on todellinen, globaali miljardibisnes. Monet tuoreet toimijat haluavatkin koittaa saada t??st?? piirakasta omat osingot, jolloin vanhemmat, suosituimmat nettikasinot saavat jatkuvasti tuoreita kilpailijoita markkinoille.' },
              { question: 'Miten suuret nettikasinot erottuvat pienist?? toimijoista?', answer: 'Netin suosituimman pelipaikat ovat toimineet markkinoilla jo kymmenien vuosien ajan, joidenka aikana ne ovat onnistuneet vakiinnuttamaan paikkansa alan absoluuttiselle huipulle. T??llaiset suurimmat nettikasinot erottuvatkin muusta joukosta eritoten rajattomien resurssiensa puitteissa, kun ne pystyv??t j??rjest??m????n asiakkaidensa iloksi mit?? suurempia kampanjoita mit?? suuremmilla palkinnoilla. Tuore ja pieni nettikasino ei t??llaisten j??ttikampanjoiden j??rjest??miseen ymm??rrett??visti pysty venym????n.' },
            ]}
          />
          <ArticleJsonLd
            url='https://kasinohub.com/nettikasinot/'
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
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanteksti.json, {
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
              <h3 className="listHead">Luotettavat nettikasinot sinivalkoiseen makuun:</h3>
              <i className="update">P??ivitetty: {page.top20Pvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.kasinotSivuTop20Lista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`ik${kasinonSlug}`}>
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
                            <div>{listatekstit.nettikasinotSivuTopLista.nettikasinotSivuTopLista}</div>
                          }
                          {listatekstit == null &&
                            <div>-</div>
                          }
                        </div>
                      </div>
                      <div className="contentButton">
                        <div className="contentBtn only">
                          <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
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
              <a className="listBtn" href="/kaikki-nettikasinot/">Tsekkaa kaikki nettikasinot -lista!</a>
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage" width="300" height="300"/>
                {documentToReactComponents(page.ylaosanteksti2.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <a className="listBtn" href="/kasinotarjoukset/">Selaa kasinotarjouksia...</a>
              <div className="wrapperText">{documentToReactComponents(page.ylaosanteksti3.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Tilivapaat nettikasinot - TOP10</h3>
              <table className="casinoTable">
                <tbody>
                {page.tilivapaatNettikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`ik${kasinonSlug}`}>
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
                            <div>{listatekstit.nettikasinotSivuTilivapaatLista.nettikasinotSivuTilivapaatLista}</div>
                          }
                          {listatekstit == null &&
                            <div>-</div>
                          }
                        </div>
                      </div>
                      <div className="contentButton">
                        <div className="contentBtn only">
                          <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
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
              <a className="listBtn" href="/pikakasinot/">Lis???? tilivapaita pikakasinoita...</a>
              <div className="wrapperText">{documentToReactComponents(page.keskiosanteksti.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Nettikasinot mobiilipelaajille - TOP5</h3>
              <table className="casinoTable">
                <tbody>
                {page.mobiiliNettikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`ik${kasinonSlug}`}>
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
                            <div>{listatekstit.nettikasinotSivuMobiilipelaajilleLista.nettikasinotSivuMobiilipelaajilleLista}</div>
                          }
                          {listatekstit == null &&
                            <div>-</div>
                          }
                        </div>
                      </div>
                      <div className="contentButton">
                        <div className="contentBtn only">
                          <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
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
              <a className="listBtn" href="/mobiilikasino/">Lis???? laadukkaita mobiilikasinoita...</a>
              <div className="accordions">
                <h2>Usein kysyttyj?? kysymyksi?? nettikasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten voin tunnistaa luotettavat nettikasinot markkinoilta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">P????s????nt??isesti nettikasinot ovat aina luotettavia ja turvallisia. Etenkin, mik??li valitset pelipaikkasi t????lt?? sivustomme kautta, jolloin voit olla aivan sataprosenttisen varma siit??, ett?? kyseess?? on luotettava nettikasino. Muutoin turvalliset nettikasinot voi tunnistaa helpoiten muun muassa laadukkaasta lisenssist??, tunnetuista maksutavoista ja sivuston yleisest?? laadukkuudesta.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi nettikasinot ovat niin suosittuja? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ihmiset ovat pelanneet erilaisia uhkapelej?? jo aikojen alusta saakka, joten n??in modernilla, tietotekniikkaa suosivalla aikakaudella nettikasinoiden suursuosio onkin ollut l??hestulkoon itsest????nselvyys. Nettikasinot tarjoavatkin nykyisin viihteen ja j??nnityksen ohessa my??s aidot mahdollisuudet ??kkirikastumiseen sielt?? omalta kotisohvalta k??sin, ja n??ist?? syist?? ihmiset tykk????v??t niiden parissa viihty??.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisella nettikasinolla minun kannattaisi pelata? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jokaisella pelaajalla on tietty omat mieltymykset mit?? nettikasinoihin ja niiden sis??lt??miin ominaisuuksiin tulee, eli yksitt??isen vastauksen antaminen on t??h??n kysymykseen jotakuinkin mahdotonta. Suosittelemme kuitenkin kaikille eritoten sellaisia nettikasinoita, jotka tarjovat nostot verottomina tuloina kaikille suomalaispelureille. T??ll?? tapaa voit maksimoida mahdolliset voittosi helpoiten!</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko nettikasinot aina samanlaisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Pohjimmiltaan nettikasinot toimivat hyvin pitk??lti samoilla tavoilla, ja pelaaminen hoituu niill?? l??hes identtiseen tyyliin. Joitakin selkeit?? eroja voidaan kuitenkin l??yt???? - esimerkiksi tilivapaiden ja normaalisti toimivien nettikasinoiden v??lill??. On toki my??s huomautettava, ett?? kukin nettikasino voi tarjota sivuistoillaan my??s erilaisia pelej?? sek?? kampanjoita, mitk?? luovat eroja eri pelipaikkojen v??lille.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi nettikasinoita julkaistaan niin paljon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kova nettikasinoiden julkaisutahti kertoo kovaa kielt?? juurikin niiden suuresta suosiosta, sill?? kyseess?? on todellinen, globaali miljardibisnes. Monet tuoreet toimijat haluavatkin koittaa saada t??st?? piirakasta omat osingot, jolloin vanhemmat, suosituimmat nettikasinot saavat jatkuvasti tuoreita kilpailijoita markkinoille.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten suuret nettikasinot erottuvat pienist?? toimijoista? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin suosituimman pelipaikat ovat toimineet markkinoilla jo kymmenien vuosien ajan, joidenka aikana ne ovat onnistuneet vakiinnuttamaan paikkansa alan absoluuttiselle huipulle. T??llaiset suurimmat nettikasinot erottuvatkin muusta joukosta eritoten rajattomien resurssiensa puitteissa, kun ne pystyv??t j??rjest??m????n asiakkaidensa iloksi mit?? suurempia kampanjoita mit?? suuremmilla palkinnoilla. Tuore ja pieni nettikasino ei t??llaisten j??ttikampanjoiden j??rjest??miseen ymm??rrett??visti pysty venym????n.</p>
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

export default Kasino

export const pageQuery = graphql`
  query KasinotQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageNettikasinotSivu {
      title
      seoBrowserTitle
      seoMetaDescription
      top20Pvm(formatString: "DD.MM.YYYY")
      modify: modifyDate(formatString:"DD.MM.YYYY")
      publish: publishDate(formatString:"DD.MM.YYYY")
      modifyDate
      publishDate
      kuva {
        file {url}
        title
      }
      kasinotSivuTop20Lista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          nettikasinotSivuTopLista {
            nettikasinotSivuTopLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      tilivapaatNettikasinotLista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          nettikasinotSivuTilivapaatLista {
            nettikasinotSivuTilivapaatLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      mobiiliNettikasinotLista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          nettikasinotSivuMobiilipelaajilleLista {
            nettikasinotSivuMobiilipelaajilleLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
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
      ylaosanteksti {
        json
      }
      ylaosanteksti2 {
        json
      }
      ylaosanteksti3 {
        json
      }
      keskiosanteksti {
        json
      }
    }
    allContentfulUutinen (sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}}){
      totalCount
        edges {
          node {
            title
            slug
            publishDate(formatString: "DD.MM.YYYY")
            heroImage {
              file {
                url
              }
              title
            }
            body {
              json
            }
            kasino {
              affiliateLinkki
            }
            introTextKasinotSivuScroller {
              introTextKasinotSivuScroller
            }
          }
        }
      }
  }

`
