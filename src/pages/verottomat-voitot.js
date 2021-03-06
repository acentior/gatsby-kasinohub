// Verovapaat nettikasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Verovapaat extends React.Component {
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
    var elem = document.getElementById("vv");
    elem.classList.add("current");
  }
  render() {
    const page = get(this, 'props.data.contentfulPageVerovapaatNettikasinot')

    return (
     <Layout location={this.props.location}>
       <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/verottomat-voitot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/verottomat-voitot/',
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
            url='https://kasinohub.com/verottomat-voitot/'
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
              { question: 'Mit?? veroton voitto oikeasti tarkoittaa?', answer: 'Mik??li onnistut saamaan voiton verovapaalta kasinolta, ja aiot tuon voiton kotiuttaa ulos casinolta, ei sinun t??ss?? tapauksessa tarvitse ilmoittaa kyseist?? voittoa Suomen verottajalle laisinkaan. Kyseess?? on siis t??ysin veroton voitto, eik?? kyseinen rahasumma ole siis mill????n mittarilla tuloverotuksen piiriss??.' },
              { question: 'Miten tunnistan verottomat ja verovapaat nettikasinot?', answer: 'Mik??li pelipaikalta l??ytyy hallustaan Euroopan talousalueen sis??lt?? tarjottu lisenssi, voit olla varma, ett?? kyseess?? on verovapaa nettikasino kaikille suomalaispelureille. Euroopan talousalueeseen ETA:aan kuuluukin kaikkien EU-j??senvaltioiden ohella Liechtenstein, Islanti ja Norja, ja mik??li jonkin n??ist?? maista on my??nt??kin pelipaikalle toimintalisenssin, on kyseess?? t??ysin veroton kasino!' },
              { question: 'Kuinka verottomat voitot on mahdollista kotiuttaa?', answer: 'Monet pelipaikat tarjoavat valikoimissaan lukuisia eri rahansiirtotapoja, joilla verottomia voittoja on mahdollista laittaa casinolta nostoon. Normaalisti k??ytett??viss?? onkin verkkopankki- ja luottokorttimaksujen ohessa my??s erilaiset nettilompakkosiirrot. Tilivapaasti toimivilla, verovapailla kasinoilla on taasen mahdollista tehd?? voittojen nostoja useimmiten pelk??st????n verkkopankin kautta.' },
              { question: 'Miksi osa nettikasinoista ei ole verovapaita?', answer: 'Mik??li pelipaikka ei omista ETA-alueeseen kuuluvalta maalta my??nnetty?? toimintalisenssi??, ei kyseess?? ole verovapaa nettikasino. K??yt??nn??ss?? t??m?? tarkoittaa sit??, ett?? casino toimii Curacaon peliviranomaisten my??nt??m??ll?? lupalisenssill??, koska muita ei-verovapaita lisenssej?? ei t??ll?? hetkell?? markkinoilla oikeasti ole.' },
              { question: 'Onko verovapaat nettikasinot aina parempi valinta?', answer: 'Mielest??mme kyll??. Suosittelemmekin kaikille suomalaispelureille eritoten n??it?? verovapaita nettikasinoita, sill?? t??llaisen verottoman pelipaikan valitsemalla otat ensimm??iset askeleesi mahdollisten voittojen maksimoinnin piiriss??. Samalla huomautamme my??s, ett?? kokonaiskuvassa verovapaat kasinot ovat useimmiten my??s laadukkaampia pelipaikkoja muihin kilpailijoihin verrattuna.' },
              { question: 'Onko veroton kasino suomalaisille aina laillinen pelipaikka?', answer: 'Kotoisessa mediassa Veikkaus pyrkii tuomitsemaan ulkomaalaiset pelisaitit parhaansa mukaan laittomiksi pelipaikoiksi, mutta n??m?? v??itteet ovat yksinkertaisesti sataprosenttisen valheellisia. Fakta onkin se, ett?? ihan jokainen veroton nettikasino - sek?? toki my??s ne ei-verovapaat kasinot - ovat kaikille suomipelureille aivan laillisia viihtymispaikkoja viikonp??iv??st?? ja kellonajasta riippumatta.' },
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
              <h3 className="listHead">Verovapaat kasinot takaavat verottomat voitot!</h3>
              <table className="casinoTable">
                <tbody>
                {page.verottomatVoitotSivunTopLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
                    <tr className="casino" key={`vvt${kasinonSlug}`}>
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
                                <div>{listatekstit.verottomatVoitotSivuTopLista.verottomatVoitotSivuTopLista}</div>
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
              <a className="listBtn" href="/kaikki-nettikasinot/">Kaikki nettikasinot l??ytyv??t t????lt??!</a>
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
              <h3 className="listHead">Verottomat voitot ilman tili??</h3>
              <table className="casinoTable">
                <tbody>
                  {page.verottomatVoitotIlmanTiliaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
              <a className="listBtn" href="/pikakasinot/">Selaa lis???? pikakasinoita t??st??!</a>
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
                <h2>Usein kysyttyj?? kysymyksi?? verottomista voitoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mit?? veroton voitto oikeasti tarkoittaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mik??li onnistut saamaan voiton verovapaalta kasinolta, ja aiot tuon voiton kotiuttaa ulos casinolta, ei sinun t??ss?? tapauksessa tarvitse ilmoittaa kyseist?? voittoa Suomen verottajalle laisinkaan. Kyseess?? on siis t??ysin veroton voitto, eik?? kyseinen rahasumma ole siis mill????n mittarilla tuloverotuksen piiriss??.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten tunnistan verottomat ja verovapaat nettikasinot? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mik??li pelipaikalta l??ytyy hallustaan Euroopan talousalueen sis??lt?? tarjottu lisenssi, voit olla varma, ett?? kyseess?? on verovapaa nettikasino kaikille suomalaispelureille. Euroopan talousalueeseen ETA:aan kuuluukin kaikkien EU-j??senvaltioiden ohella Liechtenstein, Islanti ja Norja, ja mik??li jonkin n??ist?? maista on my??nt??kin pelipaikalle toimintalisenssin, on kyseess?? t??ysin veroton kasino!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka verottomat voitot on mahdollista kotiuttaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Monet pelipaikat tarjoavat valikoimissaan lukuisia eri rahansiirtotapoja, joilla verottomia voittoja on mahdollista laittaa casinolta nostoon. Normaalisti k??ytett??viss?? onkin verkkopankki- ja luottokorttimaksujen ohessa my??s erilaiset nettilompakkosiirrot. Tilivapaasti toimivilla, verovapailla kasinoilla on taasen mahdollista tehd?? voittojen nostoja useimmiten pelk??st????n verkkopankin kautta.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi osa nettikasinoista ei ole verovapaita? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mik??li pelipaikka ei omista ETA-alueeseen kuuluvalta maalta my??nnetty?? toimintalisenssi??, ei kyseess?? ole verovapaa nettikasino. K??yt??nn??ss?? t??m?? tarkoittaa sit??, ett?? casino toimii Curacaon peliviranomaisten my??nt??m??ll?? lupalisenssill??, koska muita ei-verovapaita lisenssej?? ei t??ll?? hetkell?? markkinoilla oikeasti ole.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko verovapaat nettikasinot aina parempi valinta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mielest??mme kyll??. Suosittelemmekin kaikille suomalaispelureille eritoten n??it?? verovapaita nettikasinoita, sill?? t??llaisen verottoman pelipaikan valitsemalla otat ensimm??iset askeleesi mahdollisten voittojen maksimoinnin piiriss??. Samalla huomautamme my??s, ett?? kokonaiskuvassa verovapaat kasinot ovat useimmiten my??s laadukkaampia pelipaikkoja muihin kilpailijoihin verrattuna.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko veroton kasino suomalaisille aina laillinen pelipaikka? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kotoisessa mediassa Veikkaus pyrkii tuomitsemaan ulkomaalaiset pelisaitit parhaansa mukaan laittomiksi pelipaikoiksi, mutta n??m?? v??itteet ovat yksinkertaisesti sataprosenttisen valheellisia. Fakta onkin se, ett?? ihan jokainen veroton nettikasino - sek?? toki my??s ne ei-verovapaat kasinot - ovat kaikille suomipelureille aivan laillisia viihtymispaikkoja viikonp??iv??st?? ja kellonajasta riippumatta.</p>
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

export default Verovapaat

export const pageQuery = graphql`
  query VerovapaatQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageVerovapaatNettikasinot {
        title
        seoBrowserTitle
        seoMetaDescription
        verottomatVoitotSivunTopLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            verottomatVoitotSivuTopLista {
              verottomatVoitotSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
                url
            }
            title
          }
        }
        verottomatVoitotIlmanTiliaLista {
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
        ylaosanTeksti1 {
        json
        }
        ylaosanTeksti2 {
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
