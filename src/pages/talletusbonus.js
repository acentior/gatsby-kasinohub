// Casino Bonus - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class CasinoBonus extends React.Component {
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
    var elem = document.getElementById("tb");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageTalletusbonusSivu')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/talletusbonus/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/talletusbonus/',
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
            url='https://kasinohub.com/talletusbonus/'
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
              { question: 'Mik?? casinon talletusbonus oikeasti on?', answer: 'Jos etsit itsellesi lis??arvoa tehtyjen talletusten p????lle, ovat casino-talletusbonukset ehdottomasti loistava etu sinulle. Mik??li casinolla onkin jaossa t??llainen talletusbonus, tarkoittaa se sit??, ett?? pelaaja saa tallettamaansa summaan perustuen tililleen varsinaisen rahan ohessa my??s bonusrahaa talletusbonarissa mainitulla suhteella.' },
              { question: 'Miten voin lunastaa talletusbonuksen?', answer: 'T??m?? operaatio ei ole todellakaan hankala, sill?? talletusbonus l??yt???? useimmiten tiens?? k??ytt??j??tilillesi automaattisesti heti talletuksen teon j??lkeen. Joissakin tapauksissa talletusbonukset saa kuitenkin lunastettua tallettamisen yhteydess?? vartavasten k??ytett??v??n bonuskoodin avulla. Kunkin bonaritarjouksen s????nn??iss?? kerrotaan, mik??li erillisen bonuskoodin k??ytt???? talletuksen lomassa vaaditaan.' },
              { question: 'Ovatko talletusbonukset oikeasti hy??dyllisi???', answer: 'Kyll?? ovat, ehdottomasti. Toimitustiimimme onkin vahvasti sit?? mielt??, ett?? jokainen nettiin ilmestyv?? uusi talletusbonus on aina pelaajien kannalta pelkk???? plussaa, sill?? niiden avulla p????set viihtym????n casinoille sek?? pidemp????n suuremmalla pelikassalla ett?? v??hemm??ll??, omakohtaisella rahallisella riskill??.' },
              { question: 'Voiko talletusbonuksilla voittaa oikeaa rahaa?', answer: 'Jos lunastat talletusbonuksen, kuuluu tuohon saatuun bonusrahasummaan aina jonkunlainen kierr??tysvaatimus, jonka suorittaminen vaaditaan ennen mahdollista voittojen nostamista. Talletusbonus-rahalla voi siis voittaa siin?? miss?? oikeallakin rahalla pelaamalla, mutta kierr??tysvaatimusten vuoksi n??iden voittojen nostaminen casinolta on tietty hankalampaa - mutta ei toki mitenk????n mahdotonta.' },
              { question: 'Millaisia ovat parhaat talletusbonukset casinoilla?', answer: 'Makuasioista ei sanonnan mukaan voida kiistell??. T??st?? huolimatta voimme kyll?? linjata, ett?? ne parhaat talletusbonukset ovat heitt??m??ll?? niit??, joissa casino jakaa bonareita esimerkiksi 500%, 400% tai 300% vastineilla. My??s jokainen 200% talletusbonus on aina ehdottomasti k??ytt??kelpoinen etu, sill?? saat pelikassaasi t??ll??kin prosenttisuhteella muhkeitakin lis??summia talletuksesi ohessa.' },
              { question: 'Mit?? rajoituksia talletusbonus voi sis??lt?????', answer: 'Jokainen jaettava talletusbonus sis??lt???? aina omat s????nn??t, ehdot ja muut rajoitukset, jotka casino itse bonarilleen m????ritt????. N??ihin rajoituksiin voi liitty?? perinteisten kierr??tysvaatimusten ohessa my??s esimerkiksi rajoitukset siit??, miss?? peleiss?? bonarit on mahdollista pelata. Samaan tapaan talletusbonukset voivat sis??lt???? usein my??s erilaisia panostus-, aika- sek?? maksimivoitto-rajoituksia.' },
              { question: 'Miten talletusbonukset kannattaisi casinoilla k??ytt?????', answer: 'Suosittelemme, ett?? kukin pelaaja pelailee casinoilla ylip????t????n vain niit?? pelej??, mitk?? peluria vain itse????n eniten miellytt????. Mik??li haluat kuitenkin optimoida talletusbonus -eduilla saatavat hy??dyt, ja maksimoida samalla voittomahdollisuutesi, voit k??ytt???? talletusbonukset vartavasten sellaisissa peleiss??, joiden palautusprosentit ovat mahdollisimman korkeaa tasoa.' },
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
              <h3 className="listHead">Parhaat talletusbonukset juuri nyt:</h3>
              <table className="casinoTable">
                <tbody>
                {page.parhaatTalletusbonuksetLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.talletusbonusSivuTopLista.talletusbonusSivuTopLista}</div>
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
              <a className="listBtn" href="/casino-bonukset/">Selaa lis???? casinobonuksia t??st??!</a>
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
              <h3 className="listHead">Helposti kotiutettavat talletusbonukset</h3>
              <table className="casinoTable">
                <tbody>
                {page.helpotTalletusbonuksetLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.talletusbonusSivuHelppoKotiuttaaLista.talletusbonusSivuHelppoKotiuttaaLista}</div>
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
              <a className="listBtn" href="/non-sticky-bonus/">Katso non sticky bonukset 2022</a>
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
              <h3 className="listHead">Talletusbonuksia vanhoille pelaajille</h3> 
              <table className="casinoTable">
                <tbody>
                {page.talletusbonuksetVanhoilleLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.talletusbonusSivuVanhoillePelaajilleLista.talletusbonusSivuVanhoillePelaajilleLista}</div>
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
              <a className="listBtn" href="/kasinotarjoukset/">Lis???? uusia kasinotarjouksia!</a>
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
                <h2>Usein kysyttyj?? kysymyksi?? talletusbonuksista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mik?? casinon talletusbonus oikeasti on? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos etsit itsellesi lis??arvoa tehtyjen talletusten p????lle, ovat casino-talletusbonukset ehdottomasti loistava etu sinulle. Mik??li casinolla onkin jaossa t??llainen talletusbonus, tarkoittaa se sit??, ett?? pelaaja saa tallettamaansa summaan perustuen tililleen varsinaisen rahan ohessa my??s bonusrahaa talletusbonarissa mainitulla suhteella.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten voin lunastaa talletusbonuksen?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">T??m?? operaatio ei ole todellakaan hankala, sill?? talletusbonus l??yt???? useimmiten tiens?? k??ytt??j??tilillesi automaattisesti heti talletuksen teon j??lkeen. Joissakin tapauksissa talletusbonukset saa kuitenkin lunastettua tallettamisen yhteydess?? vartavasten k??ytett??v??n bonuskoodin avulla. Kunkin bonaritarjouksen s????nn??iss?? kerrotaan, mik??li erillisen bonuskoodin k??ytt???? talletuksen lomassa vaaditaan.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko talletusbonukset oikeasti hy??dyllisi??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? ovat, ehdottomasti. Toimitustiimimme onkin vahvasti sit?? mielt??, ett?? jokainen nettiin ilmestyv?? uusi talletusbonus on aina pelaajien kannalta pelkk???? plussaa, sill?? niiden avulla p????set viihtym????n casinoille sek?? pidemp????n suuremmalla pelikassalla ett?? v??hemm??ll??, omakohtaisella rahallisella riskill??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko talletusbonuksilla voittaa oikeaa rahaa?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jos lunastat talletusbonuksen, kuuluu tuohon saatuun bonusrahasummaan aina jonkunlainen kierr??tysvaatimus, jonka suorittaminen vaaditaan ennen mahdollista voittojen nostamista. Talletusbonus-rahalla voi siis voittaa siin?? miss?? oikeallakin rahalla pelaamalla, mutta kierr??tysvaatimusten vuoksi n??iden voittojen nostaminen casinolta on tietty hankalampaa - mutta ei toki mitenk????n mahdotonta.</p>
                </div>    
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia ovat parhaat talletusbonukset casinoilla?</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Makuasioista ei sanonnan mukaan voida kiistell??. T??st?? huolimatta voimme kyll?? linjata, ett?? ne parhaat talletusbonukset ovat heitt??m??ll?? niit??, joissa casino jakaa bonareita esimerkiksi 500%, 400% tai 300% vastineilla. My??s jokainen 200% talletusbonus on aina ehdottomasti k??ytt??kelpoinen etu, sill?? saat pelikassaasi t??ll??kin prosenttisuhteella muhkeitakin lis??summia talletuksesi ohessa.</p>
                </div>  
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? rajoituksia talletusbonus voi sis??lt?????</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jokainen jaettava talletusbonus sis??lt???? aina omat s????nn??t, ehdot ja muut rajoitukset, jotka casino itse bonarilleen m????ritt????. N??ihin rajoituksiin voi liitty?? perinteisten kierr??tysvaatimusten ohessa my??s esimerkiksi rajoitukset siit??, miss?? peleiss?? bonarit on mahdollista pelata. Samaan tapaan talletusbonukset voivat sis??lt???? usein my??s erilaisia panostus-, aika- sek?? maksimivoitto-rajoituksia.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten talletusbonukset kannattaisi casinoilla k??ytt?????</h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Suosittelemme, ett?? kukin pelaaja pelailee casinoilla ylip????t????n vain niit?? pelej??, mitk?? peluria vain itse????n eniten miellytt????. Mik??li haluat kuitenkin optimoida talletusbonus -eduilla saatavat hy??dyt, ja maksimoida samalla voittomahdollisuutesi, voit k??ytt???? talletusbonukset vartavasten sellaisissa peleiss??, joiden palautusprosentit ovat mahdollisimman korkeaa tasoa.</p>
                </div>               
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" alt={page.kirjoittaja.kirjoittajanKuva.title} className="lazyload" /></a>
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

export default CasinoBonus

export const pageQuery = graphql`
  query CasinoBonusQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageTalletusbonusSivu {
        title
        seoBrowserTitle
        seoMetaDescription
        parhaatTalletusbonuksetLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            talletusbonusSivuTopLista {
              talletusbonusSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
                url
            }
            title
          }
        }
        helpotTalletusbonuksetLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            talletusbonusSivuHelppoKotiuttaaLista {
              talletusbonusSivuHelppoKotiuttaaLista
            }
          }
          kasinonPieniLogo {
            file {
                url
            }
            title
          }
        }
        talletusbonuksetVanhoilleLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            talletusbonusSivuVanhoillePelaajilleLista {
              talletusbonusSivuVanhoillePelaajilleLista
            }
          }
          kasinonPieniLogo {
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
