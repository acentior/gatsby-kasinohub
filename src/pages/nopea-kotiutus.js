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
              { question: 'Miten saan tehtyä kotiutukset mahdollisimman nopeasti?', answer: 'Mikäli haluat saada aina, poikkeuksetta, kotiutettua voittosi mahdollisimman nopeasti, suosittelemme sinulle tilivapaita, verkkopankkitunnistautumisen kautta toimivia casinoita. Tällaiset pelipaikat tarjoavat aina nopeat kotiutukset pelaajilleen, kun nostoihin ei liity mitään erinäisiä henkilöllisyyden vahvistukseen liittyviä toimia tai muitakaan turhia kommervenkkejä.' },
              { question: 'Kuinka nopea on kaikista pikaisin kotiutus casinoilla?', answer: 'Monet tilivapaat pelipaikat kertovat, että he tarjoavat nopeita kotiutuksia suoraan pelaajien pankkitileille noin 15 minuutissa, mutta osa casinoista kertoo vieläkin pikaisemmista nosto-ajoista. Mainospuheiden mukaan casino-maailman nopein kotiutus on odotusajaltaan tällä hetkellä vain 7 sekuntia.' },
              { question: 'Tarjoaako jokainen casino nopeita kotiutuksia?', answer: 'Kotiutusten nopeus vaihtelee aina hyvin pitkälti eri casinoiden ja etenkin eri rahansiirtotapojen välillä, ja esimerkiksi nettilompakoihin saa nostot läpi lähes pelipaikalla kuin pelipaikalla saman päivän aikana. Verkkopankkitunnistautumisella toimivat, tilivapaat casinot kuitenkin tarjoavat ne nopeimmat kotiutukset näillä markkinoilla, kun kotiutettavat rahat liikkuvat suoraan pelaajan pankkitilille vain minuuteissa.' },
              { question: 'Mistä löydän ne casinot, jotka tarjoavat nopeita kotiutuksia?', answer: 'Tähän kysymykseen löytyy erittäin helppo ja yksinkertainen vastaus: tältä sivultamme! Olemme keränneet nimittäin tälle sivullemme listaukseen kaikki ne pelipaikat, joiden kautta nopea kotiutus on vain mahdollista, ja päivitämme tätä listaustamme vieläpä tasaiseen tahtiin!' },
              { question: 'Onko nopea kotiutus aina turvallinen?', answer: 'Kyllä on. Modernit pelipaikat käyttävät nykyisin luotettavien maksunvälittäjien lisäksi aina myös muun muassa SSL-salausta sivustoillaan, joiden myötä sekä pelaajien omat henkilötiedot että kaikki nopeat kotiutukset ja muut maksut casinoilla ovat aina sataprosenttisesti turvattuja.' },
              { question: 'Tarvitseeko nopeista kotiutuksista maksaa veroja Suomessa?', answer: 'Nostojen verotus riippuu aina siitä lisenssistä, joka kotiutuksia koskevalla casinolla on käytössään. Mikäli pelipaikka toimii ETA-alueen sisältä tarjotulla pelilisenssillä, ovat nopeat kotiutukset aina verottomia nostoja!' },
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
              <h3 className="listHead">Nopea kotiutus onnistuu näiltä casinoilta!</h3>
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <a className="listBtn" href="/pikakasinot/">Selaa lisää pikakasinoita tästä!</a>
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        : <div className="contentButton nolink">
                            <div className="contentBtn">
                              <a className="btn scd" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        }
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>  
              <a className="listBtn" href="/verottomat-voitot/">Lisää verovapaita nettikasinoita...</a>
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
              <h3 className="listHead">Nopeasti kotiutus-pyynnöt käsittelevät casinot</h3>
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        : <div className="contentButton nolink">
                            <div className="contentBtn">
                              <a className="btn scd" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        }
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>  
              <a className="listBtn" href="/nettikasinot/">Lisää laadukkaita nettikasinoita...</a>
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
                <h2>Usein kysyttyjä kysymyksiä nopeista kotiutuksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten saan tehtyä kotiutukset mahdollisimman nopeasti? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mikäli haluat saada aina, poikkeuksetta, kotiutettua voittosi mahdollisimman nopeasti, suosittelemme sinulle tilivapaita, verkkopankkitunnistautumisen kautta toimivia casinoita. Tällaiset pelipaikat tarjoavat aina nopeat kotiutukset pelaajilleen, kun nostoihin ei liity mitään erinäisiä henkilöllisyyden vahvistukseen liittyviä toimia tai muitakaan turhia kommervenkkejä.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka nopea on kaikista pikaisin kotiutus casinoilla? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Monet tilivapaat pelipaikat kertovat, että he tarjoavat nopeita kotiutuksia suoraan pelaajien pankkitileille noin 15 minuutissa, mutta osa casinoista kertoo vieläkin pikaisemmista nosto-ajoista. Mainospuheiden mukaan casino-maailman nopein kotiutus on odotusajaltaan tällä hetkellä vain 7 sekuntia.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarjoaako jokainen casino nopeita kotiutuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kotiutusten nopeus vaihtelee aina hyvin pitkälti eri casinoiden ja etenkin eri rahansiirtotapojen välillä, ja esimerkiksi nettilompakoihin saa nostot läpi lähes pelipaikalla kuin pelipaikalla saman päivän aikana. Verkkopankkitunnistautumisella toimivat, tilivapaat casinot kuitenkin tarjoavat ne nopeimmat kotiutukset näillä markkinoilla, kun kotiutettavat rahat liikkuvat suoraan pelaajan pankkitilille vain minuuteissa.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä löydän ne casinot, jotka tarjoavat nopeita kotiutuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tähän kysymykseen löytyy erittäin helppo ja yksinkertainen vastaus: tältä sivultamme! Olemme keränneet nimittäin tälle sivullemme listaukseen kaikki ne pelipaikat, joiden kautta nopea kotiutus on vain mahdollista, ja päivitämme tätä listaustamme vieläpä tasaiseen tahtiin!</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko nopea kotiutus aina turvallinen? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä on. Modernit pelipaikat käyttävät nykyisin luotettavien maksunvälittäjien lisäksi aina myös muun muassa SSL-salausta sivustoillaan, joiden myötä sekä pelaajien omat henkilötiedot että kaikki nopeat kotiutukset ja muut maksut casinoilla ovat aina sataprosenttisesti turvattuja.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarvitseeko nopeista kotiutuksista maksaa veroja Suomessa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Nostojen verotus riippuu aina siitä lisenssistä, joka kotiutuksia koskevalla casinolla on käytössään. Mikäli pelipaikka toimii ETA-alueen sisältä tarjotulla pelilisenssillä, ovat nopeat kotiutukset aina verottomia nostoja!</p>
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
