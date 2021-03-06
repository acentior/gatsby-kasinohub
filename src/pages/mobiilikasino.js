// Mobiilikasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Mobiilikasinot extends React.Component {
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
    var elem = document.getElementById("mk");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageMobiilikasinotSivu')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/mobiilikasino/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/mobiilikasino/',
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
            url='https://kasinohub.com/mobiilikasino/'
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
              { question: 'Miten mobiilikasino ja desktop-casino eroavat toisistaan?', answer: 'Ennen eroja n??iden kahden eri casino-tyypin v??lille saattoi l??yt???? enemm??nkin, mutta mobiilipelaamisen suuri kehitys on johtanut siihen, ett?? nykyisin sek?? mobiilikasinot ett?? desktop-casinot ovat hyvin pitk??lti samanlaisia. Nyky????n siis voit tehd?? mobiililaitteilla pelatessa casinoilla aivan kaikkea samaa kuin tietokoneitakin k??ytt??ess??.' },
              { question: 'Millaisia parhaat mobiilikasinot ovat t??ll?? hetkell???', answer: 'Ennen parhaan mobiilikasinon titteliin riitti k??yt??nn??ss?? se perusasia, ett?? kaikki casinon pelit toimivat kunnolla my??s n??ill?? taskukokoisilla laitteilla. Nykyisin standardit ovat kuitenkin nousseet t??ss?? skeness?? aivan uudelle tasolle, ja parhaat mobiilikasinot ovat nykyisin kauttaaltaan yht?? laadukkaita, kattavia ja palvelu-anniltaan yht?? moniulotteisia kokonaisuuksia kuin desktop-casinotkin.' },
              { question: 'Mihin mobiilikasinon valinnassa kannattaa kiinnitt???? huomiota?', answer: 'Vaikka k??yt??nn??ss?? ihan jokainen pelipaikka tarjoaa ??lylaitteita k??ytt??ville pelureille jonkinlaisen mobiilikasinon, on n??iden pelipaikkojen laadussa edelleen suuriakin eroja. Suosittelemmekin lukijoillemme eritoten sellaisia mobiilikasinoita, jotka toimivat sulavasti selaimesta tai applikaatiosta k??sin, tarjoavat yht?? kattavat pelivalikoimat sek?? mahdollistavat vaivattomat rahansiirrot molempiin suuntiin.' },
              { question: 'Miten talletukset ja nostot toimivat mobiilikasinoilla?', answer: 'Monet netin mobiilikasinot tarjoavat pelaajilleen lukuisia erilaisia tapoja rahansiirtojen tekoon, ja perusperiaattein talletukset ja nostot voi hoitaa mobiilissa samalla tapaa kuin tietokoneillakin. Toisinaan mobiilikasinoilla on tarjolla my??s my??s vartavasten mobiilipelaajille suunnattuja maksutapoja, joiden avulla ??lylaitteilla tallettaminen on viel??p?? huomattavasti helpompaa.' },
              { question: 'Onko olemassa mobiilikasino-sovelluksia Android tai iPhone -puhelimille?', answer: 'Jos haluat pelata mobiilikasinoilla varta vasten ladattavien applikaatioiden eli sovellusten avulla, on Android ja iPhone -luureille n??it?? kasinosovelluksia tarjolla varsin mukavasti. Eetenkin suurimmat ja tunnetuimmat pelipaikat ovat kehitt??neet app-markkinoille omat sovellukset mobiilikasinolla pelaamiseen, joita laatamalla mobiilissa pelailu on satavarmasti viel??kin sulavampaa.' },
              { question: 'Voiko mobiilikasinoilla pelata my??s selaimessa?', answer: 'Kyll?? voi, sill?? k??yt??nn??ss?? 99,9% netin eri pelipaikoista toimii mobiililaitteilla suoraan selaimen kautta. N??iss?? tapauksissa pelipaikka on siis suunnitellut mobiilikasinonsa siten, ett?? se n??kyy automaattisesti tiiviimm??ss?? tai karsitussa muodossa, mik??li pelaaja vain k??ytt???? casinon verkkosivuston selaamiseen jonkinlaista mobiili-aparaattia.' },
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
              <h3 className="listHead">Parhaat mobiilikasinot juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.mobiilikasinotSivunTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.mobiilikasinotSivuTopLista.mobiilikasinotSivuTopLista}</div>
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
              <a className="listBtn" href="/pikakasinot/">Parhaat pikakasinot 2022...</a>
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
              <h3 className="listHead">Toimitustiimin mobiilikasino-t??rpit l??hivuosilta</h3>
              <table className="casinoTable">
                <tbody>
                  {page.mobiilikasinoTarpitLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/uudet-nettikasinot/">Lis???? uusia nettikasinoita 2022...</a>
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
                <h2>Usein kysyttyj?? kysymyksi?? mobiilikasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten mobiilikasino ja desktop-casino eroavat toisistaan? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ennen eroja n??iden kahden eri casino-tyypin v??lille saattoi l??yt???? enemm??nkin, mutta mobiilipelaamisen suuri kehitys on johtanut siihen, ett?? nykyisin sek?? mobiilikasinot ett?? desktop-casinot ovat hyvin pitk??lti samanlaisia. Nyky????n siis voit tehd?? mobiililaitteilla pelatessa casinoilla aivan kaikkea samaa kuin tietokoneitakin k??ytt??ess??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia parhaat mobiilikasinot ovat t??ll?? hetkell??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Ennen parhaan mobiilikasinon titteliin riitti k??yt??nn??ss?? se perusasia, ett?? kaikki casinon pelit toimivat kunnolla my??s n??ill?? taskukokoisilla laitteilla. Nykyisin standardit ovat kuitenkin nousseet t??ss?? skeness?? aivan uudelle tasolle, ja parhaat mobiilikasinot ovat nykyisin kauttaaltaan yht?? laadukkaita, kattavia ja palvelu-anniltaan yht?? moniulotteisia kokonaisuuksia kuin desktop-casinotkin.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mihin mobiilikasinon valinnassa kannattaa kiinnitt???? huomiota? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Vaikka k??yt??nn??ss?? ihan jokainen pelipaikka tarjoaa ??lylaitteita k??ytt??ville pelureille jonkinlaisen mobiilikasinon, on n??iden pelipaikkojen laadussa edelleen suuriakin eroja. Suosittelemmekin lukijoillemme eritoten sellaisia mobiilikasinoita, jotka toimivat sulavasti selaimesta tai applikaatiosta k??sin, tarjoavat yht?? kattavat pelivalikoimat sek?? mahdollistavat vaivattomat rahansiirrot molempiin suuntiin.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten talletukset ja nostot toimivat mobiilikasinoilla? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Monet netin mobiilikasinot tarjoavat pelaajilleen lukuisia erilaisia tapoja rahansiirtojen tekoon, ja perusperiaattein talletukset ja nostot voi hoitaa mobiilissa samalla tapaa kuin tietokoneillakin. Toisinaan mobiilikasinoilla on tarjolla my??s my??s vartavasten mobiilipelaajille suunnattuja maksutapoja, joiden avulla ??lylaitteilla tallettaminen on viel??p?? huomattavasti helpompaa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa mobiilikasino-sovelluksia Android tai iPhone -puhelimille? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos haluat pelata mobiilikasinoilla varta vasten ladattavien applikaatioiden eli sovellusten avulla, on Android ja iPhone -luureille n??it?? kasinosovelluksia tarjolla varsin mukavasti. Eetenkin suurimmat ja tunnetuimmat pelipaikat ovat kehitt??neet app-markkinoille omat sovellukset mobiilikasinolla pelaamiseen, joita laatamalla mobiilissa pelailu on satavarmasti viel??kin sulavampaa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko mobiilikasinoilla pelata my??s selaimessa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? voi, sill?? k??yt??nn??ss?? 99,9% netin eri pelipaikoista toimii mobiililaitteilla suoraan selaimen kautta. N??iss?? tapauksissa pelipaikka on siis suunnitellut mobiilikasinonsa siten, ett?? se n??kyy automaattisesti tiiviimm??ss?? tai karsitussa muodossa, mik??li pelaaja vain k??ytt???? casinon verkkosivuston selaamiseen jonkinlaista mobiili-aparaattia.</p>
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

export default Mobiilikasinot

export const pageQuery = graphql`
  query MobiilikasinotQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageMobiilikasinotSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        mobiilikasinotSivunTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            mobiilikasinotSivuTopLista {
              mobiilikasinotSivuTopLista
            }
          }
          kasinonPieniLogo {
              file {
                  url
              }
              title
          }
        }
        mobiilikasinoTarpitLista {
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
