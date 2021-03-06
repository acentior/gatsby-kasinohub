// Ilmaista pelirahaa - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class IlmaistaPelirahaa extends React.Component {
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
    var elem = document.getElementById("ip");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageIlmaistaPelirahaaSivu')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/ilmaista-pelirahaa/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/ilmaista-pelirahaa/',
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
            url='https://kasinohub.com/ilmaista-pelirahaa/'
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
              { question: 'Onko ilmainen peliraha oikeasti t??ysin ilmaista rahaa?', answer: 'Vaikka sanotaan, ettei ilmaisia lounaita ole koskaan tarjolla, on t??ss?? poikkeus kyseiseen s????nt????n. Kun casino jakaa ilmaista pelirahaa ilman talletusta, on t??m?? raha mahdollista saada omaan haltuun ilman yhdenk????n euron tai edes sentin tallettamista tai panostamista, jolloin p????set siis pelaamaan casinolla ilmaiseksi.' },
              { question: 'Millaisia ovat suurimmat ilmaista pelirahaa -bonarit?', answer: 'N??in herran vuonna 2022 ilmaista pelirahaa ilman talletusta on jaossa valitettavan harvoin ja suurimmillaan yksitt??iselt?? casinolta voi ilmaista rahaa 30e -arvosta. Huomautamme kuitenkin, ett?? my??s talletusvapaat ilmaisspinnit toimivat periaatteessa ilmaisena pelirahana, ja n??iden kautta voitkin p????st?? pelaamaan casinoille ilmaiseksi jopa useiden kymmenien eurojen arvosta.' },
              { question: 'Miten ilmaista pelirahaa ilman talletusta saa lunastettua helpoiten?', answer: 'Kovin suurta vaivaa ei pelaajan tarvitse onneksi n??hd??, mik??li haarukassa on jokin ilman talletusta jaettava ilmaisen pelirahan tarjous. Pelurin t??ytyykin yksinkertaisesti vain avata oma k??ytt??j??tili kyseess?? olevalle casinolle rekister??intikaavake t??ytt??m??ll??, jonka my??t?? ilmaisraha tulee pelattavaksi uudelle tilillesi.' },
              { question: 'Mist?? voin l??yt???? ilmaista pelirahaa 2022 vuonna?', answer: 'Paras tapa n??iden erikoisetujen l??yt??miseen on yksinkertaisesti sivustomme silm??ll??pit??minen tasaisin v??liajoin. Kerrommekin t??ll?? sivullamme kattavasti kaikki ne pelipaikat, jotka tarjoavat ilmaista pelirahaa 2022 vuoden aikana sek?? uusien pelaajien ett?? vanhempien asiakkaidenkin puolesta. Toivon mukaan siis pelirahaa olisi tulossa tarjolla mahdollisimman paljon!' },
              { question: 'Voiko ilmaisella pelirahaa oikeasti tienata?', answer: 'Kyll?? oikean rahan tienaaminen on aina casinoiden ilmaisrahalla mahdollista, mutta helppoa se harvemmin on. Ilmaista pelirahaa koskevat kierr??tysvaatimukset ovatkin useimmiten huomattavasti mittavampia muihin casinoiden tervetuliaislahjoihin verrattuna, eli toisin sanoen ilmainen raha sek?? sill?? saavutetut voitot voivat olla pahimmillaan hankalasti kotiutettavissa.' },
              { question: 'Lunastin pelirahaa ilman talletusta - milloin voin kotiuttaa sen?', answer: 'Kuten sanottua, ilman talletusta lunastettua pelirahaa ei ole mahdollista kotiuttaa casinolta kuin vasta sitten, kun olet t??ytt??nyt kyseiseen ilmaisrahaan liittyv??t kierr??tysvaatimukset casinon m????r????min reunaehdoin. Lunastettu peliraha tulee siis panostaa l??pi casinon pelivalikoimassa m????r??tyn monta kertaa, jotta kierr??tysvaade t??yttyy. Vasta t??m??n j??lkeen kotiutus on mahdollinen.' },
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
              <h3 className="listHead">Lunasta t??st?? ilmaista pelirahaa ilman talletusta!</h3>
              <i className="update">P??ivitetty: {page.ilmaistaPelirahaaPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.ilmaistaPelirahaaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.ilmaistaPelirahaaSivuIlmanTalletustaLista.ilmaistaPelirahaaSivuIlmanTalletustaLista}</div>
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
                            <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">S????nn??t ja ehdot</a>
                          }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/casino-bonukset/">L??yd??t lis???? casinobonuksia t????lt??!</a>
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
              <h3 className="listHead">Pelirahaa talletusvapaasti ilmaiskierroksilla</h3>
              <i className="update">P??ivitetty: {page.pelirahaaIlmaiskierroksillaPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.pelirahaaIlmaiskierroksillaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.ilmaistaPelirahaaSivuIlmaiskierroksiaLista.ilmaistaPelirahaaSivuIlmaiskierroksiaLista}</div>
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
                            <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">S????nn??t ja ehdot</a>
                          }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/ilmaiskierrokset-ilman-talletusta/">Lis???? ilmaiskierroksia casinoille...</a>
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
              <h3 className="listHead">Vapaata pelirahaa talletusbonareilla</h3>
              <i className="update">P??ivitetty: {page.pelirahaaTalletusbonuksillaPvm}</i>
              <table className="casinoTable">
                <tbody>
                  {page.pelirahaaTalletusbonuksillaLista.map(({kasinonNimi,kasinonSlug,poistaLinkkiArvosteluun,affiliateLinkki,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/talletusbonus/">Lis???? talletusbonuksia kasinoille...</a>
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
                <h4 className="listHead">Usein kysyttyj?? kysymyksi?? ilmaisesta pelirahasta</h4>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko ilmainen peliraha oikeasti t??ysin ilmaista rahaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Vaikka sanotaan, ettei ilmaisia lounaita ole koskaan tarjolla, on t??ss?? poikkeus kyseiseen s????nt????n. Kun casino jakaa ilmaista pelirahaa ilman talletusta, on t??m?? raha mahdollista saada omaan haltuun ilman yhdenk????n euron tai edes sentin tallettamista tai panostamista, jolloin p????set siis pelaamaan casinolla ilmaiseksi.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia ovat suurimmat ilmaista pelirahaa -bonarit?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">N??in herran vuonna 2022 ilmaista pelirahaa ilman talletusta on jaossa valitettavan harvoin ja suurimmillaan yksitt??iselt?? casinolta voi ilmaista rahaa 30e -arvosta. Huomautamme kuitenkin, ett?? my??s talletusvapaat ilmaisspinnit toimivat periaatteessa ilmaisena pelirahana, ja n??iden kautta voitkin p????st?? pelaamaan casinoille ilmaiseksi jopa useiden kymmenien eurojen arvosta.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten ilmaista pelirahaa ilman talletusta saa lunastettua helpoiten? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kovin suurta vaivaa ei pelaajan tarvitse onneksi n??hd??, mik??li haarukassa on jokin ilman talletusta jaettava ilmaisen pelirahan tarjous. Pelurin t??ytyykin yksinkertaisesti vain avata oma k??ytt??j??tili kyseess?? olevalle casinolle rekister??intikaavake t??ytt??m??ll??, jonka my??t?? ilmaisraha tulee pelattavaksi uudelle tilillesi.</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? voin l??yt???? ilmaista pelirahaa 2022 vuonna?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Paras tapa n??iden erikoisetujen l??yt??miseen on yksinkertaisesti sivustomme silm??ll??pit??minen tasaisin v??liajoin. Kerrommekin t??ll?? sivullamme kattavasti kaikki ne pelipaikat, jotka tarjoavat ilmaista pelirahaa 2022 vuoden aikana sek?? uusien pelaajien ett?? vanhempien asiakkaidenkin puolesta. Toivon mukaan siis pelirahaa olisi tulossa tarjolla mahdollisimman paljon!</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko ilmaisella pelirahaa oikeasti tienata?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? oikean rahan tienaaminen on aina casinoiden ilmaisrahalla mahdollista, mutta helppoa se harvemmin on. Ilmaista pelirahaa koskevat kierr??tysvaatimukset ovatkin useimmiten huomattavasti mittavampia muihin casinoiden tervetuliaislahjoihin verrattuna, eli toisin sanoen ilmainen raha sek?? sill?? saavutetut voitot voivat olla pahimmillaan hankalasti kotiutettavissa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Lunastin pelirahaa ilman talletusta - milloin voin kotiuttaa sen?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kuten sanottua, ilman talletusta lunastettua pelirahaa ei ole mahdollista kotiuttaa casinolta kuin vasta sitten, kun olet t??ytt??nyt kyseiseen ilmaisrahaan liittyv??t kierr??tysvaatimukset casinon m????r????min reunaehdoin. Lunastettu peliraha tulee siis panostaa l??pi casinon pelivalikoimassa m????r??tyn monta kertaa, jotta kierr??tysvaade t??yttyy. Vasta t??m??n j??lkeen kotiutus on mahdollinen.</p>
                </div>               
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} className="lazyload" width="60" height="60" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
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

export default IlmaistaPelirahaa

export const pageQuery = graphql`
  query IlmaistapelirahaaQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageIlmaistaPelirahaaSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        ilmaistaPelirahaaPvm(formatString:"DD.MM.YYYY")
        pelirahaaIlmaiskierroksillaPvm(formatString:"DD.MM.YYYY")
        pelirahaaTalletusbonuksillaPvm(formatString:"DD.MM.YYYY")
        ilmaistaPelirahaaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            ilmaistaPelirahaaSivuIlmanTalletustaLista {
              ilmaistaPelirahaaSivuIlmanTalletustaLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        pelirahaaIlmaiskierroksillaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            ilmaistaPelirahaaSivuIlmaiskierroksiaLista {
              ilmaistaPelirahaaSivuIlmaiskierroksiaLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        pelirahaaTalletusbonuksillaLista {
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
