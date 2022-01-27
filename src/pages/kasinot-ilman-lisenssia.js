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
              { question: 'Voivatko kasinot toimia ilman lisenssiä?', answer: 'Kyllä voivat, vaikkakin tällainen toiminta on markkinoilla hyvin harvinaista. Kasinot ilman lisenssiä ovatkin siis erittäin harvinainen näky, ja niihin voikin törmätä käytännössä vain silloin, mikäli yksittäinen pelipaikka on menettänyt toimintalisenssinsä joidenkin laittomuuksien tai muiden rikkeiden myötä.' },
              { question: 'Kannattaako ilman lisenssiä olevalla nettikasinolla pelata?', answer: 'Ei mielestämme kannata. Kasinot ilman lisenssiä ovatkin tällä hetkellä maailmanlaajuisesti siinä määrin harmaalla listalla, ettei yhdenkään maan viranomaistahot valvo niiden toimintaa. Tämä tarkoittaakin sitä, ettei pelaajille ole näillä pelipaikoilla täydellistä turvaa mahdollisten väärinkäytösten suhteen.' },
              { question: 'Mitkä lisenssit ovat suomalaisten pelaajien kannalta parhaita?', answer: 'Sen sijaan, että pelaisit kasinolla ilman lisenssiä, suosittelemme sinulle ehdottomasti suurimmin Euroopan talousalueen sisältä toimivia pelipaikkoja. Näillä nettipelaamoilla onkin hallussaan aina luotettava ja laadukas lisenssi, joka takaa myös kotiutettavat voitot kaikille suomalaispelureille ilman turhien verojen maksamista!' },
              { question: 'Toimiiko Veikkauksen nettikasino ilman lisenssiä?', answer: 'Periaatteessa kyllä. Veikkauksen monopoliaseman vuoksi Suomessa ei ole käytössä niin sanottua lisenssijärjestelmää, jolloin myös Veikkauksen oma nettikasino toimii ilman lisenssiä. Mikäli valiomme vaihtaisi lisenssijärjestelmään, tulisi kaikilla suomalaispelureille suunnatuilla pelipaikoilla tällainen lisenssi tietty hallussa olla.' },
              { question: 'Mistä tiedän toimiiko jokin kasino ilman lisenssiä?', answer: 'Kaikki luotettavat pelipaikat ilmoittavat hallussa pitämänsä lisenssit joko verkkosivustonsa footer-alapalkissa tai esimerkiksi omaa toimintaansa esittelevässä tietoa meistä -kuvauksessaan. Mikäli casinon sivustolla ei ole minkäänlaista mainintaa lisenssiasioista, voi kyseessä olla kasino ilman lisenssiä - joskin ne ovat markkinoilla hyvin harvinainen näky' },
              { question: 'Onko ilman lisenssiä toimivilla nettikasinoilla laitonta pelata Suomesta?', answer: 'Ei ole, sillä suomalaispelurit ovat täysin vapaita toimimaan netissä vapaina kuluttajina aivan niinkuin he vain parhaaksi näkevät. Voit siis pelata vapaasti myös kasinolla ilman lisenssiä, mutta kovin kannattavaa ei tällainen toiminta ole oman kuluttajaturvasi kannalta.' },
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
              <h3 className="listHead">Vältä lisenssittömän kasinot - valitse joku näistä pelipaikoista</h3> 
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
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
                <h2>Kasinot ilman lisenssiä - UKK</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voivatko kasinot toimia ilman lisenssiä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä voivat, vaikkakin tällainen toiminta on markkinoilla hyvin harvinaista. Kasinot ilman lisenssiä ovatkin siis erittäin harvinainen näky, ja niihin voikin törmätä käytännössä vain silloin, mikäli yksittäinen pelipaikka on menettänyt toimintalisenssinsä joidenkin laittomuuksien tai muiden rikkeiden myötä.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kannattaako ilman lisenssiä olevalla nettikasinolla pelata? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ei mielestämme kannata. Kasinot ilman lisenssiä ovatkin tällä hetkellä maailmanlaajuisesti siinä määrin harmaalla listalla, ettei yhdenkään maan viranomaistahot valvo niiden toimintaa. Tämä tarkoittaakin sitä, ettei pelaajille ole näillä pelipaikoilla täydellistä turvaa mahdollisten väärinkäytösten suhteen.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä lisenssit ovat suomalaisten pelaajien kannalta parhaita? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Sen sijaan, että pelaisit kasinolla ilman lisenssiä, suosittelemme sinulle ehdottomasti suurimmin Euroopan talousalueen sisältä toimivia pelipaikkoja. Näillä nettipelaamoilla onkin hallussaan aina luotettava ja laadukas lisenssi, joka takaa myös kotiutettavat voitot kaikille suomalaispelureille ilman turhien verojen maksamista!</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Toimiiko Veikkauksen nettikasino ilman lisenssiä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Periaatteessa kyllä. Veikkauksen monopoliaseman vuoksi Suomessa ei ole käytössä niin sanottua lisenssijärjestelmää, jolloin myös Veikkauksen oma nettikasino toimii ilman lisenssiä. Mikäli valiomme vaihtaisi lisenssijärjestelmään, tulisi kaikilla suomalaispelureille suunnatuilla pelipaikoilla tällainen lisenssi tietty hallussa olla.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä tiedän toimiiko jokin kasino ilman lisenssiä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaikki luotettavat pelipaikat ilmoittavat hallussa pitämänsä lisenssit joko verkkosivustonsa footer-alapalkissa tai esimerkiksi omaa toimintaansa esittelevässä tietoa meistä -kuvauksessaan. Mikäli casinon sivustolla ei ole minkäänlaista mainintaa lisenssiasioista, voi kyseessä olla kasino ilman lisenssiä - joskin ne ovat markkinoilla hyvin harvinainen näky</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko ilman lisenssiä toimivilla nettikasinoilla laitonta pelata Suomesta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ei ole, sillä suomalaispelurit ovat täysin vapaita toimimaan netissä vapaina kuluttajina aivan niinkuin he vain parhaaksi näkevät. Voit siis pelata vapaasti myös kasinolla ilman lisenssiä, mutta kovin kannattavaa ei tällainen toiminta ole oman kuluttajaturvasi kannalta.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><h5>{page.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>Viimeksi päivitetty: {page.modifyDate}</p>
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
    contentfulPagePeruspohja(title: {eq: "Kasinot ilman lisenssiä"}) {
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
