// Kasinobonus - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Kasinobonus extends React.Component {
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
    const page = get(this, 'props.data.contentfulPagePeruspohja')

    return (
     <Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/kasinobonus/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/kasinobonus/',
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
            url='https://kasinohub.com/kasinobonus/'
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
              { question: 'Miksi nettikasino bonuksia jaetaan niin paljon?', answer: 'Netistä löytyy erilaisia pelipaikkoja niin paljon, että nämä nettipelaamot joutuvat kilpailemaan pelaajien huomiosta muun muassa tällaisia nettikasino-bonuksia jakamalla. Tällaiset edut toimivatkin niin sanottuina sisäänheittotuotteina, joiden avulla pelipaikat houkuttelevat uusia asiakkaita linjoilleen kovan kilpailutilanteen keskellä.' },
              { question: 'Mitä etuja kasinobonus voi pitää sisällään?', answer: 'Netistä löytyy erilaisia kasinobonuksia vaikka millä mitalla, joten lyhyttä vastausta ei tähän kysymykseen voi antaa. Bonareista voikin löytyä esimerkiksi rekisteröitymällä tai tallettamalla saatavia ilmaiskieppejä tai bonusrahaa, mutta toisinaan ne voivat tarjota myös muita bonuspelejä tai vaikkapa onnenpyöräytyksiä. Kasinobonus voi sisältää myös cashback-etuja eli käteispalautuksia.' },
              { question: 'Millaisia ovat parhaat kasinobonukset 2022 vuonna?', answer: 'Mielestämme monipuolisuus ja riskittömyys on valttia myös 2022 vuonna bonarien valinnassa. Tästä syystä toimituksemme mielestä parhaat kasinobonukset sisältävät sekä ilmaisia etuja, mutta myös runsaasti talletusten kautta saatavia ilmaiskieppejä kuin myös bonusrahaa - ja vieläpä korkealla prosenttivastineella. Paras kasinobonus sisältää toki aina myös kepeät kierrätysehdot.' },
              { question: 'Mikä riskitön kasinobonus oikeasti on?', answer: 'Tällaisia riskittömiä kasinobonuksia on periaatteessa kahdenlaisia. Ensinnäkin riskittömästi jaettava bonari voi olla sellainen, jonka pelaaja saa ilmaiseksi ilman yhdenkään euron tallettamista tai panostamista, jolloin peluri ei voi yksinkertaisesti oikeaa rahaa hävitä. Toisaalta riskitön kasinobonus voi olla myös sellainen, jossa pelipaikka palauttaa asiakkaalleen bonarin myötä hävityt rahat, mikäli pelaaja ei onnistu bonuksella voittoja kaapimaan.' },
              { question: 'Onko kasinobonuksilla jotain rajoituksia tai ehtoja?', answer: 'Kyllä on, ja itseasiassa jokaisella kasinobonuksella on aina jonkinlaisia sääntöjä ja rajoituksia, jotka pelaajien kannattaa huomioida. Kasinobonus voi olla sidottu esimerkiksi erinäisten kierrätysehtojen, pelikohtaisten rajoitusten, aikarajoitteiden tai voittokattojen puolesta.' },
              { question: 'Kuinka arvokas markkinoiden suurin nettikasinobonus on?', answer: 'Bonarien suuruutta voidaan hahmottaa kahdella eri tapaa. Prosentuaalisesti suurin kasinobonus voi liikkua siellä 400% ja 500% prosenttien lukemissa, mutta euroissa määriteltynä isoimmat kasinobonukset ovat jopa useampien tuhansien eurojen arvoisia. Näiden useiden tonnien arvoisten bonarien lunastaminen vaatii kuitenkin pelaajilta myös huomattavan isoja talletussummia. ' },
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
              <h3 className="listHead">Valitse itsellesi paras kasinobonus tästä:</h3>
              <table className="casinoTable">
                <tbody>
                {page.topLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.kasinobonusSivuTopLista.kasinobonusSivuTopLista}</div>
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
              <a className="listBtn" href="/casino-bonukset/">Lisää casinobonuksia 2022...</a>
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
                <h2>Kasinobonus - Usein kysyttyjä kysymyksiä</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi nettikasino bonuksia jaetaan niin paljon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netistä löytyy erilaisia pelipaikkoja niin paljon, että nämä nettipelaamot joutuvat kilpailemaan pelaajien huomiosta muun muassa tällaisia nettikasino-bonuksia jakamalla. Tällaiset edut toimivatkin niin sanottuina sisäänheittotuotteina, joiden avulla pelipaikat houkuttelevat uusia asiakkaita linjoilleen kovan kilpailutilanteen keskellä.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitä etuja kasinobonus voi pitää sisällään? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netistä löytyy erilaisia kasinobonuksia vaikka millä mitalla, joten lyhyttä vastausta ei tähän kysymykseen voi antaa. Bonareista voikin löytyä esimerkiksi rekisteröitymällä tai tallettamalla saatavia ilmaiskieppejä tai bonusrahaa, mutta toisinaan ne voivat tarjota myös muita bonuspelejä tai vaikkapa onnenpyöräytyksiä. Kasinobonus voi sisältää myös cashback-etuja eli käteispalautuksia.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia ovat parhaat kasinobonukset 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mielestämme monipuolisuus ja riskittömyys on valttia myös 2022 vuonna bonarien valinnassa. Tästä syystä toimituksemme mielestä parhaat kasinobonukset sisältävät sekä ilmaisia etuja, mutta myös runsaasti talletusten kautta saatavia ilmaiskieppejä kuin myös bonusrahaa - ja vieläpä korkealla prosenttivastineella. Paras kasinobonus sisältää toki aina myös kepeät kierrätysehdot.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Mikä riskitön kasinobonus oikeasti on? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tällaisia riskittömiä kasinobonuksia on periaatteessa kahdenlaisia. Ensinnäkin riskittömästi jaettava bonari voi olla sellainen, jonka pelaaja saa ilmaiseksi ilman yhdenkään euron tallettamista tai panostamista, jolloin peluri ei voi yksinkertaisesti oikeaa rahaa hävitä. Toisaalta riskitön kasinobonus voi olla myös sellainen, jossa pelipaikka palauttaa asiakkaalleen bonarin myötä hävityt rahat, mikäli pelaaja ei onnistu bonuksella voittoja kaapimaan.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko kasinobonuksilla jotain rajoituksia tai ehtoja? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä on, ja itseasiassa jokaisella kasinobonuksella on aina jonkinlaisia sääntöjä ja rajoituksia, jotka pelaajien kannattaa huomioida. Kasinobonus voi olla sidottu esimerkiksi erinäisten kierrätysehtojen, pelikohtaisten rajoitusten, aikarajoitteiden tai voittokattojen puolesta.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka arvokas markkinoiden suurin nettikasinobonus on? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Bonarien suuruutta voidaan hahmottaa kahdella eri tapaa. Prosentuaalisesti suurin kasinobonus voi liikkua siellä 400% ja 500% prosenttien lukemissa, mutta euroissa määriteltynä isoimmat kasinobonukset ovat jopa useampien tuhansien eurojen arvoisia. Näiden useiden tonnien arvoisten bonarien lunastaminen vaatii kuitenkin pelaajilta myös huomattavan isoja talletussummia. </p>
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

export default Kasinobonus

export const pageQuery = graphql`
  query KasinobonusQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePeruspohja(title: {eq: "Kasinobonus"}) {
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
          kasinobonusSivuTopLista {
            kasinobonusSivuTopLista
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
