// NopeatKotiutukset - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class NopeatKotiutukset extends React.Component {
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
    var elem = document.getElementById("nok");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageNopeatKotiutukset')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/nopea-kotiutus/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/nopea-kotiutus/',
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
            url='https://kasinohub.com/nopea-kotiutus/'
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
              { question: 'Miten saan tehty?? kotiutukset mahdollisimman nopeasti?', answer: 'Mik??li haluat saada aina, poikkeuksetta, kotiutettua voittosi mahdollisimman nopeasti, suosittelemme sinulle tilivapaita, verkkopankkitunnistautumisen kautta toimivia casinoita. T??llaiset pelipaikat tarjoavat aina nopeat kotiutukset pelaajilleen, kun nostoihin ei liity mit????n erin??isi?? henkil??llisyyden vahvistukseen liittyvi?? toimia tai muitakaan turhia kommervenkkej??.' },
              { question: 'Kuinka nopea on kaikista pikaisin kotiutus casinoilla?', answer: 'Monet tilivapaat pelipaikat kertovat, ett?? he tarjoavat nopeita kotiutuksia suoraan pelaajien pankkitileille noin 15 minuutissa, mutta osa casinoista kertoo viel??kin pikaisemmista nosto-ajoista. Mainospuheiden mukaan casino-maailman nopein kotiutus on odotusajaltaan t??ll?? hetkell?? vain 7 sekuntia.' },
              { question: 'Tarjoaako jokainen casino nopeita kotiutuksia?', answer: 'Kotiutusten nopeus vaihtelee aina hyvin pitk??lti eri casinoiden ja etenkin eri rahansiirtotapojen v??lill??, ja esimerkiksi nettilompakoihin saa nostot l??pi l??hes pelipaikalla kuin pelipaikalla saman p??iv??n aikana. Verkkopankkitunnistautumisella toimivat, tilivapaat casinot kuitenkin tarjoavat ne nopeimmat kotiutukset n??ill?? markkinoilla, kun kotiutettavat rahat liikkuvat suoraan pelaajan pankkitilille vain minuuteissa.' },
              { question: 'Mist?? l??yd??n ne casinot, jotka tarjoavat nopeita kotiutuksia?', answer: 'T??h??n kysymykseen l??ytyy eritt??in helppo ja yksinkertainen vastaus: t??lt?? sivultamme! Olemme ker??nneet nimitt??in t??lle sivullemme listaukseen kaikki ne pelipaikat, joiden kautta nopea kotiutus on vain mahdollista, ja p??ivit??mme t??t?? listaustamme viel??p?? tasaiseen tahtiin!' },
              { question: 'Onko nopea kotiutus aina turvallinen?', answer: 'Kyll?? on. Modernit pelipaikat k??ytt??v??t nykyisin luotettavien maksunv??litt??jien lis??ksi aina my??s muun muassa SSL-salausta sivustoillaan, joiden my??t?? sek?? pelaajien omat henkil??tiedot ett?? kaikki nopeat kotiutukset ja muut maksut casinoilla ovat aina sataprosenttisesti turvattuja.' },
              { question: 'Tarvitseeko nopeista kotiutuksista maksaa veroja Suomessa?', answer: 'Nostojen verotus riippuu aina siit?? lisenssist??, joka kotiutuksia koskevalla casinolla on k??yt??ss????n. Mik??li pelipaikka toimii ETA-alueen sis??lt?? tarjotulla pelilisenssill??, ovat nopeat kotiutukset aina verottomia nostoja!' },
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
              <h3 className="listHead">Nopea kotiutus onnistuu n??ilt?? casinoilta!</h3>
              <table className="casinoTable">
                <tbody>
                {page.nopeatkotiutuksetTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.nopeatKotiutuksetSivuTopLista.nopeatKotiutuksetSivuTopLista}</div>
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
              <a className="listBtn" href="/pikakasinot/">Selaa lis???? pikakasinoita t??st??!</a>
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
               <h3 className="listHead">Nopeat kotiutukset verovapaasti</h3>
              <table className="casinoTable">
                <tbody>
                  {page.nopeatVerovapaatKotiutuksetLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/verottomat-voitot/">Lis???? verovapaita nettikasinoita...</a>
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
              <h3 className="listHead">Nopeasti kotiutus-pyynn??t k??sittelev??t casinot</h3>
              <table className="casinoTable">
                <tbody>
                  {page.nopeatKotiutustenKasittelytLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/nettikasinot/">Lis???? laadukkaita nettikasinoita...</a>
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
                <h2>Usein kysyttyj?? kysymyksi?? nopeista kotiutuksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten saan tehty?? kotiutukset mahdollisimman nopeasti? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mik??li haluat saada aina, poikkeuksetta, kotiutettua voittosi mahdollisimman nopeasti, suosittelemme sinulle tilivapaita, verkkopankkitunnistautumisen kautta toimivia casinoita. T??llaiset pelipaikat tarjoavat aina nopeat kotiutukset pelaajilleen, kun nostoihin ei liity mit????n erin??isi?? henkil??llisyyden vahvistukseen liittyvi?? toimia tai muitakaan turhia kommervenkkej??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka nopea on kaikista pikaisin kotiutus casinoilla? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Monet tilivapaat pelipaikat kertovat, ett?? he tarjoavat nopeita kotiutuksia suoraan pelaajien pankkitileille noin 15 minuutissa, mutta osa casinoista kertoo viel??kin pikaisemmista nosto-ajoista. Mainospuheiden mukaan casino-maailman nopein kotiutus on odotusajaltaan t??ll?? hetkell?? vain 7 sekuntia.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarjoaako jokainen casino nopeita kotiutuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kotiutusten nopeus vaihtelee aina hyvin pitk??lti eri casinoiden ja etenkin eri rahansiirtotapojen v??lill??, ja esimerkiksi nettilompakoihin saa nostot l??pi l??hes pelipaikalla kuin pelipaikalla saman p??iv??n aikana. Verkkopankkitunnistautumisella toimivat, tilivapaat casinot kuitenkin tarjoavat ne nopeimmat kotiutukset n??ill?? markkinoilla, kun kotiutettavat rahat liikkuvat suoraan pelaajan pankkitilille vain minuuteissa.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? l??yd??n ne casinot, jotka tarjoavat nopeita kotiutuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??h??n kysymykseen l??ytyy eritt??in helppo ja yksinkertainen vastaus: t??lt?? sivultamme! Olemme ker??nneet nimitt??in t??lle sivullemme listaukseen kaikki ne pelipaikat, joiden kautta nopea kotiutus on vain mahdollista, ja p??ivit??mme t??t?? listaustamme viel??p?? tasaiseen tahtiin!</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko nopea kotiutus aina turvallinen? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? on. Modernit pelipaikat k??ytt??v??t nykyisin luotettavien maksunv??litt??jien lis??ksi aina my??s muun muassa SSL-salausta sivustoillaan, joiden my??t?? sek?? pelaajien omat henkil??tiedot ett?? kaikki nopeat kotiutukset ja muut maksut casinoilla ovat aina sataprosenttisesti turvattuja.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarvitseeko nopeista kotiutuksista maksaa veroja Suomessa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Nostojen verotus riippuu aina siit?? lisenssist??, joka kotiutuksia koskevalla casinolla on k??yt??ss????n. Mik??li pelipaikka toimii ETA-alueen sis??lt?? tarjotulla pelilisenssill??, ovat nopeat kotiutukset aina verottomia nostoja!</p>
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

export default NopeatKotiutukset

export const pageQuery = graphql`
  query NopeatKotiutuksetQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageNopeatKotiutukset {
        title
        seoBrowserTitle
        seoMetaDescription
        kuva {
          file {
            url
          }
          title
        }
        nopeatkotiutuksetTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            nopeatKotiutuksetSivuTopLista {
              nopeatKotiutuksetSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        nopeatVerovapaatKotiutuksetLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        nopeatKotiutustenKasittelytLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file {url}
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
        modify: modifyDate(formatString:"DD.MM.YYYY")
        publish: publishDate(formatString:"DD.MM.YYYY")
        modifyDate
        publishDate
      }
  }
`
