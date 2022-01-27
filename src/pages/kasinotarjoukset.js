// Kasinotarjoukset ja -uutiset - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import Slider from "react-slick";
import { FAQJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class KasinoTU extends React.Component {
  //LOAD MORE 
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 6,
      error: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 6};
    });
  }
  showLess() {
    this.setState((prev) => {
      return {visible: 6};
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
    var elem = document.getElementById("kt");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageKasinotarjouksetSivu')
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
            canonical='https://kasinohub.com/kasinotarjoukset/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/kasinotarjoukset/',
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
              { question: 'Mitä kaikkea kasinotarjoukset voivat pitää sisällään?', answer: 'Netin pelipaikat ovat käyttäneet vuosien saatossa runsain mitoin mielikuvitusta myös erinäisten casino-tarjousten luomiseen, ja näitä kampanjoita järjestetäänkin nykyisin äärimmäisen laajalla vaihtelevuudella. Yksittäisillä talletuksilla lunastettavien etujen oheen onkin noussut mitä suurempia kasinotarjouksia, joissa voidaan esimerkiksi arpoa palkintoina maailmanympärysmatkoja tai upouusia autoja!' },
              { question: 'Mitä nettikasino-tarjouksia jaetaan uusille pelaajille?', answer: 'Uudet pelaajat saavat usein nettikasinotarjouksina erinäisiä tervetuliaislahjoja, jotka voivat sisältää esimerkiksi talletuksilla - tai jopa talletuksetta - saatavia bonarisummia sekä ilmaisspinnejä, mutta myös käteispalautuksina tunnettuja cashbackeja. Näiden uusien pelaajien casinotarjousten avulla pelaaminen voikin alkaa näillä pelipaikoilla huomattavasti pienemmällä rahallisella riskillä.' },
              { question: 'Voivatko myös vanhat asiakkaat saada kasinotarjouksia?', answer: 'Kyllä voivat ja itseasiassa valtaosa netin casino tarjouksista järjestetäänkin juuri vanhoille pelaajille erinäisten kampanjoiden, arvontojen, turnausten ja muiden kilpailujen muodossa. Toki on myös huomautettava, että myös vanhoille pelaajille suunnatut kasinotarjoukset saattavat sisältää pelkästään perinteisiä talletuksilla lunastettavia ilmaiskieppejä tai bonarisummia.' },
              { question: 'Mitä sääntöjä ja ehtoja casino tarjoukset sisältävät useimmiten?', answer: 'Lähes kaikilla kasinotarjouksilla on aina jonkinlainen aikarajoitus, joka määrää sen, minä aikoina tarjous on lunastettavissa tai kuinka pitkään pelaajalla on mahdollisuus osallistua yksittäiseen kampanjaan. Osallistumiseen liittyy myös joskus erinäisiä talletus- tai panostusehtoja, joiden lisäksi tarjous-palkkiona jaettavat edut voivat tietty sisältää myös kierrätysvaatimuksia.' },
              { question: 'Lunastin kasinotarjouksen, mutta edut jäivät saamatta - miksi näin?', answer: 'Tällaiseen probleemaan on käytännössä vain kaksi mahdollista vastausta. Ensinnäkin kyseinen kasinotarjous ei ollut välttämättä enää voimassa vaan sen kampanja-aika oli saattanut ehtiä jo päättyä. Toisaalta, nämä casino-tarjoukset voivat sisältää aikarajoituksen ohessa myös muita sääntöjä lunastamisen suhteen, jotka sinulta saattoi jäädä huomaamatta. Näistä syistä tarjouksiin kannattaakin paneutua ehtojen puolesta aina tarkasti etukäteen!' },
              { question: 'Mistä löydän kaikki uudet kasinotarjoukset helpoiten?', answer: 'Olet 110 prosenttisella varmuudella parhaiten kartalla uusien tarjousten pelikentällä yksinkertaisesti seuraamalla sivustomme tarjontaa aktiivisella otteella. Kerrommekin tällä sivulla kaikki ne uudet kasinotarjoukset, joita suosittelemme suurimmalla mahdollisella peukalolla kaikille suomalaispelureille!' },
            ]}
          />
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperTop">
                <img src={page.kuva.file.url} alt={page.kuva.title} className="wrapperImage" width="300" height="300"/>
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
              <div className="related">
                <h2>Parhaat kasinotarjoukset juuri nyt:</h2>
                <Slider {...settings}>
                {page.parhaatTarjouksetScroller.map(({ title, slug, publishDate, heroImage, introTextKasinotarjouksetSivuScroller, kasino})=>(
                  <div key={`${slug}`} className="scroller">
                    <div>
                      <img className="cardImg lazyload" data-src={heroImage.file.url} alt={heroImage.title} loading="lazy" width="358" height="200"/>
                      <a href={`/kasinotarjoukset/${slug}/`} className="title"><h3>{title}</h3></a>
                      <p className="date">{publishDate}</p>
                      <div className="text">{introTextKasinotarjouksetSivuScroller.introTextKasinotarjouksetSivuScroller}</div>
                      <div className="btns">
                        {kasino !== null &&
                        <a href={kasino.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                        }
                        <a href={`/kasinotarjoukset/${slug}/`} className="btn scd">Lue lisää!</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <div className="wrapperText">{documentToReactComponents(page.ylaosanTeksti2.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <div className="newsList">
                <h2>Uusimmat casino-tarjoukset ja -kampanjat</h2>
                {similarU.edges.slice(0, this.state.visible).map(({node})=>(
                  <div key={node.slug} className="card">
                    <a href={`/kasinotarjoukset/${node.slug}/`}>
                        <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title} loading="lazy" width="250" height="150"/>
                        <h4 className="title">{node.title}</h4>
                        <i className="date">{node.publishDate}</i>
                        <p className="text">{node.introTextKasinotarjouksetSivuListaus.introTextKasinotarjouksetSivuListaus}</p>
                    </a>
                  </div>
                ))}
                <div className="loadBtn">
                  {this.state.visible > 12 &&
                    <button onClick={this.showLess} type="button" id="showLess">Vähemmän</button>
                  }
                  {this.state.visible < similarU.totalCount &&
                    <button onClick={this.loadMore} type="button" id="loadMore">Näytä lisää</button>
                  }
                </div>
              </div>
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
                <h2>Usein kysyttyjä kysymyksiä kasinotarjouksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä kaikkea kasinotarjoukset voivat pitää sisällään? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin pelipaikat ovat käyttäneet vuosien saatossa runsain mitoin mielikuvitusta myös erinäisten casino-tarjousten luomiseen, ja näitä kampanjoita järjestetäänkin nykyisin äärimmäisen laajalla vaihtelevuudella. Yksittäisillä talletuksilla lunastettavien etujen oheen onkin noussut mitä suurempia kasinotarjouksia, joissa voidaan esimerkiksi arpoa palkintoina maailmanympärysmatkoja tai upouusia autoja!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä nettikasino-tarjouksia jaetaan uusille pelaajille? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Uudet pelaajat saavat usein nettikasinotarjouksina erinäisiä tervetuliaislahjoja, jotka voivat sisältää esimerkiksi talletuksilla - tai jopa talletuksetta - saatavia bonarisummia sekä ilmaisspinnejä, mutta myös käteispalautuksina tunnettuja cashbackeja. Näiden uusien pelaajien casinotarjousten avulla pelaaminen voikin alkaa näillä pelipaikoilla huomattavasti pienemmällä rahallisella riskillä.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Voivatko myös vanhat asiakkaat saada kasinotarjouksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä voivat ja itseasiassa valtaosa netin casino tarjouksista järjestetäänkin juuri vanhoille pelaajille erinäisten kampanjoiden, arvontojen, turnausten ja muiden kilpailujen muodossa. Toki on myös huomautettava, että myös vanhoille pelaajille suunnatut kasinotarjoukset saattavat sisältää pelkästään perinteisiä talletuksilla lunastettavia ilmaiskieppejä tai bonarisummia.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä sääntöjä ja ehtoja casino tarjoukset sisältävät useimmiten? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Lähes kaikilla kasinotarjouksilla on aina jonkinlainen aikarajoitus, joka määrää sen, minä aikoina tarjous on lunastettavissa tai kuinka pitkään pelaajalla on mahdollisuus osallistua yksittäiseen kampanjaan. Osallistumiseen liittyy myös joskus erinäisiä talletus- tai panostusehtoja, joiden lisäksi tarjous-palkkiona jaettavat edut voivat tietty sisältää myös kierrätysvaatimuksia.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Lunastin kasinotarjouksen, mutta edut jäivät saamatta - miksi näin?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tällaiseen probleemaan on käytännössä vain kaksi mahdollista vastausta. Ensinnäkin kyseinen kasinotarjous ei ollut välttämättä enää voimassa vaan sen kampanja-aika oli saattanut ehtiä jo päättyä. Toisaalta, nämä casino-tarjoukset voivat sisältää aikarajoituksen ohessa myös muita sääntöjä lunastamisen suhteen, jotka sinulta saattoi jäädä huomaamatta. Näistä syistä tarjouksiin kannattaakin paneutua ehtojen puolesta aina tarkasti etukäteen!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä löydän kaikki uudet kasinotarjoukset helpoiten?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Olet 110 prosenttisella varmuudella parhaiten kartalla uusien tarjousten pelikentällä yksinkertaisesti seuraamalla sivustomme tarjontaa aktiivisella otteella. Kerrommekin tällä sivulla kaikki ne uudet kasinotarjoukset, joita suosittelemme suurimmalla mahdollisella peukalolla kaikille suomalaispelureille!</p>
                </div>            
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default KasinoTU

export const pageQuery = graphql`
  query KasinoTUQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageKasinotarjouksetSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        parhaatTarjouksetScroller {
          title
          slug
          publishDate(formatString: "d.M.YYYY")
          heroImage {
            file {
              url
            }
            title
          }
          kasino {
            affiliateLinkki
          }
          introTextKasinotarjouksetSivuScroller {
            introTextKasinotarjouksetSivuScroller
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
    }
    allContentfulUutinen (sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}}){
      totalCount
        edges {
          node {
            title
            slug
            publishDate(formatString: "DD.MM.YYYY")
            heroImage {
              file {url}
              title
            }
            body {
              json
            }
            kasino {
              affiliateLinkki
            }
            introTextKasinotarjouksetSivuListaus {
              introTextKasinotarjouksetSivuListaus
            }
          }
        }
      }
  }
`
