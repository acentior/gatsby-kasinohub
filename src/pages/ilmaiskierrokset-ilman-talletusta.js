// Ilmaiskierroksia - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import Slider from "react-slick";
import { FAQJsonLd, GatsbySeo, ArticleJsonLd  } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Ilmaiskierroksia extends React.Component {
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
    var elem = document.getElementById("ik");
    elem.classList.add("current");

  }
  render() {
    const page = get(this, 'props.data.contentfulPageIlmaiskierroksiaSivu')
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
            canonical='https://kasinohub.com/ilmaiskierrokset-ilman-talletusta/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/ilmaiskierrokset-ilman-talletusta/',
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
              { question: 'Mitkä casinot jakavat eniten ilmaiskierroksia 2022 vuonna?', answer: 'Jos olet metsästämässä tilillesi ilmaiskierroksia tänään, olet saapunut oikeaan paikkaan. Vuoden 2022 aikana eniten ilmaiskierroksia saatkin lunastettua siis helposti vain sivustomme tarjontaa silmälläpitäen, sillä tältä sivulta löytyykin yksinkertaisesti ihan jokainen sellainen casino, jonka tarjousvalikoimista voit käydä nämä ilmaiskierrokset käydä omaan taskuusi poimimassa. Etuja onkin luvassa kattavasti sekä uusille kuin myös vanhoille pelaajille suunnattuna!' },
              { question: 'Mitä ehtoja ja rajoituksia ilmaiskierrokset useimmiten sisältävät?', answer: 'Kukin casino jakaa ilmaiskierroksia erilaisin ehdoin, säännöin ja rajoituksin, jä nämä koskevat useimmiten esimerkiksi sitä, että jaetut ilmaispyöräytykset ovat pelattavissa vain yhdessä tai muutamissa peleissä. Muita vaihtelevia rajoituksia voivat olla erinäiset kierrätysehdot, talletusvaatimukset, voittokatot, panostus- sekä aikarajat.' },
              { question: 'Ovatko casinoiden ilmaiskierrokset ilman talletusta silkkaa huijausta?', answer: 'Eivät ole missään nimessä, vaikkakin toisinaan ilmaiskierroksilla voittaminen voikin olla hankalaa suurten kierrätysehtojen vuoksi. Ilmaiskierrokset ilman talletusta ovat kuitenkin kaikkinensa loistava ilmaislahja casinoilta pelaajille, joiden myötä eri pelipaikkojen ja yksittäisten pelien testaaminen on pelureille parhaimmillaan sekä ilmaista että täysin riskitöntä.' },
              { question: 'Miten ilmaiskierrokset ilman talletusta voidaan lunastaa?', answer: 'Myös lunastamistavat vaihtelevat casinoilla jonkin verran, kun ilmaiskierroksia ilman talletusta lähdetään hyödyntämään. Joillakin casinoilla talletusvapaat ilmaiskierrokset ilmestyvät pelaajien käyttäjätileille esimerkiksi automaattisesti rekisteröitymiskaavakkeen ohjeidenmukaisen täyttämisen jälkeen, mutta toisinaan nämä ilmaiset pelikierrokset on pyydettävä erikseen casinon asiakaspalvelusta.' },
              { question: 'Voiko casino-ilmaiskierroksilla voittaa oikeaa rahaa?', answer: 'Oikean rahan voittominen on aina mahdollista, mutta tällaiset casino ilmaiskierrokset sisältävät kuitenkin useimmiten omat kierrätysehtonsa niillä saavutettuja voittoja koskien. Mikäli kierrätysehdot ovat ilmaispyöräytyksten suhteen voimassa, on sinun panostettava näillä kierroksilla voittamasi varat casinolla läpi määrätyn monta kertaa ennen kuin voitot muuttuvat oikeaksi, kotiutuskelpoiseksi valuutaksi.' },
              { question: 'Mitä kierrätysvapaat ilmaiskierrokset ovat?', answer: 'Sellaiset ilmaiskierrokset, jotka saa casinolle ilman kierrätystä, ovat ehdottomasti parhaita etuja näissä karkeloissa. Näitä ilmaiskierroksia koskevia voittoja ei tarvitsekaan kierrättää casinon peleissä laisinkaan, jolloin voit nostaa kaikki näillä pelipyöräytyksillä saavuttamasi voitot tililtäsi vaikka välittömästi. Toisin sanoen ilmaiskierrokset ilman kierrätystä voivat siis johtaa todennäköisemmin oikean rahan voittamiseen.' },
              { question: 'Onko ilmaiskierrokset tarjolla vain casinon uusille asiakkaille?', answer: 'Näin vuonna 2022 casinot jakavat ilmaiskierrokset pelaajilleen useilla eri tavoilla niin tervetuliaislahjojen kuin myös suurempien kampanjakokonaisuuksien puitteissa. Tänään ja huomenna ilmaiskierroksia onkin siis saatavilla moneen eri tyyliin, ja näin ollen myös ilman talletusta jaettavia pelikierroksia on tarjolla niin uusille kuin myös vanhoille asiakkaille.' },
            ]}
          />
          <ArticleJsonLd
            url='https://kasinohub.com/ilmaiskierrokset-ilman-talletusta/'
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
              <h3 className="listHead">Ilmaiskierrokset ilman talletusta 2022 vuodelle</h3>
              <i className="update">Päivitetty: {page.ilmaiskierroksiaIlmanTalletustaPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.ilmaiskierroksiaIlmanTalletustaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.ilmaiskierroksiaSivuIlmanTalletustaLista.ilmaiskierroksiaSivuIlmanTalletustaLista}</div>
                              }
                              {listatekstit == null &&
                                <div>-</div>
                              }
                            </div>
                        </div>
                        <div className="contentButton">
                            <div className="contentBtn only">
                                <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
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
              <a className="listBtn" href="/casino-bonukset/">Löydät lisää casinobonuksia täältä!</a>
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage"  width="300" height="300"/>
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
              <h3 className="listHead">Ilmaiskierroksia casinoille tallettaville</h3>
              <i className="update">Päivitetty: {page.ilmaiskierroksiaTalletuksillaPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.ilmaiskierroksiaTalletuksillaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`ikt${kasinonSlug}`}>
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
                                <div>{listatekstit.ilmaiskierroksiaSivuTalletuksillaLista.ilmaiskierroksiaSivuTalletuksillaLista}</div>
                              }
                              {listatekstit == null &&
                                <div>-</div>
                              }
                            </div>
                        </div>
                        <div className="contentButton">
                            <div className="contentBtn only">
                                <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/talletusbonus/">Lisää talletusbonuksia casinoille...</a>
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
              <h3 className="listHead">Ilmaiskierroksia ilman kierrätystä 2022</h3>
              <table className="casinoTable">
                <tbody>
                {page.ilmaiskierroksiaIlmanKierrtystLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`ikik${kasinonSlug}`}>
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
                                <div>{listatekstit.ilmaiskierroksiaSivuIlmanKierrtystLista.ilmaiskierroksiaSivuIlmanKierrtystLista}</div>
                              }
                              {listatekstit == null &&
                                <div>-</div>
                              }
                            </div>
                        </div>
                        <div className="contentButton">
                            <div className="contentBtn only">
                                <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
                            </div>

                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <a className="listBtn" href="/non-sticky-bonus/">Lisää non sticky bonuksia kasinoille...</a>
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
              <div className="related">
                <h2>Tsekkaa uusimmat kasinokampanjat tästä!</h2>
                <Slider {...settings}>
                {similarU.edges.map(({node})=>(
                  <div key={`${node.slug}`} className="scroller">
                    <div>
                      <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title}  width="358" height="200"/>
                      <a href={`/kasinotarjoukset/${node.slug}/`} className="title"><h3>{node.title}</h3></a>
                      <p className="date">{node.publishDate}</p>
                      {node.introTextIlmaiskierroksetSivuScroller !== null &&
                        <div className="text">{node.introTextIlmaiskierroksetSivuScroller.introTextIlmaiskierroksetSivuScroller}</div>
                      }
                      {node.introTextIlmaiskierroksetSivuScroller == null && 
                        <div className="text">-</div>
                      }                      
                      <div className="btns">
                        {node.kasino !== null &&
                        <a href={node.kasino.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                        }
                        <a href={`/kasinotarjoukset/${node.slug}/`} className="btn scd">Lue lisää!</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <a className="listBtn" href="/kasinotarjoukset/">Lisää tuoreita kasinotarjouksia...</a>
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
              <h3 className="listHead">Ilmaiskierroksia jättipottipeleihin</h3>
              <table className="casinoTable">
                <tbody>
                  {page.jackpotIlmaiskierroksetLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                          </div>
                        }
                    </td>
                  </tr>
                ))}
                </tbody>
              </table> 
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
                <h4 className="listHead">Usein kysyttyjä kysymyksiä ilmaiskierroksista</h4>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä casinot jakavat eniten ilmaiskierroksia 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos olet metsästämässä tilillesi ilmaiskierroksia tänään, olet saapunut oikeaan paikkaan. Vuoden 2022 aikana eniten ilmaiskierroksia saatkin lunastettua siis helposti vain sivustomme tarjontaa silmälläpitäen, sillä tältä sivulta löytyykin yksinkertaisesti ihan jokainen sellainen casino, jonka tarjousvalikoimista voit käydä nämä ilmaiskierrokset käydä omaan taskuusi poimimassa. Etuja onkin luvassa kattavasti sekä uusille kuin myös vanhoille pelaajille suunnattuna!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä ehtoja ja rajoituksia ilmaiskierrokset useimmiten sisältävät?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kukin casino jakaa ilmaiskierroksia erilaisin ehdoin, säännöin ja rajoituksin, jä nämä koskevat useimmiten esimerkiksi sitä, että jaetut ilmaispyöräytykset ovat pelattavissa vain yhdessä tai muutamissa peleissä. Muita vaihtelevia rajoituksia voivat olla erinäiset kierrätysehdot, talletusvaatimukset, voittokatot, panostus- sekä aikarajat.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko casinoiden ilmaiskierrokset ilman talletusta silkkaa huijausta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Eivät ole missään nimessä, vaikkakin toisinaan ilmaiskierroksilla voittaminen voikin olla hankalaa suurten kierrätysehtojen vuoksi. Ilmaiskierrokset ilman talletusta ovat kuitenkin kaikkinensa loistava ilmaislahja casinoilta pelaajille, joiden myötä eri pelipaikkojen ja yksittäisten pelien testaaminen on pelureille parhaimmillaan sekä ilmaista että täysin riskitöntä.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten ilmaiskierrokset ilman talletusta voidaan lunastaa?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Myös lunastamistavat vaihtelevat casinoilla jonkin verran, kun ilmaiskierroksia ilman talletusta lähdetään hyödyntämään. Joillakin casinoilla talletusvapaat ilmaiskierrokset ilmestyvät pelaajien käyttäjätileille esimerkiksi automaattisesti rekisteröitymiskaavakkeen ohjeidenmukaisen täyttämisen jälkeen, mutta toisinaan nämä ilmaiset pelikierrokset on pyydettävä erikseen casinon asiakaspalvelusta.</p>
                </div>    
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko casino-ilmaiskierroksilla voittaa oikeaa rahaa?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Oikean rahan voittominen on aina mahdollista, mutta tällaiset casino ilmaiskierrokset sisältävät kuitenkin useimmiten omat kierrätysehtonsa niillä saavutettuja voittoja koskien. Mikäli kierrätysehdot ovat ilmaispyöräytyksten suhteen voimassa, on sinun panostettava näillä kierroksilla voittamasi varat casinolla läpi määrätyn monta kertaa ennen kuin voitot muuttuvat oikeaksi, kotiutuskelpoiseksi valuutaksi.</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä kierrätysvapaat ilmaiskierrokset ovat?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Sellaiset ilmaiskierrokset, jotka saa casinolle ilman kierrätystä, ovat ehdottomasti parhaita etuja näissä karkeloissa. Näitä ilmaiskierroksia koskevia voittoja ei tarvitsekaan kierrättää casinon peleissä laisinkaan, jolloin voit nostaa kaikki näillä pelipyöräytyksillä saavuttamasi voitot tililtäsi vaikka välittömästi. Toisin sanoen ilmaiskierrokset ilman kierrätystä voivat siis johtaa todennäköisemmin oikean rahan voittamiseen.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko ilmaiskierrokset tarjolla vain casinon uusille asiakkaille?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Näin vuonna 2022 casinot jakavat ilmaiskierrokset pelaajilleen useilla eri tavoilla niin tervetuliaislahjojen kuin myös suurempien kampanjakokonaisuuksien puitteissa. Tänään ja huomenna ilmaiskierroksia onkin siis saatavilla moneen eri tyyliin, ja näin ollen myös ilman talletusta jaettavia pelikierroksia on tarjolla niin uusille kuin myös vanhoille asiakkaille.</p>
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

export default Ilmaiskierroksia

export const pageQuery = graphql`
  query IlmaiskierroksiaQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageIlmaiskierroksiaSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        ilmaiskierroksiaIlmanTalletustaPvm(formatString:"DD.MM.YYYY")
        ilmaiskierroksiaTalletuksillaPvm(formatString:"DD.MM.YYYY")
        ilmaiskierroksiaIlmanTalletustaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            ilmaiskierroksiaSivuIlmanTalletustaLista {
              ilmaiskierroksiaSivuIlmanTalletustaLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        ilmaiskierroksiaTalletuksillaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          poistaLinkkiArvosteluun
          snntJaEhdot
          listatekstit {
            ilmaiskierroksiaSivuTalletuksillaLista {
              ilmaiskierroksiaSivuTalletuksillaLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        ilmaiskierroksiaIlmanKierrtystLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            ilmaiskierroksiaSivuIlmanKierrtystLista {
              ilmaiskierroksiaSivuIlmanKierrtystLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        jackpotIlmaiskierroksetLista {
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
        ylaosanTeksti {
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
        alaosanTeksti {
          json
        }
        alaosanTeksti2 {
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
    allContentfulUutinen (sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}}, limit: 5){
      totalCount
        edges {
          node {
            title
            slug
            publishDate(formatString: "DD.MM.YYYY")
            heroImage {
              file {
                url
              }
              title
            }
            body {
              json
            }
            kasino {
              affiliateLinkki
            }
            introTextIlmaiskierroksetSivuScroller {
              introTextIlmaiskierroksetSivuScroller
            }
          }
        }
      }
  }
`
