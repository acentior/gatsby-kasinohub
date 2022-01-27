// Kasinopelit - sivu
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { FAQJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Kasinopelit extends React.Component {
  //LOAD MORE 
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 12,
      error: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 12};
    });
  }
  showLess() {
    this.setState((prev) => {
      return {visible: 12};
    });
  }
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
    const kasinopeli = get(this, 'props.data.allContentfulKasinopeli')
    const page = get(this, 'props.data.contentfulPageKasinopelitSivu')

    return (
      <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/kasinopelit/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/kasinopelit/',
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
              { question: 'Mitkä ovat parhaat kasinopelit tällä hetkellä?', answer: 'Toimitustiimin sisäisessä äänestyksessä parhaat kasinopelit tuntuivat olemaan järjestään sellaisia, joissa niin graafiset ratkaisut kuin myös muut pelin sisäiset ominaisuudet ovat kehittyneintä ja monipuolisinta mahdollista laatua. Kaikkien pelaajien mieltymykset kuitenkin vaihtelevat, ja monet pelurit saattavat toki suosia myös vanhempia, karsitumpia casino-pelejä.' },
              { question: 'Voiko kasinopelejä pelata myös ilmaiseksi?', answer: 'Kyllähän tämä onnistuu, ja vieläpä kahdella eri tavalla. Esimerkiksi talletuksetta jaettavat bonarit mahdollistavat kasinopelien rullailut monilla eri pelipaikoilla ilmaiseksi. Tämän lisäksi monet casinot tarjoavat eri peliautomaateista myös ilmaisesti leikkirahalla toimivat demo-versiot, joiden avulla näitä casino-pelejä voi testailla helposti ja riskittömästi.' },
              { question: 'Mitkä nettikasinopelit jakavat suurimmat voitot?', answer: 'Kaikista kovimmat ja suurimmat kertavoitot voit löytää progressiivisten jättipottipelien parista. Nämä kasinopelit toimivatkin siten, että pelin jättipottivoitot kasvavat kasvamistaan sitä mukaan, kun peliä vain maailmanlaajuisesti casinoilla pelataan. Ja kun yksi onnekas peluri onnistuu tämän jättivoiton itselleen lunastamaan, resetoituu pelin jättipotti, ja suurvoiton kasvaminen alkaa taas alusta.' },
              { question: 'Mitä casino pelin palautusprosentti oikein tarkoittaa?', answer: 'Jokainen kasinopeli sisältää jonkinlaisen algoritmeihin perustuvan palautusprosentin, joka kertoo kuinka paljon kyseinen casinopeli palauttaa panostetuista rahoista pelaajilleen voittoja. Ja koska kasinopelit eivät sisällä koskaan yli 100% palautusprosentteja, tarkoittaa tämä sitä, että talo voittaa pitkässä juoksussa aina.' },
              { question: 'Onko olemassa täysin suomalaisia kasinopelejä?', answer: 'Veikkauksella pyörii tottakai useita suomalaisia casino-pelejä, kuten vaikkapa legendaarinen Tuplapotti sekä tuoreempi KultaJaska. Suomalaiset kasinopelit ovatt kuitenkin löydettävissä myös ulkomaisten casinoiden pelikirjastoista, sillä tietyilla pelipaikoilla pääset viihtymään esimerkiksi Kummeli ja Vares nimisten peliautomaattien parissa!' },
              { question: 'Toimivatko kasinopelit myös ilman rekisteröitymistä?', answer: 'Toimivat tottakai! Monet casinot tarjoavat nykyisin mahdollisuuden oman käyttäjätilin avaamiseen pelkällä verkkopankkitunnistautumisella. Tällöin kasinopelit ilman rekisteröitymistä ovat siis ulottuvillasi helpon ja tutun pankkitunnistautumisen kautta vain muutamissa sekunneissa!' },
            ]}
          />
          <div className="container">
            <div className="top">
              <PageTitle>Kasinopelit</PageTitle>
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
              <h3 className="listHead">Parhaat pelipaikat kasinopelien rullaamiseen</h3>
              <table className="casinoTable">
                <tbody>
                {page.kasinopelitSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`ikit${kasinonSlug}`}>
                    <td className="casinotop">
                        <div className="logo">
                        <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload"/>
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
                                <div>{listatekstit.kasinopelitSivuTopLista.kasinopelitSivuTopLista}</div>
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
              <h3 className="listHead">Voit pelata ilman rekisteröintiä näillä sivuilla</h3>
              <table className="casinoTable">
                <tbody>
                  {page.kasinopelitSivuRegFreeLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pnp-kasinot/">Lisää Pay n Play -kasinoita...</a>
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
              {/* GAMES */}
              <h3 className="listHead">Netin kasinopelit arvosteltuna ja esiteltynä</h3>
              <div className="games">
                {kasinopeli.edges.slice(0, this.state.visible).map(({ node }) => (
                  <div className="li" key={node.slug}>
                    <a href={`/kasinopelit/${node.slug}/`}>
                      <img data-src={node.kuvaKategoriaSivulle.file.url} className="lazyload" alt={node.kuvaKategoriaSivulle.title} width="227" height="200"/>
                      <h5>{node.pelinNimi}</h5>
                    </a>
                  </div>
                ))}
                <div className="loadBtn">
                  {this.state.visible > 12 &&
                    <button onClick={this.showLess} type="button" id="showLess">Vähemmän</button>
                  }
                  {this.state.visible < kasinopeli.totalCount &&
                    <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                  }
                </div>
              </div>
              <div className="wrapperText">{documentToReactComponents(page.ylaosanTeksti4.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Testaa kasinopelejä helposti näillä bonuksilla</h3>
              <table className="casinoTable">
                <tbody>
                  {page.kasinopelitSivuBonuksetLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                            <a className="saannot" target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>

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
              <a className="listBtn" href="/casino-bonukset/">Lisää casinobonuksia...</a>
              <div className="wrapperText">{documentToReactComponents(page.ylaosanTeksti5.json, {
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
                <h2>Usein kysyttyjä kysymyksiä kasinopeleistä</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä ovat parhaat kasinopelit tällä hetkellä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Toimitustiimin sisäisessä äänestyksessä parhaat kasinopelit tuntuivat olemaan järjestään sellaisia, joissa niin graafiset ratkaisut kuin myös muut pelin sisäiset ominaisuudet ovat kehittyneintä ja monipuolisinta mahdollista laatua. Kaikkien pelaajien mieltymykset kuitenkin vaihtelevat, ja monet pelurit saattavat toki suosia myös vanhempia, karsitumpia casino-pelejä.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko kasinopelejä pelata myös ilmaiseksi? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllähän tämä onnistuu, ja vieläpä kahdella eri tavalla. Esimerkiksi talletuksetta jaettavat bonarit mahdollistavat kasinopelien rullailut monilla eri pelipaikoilla ilmaiseksi. Tämän lisäksi monet casinot tarjoavat eri peliautomaateista myös ilmaisesti leikkirahalla toimivat demo-versiot, joiden avulla näitä casino-pelejä voi testailla helposti ja riskittömästi.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä nettikasinopelit jakavat suurimmat voitot? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaikista kovimmat ja suurimmat kertavoitot voit löytää progressiivisten jättipottipelien parista. Nämä kasinopelit toimivatkin siten, että pelin jättipottivoitot kasvavat kasvamistaan sitä mukaan, kun peliä vain maailmanlaajuisesti casinoilla pelataan. Ja kun yksi onnekas peluri onnistuu tämän jättivoiton itselleen lunastamaan, resetoituu pelin jättipotti, ja suurvoiton kasvaminen alkaa taas alusta.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä casino pelin palautusprosentti oikein tarkoittaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jokainen kasinopeli sisältää jonkinlaisen algoritmeihin perustuvan palautusprosentin, joka kertoo kuinka paljon kyseinen casinopeli palauttaa panostetuista rahoista pelaajilleen voittoja. Ja koska kasinopelit eivät sisällä koskaan yli 100% palautusprosentteja, tarkoittaa tämä sitä, että talo voittaa pitkässä juoksussa aina.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa täysin suomalaisia kasinopelejä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Veikkauksella pyörii tottakai useita suomalaisia casino-pelejä, kuten vaikkapa legendaarinen Tuplapotti sekä tuoreempi KultaJaska. Suomalaiset kasinopelit ovatt kuitenkin löydettävissä myös ulkomaisten casinoiden pelikirjastoista, sillä tietyilla pelipaikoilla pääset viihtymään esimerkiksi Kummeli ja Vares nimisten peliautomaattien parissa!</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Toimivatko kasinopelit myös ilman rekisteröitymistä? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Toimivat tottakai! Monet casinot tarjoavat nykyisin mahdollisuuden oman käyttäjätilin avaamiseen pelkällä verkkopankkitunnistautumisella. Tällöin kasinopelit ilman rekisteröitymistä ovat siis ulottuvillasi helpon ja tutun pankkitunnistautumisen kautta vain muutamissa sekunneissa!</p>
                </div>            
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default Kasinopelit

export const pageQuery = graphql`
  query KasinoPelit{
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageKasinopelitSivu {
      title
      seoBrowserTitle
      seoMetaDescription
      kasinopelitSivuTopLista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          kasinopelitSivuTopLista {
            kasinopelitSivuTopLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      kasinopelitSivuRegFreeLista {
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
      kasinopelitSivuBonuksetLista {
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
      ylaosanTeksti4 {
        json
      }
      ylaosanTeksti5 {
        json
      }
      kuva {
        file {
          url
        }
        title
      }
    }
    allContentfulKasinopeli (filter: {node_locale: {eq: "fi-FI"}}) {
      totalCount
      edges {
        node {
          pelinNimi
          slug
          pelinValmistaja
          julkaisuvuosi
          kuvaKategoriaSivulle {
            file {
              url
            }
            title
          }
        }
      }
    }
}
`
