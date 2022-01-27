// Pikakasinot - sivu
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { FAQJsonLd, GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class Pikakasinot extends React.Component {
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
    //TOP-LISTA
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
    const page = get(this, 'props.data.contentfulPagePikakasinotSivu')

    return (
      <Layout location={this.props.location}>
        <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/pikakasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/pikakasinot/',
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
            url='https://kasinohub.com/pikakasinot/'
            headline={`${page.title}`}
            images={[
              `${page.kuva.file.url}`
            ]}
            datePublished={`${page.publishDate}`}
            dateModified={`${page.modifyDate}`}
            authorName={`${page.kirjoittaja.kirjoittajanNimi}`}
            publisherName='KasinoHub'
            publisherLogo='https://kasinohub.com/images/kasino-hub.png'
            description={`${page.seoMetaDescription}`}
            overrides={{
              '@type': 'TechArticle',
              'proficiencyLevel': 'Expert'
            }}
          />
          <FAQJsonLd
            questions={[
              { question: 'Ovatko pikakasinot parempia kuin muut pelipaikat?', answer: 'Tähän kysymykseen vastaaminen riippuu toki ihan siitä, mitä pelaaja itse pelipaikaltaan hakee. Mikäli pelaaja arvostaa helppoutta, mutkattomuutta ja yleistä nopeutta, ovat pikakasinot ehdottomasti tälle pelaajatyypille paremmin sopivia sivustoja. Toisaalta, mikäli tykkäät esimerkiksi isoista bonareista, eivät tällaiset uudet pikakasinot ole välttämättä paras paikka sinulle.' },
              { question: 'Millaisia parhaat pikakasinot ovat ominaisuuksiltaan?', answer: 'Eri pikakasinoiden välille on varsin hankalaa saada suuria eroavaisuuksia tehtyä, sillä pohjimmaisilta ominaisuuksiltaan nämä toimijat vastaavat toisiaan varsin paljon. Parhaat pikakasinot voidaan kuitenkin sanoa olevan sellaisia, jotka tarjoavat turvatut verkkopankkisiirrot, nopeat nostot, laajan pelivalikoiman ja tottakai myös tuhdit bonarit ja hyvät muut kampanjat kaikille pelaajilleen.' },
              { question: 'Kuinka nopeat nostot pikakasinot oikeasti tarjoavat?', answer: 'Kaiken kaikkiaan netin pikakasinot tarjoavat ne kaikista nopeimmat nostomahdollisuudet pelureille, sillä normaalisti nostetut rahat löytävät näiltä pikapelipaikoilta pankkitilillesi noin 15 minuutissa. Joillakin parhailla pikakasinoilla mainostetaan kuitenkin vielä tätäkin pikaisempia nostoja, sillä nostot lupaillaan hoituvan nopeimmin esimerkiksi 60:ssa tai jopa vain seitsemässä sekunnissa.' },
              { question: 'Miten usein uusia pikakasinoita tulee markkinoille?', answer: 'Vielä noin parisen vuotta sitten pikakasinot olivat varsin harvinaisia, mutta tähän kaavaan on tullut viime aikoina hyvinkin radikaali muutos. Nykyisin nimittäin valtaosa pelipaikoista tarjoaa mahdollisuuden pikapelaamiseen, sillä pikana pelaamisen suosio on ollut eksponentiaalisessa kasvussa. Näin ollen uusia pikakasinoita puskeekin siis markkinoille pelaajien tarjolla lähes jokaviikkoiseen tahtiin!' },
              { question: 'Onko kaikki pikakasinot turvallisia ja luotettavia?', answer: 'Monien mielestä verkkopankkitunnistautumisella toimivat pikakasinot saattavat kuulostaa epäilyttäviltä, mutta todellisuudessa ne ovat ehdottomasti turvallisempia normaaleihin pelipaikkoihin verrattuna. Näissä tapauksissa kukaan muu ei voi esimerkiksi saada tilisi salasanaa käyttöönsä, sillä tilille kirjautumiseen vaaditaan aina verkkopankkitunnistautuminen. Kaikki pikakasinot toimivat tietty myös aina alan parhaiden lisenssien kautta, jotka takaavat pikana pelaamisen turvallisuuden ja luotettavuuden.' },
              { question: 'Miltä vuosi 2022 näyttää pikakasinoiden osalta?', answer: 'Uskomme vahvasti, että pikakasinoita alkaa puskea markkinoille entistä kiihtyvämpään tahtiin kuluvan vuoden aikana, sillä niiden suosio ei tunnu ottavan loppuakseen. Samalla uskomme myös, että kovenevan kilpailun myötä nämä uudet pikakasinot tarjoavat 2022 vuonna pelaajilleen myös entistä parempia etuja ja muita bonareita. Vuosi 2022 näyttää siis pika-pelaamisen osalta erittäin hyvältä!' },
            ]}
          />
          <div className="container">
            <div className="top">
              <PageTitle>Pikakasinot</PageTitle>
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
              <h3 className="listHead">Parhaat pikakasinot juuri nyt</h3>
              <i className="update">Päivitetty: {page.parhaatPikakasinotPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.parhaatPikakasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo,livechat,sivutkaannetty,suomiAsiakaspalvelu,suomiKampanjat,minimitalletus,rahansiirrot}) => (
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
                          <div>{listatekstit.pikakasinotSivuTopLista.pikakasinotSivuTopLista}</div>
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
              <h3 className="listHead">Uudet pikakasinot 2022</h3>
              <table className="casinoTable">
                <tbody>
                {page.uudetPikakasinot2021Lista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,listatekstit,kasinonPieniLogo}) => (
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
                                <div>{listatekstit.pikakasinotSivuUudetLista.pikakasinotSivuUudetLista}</div>
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
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <a className="listBtn" href="/uudet-nettikasinot/">Lisää uusia nettikasinoita 2022</a>
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
              <h3 className="listHead">Pikana toimivat nopeat kasinot</h3>
              <i className="update">Päivitetty: {page.kaikkiPikakasinotPvm}</i>
              <table className="casinoTable">
                <tbody>
                  {page.kaikkiPikakasinotLista.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
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
                            {snntJaEhdot != null &&
                              <a className="saannot" href={snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                            }
                          </div>
                        }
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              <a className="listBtn" href="/kaikki-nettikasinot/">Katso kaikki nettikasinot täältä!</a>
              <div className="wrapperText">{documentToReactComponents(page.alaosanteksti1.json, {
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
                <h2>Usein kysyttyjä kysymyksiä pikakasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko pikakasinot parempia kuin muut pelipaikat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Tähän kysymykseen vastaaminen riippuu toki ihan siitä, mitä pelaaja itse pelipaikaltaan hakee. Mikäli pelaaja arvostaa helppoutta, mutkattomuutta ja yleistä nopeutta, ovat pikakasinot ehdottomasti tälle pelaajatyypille paremmin sopivia sivustoja. Toisaalta, mikäli tykkäät esimerkiksi isoista bonareista, eivät tällaiset uudet pikakasinot ole välttämättä paras paikka sinulle.</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Millaisia parhaat pikakasinot ovat ominaisuuksiltaan? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Eri pikakasinoiden välille on varsin hankalaa saada suuria eroavaisuuksia tehtyä, sillä pohjimmaisilta ominaisuuksiltaan nämä toimijat vastaavat toisiaan varsin paljon. Parhaat pikakasinot voidaan kuitenkin sanoa olevan sellaisia, jotka tarjoavat turvatut verkkopankkisiirrot, nopeat nostot, laajan pelivalikoiman ja tottakai myös tuhdit bonarit ja hyvät muut kampanjat kaikille pelaajilleen.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Kuinka nopeat nostot pikakasinot oikeasti tarjoavat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kaiken kaikkiaan netin pikakasinot tarjoavat ne kaikista nopeimmat nostomahdollisuudet pelureille, sillä normaalisti nostetut rahat löytävät näiltä pikapelipaikoilta pankkitilillesi noin 15 minuutissa. Joillakin parhailla pikakasinoilla mainostetaan kuitenkin vielä tätäkin pikaisempia nostoja, sillä nostot lupaillaan hoituvan nopeimmin esimerkiksi 60:ssa tai jopa vain seitsemässä sekunnissa.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten usein uusia pikakasinoita tulee markkinoille? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Vielä noin parisen vuotta sitten pikakasinot olivat varsin harvinaisia, mutta tähän kaavaan on tullut viime aikoina hyvinkin radikaali muutos. Nykyisin nimittäin valtaosa pelipaikoista tarjoaa mahdollisuuden pikapelaamiseen, sillä pikana pelaamisen suosio on ollut eksponentiaalisessa kasvussa. Näin ollen uusia pikakasinoita puskeekin siis markkinoille pelaajien tarjolla lähes jokaviikkoiseen tahtiin!</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko kaikki pikakasinot turvallisia ja luotettavia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Monien mielestä verkkopankkitunnistautumisella toimivat pikakasinot saattavat kuulostaa epäilyttäviltä, mutta todellisuudessa ne ovat ehdottomasti turvallisempia normaaleihin pelipaikkoihin verrattuna. Näissä tapauksissa kukaan muu ei voi esimerkiksi saada tilisi salasanaa käyttöönsä, sillä tilille kirjautumiseen vaaditaan aina verkkopankkitunnistautuminen. Kaikki pikakasinot toimivat tietty myös aina alan parhaiden lisenssien kautta, jotka takaavat pikana pelaamisen turvallisuuden ja luotettavuuden.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Miltä vuosi 2022 näyttää pikakasinoiden osalta? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Uskomme vahvasti, että pikakasinoita alkaa puskea markkinoille entistä kiihtyvämpään tahtiin kuluvan vuoden aikana, sillä niiden suosio ei tunnu ottavan loppuakseen. Samalla uskomme myös, että kovenevan kilpailun myötä nämä uudet pikakasinot tarjoavat 2022 vuonna pelaajilleen myös entistä parempia etuja ja muita bonareita. Vuosi 2022 näyttää siis pika-pelaamisen osalta erittäin hyvältä!</p>
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

export default Pikakasinot

export const pageQuery = graphql`
  query  Pikakasinot{
    site {
      siteMetadata {
        title
      }
    }
    contentfulPagePikakasinotSivu {
      title
      seoBrowserTitle
      seoMetaDescription
      parhaatPikakasinotPvm(formatString:"DD.MM.YYYY")
      kaikkiPikakasinotPvm(formatString:"DD.MM.YYYY")
      parhaatPikakasinotLista {
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
          pikakasinotSivuTopLista {
            pikakasinotSivuTopLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      kaikkiPikakasinotLista {
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
      uudetPikakasinot2021Lista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          pikakasinotSivuUudetLista {
            pikakasinotSivuUudetLista
          }
        }
        kasinonPieniLogo {
          file {url}
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
      alaosanteksti1 {
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
