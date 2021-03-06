// Tervetuliaisbonus - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Tervetuliaisbonus extends React.Component {
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
    var elem = document.getElementById("teb");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPagePeruspohja')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/tervetuliaisbonus/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/tervetuliaisbonus/',
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
            url='https://kasinohub.com/tervetuliaisbonus/'
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
              { question: 'Kannattaako casinoiden tervetuliaisbonukset hy??dynt?????', answer: 'Kyll?? toden totta kannattaa. Tervetuliaisbonukset ovat casinoiden tapa uusien pelaajien houkuttelemiseen, ja mik??li vain haluat viihdepelien parissa aikaa viett????, on kukin tervetuliaisbonus sinulle vain silkkaa plussaa uudelle pelipaikalle siirrytt??ess??. Niiden avulla pelaamisen aloittamiseen saakin normaalia suuremman pelikassan, jolloin my??s oma rahallinen riski pienenee!' },
              { question: 'Mit?? kaikkea hyv?? tervetuliaisbonus tarjoaa pelaajille?', answer: 'Netin pelipaikkojen sy??vereist?? l??ytyy monia erilaisia tervetulisibonuksia, jotka vaihtelevat sis??ll??ilt????n sek?? erin??isten etu-tyyppien kuin my??s kokonaisarvonsa puolesta. Mielest??mme hyv?? tervetuliaisbonus on kuitenkin sellainen, joka tarjoaa pelaajilleen monipuolisia etuja joko talletuksetta tai ilman kierr??tysvaatimuksia.' },
              { question: 'Onko olemassa vain suomalaisille tarkoitettuja tervetuliaisbonuksia?', answer: 'Kyll??h??n n??it?? l??ytyy, etenkin sellaisilta pelipaikoilta, jotka on suunnattu vartavasten sinivalkoisille pelaajille. T??llaiset casinot tarjoavat siis my??s mahdolliset tervetuliaisbonukset vain ja ainoastaan suomalaispelaajille tarjoiltuna, sill?? v??ltt??m??tt?? muista maista k??sin ei kyseisell?? casinolla pysty edes ylip????t????n pelaamaan.' },
              { question: 'Mit?? tarkoittaa eksklusiinen tervetuliaisbonus?', answer: 'Toisinaan voit l??ytyy sivustoltamme maininnan, ett?? tietty tervetuliaisbonus on tarjolla eksklusiiviseen tyyliin. T??m?? tarkoittaakin sit??, ett?? olemme neuvotelleet kyseisen etuuden tarjolle vain ja ainoastaan sivustomme kautta lunastettavaksi, jolloin bonari on siis tarjolla yksinoikeudella vain sivustomme lukijoille ja yhteis??mme j??senille.' },
              { question: 'Millaisia parhaat tervetuliaisbonukset oikeasti ovat?', answer: 'Kauneus on tunnetusti katsojan silm??ss??, joten eri pelaajatyypit arvostavat varmasti casinoiden parissa my??s erilaisia tervetulobonuksia. Absoluuttisesti parhaat tervetuliaisbonukset tuovat kuitenkin ne selkeimm??t edut pelaajille ollen samalla my??s riskej?? casinoille itselleen mahdollisten voittojen vuoksi. T??h??n kategoriaan kuuluvatkin muun muassa kierr??tyksett??m??t bonarit, joiden avulla oikeiden voittojen kahmiminen on pelaajien kannalta mahdollisempaa.' },
              { question: 'Mit?? ehtoja tervetuliaisbonusten lunastamiseen liittyy?', answer: 'T??ysin ilman s????nt??j?? jaettavia tervetuliaisbonuksia ei casino-markkinoilta tule varmasti koskaan l??ytym????n, sill?? bonari-etujen lunastamiseen, pelaamiseen ja kierr??tt??miseen liittyy aina omat ehtonsa ja rajoituksensa. T??llaisia s????nt??j?? voivat olla esimerkiksi tervetulobonuksen lunastamiseen vaadittavat talletussummat sek?? mahdolliset aika- ja pelikohtaiset rajoitukset.' },
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
              <h3 className="listHead">Parhaat tervetuliaisbonukset casinoille - valitse t??st??!</h3>
              <table className="casinoTable">
                <tbody>
                {page.topLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,arvostelu,poistaLinkkiArvosteluun,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.tervetuliaisbonusSivuTopLista.tervetuliaisbonusSivuTopLista}</div>
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
              <a className="listBtn" href="/casino-bonukset/">Selaa lis???? casinobonuksia t??st??!</a>
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
                <h4 className="listHead">Usein kysyttyj?? kysymyksi?? tervetuliaisbonuksista</h4>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kannattaako casinoiden tervetuliaisbonukset hy??dynt????? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? toden totta kannattaa. Tervetuliaisbonukset ovat casinoiden tapa uusien pelaajien houkuttelemiseen, ja mik??li vain haluat viihdepelien parissa aikaa viett????, on kukin tervetuliaisbonus sinulle vain silkkaa plussaa uudelle pelipaikalle siirrytt??ess??. Niiden avulla pelaamisen aloittamiseen saakin normaalia suuremman pelikassan, jolloin my??s oma rahallinen riski pienenee!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? kaikkea hyv?? tervetuliaisbonus tarjoaa pelaajille?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin pelipaikkojen sy??vereist?? l??ytyy monia erilaisia tervetulisibonuksia, jotka vaihtelevat sis??ll??ilt????n sek?? erin??isten etu-tyyppien kuin my??s kokonaisarvonsa puolesta. Mielest??mme hyv?? tervetuliaisbonus on kuitenkin sellainen, joka tarjoaa pelaajilleen monipuolisia etuja joko talletuksetta tai ilman kierr??tysvaatimuksia.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa vain suomalaisille tarkoitettuja tervetuliaisbonuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll??h??n n??it?? l??ytyy, etenkin sellaisilta pelipaikoilta, jotka on suunnattu vartavasten sinivalkoisille pelaajille. T??llaiset casinot tarjoavat siis my??s mahdolliset tervetuliaisbonukset vain ja ainoastaan suomalaispelaajille tarjoiltuna, sill?? v??ltt??m??tt?? muista maista k??sin ei kyseisell?? casinolla pysty edes ylip????t????n pelaamaan.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? tarkoittaa eksklusiinen tervetuliaisbonus?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Toisinaan voit l??ytyy sivustoltamme maininnan, ett?? tietty tervetuliaisbonus on tarjolla eksklusiiviseen tyyliin. T??m?? tarkoittaakin sit??, ett?? olemme neuvotelleet kyseisen etuuden tarjolle vain ja ainoastaan sivustomme kautta lunastettavaksi, jolloin bonari on siis tarjolla yksinoikeudella vain sivustomme lukijoille ja yhteis??mme j??senille.</p>
                </div>    
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia parhaat tervetuliaisbonukset oikeasti ovat?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kauneus on tunnetusti katsojan silm??ss??, joten eri pelaajatyypit arvostavat varmasti casinoiden parissa my??s erilaisia tervetulobonuksia. Absoluuttisesti parhaat tervetuliaisbonukset tuovat kuitenkin ne selkeimm??t edut pelaajille ollen samalla my??s riskej?? casinoille itselleen mahdollisten voittojen vuoksi. T??h??n kategoriaan kuuluvatkin muun muassa kierr??tyksett??m??t bonarit, joiden avulla oikeiden voittojen kahmiminen on pelaajien kannalta mahdollisempaa.</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? ehtoja tervetuliaisbonusten lunastamiseen liittyy?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??ysin ilman s????nt??j?? jaettavia tervetuliaisbonuksia ei casino-markkinoilta tule varmasti koskaan l??ytym????n, sill?? bonari-etujen lunastamiseen, pelaamiseen ja kierr??tt??miseen liittyy aina omat ehtonsa ja rajoituksensa. T??llaisia s????nt??j?? voivat olla esimerkiksi tervetulobonuksen lunastamiseen vaadittavat talletussummat sek?? mahdolliset aika- ja pelikohtaiset rajoitukset.</p>
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

export default Tervetuliaisbonus

export const pageQuery = graphql`
  query TervetuliaisbonusQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePeruspohja(title: {eq: "Tervetuliaisbonus"}) {
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
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          tervetuliaisbonusSivuTopLista {
            tervetuliaisbonusSivuTopLista
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
