// Kasinobonukset - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import Slider from "react-slick";
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Kasinobonukset extends React.Component {
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
    var elem = document.getElementById("cb");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageCasinobonuksetSivu')
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
            canonical='https://kasinohub.com/casino-bonukset/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/casino-bonukset/',
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
            url='https://kasinohub.com/casino-bonukset/'
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
              { question: 'Millaisia parhaat casino bonukset ovat juuri nyt?', answer: 'Sivustomme ammattitaitoinen toimitustiimi liputtaa vahvimmin sellaisten casino bonus -tarjousten puolesta, jotka sisältävät mahdollisimman monipuolisesti etuja mahdollisimman helpoin lunastusehdoin. Samalla toki täytyy sanoa, että kaikista parhaat casinobonukset ovat myös 2022 vuoden osalta sellaisia, joissa kierrätysehdot ovat mahdollisimman matalat.' },
              { question: 'Mitä casinobonuksia lunastaessa tulisi eritoten huomioida?', answer: 'Pelurien kannattaa ottaa aina eritoten huomioon, että käytännössä kaikki casino bonukset sisältävät aina jonkinlaisia sääntöjä ja ehtoja bonusten lunastamiseen, käyttöön tai viimeistään voittojen kierrättämiseen liittyen. Kaikki säännökset kannattaakin aina lukea läpi ennen etujen lunastamista!' },
              { question: 'Mitkä ovat suurimmat casinobonukset 2022 vuonna?', answer: 'Jos etsit yksinkertaisesti mahdollisimman isoja casinobonuksia, on meillä sinulle hyviä uutisia. Vuoden 2022 osalta casino bonukset ovatkin kasvaneet kaikkinensa jopa useiden tuhansien eurojen kokonaisarvoihin, ja mittavimmin bonusrahaa onkin tarjolla jopa yli 4000 euron edestä!' },
              { question: 'Mitä casino bonukset ilman talletusta voivat pitää sisällään?', answer: 'Jos jokin pelipaikka tarjoaa asiakkailleen casinobonuksia ilman talletusta, tarjoillaan tällaiset edut normaalisti talletusvapaiden ilmaisspinnien muodossa. Toisinaan talletuksetta voi saada myös ilmaista casinobonus-rahaa, mutta tällaiset edut ovat huomattavasti harvinaisempi näky markkinoilla.' },
              { question: 'Miten casino bonus kannattaa käyttää?', answer: 'Mikäli pelipaikan myöntämä casino bonus ei sisällä mitään rajoituksia bonuksen käytön suhteen, kannattaa kyseiset casinobonukset hyödyntää ehdottomasti sellaisten pelien parissa, jotka sisältävät parhaat palautusprosentit. Näin maksimoit mahdollisuutesi siihen, että saat realisoitua bonukset oikeiksi voitoiksi.' },
              { question: 'Sisältääkö casinobonukset aina jonkunlaisia rajoituksia?', answer: 'Kyllä sisältävät, tavalla tai toisella. Casinobonukset ilman kierrätystä ja ilman talletusta ovat tietty niin sanottuja helppoja bonuksia, mutta näihinkin bonus-tyyppeihin liittyy kuitenkin aina jotain sääntöjä esimerkiksi lunastamiseen tai pelattaviin peleihin liittyen. Casino bonus -tarjouksiin on usein myös sidottu oma voittokatto, joka kannattaa tietty aina huomioida.' },
            ]}
          />
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanteksti.json)}
              </div>
              <h3 className="listHead">Parhaat casino bonukset 2022</h3>
              <i className="update">Päivitetty: {page.top20Pvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.top20KasinobonuksetLista.map(({kasinonNimi,kasinonSlug,snntJaEhdot,poistaLinkkiArvosteluun,affiliateLinkki,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                          {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' width="16" height="16"/>}
                          {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' width="33" height="16"/>}
                          {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' width="50" height="16"/>}
                          {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' width="67" height="16"/>}
                          {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' width="84" height="16"/>}
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
                            <div>{listatekstit.casinobonuksetSivuParhaatLista.casinobonuksetSivuParhaatLista}</div>
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
              <a className="listBtn" href="/nettikasinot/">Selaa lisää nettikasinoita...</a>
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
              <div className="related">
                <Slider {...settings}>
                {similarU.edges.map(({ node })=>(
                  <div key={`${node.slug}`} className="scroller">
                    <div>
                      <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title} loading="lazy" width="358px" height="200"/>
                      <a href={`/kasinotarjoukset/${node.slug}`} className="title"><h3>{node.title}</h3></a>
                      <p className="date">{node.publishDate}</p>
                      <div className="text">{node.introTextKasinobonuksetSivuScroller.introTextKasinobonuksetSivuScroller}</div>
                      <div className="btns">
                        {node.kasino !== null &&
                          <a href={node.kasino.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                        }
                        <a href={`/kasinotarjoukset/${node.slug}`} className="btn scd">Lue lisää!</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <a className="listBtn" href="/kasinotarjoukset/">Selaa lisää kasinotarjouksia...</a>
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
              <h3 className="listHead">Casinobonukset ilman kierrätystä</h3>
              <table className="casinoTable">
                <tbody>
                {page.kasinobonuksetIlmanKierratystaLista.map(({kasinonNimi,kasinonSlug,snntJaEhdot,poistaLinkkiArvosteluun,affiliateLinkki,listatekstit,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                    <tr className="casino" key={`jackpot${kasinonSlug}`}>
                    <td className="casinotop">
                        <div className="logo">
                        <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload" width="120" height="51"/>
                        <div className="name">
                            <h5 className="title">{kasinonNimi}</h5>
                        </div>
                        </div>
                        <div className="casinoRate"> 
                        <div className="arvostelu tahti">
                          {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' width="16" height="16"/>}
                          {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' width="33" height="16"/>}
                          {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' width="50" height="16"/>}
                          {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' width="67" height="16"/>}
                          {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' width="84" height="16"/>}
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
                                <div>{listatekstit.kasinobonuksetSivuEiKierrtystLista.kasinobonuksetSivuEiKierrtystLista}</div>
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
              <div className="wrapperText">{documentToReactComponents(page.alaosanteksti.json, {
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
                <h2>Usein kysyttyjä kysymyksiä casinobonuksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia parhaat casino bonukset ovat juuri nyt? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Sivustomme ammattitaitoinen toimitustiimi liputtaa vahvimmin sellaisten casino bonus -tarjousten puolesta, jotka sisältävät mahdollisimman monipuolisesti etuja mahdollisimman helpoin lunastusehdoin. Samalla toki täytyy sanoa, että kaikista parhaat casinobonukset ovat myös 2022 vuoden osalta sellaisia, joissa kierrätysehdot ovat mahdollisimman matalat.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä casinobonuksia lunastaessa tulisi eritoten huomioida? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Pelurien kannattaa ottaa aina eritoten huomioon, että käytännössä kaikki casino bonukset sisältävät aina jonkinlaisia sääntöjä ja ehtoja bonusten lunastamiseen, käyttöön tai viimeistään voittojen kierrättämiseen liittyen. Kaikki säännökset kannattaakin aina lukea läpi ennen etujen lunastamista!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä ovat suurimmat casinobonukset 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos etsit yksinkertaisesti mahdollisimman isoja casinobonuksia, on meillä sinulle hyviä uutisia. Vuoden 2022 osalta casino bonukset ovatkin kasvaneet kaikkinensa jopa useiden tuhansien eurojen kokonaisarvoihin, ja mittavimmin bonusrahaa onkin tarjolla jopa yli 4000 euron edestä!</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä casino bonukset ilman talletusta voivat pitää sisällään? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos jokin pelipaikka tarjoaa asiakkailleen casinobonuksia ilman talletusta, tarjoillaan tällaiset edut normaalisti talletusvapaiden ilmaisspinnien muodossa. Toisinaan talletuksetta voi saada myös ilmaista casinobonus-rahaa, mutta tällaiset edut ovat huomattavasti harvinaisempi näky markkinoilla.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten casino bonus kannattaa käyttää? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mikäli pelipaikan myöntämä casino bonus ei sisällä mitään rajoituksia bonuksen käytön suhteen, kannattaa kyseiset casinobonukset hyödyntää ehdottomasti sellaisten pelien parissa, jotka sisältävät parhaat palautusprosentit. Näin maksimoit mahdollisuutesi siihen, että saat realisoitua bonukset oikeiksi voitoiksi.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Sisältääkö casinobonukset aina jonkunlaisia rajoituksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä sisältävät, tavalla tai toisella. Casinobonukset ilman kierrätystä ja ilman talletusta ovat tietty niin sanottuja helppoja bonuksia, mutta näihinkin bonus-tyyppeihin liittyy kuitenkin aina jotain sääntöjä esimerkiksi lunastamiseen tai pelattaviin peleihin liittyen. Casino bonus -tarjouksiin on usein myös sidottu oma voittokatto, joka kannattaa tietty aina huomioida.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} width="60" height="60"/></a>
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

export default Kasinobonukset

export const pageQuery = graphql`
  query KasinobonuksetQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageCasinobonuksetSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        top20Pvm(formatString:"DD.MM.YYYY")
        top20KasinobonuksetLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            casinobonuksetSivuParhaatLista {
              casinobonuksetSivuParhaatLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
        }
        kasinobonuksetIlmanKierratystaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            kasinobonuksetSivuEiKierrtystLista {
              kasinobonuksetSivuEiKierrtystLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
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
        alaosanteksti {
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
      allContentfulUutinen (sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}}, limit: 3){
        edges {
          node {
            title
            slug
            publishDate(formatString: "d.M.YYYY")
            heroImage {
              file {url}
              title
            }
            introTextKasinobonuksetSivuScroller {
              introTextKasinobonuksetSivuScroller
            }
            kasino {
              affiliateLinkki
            }
          }
        }
      }
  }
`
