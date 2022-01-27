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
              { question: 'Kannattaako casinoiden tervetuliaisbonukset hyödyntää?', answer: 'Kyllä toden totta kannattaa. Tervetuliaisbonukset ovat casinoiden tapa uusien pelaajien houkuttelemiseen, ja mikäli vain haluat viihdepelien parissa aikaa viettää, on kukin tervetuliaisbonus sinulle vain silkkaa plussaa uudelle pelipaikalle siirryttäessä. Niiden avulla pelaamisen aloittamiseen saakin normaalia suuremman pelikassan, jolloin myös oma rahallinen riski pienenee!' },
              { question: 'Mitä kaikkea hyvä tervetuliaisbonus tarjoaa pelaajille?', answer: 'Netin pelipaikkojen syövereistä löytyy monia erilaisia tervetulisibonuksia, jotka vaihtelevat sisällöiltään sekä erinäisten etu-tyyppien kuin myös kokonaisarvonsa puolesta. Mielestämme hyvä tervetuliaisbonus on kuitenkin sellainen, joka tarjoaa pelaajilleen monipuolisia etuja joko talletuksetta tai ilman kierrätysvaatimuksia.' },
              { question: 'Onko olemassa vain suomalaisille tarkoitettuja tervetuliaisbonuksia?', answer: 'Kyllähän näitä löytyy, etenkin sellaisilta pelipaikoilta, jotka on suunnattu vartavasten sinivalkoisille pelaajille. Tällaiset casinot tarjoavat siis myös mahdolliset tervetuliaisbonukset vain ja ainoastaan suomalaispelaajille tarjoiltuna, sillä välttämättä muista maista käsin ei kyseisellä casinolla pysty edes ylipäätään pelaamaan.' },
              { question: 'Mitä tarkoittaa eksklusiinen tervetuliaisbonus?', answer: 'Toisinaan voit löytyy sivustoltamme maininnan, että tietty tervetuliaisbonus on tarjolla eksklusiiviseen tyyliin. Tämä tarkoittaakin sitä, että olemme neuvotelleet kyseisen etuuden tarjolle vain ja ainoastaan sivustomme kautta lunastettavaksi, jolloin bonari on siis tarjolla yksinoikeudella vain sivustomme lukijoille ja yhteisömme jäsenille.' },
              { question: 'Millaisia parhaat tervetuliaisbonukset oikeasti ovat?', answer: 'Kauneus on tunnetusti katsojan silmässä, joten eri pelaajatyypit arvostavat varmasti casinoiden parissa myös erilaisia tervetulobonuksia. Absoluuttisesti parhaat tervetuliaisbonukset tuovat kuitenkin ne selkeimmät edut pelaajille ollen samalla myös riskejä casinoille itselleen mahdollisten voittojen vuoksi. Tähän kategoriaan kuuluvatkin muun muassa kierrätyksettömät bonarit, joiden avulla oikeiden voittojen kahmiminen on pelaajien kannalta mahdollisempaa.' },
              { question: 'Mitä ehtoja tervetuliaisbonusten lunastamiseen liittyy?', answer: 'Täysin ilman sääntöjä jaettavia tervetuliaisbonuksia ei casino-markkinoilta tule varmasti koskaan löytymään, sillä bonari-etujen lunastamiseen, pelaamiseen ja kierrättämiseen liittyy aina omat ehtonsa ja rajoituksensa. Tällaisia sääntöjä voivat olla esimerkiksi tervetulobonuksen lunastamiseen vaadittavat talletussummat sekä mahdolliset aika- ja pelikohtaiset rajoitukset.' },
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
              <h3 className="listHead">Parhaat tervetuliaisbonukset casinoille - valitse tästä!</h3>
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <a className="listBtn" href="/casino-bonukset/">Selaa lisää casinobonuksia tästä!</a>
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
                <h4 className="listHead">Usein kysyttyjä kysymyksiä tervetuliaisbonuksista</h4>
                <div className="accordion">
                  <div className="accordion-title"><h5>Kannattaako casinoiden tervetuliaisbonukset hyödyntää? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä toden totta kannattaa. Tervetuliaisbonukset ovat casinoiden tapa uusien pelaajien houkuttelemiseen, ja mikäli vain haluat viihdepelien parissa aikaa viettää, on kukin tervetuliaisbonus sinulle vain silkkaa plussaa uudelle pelipaikalle siirryttäessä. Niiden avulla pelaamisen aloittamiseen saakin normaalia suuremman pelikassan, jolloin myös oma rahallinen riski pienenee!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä kaikkea hyvä tervetuliaisbonus tarjoaa pelaajille?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin pelipaikkojen syövereistä löytyy monia erilaisia tervetulisibonuksia, jotka vaihtelevat sisällöiltään sekä erinäisten etu-tyyppien kuin myös kokonaisarvonsa puolesta. Mielestämme hyvä tervetuliaisbonus on kuitenkin sellainen, joka tarjoaa pelaajilleen monipuolisia etuja joko talletuksetta tai ilman kierrätysvaatimuksia.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa vain suomalaisille tarkoitettuja tervetuliaisbonuksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllähän näitä löytyy, etenkin sellaisilta pelipaikoilta, jotka on suunnattu vartavasten sinivalkoisille pelaajille. Tällaiset casinot tarjoavat siis myös mahdolliset tervetuliaisbonukset vain ja ainoastaan suomalaispelaajille tarjoiltuna, sillä välttämättä muista maista käsin ei kyseisellä casinolla pysty edes ylipäätään pelaamaan.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä tarkoittaa eksklusiinen tervetuliaisbonus?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Toisinaan voit löytyy sivustoltamme maininnan, että tietty tervetuliaisbonus on tarjolla eksklusiiviseen tyyliin. Tämä tarkoittaakin sitä, että olemme neuvotelleet kyseisen etuuden tarjolle vain ja ainoastaan sivustomme kautta lunastettavaksi, jolloin bonari on siis tarjolla yksinoikeudella vain sivustomme lukijoille ja yhteisömme jäsenille.</p>
                </div>    
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia parhaat tervetuliaisbonukset oikeasti ovat?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kauneus on tunnetusti katsojan silmässä, joten eri pelaajatyypit arvostavat varmasti casinoiden parissa myös erilaisia tervetulobonuksia. Absoluuttisesti parhaat tervetuliaisbonukset tuovat kuitenkin ne selkeimmät edut pelaajille ollen samalla myös riskejä casinoille itselleen mahdollisten voittojen vuoksi. Tähän kategoriaan kuuluvatkin muun muassa kierrätyksettömät bonarit, joiden avulla oikeiden voittojen kahmiminen on pelaajien kannalta mahdollisempaa.</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä ehtoja tervetuliaisbonusten lunastamiseen liittyy?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Täysin ilman sääntöjä jaettavia tervetuliaisbonuksia ei casino-markkinoilta tule varmasti koskaan löytymään, sillä bonari-etujen lunastamiseen, pelaamiseen ja kierrättämiseen liittyy aina omat ehtonsa ja rajoituksensa. Tällaisia sääntöjä voivat olla esimerkiksi tervetulobonuksen lunastamiseen vaadittavat talletussummat sekä mahdolliset aika- ja pelikohtaiset rajoitukset.</p>
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
