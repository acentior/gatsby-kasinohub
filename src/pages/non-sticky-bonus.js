// Non Sticky Bonus - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class NonSticky extends React.Component {
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
    var elem = document.getElementById("nsb");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageNonStickyBonus')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/non-sticky-bonus/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/non-sticky-bonus/',
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
            url='https://kasinohub.com/non-sticky-bonus/'
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
              { question: 'Mist?? non sticky bonukset tunnistaa?', answer: 'Jokainen casinoiden jakama bonari sis??lt???? aina jonkinlaiset s????nn??t, jotka voivat liitty?? sek?? edun lunastamiseen ett?? niiden pelaamiseen ja kierr??tt??miseen. Non sticky bonukset ovatkin t??ss?? tapauksessa sellaisia etuja, joissa kierr??tysvaatimuksen koskevat vain lunastettua bonusrahaa. Toisaalta non sticky bonus -s????nn??iss?? voidaan my??s mainita se, ett?? bonarista on mahdollista luopua tietyin reunaehdoin.' },
              { question: 'Onko non sticky bonus aina parempi kuin normi-bonukset?', answer: 'Mielest??mme kyll??, ehdottomasti. Non sticky bonus nousee muiden bonarien yl??puolelle nimenomaan juuri siksi, ett?? sen lunastaneilla pelaajilla on paremmat mahdollisuudet oikeisiin voittoisiin ylt??miseen. Ja juuri t??st?? syyst?? non-sticky bonukset ovatkin olleet viime aikoina todella suuressa suosiossa kaikkien pelurien keskuudessa.' },
              { question: 'Mik?? ihme on teflon-bonus?', answer: 'Rakkaalla lapsella on monta nime?? - ja t??st?? syyst?? my??s non sticky bonukset tunnetaan markkinoilla lukuisilla eri nimityksill??. Teflon-bonus on n??ist?? yksi, koska teflonhan on ihka oikeaa non sticky -materiaalia. Muita no sticky bonusten synonyymej?? ovat muun muassa laskuvarjobonus, parachute bonus, luovutettava bonus ja forfeitable bonus.' },
              { question: 'Miten arvokas on suurin non sticky bonus 2022 vuonna?', answer: 'Stickyn?? jaettavat uusien asiakkaiden bonarit ovat useimmiten niit?? kaikista suurimpia, mutta n??ihin etuihin liittyy toki my??s l??hes aina kovemmat kierr??tysvaatimukset. Vuoden 2022 osalta non sticky bonukset ovat siis piirun verran pienempi??, mutta parhaimmillaan ne voivat sis??lt???? jopa yli 500 eurojen edest?? lunastettavaa pelivaluuttaa. No sticky bonus -edut eiv??t siis todellakaan ole mit????n parin euron nappikauppaa!' },
              { question: 'Miten no sticky bonus on mahdollista hyl??t???', answer: 'Useimmiten voittojen nostaminen onnistuu non sticky bonusten tapauksissa samaan tapaan kuin normaalistikin, eli laita vain nostopyynt?? sis????n casinolla, ja mik??li t??m?? pyynt?? pelipaikan toimesta hyv??ksyt????n, nollautuvat bonusvarat tililt??si noston yhteydess??. Toisinaan non sticky bonukset voivat olla hyl??tt??viss?? omatoimisesti my??s oman k??ytt??j??tilin bonus-osiosta.' },
              { question: 'Onko non sticky bonuksilla jotain rajoituksia?', answer: 'Kyll?? on, sill?? k??yt??nn??ss?? aina jokainen casinoiden jakama tervetulobonari sis??lt???? aina jonkinlaisia s????nt??j?? ja ehtoja pelaajien kannalta. Non sticky bonukset ovat siis pelaajan halutessa luovutettavissa, jolloin k??teisvoitot ovat my??s helpommin nostettavissa, mutta t??st?? huolimatta non sticky bonuksia koskee monet samat s????nn??t kuin muitakin bonareita, joihin voi kuulua esimerkiksi erilaiset aikarajoitukset ja muut kierr??tysehdot.' },
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
              <h3 className="listHead">Parhaat non sticky bonukset 2022 vuonna</h3>
              <table className="casinoTable">
                <tbody>
                {page.nonstickybonusSivuTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.nonStickyBonusSivuTopLista.nonStickyBonusSivuTopLista}</div>
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
              <a className="listBtn" href="/casino-bonukset/">Selaa lis???? casinobonuksia...</a>
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
                <h2>Non sticky bonukset &amp; Usein kysyttyj?? kysymyksi??</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mist?? non sticky bonukset tunnistaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Jokainen casinoiden jakama bonari sis??lt???? aina jonkinlaiset s????nn??t, jotka voivat liitty?? sek?? edun lunastamiseen ett?? niiden pelaamiseen ja kierr??tt??miseen. Non sticky bonukset ovatkin t??ss?? tapauksessa sellaisia etuja, joissa kierr??tysvaatimuksen koskevat vain lunastettua bonusrahaa. Toisaalta non sticky bonus -s????nn??iss?? voidaan my??s mainita se, ett?? bonarista on mahdollista luopua tietyin reunaehdoin.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko non sticky bonus aina parempi kuin normi-bonukset? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mielest??mme kyll??, ehdottomasti. Non sticky bonus nousee muiden bonarien yl??puolelle nimenomaan juuri siksi, ett?? sen lunastaneilla pelaajilla on paremmat mahdollisuudet oikeisiin voittoisiin ylt??miseen. Ja juuri t??st?? syyst?? non-sticky bonukset ovatkin olleet viime aikoina todella suuressa suosiossa kaikkien pelurien keskuudessa.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Mik?? ihme on teflon-bonus? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Rakkaalla lapsella on monta nime?? - ja t??st?? syyst?? my??s non sticky bonukset tunnetaan markkinoilla lukuisilla eri nimityksill??. Teflon-bonus on n??ist?? yksi, koska teflonhan on ihka oikeaa non sticky -materiaalia. Muita no sticky bonusten synonyymej?? ovat muun muassa laskuvarjobonus, parachute bonus, luovutettava bonus ja forfeitable bonus.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten arvokas on suurin non sticky bonus 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Stickyn?? jaettavat uusien asiakkaiden bonarit ovat useimmiten niit?? kaikista suurimpia, mutta n??ihin etuihin liittyy toki my??s l??hes aina kovemmat kierr??tysvaatimukset. Vuoden 2022 osalta non sticky bonukset ovat siis piirun verran pienempi??, mutta parhaimmillaan ne voivat sis??lt???? jopa yli 500 eurojen edest?? lunastettavaa pelivaluuttaa. No sticky bonus -edut eiv??t siis todellakaan ole mit????n parin euron nappikauppaa!</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten no sticky bonus on mahdollista hyl??t??? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Useimmiten voittojen nostaminen onnistuu non sticky bonusten tapauksissa samaan tapaan kuin normaalistikin, eli laita vain nostopyynt?? sis????n casinolla, ja mik??li t??m?? pyynt?? pelipaikan toimesta hyv??ksyt????n, nollautuvat bonusvarat tililt??si noston yhteydess??. Toisinaan non sticky bonukset voivat olla hyl??tt??viss?? omatoimisesti my??s oman k??ytt??j??tilin bonus-osiosta.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko non sticky bonuksilla jotain rajoituksia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyll?? on, sill?? k??yt??nn??ss?? aina jokainen casinoiden jakama tervetulobonari sis??lt???? aina jonkinlaisia s????nt??j?? ja ehtoja pelaajien kannalta. Non sticky bonukset ovat siis pelaajan halutessa luovutettavissa, jolloin k??teisvoitot ovat my??s helpommin nostettavissa, mutta t??st?? huolimatta non sticky bonuksia koskee monet samat s????nn??t kuin muitakin bonareita, joihin voi kuulua esimerkiksi erilaiset aikarajoitukset ja muut kierr??tysehdot.</p>
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

export default NonSticky

export const pageQuery = graphql`
  query NonStickyQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageNonStickyBonus {
        title
        seoBrowserTitle
        seoMetaDescription
        alaosanTeksti {json}
        ylaosanTeksti1 {json}
        kuva {
          file {
            url
          }
          title
        }
        nonstickybonusSivuTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          poistaLinkkiArvosteluun
          listatekstit {
            nonStickyBonusSivuTopLista {
              nonStickyBonusSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {url}
            title
          }
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
