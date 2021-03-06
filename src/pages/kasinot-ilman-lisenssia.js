// KasinotIlmanLisenssia - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class KasinotIlmanLisenssia extends React.Component {
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
  }
  render() {
    const page = get(this, 'props.data.contentfulPagePeruspohja')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/kasinot-ilman-lisenssia/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/kasinot-ilman-lisenssia/',
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
            url='https://kasinohub.com/kasinot-ilman-lisenssia/'
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
              { question: 'Voivatko kasinot toimia ilman lisenssi???', answer: 'Kyll?? voivat, vaikkakin t??llainen toiminta on markkinoilla hyvin harvinaista. Kasinot ilman lisenssi?? ovatkin siis eritt??in harvinainen n??ky, ja niihin voikin t??rm??t?? k??yt??nn??ss?? vain silloin, mik??li yksitt??inen pelipaikka on menett??nyt toimintalisenssins?? joidenkin laittomuuksien tai muiden rikkeiden my??t??.' },
              { question: 'Kannattaako ilman lisenssi?? olevalla nettikasinolla pelata?', answer: 'Ei mielest??mme kannata. Kasinot ilman lisenssi?? ovatkin t??ll?? hetkell?? maailmanlaajuisesti siin?? m????rin harmaalla listalla, ettei yhdenk????n maan viranomaistahot valvo niiden toimintaa. T??m?? tarkoittaakin sit??, ettei pelaajille ole n??ill?? pelipaikoilla t??ydellist?? turvaa mahdollisten v????rink??yt??sten suhteen.' },
              { question: 'Mitk?? lisenssit ovat suomalaisten pelaajien kannalta parhaita?', answer: 'Sen sijaan, ett?? pelaisit kasinolla ilman lisenssi??, suosittelemme sinulle ehdottomasti suurimmin Euroopan talousalueen sis??lt?? toimivia pelipaikkoja. N??ill?? nettipelaamoilla onkin hallussaan aina luotettava ja laadukas lisenssi, joka takaa my??s kotiutettavat voitot kaikille suomalaispelureille ilman turhien verojen maksamista!' },
              { question: 'Toimiiko Veikkauksen nettikasino ilman lisenssi???', answer: 'Periaatteessa kyll??. Veikkauksen monopoliaseman vuoksi Suomessa ei ole k??yt??ss?? niin sanottua lisenssij??rjestelm????, jolloin my??s Veikkauksen oma nettikasino toimii ilman lisenssi??. Mik??li valiomme vaihtaisi lisenssij??rjestelm????n, tulisi kaikilla suomalaispelureille suunnatuilla pelipaikoilla t??llainen lisenssi tietty hallussa olla.' },
              { question: 'Mist?? tied??n toimiiko jokin kasino ilman lisenssi???', answer: 'Kaikki luotettavat pelipaikat ilmoittavat hallussa pit??m??ns?? lisenssit joko verkkosivustonsa footer-alapalkissa tai esimerkiksi omaa toimintaansa esittelev??ss?? tietoa meist?? -kuvauksessaan. Mik??li casinon sivustolla ei ole mink????nlaista mainintaa lisenssiasioista, voi kyseess?? olla kasino ilman lisenssi?? - joskin ne ovat markkinoilla hyvin harvinainen n??ky' },
              { question: 'Onko ilman lisenssi?? toimivilla nettikasinoilla laitonta pelata Suomesta?', answer: 'Ei ole, sill?? suomalaispelurit ovat t??ysin vapaita toimimaan netiss?? vapaina kuluttajina aivan niinkuin he vain parhaaksi n??kev??t. Voit siis pelata vapaasti my??s kasinolla ilman lisenssi??, mutta kovin kannattavaa ei t??llainen toiminta ole oman kuluttajaturvasi kannalta.' },
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
              <h3 className="listHead">V??lt?? lisenssitt??m??n kasinot - valitse joku n??ist?? pelipaikoista</h3> 
              <table className="casinoTable">
                <tbody>
                {page.topLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.kasinotIlmanLisenssiSivuTopLista.kasinotIlmanLisenssiSivuTopLista}</div>
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
              <a className="listBtn" href="/kaikki-nettikasinot/">Kaikki nettikasinot -lista...</a>
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage" width="300" height="300"/>
                {documentToReactComponents(page.alaosanTeksti.json, {
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
                <h2>Kasinot ilman lisenssi?? - UKK</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voivatko kasinot toimia ilman lisenssi??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? voivat, vaikkakin t??llainen toiminta on markkinoilla hyvin harvinaista. Kasinot ilman lisenssi?? ovatkin siis eritt??in harvinainen n??ky, ja niihin voikin t??rm??t?? k??yt??nn??ss?? vain silloin, mik??li yksitt??inen pelipaikka on menett??nyt toimintalisenssins?? joidenkin laittomuuksien tai muiden rikkeiden my??t??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kannattaako ilman lisenssi?? olevalla nettikasinolla pelata? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ei mielest??mme kannata. Kasinot ilman lisenssi?? ovatkin t??ll?? hetkell?? maailmanlaajuisesti siin?? m????rin harmaalla listalla, ettei yhdenk????n maan viranomaistahot valvo niiden toimintaa. T??m?? tarkoittaakin sit??, ettei pelaajille ole n??ill?? pelipaikoilla t??ydellist?? turvaa mahdollisten v????rink??yt??sten suhteen.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitk?? lisenssit ovat suomalaisten pelaajien kannalta parhaita? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Sen sijaan, ett?? pelaisit kasinolla ilman lisenssi??, suosittelemme sinulle ehdottomasti suurimmin Euroopan talousalueen sis??lt?? toimivia pelipaikkoja. N??ill?? nettipelaamoilla onkin hallussaan aina luotettava ja laadukas lisenssi, joka takaa my??s kotiutettavat voitot kaikille suomalaispelureille ilman turhien verojen maksamista!</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Toimiiko Veikkauksen nettikasino ilman lisenssi??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Periaatteessa kyll??. Veikkauksen monopoliaseman vuoksi Suomessa ei ole k??yt??ss?? niin sanottua lisenssij??rjestelm????, jolloin my??s Veikkauksen oma nettikasino toimii ilman lisenssi??. Mik??li valiomme vaihtaisi lisenssij??rjestelm????n, tulisi kaikilla suomalaispelureille suunnatuilla pelipaikoilla t??llainen lisenssi tietty hallussa olla.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? tied??n toimiiko jokin kasino ilman lisenssi??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaikki luotettavat pelipaikat ilmoittavat hallussa pit??m??ns?? lisenssit joko verkkosivustonsa footer-alapalkissa tai esimerkiksi omaa toimintaansa esittelev??ss?? tietoa meist?? -kuvauksessaan. Mik??li casinon sivustolla ei ole mink????nlaista mainintaa lisenssiasioista, voi kyseess?? olla kasino ilman lisenssi?? - joskin ne ovat markkinoilla hyvin harvinainen n??ky</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko ilman lisenssi?? toimivilla nettikasinoilla laitonta pelata Suomesta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ei ole, sill?? suomalaispelurit ovat t??ysin vapaita toimimaan netiss?? vapaina kuluttajina aivan niinkuin he vain parhaaksi n??kev??t. Voit siis pelata vapaasti my??s kasinolla ilman lisenssi??, mutta kovin kannattavaa ei t??llainen toiminta ole oman kuluttajaturvasi kannalta.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><h5>{page.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>Viimeksi p??ivitetty: {page.modifyDate}</p>
                  </div>
                  </div>
              </div>
            </div>
            </div>
      </Layout>
    )
  }
}

export default KasinotIlmanLisenssia

export const pageQuery = graphql`
  query KasinotIlmanLisenssiaQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePeruspohja(title: {eq: "Kasinot ilman lisenssi??"}) {
      title
      seoBrowserTitle
      seoMetaDescription
      publishDate(formatString:"DD.MM.YYYY")
      modifyDate(formatString:"DD.MM.YYYY")
      kuva {
        file {url}
        title
      }
      topLista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        snntJaEhdot
        ilmaiskierrokset
        poistaLinkkiArvosteluun
        listatekstit {
          kasinotIlmanLisenssiSivuTopLista {
            kasinotIlmanLisenssiSivuTopLista
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
        slug
        kirjoittajanKuva {
          file {
            url
          }
          title
        }
      }
      ylaosanTeksti1 {
        json
      }
      alaosanTeksti{
        json
      }
    }
  }
`
