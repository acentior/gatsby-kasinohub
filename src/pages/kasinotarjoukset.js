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
              { question: 'Mit?? kaikkea kasinotarjoukset voivat pit???? sis??ll????n?', answer: 'Netin pelipaikat ovat k??ytt??neet vuosien saatossa runsain mitoin mielikuvitusta my??s erin??isten casino-tarjousten luomiseen, ja n??it?? kampanjoita j??rjestet????nkin nykyisin ????rimm??isen laajalla vaihtelevuudella. Yksitt??isill?? talletuksilla lunastettavien etujen oheen onkin noussut mit?? suurempia kasinotarjouksia, joissa voidaan esimerkiksi arpoa palkintoina maailmanymp??rysmatkoja tai upouusia autoja!' },
              { question: 'Mit?? nettikasino-tarjouksia jaetaan uusille pelaajille?', answer: 'Uudet pelaajat saavat usein nettikasinotarjouksina erin??isi?? tervetuliaislahjoja, jotka voivat sis??lt???? esimerkiksi talletuksilla - tai jopa talletuksetta - saatavia bonarisummia sek?? ilmaisspinnej??, mutta my??s k??teispalautuksina tunnettuja cashbackeja. N??iden uusien pelaajien casinotarjousten avulla pelaaminen voikin alkaa n??ill?? pelipaikoilla huomattavasti pienemm??ll?? rahallisella riskill??.' },
              { question: 'Voivatko my??s vanhat asiakkaat saada kasinotarjouksia?', answer: 'Kyll?? voivat ja itseasiassa valtaosa netin casino tarjouksista j??rjestet????nkin juuri vanhoille pelaajille erin??isten kampanjoiden, arvontojen, turnausten ja muiden kilpailujen muodossa. Toki on my??s huomautettava, ett?? my??s vanhoille pelaajille suunnatut kasinotarjoukset saattavat sis??lt???? pelk??st????n perinteisi?? talletuksilla lunastettavia ilmaiskieppej?? tai bonarisummia.' },
              { question: 'Mit?? s????nt??j?? ja ehtoja casino tarjoukset sis??lt??v??t useimmiten?', answer: 'L??hes kaikilla kasinotarjouksilla on aina jonkinlainen aikarajoitus, joka m????r???? sen, min?? aikoina tarjous on lunastettavissa tai kuinka pitk????n pelaajalla on mahdollisuus osallistua yksitt??iseen kampanjaan. Osallistumiseen liittyy my??s joskus erin??isi?? talletus- tai panostusehtoja, joiden lis??ksi tarjous-palkkiona jaettavat edut voivat tietty sis??lt???? my??s kierr??tysvaatimuksia.' },
              { question: 'Lunastin kasinotarjouksen, mutta edut j??iv??t saamatta - miksi n??in?', answer: 'T??llaiseen probleemaan on k??yt??nn??ss?? vain kaksi mahdollista vastausta. Ensinn??kin kyseinen kasinotarjous ei ollut v??ltt??m??tt?? en???? voimassa vaan sen kampanja-aika oli saattanut ehti?? jo p????tty??. Toisaalta, n??m?? casino-tarjoukset voivat sis??lt???? aikarajoituksen ohessa my??s muita s????nt??j?? lunastamisen suhteen, jotka sinulta saattoi j????d?? huomaamatta. N??ist?? syist?? tarjouksiin kannattaakin paneutua ehtojen puolesta aina tarkasti etuk??teen!' },
              { question: 'Mist?? l??yd??n kaikki uudet kasinotarjoukset helpoiten?', answer: 'Olet 110 prosenttisella varmuudella parhaiten kartalla uusien tarjousten pelikent??ll?? yksinkertaisesti seuraamalla sivustomme tarjontaa aktiivisella otteella. Kerrommekin t??ll?? sivulla kaikki ne uudet kasinotarjoukset, joita suosittelemme suurimmalla mahdollisella peukalolla kaikille suomalaispelureille!' },
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
                        <a href={`/kasinotarjoukset/${slug}/`} className="btn scd">Lue lis????!</a>
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
                    <button onClick={this.showLess} type="button" id="showLess">V??hemm??n</button>
                  }
                  {this.state.visible < similarU.totalCount &&
                    <button onClick={this.loadMore} type="button" id="loadMore">N??yt?? lis????</button>
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
                <h2>Usein kysyttyj?? kysymyksi?? kasinotarjouksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? kaikkea kasinotarjoukset voivat pit???? sis??ll????n? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin pelipaikat ovat k??ytt??neet vuosien saatossa runsain mitoin mielikuvitusta my??s erin??isten casino-tarjousten luomiseen, ja n??it?? kampanjoita j??rjestet????nkin nykyisin ????rimm??isen laajalla vaihtelevuudella. Yksitt??isill?? talletuksilla lunastettavien etujen oheen onkin noussut mit?? suurempia kasinotarjouksia, joissa voidaan esimerkiksi arpoa palkintoina maailmanymp??rysmatkoja tai upouusia autoja!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? nettikasino-tarjouksia jaetaan uusille pelaajille? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Uudet pelaajat saavat usein nettikasinotarjouksina erin??isi?? tervetuliaislahjoja, jotka voivat sis??lt???? esimerkiksi talletuksilla - tai jopa talletuksetta - saatavia bonarisummia sek?? ilmaisspinnej??, mutta my??s k??teispalautuksina tunnettuja cashbackeja. N??iden uusien pelaajien casinotarjousten avulla pelaaminen voikin alkaa n??ill?? pelipaikoilla huomattavasti pienemm??ll?? rahallisella riskill??.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Voivatko my??s vanhat asiakkaat saada kasinotarjouksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? voivat ja itseasiassa valtaosa netin casino tarjouksista j??rjestet????nkin juuri vanhoille pelaajille erin??isten kampanjoiden, arvontojen, turnausten ja muiden kilpailujen muodossa. Toki on my??s huomautettava, ett?? my??s vanhoille pelaajille suunnatut kasinotarjoukset saattavat sis??lt???? pelk??st????n perinteisi?? talletuksilla lunastettavia ilmaiskieppej?? tai bonarisummia.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? s????nt??j?? ja ehtoja casino tarjoukset sis??lt??v??t useimmiten? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">L??hes kaikilla kasinotarjouksilla on aina jonkinlainen aikarajoitus, joka m????r???? sen, min?? aikoina tarjous on lunastettavissa tai kuinka pitk????n pelaajalla on mahdollisuus osallistua yksitt??iseen kampanjaan. Osallistumiseen liittyy my??s joskus erin??isi?? talletus- tai panostusehtoja, joiden lis??ksi tarjous-palkkiona jaettavat edut voivat tietty sis??lt???? my??s kierr??tysvaatimuksia.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Lunastin kasinotarjouksen, mutta edut j??iv??t saamatta - miksi n??in?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??llaiseen probleemaan on k??yt??nn??ss?? vain kaksi mahdollista vastausta. Ensinn??kin kyseinen kasinotarjous ei ollut v??ltt??m??tt?? en???? voimassa vaan sen kampanja-aika oli saattanut ehti?? jo p????tty??. Toisaalta, n??m?? casino-tarjoukset voivat sis??lt???? aikarajoituksen ohessa my??s muita s????nt??j?? lunastamisen suhteen, jotka sinulta saattoi j????d?? huomaamatta. N??ist?? syist?? tarjouksiin kannattaakin paneutua ehtojen puolesta aina tarkasti etuk??teen!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? l??yd??n kaikki uudet kasinotarjoukset helpoiten?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Olet 110 prosenttisella varmuudella parhaiten kartalla uusien tarjousten pelikent??ll?? yksinkertaisesti seuraamalla sivustomme tarjontaa aktiivisella otteella. Kerrommekin t??ll?? sivulla kaikki ne uudet kasinotarjoukset, joita suosittelemme suurimmalla mahdollisella peukalolla kaikille suomalaispelureille!</p>
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
