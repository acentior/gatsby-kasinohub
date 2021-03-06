// Online Casino - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import Slider from "react-slick";
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class OnlineCasino extends React.Component {
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
    const page = get(this, 'props.data.contentfulPageOnlineCasinoSivu')
    const tarjoukset = get(this, 'props.data.allContentfulUutinen')
    //Slider settings
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
            canonical='https://kasinohub.com/online-casino/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/online-casino/',
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
            url='https://kasinohub.com/online-casino/'
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
              { question: 'Onko online casino -sivuilla pelaaminen laillista Suomessa?', answer: 'Veikkauksen monopolin vuoksi kotoisen valtiomme rajojen sis??ll?? ei voi toimia yht??k????n kivijalka-casinoa, mutta kielto ei vaikuta Internetin monimuotoisessa maailmassa. Jokainen online casino onkin siis t??ysin vapaa ja laillinen pelipaikka kaikille suomalaispelaajille, eik?? sinivalkoisten pelurien ole mik????n pakko pelata pelk??st????n Veikkauksen omalla, rupuisella casinolla.' },
              { question: 'Mik?? on paras uusi (best new) online casino 2022 vuonna?', answer: 'Netist?? l??ytyy monia ep??virallisia best new online casino 2022 -rankingeja ja ????nestyksi??, joiden lis??ksi online casinoiden parhautta m????ritell????n my??s virallisten, vuosittaisten palkintogaalojen kautta. Toimitustiimimme sis??isen online casino ranking -katsauksen voit l??yt???? tietty helpoiten t??lt?? sivulta!' },
              { question: 'Mist?? tied??n onko tietty online casino verovapaa pelipaikka?', answer: 'Casino-voitot ovat verotuksen alaista tuloa, mik??li n??m?? voitot on nostettu sellaiselta online casinolta, joka toimii Euroopan talousalueen ulkopuolisesta maasta k??sin. Mik??li taasen online casino omistaa ETA-alueeseen kuuluvan maan my??nt??m??n toimitalisenssin, on kyseess?? verovapaa pelipaikka kaikille suomalaispelureille.' },
              { question: 'Miten toimii online casino, joka ei vaadi pelaajalta rekister??itymist???', answer: 'Tilivapaaseen malliin toimiva online casino toimii siis siten, ettei pelaajan tarvitse t??ytt???? mit????n rekister??intikaavakkeita omaa k??ytt??j??tili?? avatessaan. T??llaiset rekister??intivapaat online casinot mahdollistavatkin pelaamisen aloittamisen helpon ja huipputurvallisen verkkopankkitunnistautumisen kautta, jonka my??t?? casinon k??ytt??j??tilillesi p????see jatkossakin vain sinun henkil??kohtaisilla pankkitunnuksilla.' },
              { question: 'Kuinka voin siirt???? online casino -tililleni rahaa?', answer: 'Rahansiirtomenetelmi?? on tarjolla online casino -markkinoilla useita erilaisia, ja eri casinoilla onkin tarjolla usein n??it?? maksutapoja vaihtelevasti. Sinun t??ytyykin vain valita talletuksen teon ohessa se maksutapa, jota haluat rahansiirrossa k??ytt???? - aivan kuten tekisit maksua vaikka jossakin verkkopankissa. Kun olet vahvistanut maksun, siirtyy talletussumma kyseisen online casinon k??ytt??j??tilillesi v??litt??m??sti.' },
              { question: 'Millaisia tervetuliaislahjoja online casinot voivat tarjota?', answer: 'Kilpailu on online casino -markkinoilla eritt??in kovaa, sill?? lukuisat eri pelipaikat joutuvat taistelemaan pelaajien huomiosta. T??ss?? valossa monet casinot jakavatkin usein uusille pelaajilleen niin sanottuja tervetuliaisetuja, jotka voivat sis??lt???? joko tilin avaamisesta tai ensitalletuksesta saatavia ilmaiskieppej?? tai bonusrahaa.' },
            ]}
          />
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanTeksti.json, {
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
              <h3 className="listHead">Best online casinos - TOP 20</h3>
              <table className="casinoTable">
                <tbody>
                  {page.bestOnlineCasinosLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/nettikasinot/">Selaa lis???? nettikasinoita...</a>
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
              <h3 className="listHead">New online casinos 2022 - TOP 10</h3>
              <table className="casinoTable">
                <tbody>
                  {page.newOnlineCasinosLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <h3 className="listHead">Pay n Play online casinos - TOP 10</h3>
              <table className="casinoTable">
                <tbody>
                  {page.tilivapaatOnlineCasinotLista.map(({kasinonNimi,kasinonSlug,snntJaEhdot,poistaLinkkiArvosteluun,affiliateLinkki,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pikakasinot/">Lis???? pikakasinoita 2022...</a>
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
              <div className="related">
                <h2>Uusimmat online casino -kampanjat:</h2>
                <Slider {...settings}>
                {tarjoukset.edges.map(({node})=>(
                  <div key={`${node.slug}`} className="scroller">
                    <div>
                      <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title} width="358" height="200" />
                      <a href={`/kasinotarjoukset/${node.slug}/`} className="title"><h3>{node.title}</h3></a>
                      <p className="date">{node.publishDate}</p>
                      {node.introTextOnlineCasinoSivuScroller !== null &&
                        <div className="text">{node.introTextOnlineCasinoSivuScroller.introTextOnlineCasinoSivuScroller}</div>
                      }
                      {node.introTextOnlineCasinoSivuScroller == null && 
                        <div className="text">-</div>
                      }
                      <div className="btns">
                        {node.kasino !== null &&
                        <a href={node.kasino.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                        }
                        <a href={`/kasinotarjoukset/${node.slug}/`} className="btn scd">Lue lis????!</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <div className="wrapperText">{documentToReactComponents(page.alaosanTeksti2.json, {
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
                <h2>Usein kysyttyj?? kysymyksi?? online casinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko online casino -sivuilla pelaaminen laillista Suomessa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Veikkauksen monopolin vuoksi kotoisen valtiomme rajojen sis??ll?? ei voi toimia yht??k????n kivijalka-casinoa, mutta kielto ei vaikuta Internetin monimuotoisessa maailmassa. Jokainen online casino onkin siis t??ysin vapaa ja laillinen pelipaikka kaikille suomalaispelaajille, eik?? sinivalkoisten pelurien ole mik????n pakko pelata pelk??st????n Veikkauksen omalla, rupuisella casinolla.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mik?? on paras uusi (best new) online casino 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netist?? l??ytyy monia ep??virallisia best new online casino 2022 -rankingeja ja ????nestyksi??, joiden lis??ksi online casinoiden parhautta m????ritell????n my??s virallisten, vuosittaisten palkintogaalojen kautta. Toimitustiimimme sis??isen online casino ranking -katsauksen voit l??yt???? tietty helpoiten t??lt?? sivulta!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? tied??n onko tietty online casino verovapaa pelipaikka? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Casino-voitot ovat verotuksen alaista tuloa, mik??li n??m?? voitot on nostettu sellaiselta online casinolta, joka toimii Euroopan talousalueen ulkopuolisesta maasta k??sin. Mik??li taasen online casino omistaa ETA-alueeseen kuuluvan maan my??nt??m??n toimitalisenssin, on kyseess?? verovapaa pelipaikka kaikille suomalaispelureille.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten toimii online casino, joka ei vaadi pelaajalta rekister??itymist??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tilivapaaseen malliin toimiva online casino toimii siis siten, ettei pelaajan tarvitse t??ytt???? mit????n rekister??intikaavakkeita omaa k??ytt??j??tili?? avatessaan. T??llaiset rekister??intivapaat online casinot mahdollistavatkin pelaamisen aloittamisen helpon ja huipputurvallisen verkkopankkitunnistautumisen kautta, jonka my??t?? casinon k??ytt??j??tilillesi p????see jatkossakin vain sinun henkil??kohtaisilla pankkitunnuksilla.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka voin siirt???? online casino -tililleni rahaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Rahansiirtomenetelmi?? on tarjolla online casino -markkinoilla useita erilaisia, ja eri casinoilla onkin tarjolla usein n??it?? maksutapoja vaihtelevasti. Sinun t??ytyykin vain valita talletuksen teon ohessa se maksutapa, jota haluat rahansiirrossa k??ytt???? - aivan kuten tekisit maksua vaikka jossakin verkkopankissa. Kun olet vahvistanut maksun, siirtyy talletussumma kyseisen online casinon k??ytt??j??tilillesi v??litt??m??sti.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia tervetuliaislahjoja online casinot voivat tarjota? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kilpailu on online casino -markkinoilla eritt??in kovaa, sill?? lukuisat eri pelipaikat joutuvat taistelemaan pelaajien huomiosta. T??ss?? valossa monet casinot jakavatkin usein uusille pelaajilleen niin sanottuja tervetuliaisetuja, jotka voivat sis??lt???? joko tilin avaamisesta tai ensitalletuksesta saatavia ilmaiskieppej?? tai bonusrahaa.</p>
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

export default OnlineCasino

export const pageQuery = graphql`
  query OnlineCasinoQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageOnlineCasinoSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        modify: modifyDate(formatString:"DD.MM.YYYY")
        publish: publishDate(formatString:"DD.MM.YYYY")
        modifyDate
        publishDate
        kuva {
          file {url}
          title
        }
        bestOnlineCasinosLista {
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
        newOnlineCasinosLista {
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
        tilivapaatOnlineCasinotLista {
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
        ylaosanTeksti {
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
        alaosanTeksti2 {
          json
        }
      }
      allContentfulUutinen(limit: 5, filter: {node_locale: {eq: "fi-FI"}}) {
        edges {
          node {
            title
            slug
            publishDate(formatString:"DD.MM.YYYY")
            heroImage {
              file {url}
              title
            }
            introTextOnlineCasinoSivuScroller {
              introTextOnlineCasinoSivuScroller
            }
            kasino {
              affiliateLinkki
            }
          }
        }
      }
  }
`
