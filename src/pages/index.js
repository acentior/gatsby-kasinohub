// Etusivu
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { FAQJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import Slider from "react-slick";
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"

class RootIndex extends React.Component {
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
    var lisa = document.getElementsByClassName("lisatieto");
		var j;
		for (j = 0; j < lisa.length; j++) {
			lisa[j].addEventListener("click", function() {
				this.classList.toggle("active");
				if (this.parentNode.parentNode.nextElementSibling.style.display === "inline-block") {
					this.parentNode.parentNode.nextElementSibling.style.display = "none";
					this.innerHTML = '<div class="btn">Lue lisää</div>';
				} else {
					this.parentNode.parentNode.nextElementSibling.style.display = "inline-block";
					this.innerHTML = '<div class="btn">Sulje</div>';
				}
			});
    }
  }
  render() {

    const page = get(this, 'props.data.contentfulPageEtusivu')
    const similarA = get(this.props, 'data.allContentfulArtikkeli')
    const similarU = get(this.props, 'data.allContentfulUutinen')
    const kasino = get(this.props, 'data.allContentfulKasino')
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
            canonical='https://kasinohub.com/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/',
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
              { question: 'Ovatko netin kasinot aina turvallisia?', answer: 'Netin keskustelupalstoilta löytyy toki myös omia tarinoita erinäisistä kasinoista, jotka olisivat toimineet yksittäisiä pelaajia kohtaan epäreilulla tavalla, mutta pääsääntöisesti ihan jokainen kasino netissä on kyllä reilu ja turvallinen pelaajalle kuin pelaajalle - mikäli vain noudatat kasinolla sen omia sääntöjä ja muita käyttöehtoja. Helpoiten löydät turvalliset kasinot netin syövereistä kuitenkin täältä Kasinohub.comin kautta, sillä emme hyväksy sivuillemme kuin 100 prosenttisen luotettavia casinoita!' },
              { question: 'Mitkä kasinot ovat suomalaispelaajille laillisia?', answer: 'Helpoiten kiteytettynä voidaan sanoa, että ihan jokainen netin kasino on suomalaispelureille laillista kauraa, eikä valtiovaltamme voi estää näillä eri kasinoilla pelaamista rajojemme sisältä. Mediassa näkyy usein mainintoja siitä, että nämä ulkomaalaiset pelipaikat olisivat laittomia kasinoita, mutta tämä väite ei yksinkertaisesti pidä paikkaansa, sillä kasinoilla pelaaminen on kaikille aivan täysin laillista puuhaa.' },
              { question: 'Miten online kasinot käytännössä toimivat?', answer: 'Lähtökohtaisesti jokainen kasino netissä toimii jommalla kummalla seuraavista tavoista. Ensinnäkin, jotkin kasinot vaativat kaikilta pelaajiltaan käyttäjätilin avaamisen rekisteröitymiskaavakkeen täyttämällä, jonka jälkeen pelaaja voi tehdä talletuksia kasinolle ja alkaa pelaamaan. Joillakin kasinoilla on kuitenkin mahdollisuus avata käyttäjätili verkkopankkitunnistautumisen myötä, jolloin mitään kaavakkeita ei tarvitse täyttää pelaamisen aloittamiseksi' },
              { question: 'Onko olemassa laittomia kasinoita?', answer: 'Kuten sanottua, periaatteessa jokainen netin kasino on suomalaispelaajille täysin laillinen. Tietyillä reunaehdoilla laittomia kasinoita voi kuitenkin sanoa olevan olemassa, sillä kukin kasino tarvitsee aina jonkunlaisen lisenssin toimiakseen netissä. Ja mikäli jokin casino ei tällaista toimintalisenssiä laisinkaan omista, on kyseessä niin sanottu laiton kasino. Tällaisia toimijoita on kuitenkin markkinoilla nähtävillä äärimmäisen harvoin.' },
              { question: 'Voiko kasino antaa pelaajilleen porttikieltoja?', answer: 'Kyllä voi, joskin syyttä kasinot eivät pelaajiaan ulos sivustoiltaan sulje. Mikäli kasino antaakin asiakkaalleen porttikiellon, on tämän kiellon taustalla väkisinkin rankemman tyyppisiä rikkeitä kasinon omiin sääntöihin ja ehtoihin perustuen. Yksi tunnetuimmista porttikiellon syistä on esimerkiksi se, että pelaaja pelaa kasinolla kahdella eri tilillä, sillä säännöt sallivat aina pelurille vain yhden oman käyttäjätilin.' },
              { question: 'Kannattaako kasinoiden kampanjoita hyödyntää?', answer: 'Mikäli olet metsästämässä kasino -pelaamisella yksinkertaisesti oikean rahan voittoja, eivät erinäiset kampanjat ole välttämättä sinua varten. Kasinohub.comin toimitus on kuitenkin yhtä mieltä siitä, että kokonaiskuvassa kasinoiden kampanjat, kilpailut ja arvonnat tarjoavat loistavasti lisäfiilistä normaaliin viihdepelaamiseen erinäisten palkintojen ja palkkioiden puitteissa.' },
              { question: 'Voiko kasinoilla oikeasti tienata rahaa?', answer: 'Periaatteen tasolla vastaus tähän kysymykseen on ehdottomasti kyllä, ja käytännönkin tasolla kasinoiden maailmasta löytyy monia tarinoita siitä, kuinka yksittäinen pelaaja on onnistunut äkkirikastumaan ison kasinovoiton myötä. Kasinoilla voi siis tienata oikeaa rahaa, mutta takuuvarmaa tämä tienaus ei missään tapauksessa ole, sillä kuten sanontakin jo kertoo, voittaa kasinoiden tapauksessa talo aina pitkässä juoksussa.' },
            ]}
          />
          <div className="container">
            <div className="front top">
              <div className="inside">
                <div className="texts">
                  <h1>{page.ylbannerinOtsikko}</h1>
                  <div>{documentToReactComponents(page.ylbannerinTeksti.json, {
                    renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img className="lazyload page-img"
                          src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          width="300" height="300"
                        />
                      ),
                    },
                  })}</div>
                </div>
                <div className="image">
                    <img src={page.ylbannerinKuva.file.url} alt={page.ylbannerinKuva.title} width="300" height="260"/>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <h3 className="top3">Kuukauden tähtikasinot</h3>
              <i className="update">{page.top3Kuukausi}</i>
              <div className="toplista">            
              {page.top3lista.map(({kasinonNimi, kasinonSlug, affiliateLinkki,listatekstit,poistaLinkkiArvosteluun,snntJaEhdot, arvostelu,bonusRaha,ilmaiskierrokset, kasinonPieniLogo}) => (
                <div className="elem" key={`top${kasinonSlug}`}>
                  <div className="toplista-top">
                  {poistaLinkkiArvosteluun !== true 
                    ?<a href={`/kokemuksia/${kasinonSlug}/`} className="linkki">
                      <div className="toplista-logo">
                        <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload" width="120" height="51"/>
                      </div>
                      <div className="name">
                        <h4 className="title">{kasinonNimi}</h4>
                        <div className="arvostelu tahti">
                          {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                          {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                          {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                          {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                          {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                          {arvostelu == null && <span>-</span>}
                        </div>
                      </div>
                    </a>
                    :<div  className="linkki">
                      <div className="toplista-logo">
                        <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload" width="120" height="51"/>
                      </div>
                      <div className="name">
                        <h4 className="title">{kasinonNimi}</h4>
                        <div className="arvostelu tahti">
                          {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                          {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                          {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                          {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                          {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                          {arvostelu == null && <span>-</span>}
                        </div>
                      </div>
                    </div>
                    }
                    <div className="info">
                      <div className="offerItem">
                        <i>Bonukset:</i>
                        <div className="offer">{bonusRaha}</div>
                      </div>
                      <div className="offerItem">
                        <i>Kierrokset:</i>
                        <div className="offer">{ilmaiskierrokset}</div>
                      </div>
                    </div>
                    <a className="btn" href={affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Siirry kasinon sivuille</a>
                    {listatekstit !== null &&
                      <div className="gameText">{listatekstit.etusivuKuukaudenNettikasinotBox.etusivuKuukaudenNettikasinotBox}</div>
                    }
                    {listatekstit == null &&
                      <div className="gameText">-</div>
                    }
                  </div>
                </div>
              ))}
              </div>
              <div className="wrapperText">{documentToReactComponents(page.ylosanTeksti.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]} 
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">KasinoHub suosittelee:</h3>
              <i className="update">Päivitetty: {page.top30ListaPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.top30ListaEtusivu.map(({kasinonNimi,kasinonSlug,affiliateLinkki,snntJaEhdot,poistaLinkkiArvosteluun,arvostelu,listatekstit,bonusRaha,ilmaiskierrokset,kasinonPieniLogo,livechat,sivutkaannetty,suomiAsiakaspalvelu,suomiKampanjat,minimitalletus,rahansiirrot}) => (
                  <tr className="casino" key={`topetu${kasinonSlug}`}>
                  <td className="casinotop">
                      <div className="logo">
                      <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload"  width="120" height="51"/>
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
                                <div>{listatekstit.etusivuTopLista.etusivuTopLista}</div>
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
              <div className="wrapperText">{documentToReactComponents(page.ylosanTeksti2.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Vastikään julkaistut kasinot</h3>
              <i className="update">Päivitetty: {page.parhaatUudetKasinotPvm}</i>
              <table className="casinoTable">
                <tbody>
                {page.parhaatUudetKasinotEtusivu.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,listatekstit,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`uudet${kasinonSlug}`}>
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
                            <div>{listatekstit.etusivuVastiknJulkaistutKasinotLista.etusivuVastiknJulkaistutKasinotLista}</div>
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
              <a className="listBtn" href="/uudet-nettikasinot/">Lisää uusia nettikasinoita 2022</a>
              <div className="wrapperText">{documentToReactComponents(page.ylosanTeksti3.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}                   
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Markkinoiden nopeimmat kasinot</h3>
              <table className="casinoTable">
                <tbody>
                {page.nopeatKasinotTop5Etusivu.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,listatekstit,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`uudet${kasinonSlug}`}>
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
                            <div>{listatekstit.etusivuMarkkinoidenNopeimmatKasinotLista.etusivuMarkkinoidenNopeimmatKasinotLista}</div>
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
              <a className="listBtn" href="/pikakasinot/">Katso kaikki pikakasinot täältä!</a>
              <div className="wrapperText">{documentToReactComponents(page.keskiosanTeksti1.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                    />
                  ),
                },
              })}</div>
              <h3 className="listHead">Kasinomaailman väkevimmät ilmaisbonarit - TOP5</h3>
              <table className="casinoTable">
                <tbody>
                {page.ilmaisbonuksetTop5Etusivu.map(({kasinonNimi,kasinonSlug,affiliateLinkki,poistaLinkkiArvosteluun,snntJaEhdot,listatekstit,arvostelu,bonusRaha,ilmaiskierrokset,kasinonPieniLogo}) => (
                  <tr className="casino" key={`uudet${kasinonSlug}`}>
                    <td className="casinotop">
                      <div className="logo">
                      <img data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} className="lazyload"  width="120" height="51"/>
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
                            <div>{listatekstit.etusivuIlmaisbonaritLista.etusivuIlmaisbonaritLista}</div>
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
              <a className="listBtn" href="/casino-bonukset/">Parhaat casinobonukset 2022</a>
              <div className="wrapperText">{documentToReactComponents(page.keskiosanTeksti2.json, {
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
                <h2>Ammattilaisten kasino-arviot - Tutustu ja testaa!</h2>
                <Slider {...settings}>
                {console.log(kasino.edges)}
                {kasino.edges.map(({node}) => (
                  <div key={`ikt${node.kasinonSlug}`} className="scrollerKasino">
                    <a href={`/kokemuksia/${node.kasinonSlug}/`} >
                      <div className="card"><img className="cardImg lazyload" data-src={node.kasinonIsoLogo.file.url} alt={node.kasinonIsoLogo.title}  width="220" height="140"/></div>
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
                    {node.introTextEtusivuArvosteluScroller !== null &&
                    <div className="text">{node.introTextEtusivuArvosteluScroller.introTextEtusivuArvosteluScroller}</div>
                    }
                    {node.introTextEtusivuArvosteluScroller == null &&
                    <div className="text">-</div>
                    }
                    <div className="btns">
                      <a href={node.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                      <a href={`/kokemuksia/${node.kasinonSlug}/`} className="btn scd">Lue lisää!</a>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <a className="listBtn" href="/kokemuksia/">Lisää kasino-arvosteluja</a>
              <div className="wrapperText">{documentToReactComponents(page.keskiosanTeksti3.json, {
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
                <h2>Tsekkaa tuoreimmat kasino-kampanjat tästä!</h2>
                <Slider {...settings}>
                {similarU.edges.map(({node})=>(
                  <div key={`${node.slug}`} className="scroller">
                    <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title}  width="358" height="200"/>
                    <a href={`/kasinotarjoukset/${node.slug}/`} className="title"><h3>{node.title}</h3></a>
                    <p className="date">{node.publishDate}</p>
                    {node.introTextEtusivuScroller !== null &&
                      <div className="text">{node.introTextEtusivuScroller.introTextEtusivuScroller}</div>
                    }
                    {node.introTextEtusivuScroller == null && 
                      <div className="text">-</div>
                    }                      
                    <div className="btns">
                      {node.kasino !== null &&
                      <a href={node.kasino.affiliateLinkki} target="_blank" rel="noreferrer" className="btn first">Siirry kasinolle!</a>
                      }
                      <a href={`/kasinotarjoukset/${node.slug}/`} className="btn scd">Lue lisää!</a>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
              <a className="listBtn" href="/kasinotarjoukset/">Tsekkaa tuoreet kasinotarjoukset</a>
              <div className="wrapperText">{documentToReactComponents(page.alaosanTeksti.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                    data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                    alt="alt"
                    />
                  ),
                },
              })}</div>
              <div className="sections">
                <h4>Tietoiskut</h4>
                <a href="/kasinopelit/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/cards45.svg" alt="Cards icon" width="45" height="42"/></span></div>
                  <span>Kasinopelit</span>
                </a>
                <a href="/online-casino/" className="iconBox">
                  <div className="box"><span className="icon">💻</span></div>
                  <span>Online Casino</span>
                </a>
                <a href="/kasinot-ilman-lisenssia/" className="iconBox">
                  <div className="box"><span className="icon">&#x1f3b2;</span></div>
                  <span>Kasinot ilman lisenssiä</span>
                </a>
                <a href="/casino-sovellukset/" className="iconBox">
                  <div className="box"><span className="icon">&#x1F4F1;</span></div>
                  <span>Casino-sovellukset ja -appit</span>
                </a>
                <a href="/kokemuksia/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/chip45.svg" alt="Chip icon" width="45" height="45"/></span></div>
                  <span>Nettikasino kokemuksia</span>
                </a>
                <a href="/kasinobonus/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/bonus45.svg" alt="Bonus icon" width="45" height="45"/></span></div>
                  <span>Kasinobonus</span>
                </a>
                <a href="/lisenssit/malta/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/malta45.svg" alt="Malta icon" width="45" height="30"/></span></div>
                  <span>Malta-kasinot</span>
                </a>
                <a href="/lisenssit/ruotsi/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/ruotsi45.svg" alt="Ruotsi icon" width="45" height="30"/></span></div>
                  <span>Ruotsalaiset kasinot</span>
                </a>
                <a href="/maksutavat/" className="iconBox">
                  <div className="box"><span className="icon">💳</span></div>
                  <span>Maksutavat</span>
                </a>
                <a href="/pelinvalmistajat/" className="iconBox">
                  <div className="box"><span className="icon">🛠</span></div>
                  <span>Pelinvalmistajat</span>
                </a>
                <a href="/omistajat/" className="iconBox">
                  <div className="box"><span className="icon">🏢</span></div>
                  <span>Kasino-omistajat</span>
                </a>
                <a href="/lisenssit/" className="iconBox">
                  <div className="box"><span className="icon">🌍</span></div>
                  <span>Kasinolisenssit</span>
                </a>
              </div>
              <div className="sections last">
                <h4>Kasinoiden pelityypit</h4>
                <a href="/hedelmapelit/" className="iconBox">
                  <div className="box"><span className="icon">&#x1F3B0;</span></div>
                  <span>Hedelmäpelit</span>
                </a>
                <a href="/nettiarvat/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/scratch45.svg" alt="Nettiarvat icon" width="45" height="45"/></span></div>
                  <span>Nettiarvat</span>
                </a>
                <a href="/bingo/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/bingo45.svg" alt="Bingo icon" width="45" height="45"/></span></div>
                  <span>Bingo</span>
                </a>
                <a href="/keno/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/keno45.svg" alt="Keno icon" width="45" height="45"/></span></div>
                  <span>Keno</span>
                </a>
                <a href="/lotto/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/lotto45.svg" alt="Lotto icon" width="45" height="45"/></span></div>
                  <span>Lotto</span>
                </a>
                <a href="/eurojackpot/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/eurojackpot45.svg" alt="Eurojackpot icon" width="45" height="45"/></span></div>
                  <span>Eurojackpot</span>
                </a>
                <a href="/jackpot-pelit/" className="iconBox">
                  <div className="box"><span className="icon"><img src="/images/icons/jackpot45.svg" alt="Jackpot icon" width="45" height="45"/></span></div>
                  <span>Jackpot-pelit</span>
                </a>
                <a href="/megaways/" className="iconBox">
                  <div className="box"><span className="icon">🔥</span></div>
                  <span>Megaways</span>
                </a>
              </div>
              <div className="related2">
                <h2>Viimeisimmät KasinoHubilla julkaistut artikkelit</h2>
                {similarA.edges.map(({node})=>(
                  <a href={`/artikkelit/${node.slug}/`} key={node.slug} className="card art">
                    <img className="cardImg lazyload" data-src={node.heroImage.file.url} alt={node.heroImage.title}  width="276" height="140"/>
                    <h4>{node.title}</h4>
                    <p className="text">{node.introTextEtusivuArtikkelitGrid.introTextEtusivuArtikkelitGrid}</p>
                  </a>
                ))}
              </div>
              <a className="listBtn" href="/artikkelit/">Lisää artikkeleita</a>
              <div className="accordions">
                <h2> Usein kysyttyjä kysymyksiä kasinoista</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Ovatko netin kasinot aina turvallisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Netin keskustelupalstoilta löytyy toki myös omia tarinoita erinäisistä kasinoista, jotka olisivat toimineet yksittäisiä pelaajia kohtaan epäreilulla tavalla, mutta pääsääntöisesti ihan jokainen kasino netissä on kyllä reilu ja turvallinen pelaajalle kuin pelaajalle - mikäli vain noudatat kasinolla sen omia sääntöjä ja muita käyttöehtoja. Helpoiten löydät turvalliset kasinot netin syövereistä kuitenkin täältä Kasinohub.comin kautta, sillä emme hyväksy sivuillemme kuin 100 prosenttisen luotettavia casinoita!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Mitkä kasinot ovat suomalaispelaajille laillisia? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Helpoiten kiteytettynä voidaan sanoa, että ihan jokainen netin kasino on suomalaispelureille laillista kauraa, eikä valtiovaltamme voi estää näillä eri kasinoilla pelaamista rajojemme sisältä. Mediassa näkyy usein mainintoja siitä, että nämä ulkomaalaiset pelipaikat olisivat laittomia kasinoita, mutta tämä väite ei yksinkertaisesti pidä paikkaansa, sillä kasinoilla pelaaminen on kaikille aivan täysin laillista puuhaa.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Miten online kasinot käytännössä toimivat? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Lähtökohtaisesti jokainen kasino netissä toimii jommalla kummalla seuraavista tavoista. Ensinnäkin, jotkin kasinot vaativat kaikilta pelaajiltaan käyttäjätilin avaamisen rekisteröitymiskaavakkeen täyttämällä, jonka jälkeen pelaaja voi tehdä talletuksia kasinolle ja alkaa pelaamaan. Joillakin kasinoilla on kuitenkin mahdollisuus avata käyttäjätili verkkopankkitunnistautumisen myötä, jolloin mitään kaavakkeita ei tarvitse täyttää pelaamisen aloittamiseksi</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko olemassa laittomia kasinoita? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kuten sanottua, periaatteessa jokainen netin kasino on suomalaispelaajille täysin laillinen. Tietyillä reunaehdoilla laittomia kasinoita voi kuitenkin sanoa olevan olemassa, sillä kukin kasino tarvitsee aina jonkunlaisen lisenssin toimiakseen netissä. Ja mikäli jokin casino ei tällaista toimintalisenssiä laisinkaan omista, on kyseessä niin sanottu laiton kasino. Tällaisia toimijoita on kuitenkin markkinoilla nähtävillä äärimmäisen harvoin.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko kasino antaa pelaajilleen porttikieltoja? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kyllä voi, joskin syyttä kasinot eivät pelaajiaan ulos sivustoiltaan sulje. Mikäli kasino antaakin asiakkaalleen porttikiellon, on tämän kiellon taustalla väkisinkin rankemman tyyppisiä rikkeitä kasinon omiin sääntöihin ja ehtoihin perustuen. Yksi tunnetuimmista porttikiellon syistä on esimerkiksi se, että pelaaja pelaa kasinolla kahdella eri tilillä, sillä säännöt sallivat aina pelurille vain yhden oman käyttäjätilin.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Kannattaako kasinoiden kampanjoita hyödyntää? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Mikäli olet metsästämässä kasino -pelaamisella yksinkertaisesti oikean rahan voittoja, eivät erinäiset kampanjat ole välttämättä sinua varten. Kasinohub.comin toimitus on kuitenkin yhtä mieltä siitä, että kokonaiskuvassa kasinoiden kampanjat, kilpailut ja arvonnat tarjoavat loistavasti lisäfiilistä normaaliin viihdepelaamiseen erinäisten palkintojen ja palkkioiden puitteissa.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Voiko kasinoilla oikeasti tienata rahaa? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Periaatteen tasolla vastaus tähän kysymykseen on ehdottomasti kyllä, ja käytännönkin tasolla kasinoiden maailmasta löytyy monia tarinoita siitä, kuinka yksittäinen pelaaja on onnistunut äkkirikastumaan ison kasinovoiton myötä. Kasinoilla voi siis tienata oikeaa rahaa, mutta takuuvarmaa tämä tienaus ei missään tapauksessa ole, sillä kuten sanontakin jo kertoo, voittaa kasinoiden tapauksessa talo aina pitkässä juoksussa.</p>
                </div>            
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageEtusivu {
      title
      seoBrowserTitle
      seoMetaDescription
      ylbannerinKuva {
        file {
          url
        }
        title
      }
      ylbannerinTeksti {
        json
      }
      ylbannerinOtsikko
      top3Kuukausi
      top3lista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          etusivuKuukaudenNettikasinotBox {
            etusivuKuukaudenNettikasinotBox
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      top30ListaPvm(formatString:"DD.MM.YYYY")
      top30ListaEtusivu {
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
          etusivuTopLista {
            etusivuTopLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      parhaatUudetKasinotPvm(formatString:"DD.MM.YYYY")
      parhaatUudetKasinotEtusivu {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          etusivuVastiknJulkaistutKasinotLista {
            etusivuVastiknJulkaistutKasinotLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      nopeatKasinotTop5Etusivu {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          etusivuMarkkinoidenNopeimmatKasinotLista {
            etusivuMarkkinoidenNopeimmatKasinotLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      ilmaisbonuksetTop5Etusivu {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        snntJaEhdot
        poistaLinkkiArvosteluun
        ilmaiskierrokset
        listatekstit {
          etusivuIlmaisbonaritLista {
            etusivuIlmaisbonaritLista
          }
        }
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
      ylosanTeksti {
        json
      }
      ylosanTeksti2 {
        json
      }
      ylosanTeksti3 {
        json
      }
      keskiosanTeksti1 {
        json
      }
      keskiosanTeksti2 {
        json
      }
      keskiosanTeksti3 {
        json
      }
      alaosanTeksti {
        json
      }
    }
    allContentfulArtikkeli(filter: {node_locale: {eq: "fi-FI"}}, limit: 3, sort: {order: DESC, fields: publishDate}) {
      edges {
        node {
          title
          slug
          publishDate(formatString:"DD.MM.YYYY")
          introTextEtusivuArtikkelitGrid {
            introTextEtusivuArtikkelitGrid
          }
          heroImage {
            file {
              url
            }
            title
          }
          
        }
      }
    }
    allContentfulUutinen (sort: {order: DESC, fields: publishDate}, filter: {node_locale: {eq: "fi-FI"}}, limit: 3){
      edges {
        node {
          title
          slug
          publishDate(formatString:"DD.MM.YYYY")
          introTextEtusivuScroller {
            introTextEtusivuScroller
          }
          heroImage {
            file {url}
            title
          }
          kasino {
            affiliateLinkki
          }
        }
      }
    }
    allContentfulKasino(filter: {node_locale: {eq: "fi-FI"}, poistaLinkkiArvosteluun: {ne: true}}, sort: {fields: publishDate, order: DESC}, limit: 5) {
      edges {
        node {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          bonusRaha
          poistaLinkkiArvosteluun
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
          introTextEtusivuArvosteluScroller {
            introTextEtusivuArvosteluScroller
          }
          
        }
      }
    }
  }
`
