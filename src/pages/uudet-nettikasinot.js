// Uudet kasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import Slider from "react-slick";
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class UudetKasinot extends React.Component {
  componentDidMount() {
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
    var elem = document.getElementById("un");
    elem.classList.add("current");
    var collapse = document.getElementsByClassName("accordion-title");
    var c;
    for (c = 0; c < collapse.length; c++) {
      collapse[c].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");  
      })
    }
    var lisa = document.getElementsByClassName("lisatieto");
		var j;
		for (j = 0; j < lisa.length; j++) {
			lisa[j].addEventListener("click", function() {
				this.classList.toggle("active");
				if (this.parentNode.parentNode.nextElementSibling.style.display === "inline-block") {
					this.parentNode.parentNode.nextElementSibling.style.display = "none";
					this.innerHTML = '<a class="btn">Lue lisää</a>';
				} else {
					this.parentNode.parentNode.nextElementSibling.style.display = "inline-block";
					this.innerHTML = '<a class="btn">Sulje</a>';
				}
			});
		}
  }
  render() {
    const page = get(this, 'props.data.contentfulPageUudetKasinotSivu')
    const kasino = get(this.props, 'data.allContentfulKasino')

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
            canonical='https://kasinohub.com/uudet-nettikasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/uudet-nettikasinot/',
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
            url='https://kasinohub.com/uudet-nettikasinot/'
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
              { question: 'Mistä tiedän voiko uusiin nettikasinoihin luottaa?', answer: 'Helpoiten tapa löytää luotettava uusi nettikasino on tutkia sivustoltamme löytyvää tarjontaa. Emme nimittäin hyväksy sivuillemme yhtäkään sellaista pelipaikkaa, jonka toiminnasta jotain moitittavaa löytyy. Voitkin siis olla varma, että kaikki sivustoltamme 2022 vuonna löytyvät uudet nettikasinot ovat sataprosenttisen luotettavia toimijoita markkinoilla!' },
              { question: 'Miksi uusi nettikasino kannattaa valita vanhemman pelipaikan sijasta?', answer: 'Markkinoiden suurimmat pelipaikat ovat niitä pisimpään alalla toimineita toimijoita, mutta tietyissä tapauksissa myös uudet kasinot saattavat olla näitä vanhoja sivustoja parempi valinta. Esimerkiksi mikäli tykkäät hyödyntää erinäisiä bonareita mahdollisimman paljon, on uusi nettikasino tässä tapauksessa aina hyvä valinta, sillä uutena asiakkaana pääset pelaamaan näille tuoreille pelipaikoille lähes aina jonkinlaisen bonarin turvin!' },
              { question: 'Millaisia trendejä vuoden 2022 uudet nettikasinot pitävät sisällään?', answer: 'Casino-ala on kehittynyt suuresti viimeisten vuosien aikana, ja uskomme vahvasti, että tämä kehitys jatkuu myös kuluvana vuonna. Olemmekin melkoisen varmoja esimerkiksi siitä, että uudet nettikasinot 2022 vuonna keskittyvät eritoten pelaamisen helppouteen, jolloin tilivapaasti toimivat pelipaikat jatkavat nousuaan. Uskomme myös, että nämä vuoden 2022 uudet kasinot tulevat kehittelemään myös uusia gamification-ominaisuuksia sekä muita casino-innovaatioita pelaajiensa viihdyttämiseksi.' },
              { question: 'Minkä takia uusia nettikasinoita tulee tarjolle niin paljon?', answer: 'Uhkapelaaminen on ollut yllättävänkin suuressa suosiossa ympäri maailman jo aikojen alusta saakka, ja tämä ala-kohtainen suosio onkin vain jatkunut näin Internetin aikakaudella. Casino-ala onkin yksinkertaisesti sanottuna vain niin suuri bisnes, että uusia nettikasinoita tulee eri peliyhtiöiltä ja toimijoilta markkinoille todella kovaa tahtia.' },
              { question: 'Millaisia ovat parhaat uudet nettikasinot 2022 vuonna?', answer: 'Netin kovimmat pelipaikat ovat asettaneet laatustandardit niin äärimmäisen korkealle, etteivät monet uudet kasinot näihin sfääreihin yllä. Esimerkiksi vanhemmat casinot huomioivat asiakkaitaan usein siirempien kampanjoiden myötä. Onneksi poikkeuksiakin toki löytyy, ja uskomme vahvasti, että vuoden 2022 parhaat uudet nettikasinot pystyvät sekä huomioimaan pelaajat hyvien kampanjoiden ja etujen puitteissa että tarjoamaan alan parhaat ja nopeimmat ominaisuudet sekä palvelut pelaajien käyttöön.' },
              { question: 'Mistä voin löytää kaikki uudet nettikasinot helpoiten?', answer: 'Tähän löytyy helppo vastaus kuin apteekin hyllyltä. Uudet nettikasinot löytyy heittämällä helpoiten täältä meidän sivustoltamme, sillä keräämme tälle sivulle netin uusimmat kasinot kattavasti esiteltyinä ja arvioituina. Jos siis haussa on uusi nettikasino 2022 vuodelle, tarkasta sivustomme tarjonta aina ensimmäisenä!' },
            ]}
          />
         <div className="container">
            <div className="top">
              <PageTitle>{page.title}</PageTitle>
            </div>
            <div className="wrapper">
              <div className="wrapperText">
                {documentToReactComponents(page.ylaosanteksti.json, {
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
              <h3 className="listHead">Uusimmat nettikasinot 2022 vuonna</h3>
              <i className="update">Päivitetty: {page.uudetNettikasinotListanPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.uudetNettikasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo,livechat,sivutkaannetty,suomiAsiakaspalvelu,suomiKampanjat,minimitalletus,rahansiirrot}) => (
                  <tr className="casino" key={`topetu${kasinonSlug}`}>
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
                          <div>{listatekstit.uudetNettikasinotSivuTopLista.uudetNettikasinotSivuTopLista}</div>
                        }
                        {listatekstit == null &&
                          <div>-</div>
                        }
                      </div>
                    </div>
                    <div className="contentButton">
                      <div className="contentBtn">
                          <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Kasinolle</a>
                      </div>
                      <div className="contentBtn lisatieto">
                          <div className="btn">Lue lisää</div>
                      </div>
                      {snntJaEhdot != null &&
                        <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                      }
                    </div>
                  </td>
                  <td className="bottom">
                    <hr/>
                    <div className="box">
                      <h4>Sopiiko suomalaisille?</h4>
                      <div className="boolean">Livechat: 
                        {livechat.toString() === 'true' && <img data-src='/images/boolean/true.svg' alt="true icon" className="lazyload" width="15" height="15"/>}
                        {livechat.toString() === 'false' && <img data-src='/images/boolean/false.svg' alt="false icon" className="lazyload" width="15" height="15"/>}</div>
                      <div className="boolean">Sivut suomeksi: 
                        {sivutkaannetty.toString() === 'true' && <img data-src='/images/boolean/true.svg' alt="true icon" className="lazyload" width="15" height="15"/>}
                        {sivutkaannetty.toString() === 'false' && <img data-src='/images/boolean/false.svg' alt="false icon" className="lazyload" width="15" height="15"/>}</div>
                      <div className="boolean">Asiakaspalvelu suomeksi: 
                        {suomiAsiakaspalvelu.toString() === 'true' && <img data-src='/images/boolean/true.svg' alt="true icon" className="lazyload" width="15" height="15"/>}
                        {suomiAsiakaspalvelu.toString() === 'false' && <img data-src='/images/boolean/false.svg' alt="false icon" className="lazyload" width="15" height="15"/>}</div>
                      <div className="boolean">Suomi kampanjat: 
                        {suomiKampanjat.toString() === 'true' && <img data-src='/images/boolean/true.svg' alt="true icon" className="lazyload" width="15" height="15"/>}
                        {suomiKampanjat.toString() === 'false' && <img data-src='/images/boolean/false.svg' alt="false icon" className="lazyload" width="15" height="15"/>}</div>
                    </div>
                    <div className="box center">
                      <h4>Perustiedot:</h4>
                      <div>Bonukset: <b>{bonusRaha}</b></div>
                      <div>Ilmaiskierrokset: <b>{ilmaiskierrokset}</b></div>
                      <div>Minimitalletus: <b>{minimitalletus}</b></div>
                    </div>
                    <div className="box last">
                      <h4>Talletustavat:</h4>
                      <i className="talletus">{rahansiirrot.map(function(r, idx) {
                        return(<a key={idx} href={`/maksutavat/${r.replace(" ","-").toLowerCase()}/`}><img data-src={`/images/maksu/${r.replace(" ", "").toLowerCase()}.png`} alt={r} className="lazyload" width="60" height="19"/></a>)
                      })}</i>
                    </div>
                    <div className="boxBtn">
                      <div className="contentBtn">
                        <a className="btn" href={affiliateLinkki} target="_blank"  rel="noopener noreferrer sponsored">Siirry kasinolle &#8594;</a>
                      </div>
                    </div>
							    </td>
                </tr>
                ))}
                </tbody>
              </table> 
              <a className="listBtn" href="/nettikasinot/">Lisää nettikasinoita!</a>
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage" width="300" height="300"/>
                {documentToReactComponents(page.ylaosanteksti2.json, {
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
              <h3 className="listHead">Uusimmat arvostelut KasinoHub.comissa</h3>
              <Slider {...settings}>
                {kasino.edges.map(({node}) => (
                  <div key={`ikt${node.kasinonSlug}`} className="scrollerKasino">
                    <div>
                      <a href={`/kokemuksia/${node.kasinonSlug}/`} >
                        <div className="card"><img className="cardImg lazyload" data-src={node.kasinonIsoLogo.file.url} alt={node.kasinonIsoLogo.title} width="220" height="140" /></div>
                        <h3 className="title">{node.kasinonNimi}</h3>
                        <div className="offer">
                          <div className="item">
                                  <i>Bonukset: </i>
                                  <p>{node.bonusRaha}</p>
                          </div>
                          <div className="item">
                                  <i>Kierrokset: </i>
                                  <p>{node.ilmaiskierrokset}</p>
                          </div>
                        </div>
                      </a>
                      {node.introTextUudetKasinotArvosteluScroller !== null &&
                      <div className="text">{node.introTextUudetKasinotArvosteluScroller.introTextUudetKasinotArvosteluScroller}</div>
                      }
                      {node.introTextUudetKasinotArvosteluScroller == null &&
                      <div className="text">-</div>
                      }
                      <div className="btns">
                        <a href={node.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                        <a href={`/kokemuksia/${node.kasinonSlug}/`} className="btn scd">Lue lisää!</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
                </div>
                <a className="listBtn" href="/kokemuksia/">Lue lisää casino-arvosteluja tästä!</a>
                <div className="wrapperText">{documentToReactComponents(page.ylaosanteksti3.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Tsekkaa myös nämä casinot!</h3>
              <table className="casinoTable">
                <tbody>
                {page.viimeVuosienKasinoitaLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`ik${kasinonSlug}`}>
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
                            <div>{listatekstit.uudetNettikasinotSivuKakkosLista.uudetNettikasinotSivuKakkosLista}</div>
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
              <a className="listBtn" href="/kaikki-nettikasinot/">Löydät kaikki nettikasinot täältä!</a>
              <div className="wrapperText">{documentToReactComponents(page.alaosanTeksti1.json, {
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
                <h2>Usein kysyttyjä kysymyksiä uusista nettikasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä tiedän voiko uusiin nettikasinoihin luottaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Helpoiten tapa löytää luotettava uusi nettikasino on tutkia sivustoltamme löytyvää tarjontaa. Emme nimittäin hyväksy sivuillemme yhtäkään sellaista pelipaikkaa, jonka toiminnasta jotain moitittavaa löytyy. Voitkin siis olla varma, että kaikki sivustoltamme 2022 vuonna löytyvät uudet nettikasinot ovat sataprosenttisen luotettavia toimijoita markkinoilla!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Miksi uusi nettikasino kannattaa valita vanhemman pelipaikan sijasta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Markkinoiden suurimmat pelipaikat ovat niitä pisimpään alalla toimineita toimijoita, mutta tietyissä tapauksissa myös uudet kasinot saattavat olla näitä vanhoja sivustoja parempi valinta. Esimerkiksi mikäli tykkäät hyödyntää erinäisiä bonareita mahdollisimman paljon, on uusi nettikasino tässä tapauksessa aina hyvä valinta, sillä uutena asiakkaana pääset pelaamaan näille tuoreille pelipaikoille lähes aina jonkinlaisen bonarin turvin!</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia trendejä vuoden 2022 uudet nettikasinot pitävät sisällään? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Casino-ala on kehittynyt suuresti viimeisten vuosien aikana, ja uskomme vahvasti, että tämä kehitys jatkuu myös kuluvana vuonna. Olemmekin melkoisen varmoja esimerkiksi siitä, että uudet nettikasinot 2022 vuonna keskittyvät eritoten pelaamisen helppouteen, jolloin tilivapaasti toimivat pelipaikat jatkavat nousuaan. Uskomme myös, että nämä vuoden 2022 uudet kasinot tulevat kehittelemään myös uusia gamification-ominaisuuksia sekä muita casino-innovaatioita pelaajiensa viihdyttämiseksi.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Minkä takia uusia nettikasinoita tulee tarjolle niin paljon? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Uhkapelaaminen on ollut yllättävänkin suuressa suosiossa ympäri maailman jo aikojen alusta saakka, ja tämä ala-kohtainen suosio onkin vain jatkunut näin Internetin aikakaudella. Casino-ala onkin yksinkertaisesti sanottuna vain niin suuri bisnes, että uusia nettikasinoita tulee eri peliyhtiöiltä ja toimijoilta markkinoille todella kovaa tahtia.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia ovat parhaat uudet nettikasinot 2022 vuonna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin kovimmat pelipaikat ovat asettaneet laatustandardit niin äärimmäisen korkealle, etteivät monet uudet kasinot näihin sfääreihin yllä. Esimerkiksi vanhemmat casinot huomioivat asiakkaitaan usein siirempien kampanjoiden myötä. Onneksi poikkeuksiakin toki löytyy, ja uskomme vahvasti, että vuoden 2022 parhaat uudet nettikasinot pystyvät sekä huomioimaan pelaajat hyvien kampanjoiden ja etujen puitteissa että tarjoamaan alan parhaat ja nopeimmat ominaisuudet sekä palvelut pelaajien käyttöön.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä voin löytää kaikki uudet nettikasinot helpoiten? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tähän löytyy helppo vastaus kuin apteekin hyllyltä. Uudet nettikasinot löytyy heittämällä helpoiten täältä meidän sivustoltamme, sillä keräämme tälle sivulle netin uusimmat kasinot kattavasti esiteltyinä ja arvioituina. Jos siis haussa on uusi nettikasino 2022 vuodelle, tarkasta sivustomme tarjonta aina ensimmäisenä!</p>
                </div>           
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} width="60" height="60" className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
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

export default UudetKasinot

export const pageQuery = graphql`
  query UudetQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageUudetKasinotSivu {
        id
        title
        seoBrowserTitle
        seoMetaDescription
        uudetNettikasinotListanPvm(formatString:"DD.MM.YYYY")
        uudetNettikasinotLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          livechat
          sivutkaannetty
          suomiAsiakaspalvelu
          suomiKampanjat
          rahansiirrot
          minimitalletus
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            uudetNettikasinotSivuTopLista {
              uudetNettikasinotSivuTopLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
        }  
        viimeVuosienKasinoitaLista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          snntJaEhdot
          poistaLinkkiArvosteluun
          listatekstit {
            uudetNettikasinotSivuKakkosLista {
              uudetNettikasinotSivuKakkosLista
            }
          }
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
        }
        ylaosanteksti {
          json
        }
        ylaosanteksti2 {
          json
        }
        ylaosanteksti3 {
          json
        }
        alaosanTeksti1 {
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
    allContentfulKasino(filter: {node_locale: {eq: "fi-FI"}, poistaLinkkiArvosteluun: {ne: true}}, sort: {fields: publishDate, order: DESC}, limit: 5) {
      edges {
        node {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          bonusRaha
          ilmaiskierrokset
          kasinonPieniLogo {
            file {url}
            title
          }
          kasinonIsoLogo {
            file {
              url
            }
            title
          }
          introTextUudetKasinotArvosteluScroller {
            introTextUudetKasinotArvosteluScroller
          }
          
        }
      }
    }
  }
`
