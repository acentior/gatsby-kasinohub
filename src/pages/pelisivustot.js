// Pelisivut - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Pelisivut extends React.Component {
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
    var elem = document.getElementById("ps");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPagePelisivutSivu')

    return (
     <Layout location={this.props.location}>
       <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/pelisivustot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/pelisivustot/',
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
            url='https://kasinohub.com/pelisivustot/'
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
              { question: 'Miten tunnistan ne luotettavat pelisivustot netissä?', answer: 'Kaikki turvalliset pelisivut toimivat aina hyvän lisenssin turvin, ja ne laadukkaimmat lisenssit löytyvätkin aina Euroopan talousalueelta. Näin ollen voimmekin helposti linjata, että nämä luotettavat pelisivustot toimivat siis Euroopan ETA-alueen sisältä käsin, jossa viranomaisten suorittama valvonta on kaikista tarkinta.' },
              { question: 'Miten pelisivut toimivat?', answer: 'Kaikessa yksinkertaisuudessa pelisivustot toimivat yksinkertaisella kaavalla. Pelaajan tulee avata sivustolle oma pelitili, jonka myötä hän voi tehdä talletuksen ja siirtyä pelaamaan pelejä tallettamallaan rahalla. Tilin avaamisen ja talletuksen oheen voi kuitenkin liittyä erinäisiä etuja, joiden avulla pelisivustolle pääsee viihtymään parhaimmillaan jopa täysin ilmaiseksi ennen omien eurojen panostamista!' },
              { question: 'Ovatko kaikki ulkomaiset pelisivustot turvallisia?', answer: 'Turvallisuus on vain korostunut netin aikakaudella, jolloin myös ulkomaalaiset pelisivut ovat joutuneet panostamaan näihin seikkoihin huomattavan paljon. Kaiken kaikkiaan voimmekin sanoa että pelisivustot ovat eittämättä turvallisia pelaajille kuin pelaajille, sillä erinäiset viranomaistahot valvovat niiden toimintaa myönnettyjen lisenssien puitteissa.' },
              { question: 'Millaisia ovat tämän hetken suosituimmat pelisivut?', answer: 'Vielä muutamia vuosia sitten gamification-ominaisuuksilla varustetut pelisivustot olivat se kaikista kovin juttu netissä, mutta viime vuosina tilivapaasti toimivat pelipaikat ovat napanneet tämän suosikin kapulan vahvasti haltuunsa. Rekisteröitymisvapaat pelisivut ovatkin sekä pelaamisen helppoudessa että nostojen vikkelyydessä mitattuna aivan omaa luokkaansa.' },
              { question: 'Onko olemassa suomalaisia pelisivustoja?', answer: 'Veikkaus on monopoliasemansa takia ainoa täysin suomalainen pelisivusto, sillä se saa olla lakien perusteella ainoa uhkapelejä tarjoava sivusto rajojemme sisällä. Ulkomailta käsin netissä toimii kuitenkin pitkät litanjat erilaisia pelisivuja, joiden taustoilta - ja jopa perustajista sekä omistajista - löytyy sinivalkoista väriä. Periaatteessa siis tällaisia suomalaisia pelisivustoja on olemassa myös Veikkauksen ohella.' },
              { question: 'Mistä voin löytää oikeasti hyviä pelisivustoja?', answer: 'Sivustomme toimitusjoukkio etsii netistä jatkuvaan tahtiin uusia pelisivustoja, jotka sopivat hyvin suomalaispelureille. Ja aina kun löydämme tällaisia laadukkaita pelipaikkoja, nostamme ne esiin tällä sivulla niiden ansaitsemalla tavalla. Näin ollen voimmekin vannoa, että löydät ne parhaat pelisivustot ehdottomasti meidän sivustoamme seuraamalla!' },
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
              <h3 className="listHead">Parhaat pelisivustot juuri nyt</h3>
              <table className="casinoTable">
                <tbody>
                {page.pelisivutSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.pelisivustotSivuTopLista.pelisivustotSivuTopLista}</div>
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
              <h3 className="listHead">Rekisteröintivapaasti toimivia pelisivustoja</h3>
              <table className="casinoTable">
                <tbody>
                  {page.tilivapaatPelisivutLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pnp-kasinot/">Lisää PnP-kasinoita...</a>
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
              <h3 className="listHead">Testaa pelisivustoja näillä bonuksilla</h3>
              <table className="casinoTable">
                <tbody>
                  {page.pelisivutBonuksillaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/non-sticky-bonus/">Tsekkaa non sticky bonukset...</a>
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
                <h2>Usein kysyttyjä kysymyksiä pelisivustoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten tunnistan ne luotettavat pelisivustot netissä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaikki turvalliset pelisivut toimivat aina hyvän lisenssin turvin, ja ne laadukkaimmat lisenssit löytyvätkin aina Euroopan talousalueelta. Näin ollen voimmekin helposti linjata, että nämä luotettavat pelisivustot toimivat siis Euroopan ETA-alueen sisältä käsin, jossa viranomaisten suorittama valvonta on kaikista tarkinta.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten pelisivut toimivat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaikessa yksinkertaisuudessa pelisivustot toimivat yksinkertaisella kaavalla. Pelaajan tulee avata sivustolle oma pelitili, jonka myötä hän voi tehdä talletuksen ja siirtyä pelaamaan pelejä tallettamallaan rahalla. Tilin avaamisen ja talletuksen oheen voi kuitenkin liittyä erinäisiä etuja, joiden avulla pelisivustolle pääsee viihtymään parhaimmillaan jopa täysin ilmaiseksi ennen omien eurojen panostamista!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko kaikki ulkomaiset pelisivustot turvallisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Turvallisuus on vain korostunut netin aikakaudella, jolloin myös ulkomaalaiset pelisivut ovat joutuneet panostamaan näihin seikkoihin huomattavan paljon. Kaiken kaikkiaan voimmekin sanoa että pelisivustot ovat eittämättä turvallisia pelaajille kuin pelaajille, sillä erinäiset viranomaistahot valvovat niiden toimintaa myönnettyjen lisenssien puitteissa.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia ovat tämän hetken suosituimmat pelisivut? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Vielä muutamia vuosia sitten gamification-ominaisuuksilla varustetut pelisivustot olivat se kaikista kovin juttu netissä, mutta viime vuosina tilivapaasti toimivat pelipaikat ovat napanneet tämän suosikin kapulan vahvasti haltuunsa. Rekisteröitymisvapaat pelisivut ovatkin sekä pelaamisen helppoudessa että nostojen vikkelyydessä mitattuna aivan omaa luokkaansa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa suomalaisia pelisivustoja? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Veikkaus on monopoliasemansa takia ainoa täysin suomalainen pelisivusto, sillä se saa olla lakien perusteella ainoa uhkapelejä tarjoava sivusto rajojemme sisällä. Ulkomailta käsin netissä toimii kuitenkin pitkät litanjat erilaisia pelisivuja, joiden taustoilta - ja jopa perustajista sekä omistajista - löytyy sinivalkoista väriä. Periaatteessa siis tällaisia suomalaisia pelisivustoja on olemassa myös Veikkauksen ohella.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä voin löytää oikeasti hyviä pelisivustoja? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Sivustomme toimitusjoukkio etsii netistä jatkuvaan tahtiin uusia pelisivustoja, jotka sopivat hyvin suomalaispelureille. Ja aina kun löydämme tällaisia laadukkaita pelipaikkoja, nostamme ne esiin tällä sivulla niiden ansaitsemalla tavalla. Näin ollen voimmekin vannoa, että löydät ne parhaat pelisivustot ehdottomasti meidän sivustoamme seuraamalla!</p>
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

export default Pelisivut

export const pageQuery = graphql`
  query PelisivutQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePelisivutSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        pelisivutSivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            pelisivustotSivuTopLista {
              pelisivustotSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
        }
        tilivapaatPelisivutLista {
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
        pelisivutBonuksillaLista {
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
