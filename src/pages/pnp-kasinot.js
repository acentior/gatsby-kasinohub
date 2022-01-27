// Pay N Play - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class PayNPlay extends React.Component {
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
    var elem = document.getElementById("pnp");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPagePayNPlaySivu')
    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/pnp-kasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/pnp-kasinot/',
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
            url='https://kasinohub.com/pnp-kasinot/'
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
              { question: 'Mistä tunnistan PnP-kasinon?', answer: 'Niin sanotusti tilivapaaseen tyyliin toimivat PnP kasinot on mahdollista tunnistaa helposti casinon omien verkkosivujen kautta. Kukin Pay N Play Casino tarjoaakin aina sivustollaan mahdollisuuden pikaiseen talletukseen pelkän verkkopankkitunnistautumisen avulla turvallisen Trustly-maksupalvelun välityksellä, ja tästä ominaisuudesta on useimmiten maininta heti casinon etusivulla.' },
              { question: 'Kuinka voin aloittaa pelaamisen PnP kasinolla?', answer: 'Tilivapaita casinoita sanotaan usein helpommiksi ja nopeammiksi pelipaikoiksi, ja tämä sanonta pitääkin hyvin paikkaansa. Voit aloittaa PnP kasinon parissa viihtymisen vain tunnistautumalla casinolle verkkopankkitunnustesi avulla, jolloin voit samalla myös tehdä ensitalletuksesi ja lunastaa samalla mahdolliset uusien asiakkaiden tervetuliaislahjat. Tämän tunnistautumisen jälkeen voitkin aloittaa pelaamisen aina välittömästi.' },
              { question: 'Mistä Pay N Play -trendi oikein alkoi?', answer: 'Tämä casino-trendi starttasi jo vuonna 2017, jolloin Ninja Casino -niminen PnP kasino hyökkäsi ensimmäisenä alan toimijana markkinoille voittaen samalla kyseisen vuoden parhaan casino-alan innovaation palkinnon. Tuosta hetkestä meni kuitenkin vielä lähes kaksi vuotta ennen kuin Pay n Play pelaaminen alkoi yleistyä ihan toden teolla.' },
              { question: 'Voinko siirtää rahaa PnP-kasinoille myös muilla maksutavoilla?', answer: 'Normaalisti nämä PnP kasinot tarjoavat vain verkkopankkisiirrot ainoana maksuvaihtoehtona. Joskus markkinoilta voi kuitenkin löytää niin kutsuttuja hybridi-casinoita, jotka tarjoavat mahdollisuuden sekä Pay N Play pelaamiseen että muidenkin maksutapojen käyttöön. Tällaisia pelipaikkoja ovat esimerkiksi sellaiset suuret ja tunnetut casinot, jotka ovat ottaneet PnP-ominaisuudet käyttöön vasta jälkijunassa.' },
              { question: 'Ovatko kaikki Pay N Play kasinot turvallisia?', answer: 'Turvallisuudessa mitattuna netin PnP kasinot ovat ehdottomasti ensiluokkaista priimaa, sillä ne toimivat vain ja ainoastaan pelaajan henkilökohtaisten verkkopankkitunnusten kautta. Salasanasi ei esimerkiksi voi päätyä Pay N Play sivuille vieraisiin käsiin, koska sellaista käyttäjätililläsi ei yksinkertaisesti edes ole. Rahat liikkuvat PnP kasinoilla myös turvallisesti luotettavalla maksupalvelulla joka ikinen kerta.' },
              { question: 'Miten voin nostaa rahaa PnP kasinolta?', answer: 'Jos pelaamisen aloittaminen on Pay N Play kasinoilla helppoa ja nopsaa, on nostojen tekeminen ehkäpä vieläkin helpompaa. Sinun täytyykin vain klikata nosto-painiketta casinolla ja määrittää nostosumma, jonka myötä rahat liikkuvat suoraan pankkitilillesi välittömästi ilman turhaa odottelua. Mitään henkilöllisyyden varmentamiseen liittyviä toimia ei siis PnP kasinoilla tarvitse nostoissa suorittaa!' },
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
              <h3 className="listHead">Parhaat PNP-kasinot juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.payNPlaySivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                              <div>{listatekstit.payNPlaySivuTopLista.payNPlaySivuTopLista}</div>
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
              <a className="listBtn" href="/pikakasinot/">Lisää tilivapaita pikakasinoita...</a>
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
              <h3 className="listHead">Uusimmat Pay N Play kasinot</h3>
              <table className="casinoTable">
                <tbody>
                {page.payNPlaySivuUudetLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                              <div>{listatekstit.payNPlaySivuUudetLista.payNPlaySivuUudetLista}</div>
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
              <a className="listBtn" href="/uudet-nettikasinot/">Lisää uusia kasinoita...</a>
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
                <h2>PnP-kasinot - Usein kysyttyjä kysymyksiä</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä tunnistan PnP-kasinon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Niin sanotusti tilivapaaseen tyyliin toimivat PnP kasinot on mahdollista tunnistaa helposti casinon omien verkkosivujen kautta. Kukin Pay N Play Casino tarjoaakin aina sivustollaan mahdollisuuden pikaiseen talletukseen pelkän verkkopankkitunnistautumisen avulla turvallisen Trustly-maksupalvelun välityksellä, ja tästä ominaisuudesta on useimmiten maininta heti casinon etusivulla.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka voin aloittaa pelaamisen PnP kasinolla? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tilivapaita casinoita sanotaan usein helpommiksi ja nopeammiksi pelipaikoiksi, ja tämä sanonta pitääkin hyvin paikkaansa. Voit aloittaa PnP kasinon parissa viihtymisen vain tunnistautumalla casinolle verkkopankkitunnustesi avulla, jolloin voit samalla myös tehdä ensitalletuksesi ja lunastaa samalla mahdolliset uusien asiakkaiden tervetuliaislahjat. Tämän tunnistautumisen jälkeen voitkin aloittaa pelaamisen aina välittömästi.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä Pay N Play -trendi oikein alkoi? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tämä casino-trendi starttasi jo vuonna 2017, jolloin Ninja Casino -niminen PnP kasino hyökkäsi ensimmäisenä alan toimijana markkinoille voittaen samalla kyseisen vuoden parhaan casino-alan innovaation palkinnon. Tuosta hetkestä meni kuitenkin vielä lähes kaksi vuotta ennen kuin Pay n Play pelaaminen alkoi yleistyä ihan toden teolla.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Voinko siirtää rahaa PnP-kasinoille myös muilla maksutavoilla? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Normaalisti nämä PnP kasinot tarjoavat vain verkkopankkisiirrot ainoana maksuvaihtoehtona. Joskus markkinoilta voi kuitenkin löytää niin kutsuttuja hybridi-casinoita, jotka tarjoavat mahdollisuuden sekä Pay N Play pelaamiseen että muidenkin maksutapojen käyttöön. Tällaisia pelipaikkoja ovat esimerkiksi sellaiset suuret ja tunnetut casinot, jotka ovat ottaneet PnP-ominaisuudet käyttöön vasta jälkijunassa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko kaikki Pay N Play kasinot turvallisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Turvallisuudessa mitattuna netin PnP kasinot ovat ehdottomasti ensiluokkaista priimaa, sillä ne toimivat vain ja ainoastaan pelaajan henkilökohtaisten verkkopankkitunnusten kautta. Salasanasi ei esimerkiksi voi päätyä Pay N Play sivuille vieraisiin käsiin, koska sellaista käyttäjätililläsi ei yksinkertaisesti edes ole. Rahat liikkuvat PnP kasinoilla myös turvallisesti luotettavalla maksupalvelulla joka ikinen kerta.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten voin nostaa rahaa PnP kasinolta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos pelaamisen aloittaminen on Pay N Play kasinoilla helppoa ja nopsaa, on nostojen tekeminen ehkäpä vieläkin helpompaa. Sinun täytyykin vain klikata nosto-painiketta casinolla ja määrittää nostosumma, jonka myötä rahat liikkuvat suoraan pankkitilillesi välittömästi ilman turhaa odottelua. Mitään henkilöllisyyden varmentamiseen liittyviä toimia ei siis PnP kasinoilla tarvitse nostoissa suorittaa!</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><h5>{page.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>Viimeksi päivitetty: {page.modify}</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default PayNPlay

export const pageQuery = graphql`
  query PayNPlayQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePayNPlaySivu {
        title
        seoBrowserTitle
        seoMetaDescription
        payNPlaySivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            payNPlaySivuTopLista {
              payNPlaySivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
                url
            }
            title
          }
        }
        payNPlaySivuUudetLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          lyhytBonuskuvaus
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            payNPlaySivuUudetLista {
              payNPlaySivuUudetLista
            }
          }
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
