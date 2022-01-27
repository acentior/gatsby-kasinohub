// Kasinon arvostelu - template
import React from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/casinoLayout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import kasinoStyles from "./kasino.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { FAQJsonLd, GatsbySeo, BreadcrumbJsonLd, ArticleJsonLd  } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"
import { Description } from "@styled-icons/material/Description"
import { Help } from "@styled-icons/material/Help"
import { PlusCircle } from "@styled-icons/fa-solid/PlusCircle"
import { Casino } from "@styled-icons/material/Casino"
import { Payment } from "@styled-icons/material/Payment"
import { Info } from "@styled-icons/material/Info"
import { Menu } from "@styled-icons/material-rounded/Menu"
import { Person } from "@styled-icons/material/Person"
import { QuoteLeft} from "@styled-icons/fa-solid/QuoteLeft"

class KasinoTemplate extends React.Component {
  componentDidMount(){
    // EXTERNAL LINKS _blank
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
    // FAQ - accordions
    var collapse = document.getElementsByClassName("accordion-title");
    var c;
    for (c = 0; c < collapse.length; c++) {
      collapse[c].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");  
      })
    }
    // SIDEBAR SCROLLS
    let scrollpos = window.scrollY
    const header = document.getElementById("fixed")
    const header_height = header.offsetHeight
    const add_class_on_scroll = () => header.classList.add("show")
    const remove_class_on_scroll = () => header.classList.remove("show")
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })
    // Omistaja
    var omistaja = document.getElementById("omistaja");
    var nolink = document.getElementById("omistajaNoLink");
    var link = document.getElementById("omistajaLink");
    if (omistaja.contains(link)) {
      nolink.remove();
    }

  }
  render() {
    const post = get(this.props, 'data.contentfulKasino')
    const similar = get(this.props, 'data.allContentfulKasino')
    const {breadcrumb: { crumbs }} = this.props.pageContext
    // PELINVALMISTAJAT
    const valmistaja = post.pelinvalmistajat.map(function(i, idx){
      if (i === "1x2 Games"){ return(<li key={idx} className="list"><a href="/pelinvalmistajat/1x2games/"><b>{i}</b></a></li>)}
      if (i === "Amatic" ){return(<li key={idx} className="list"><a href="/pelinvalmistajat/amatic/"><b>{i}</b></a></li>)} 
      if (i === "Betsoft"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/betsoft/"><b>{i}</b></a></li>)} 
      if (i === "BF Games"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/bf-games/"><b>{i}</b></a></li>)}
      if (i === "Big Time Gaming"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/bigtimegaming/"><b>{i}</b></a></li>)} 
      if (i === "Blueprint"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/blueprint/"><b>{i}</b></a></li>)}
      if (i === "Booming Games"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/booming-games/"><b>{i}</b></a></li>)}
      if (i === "Elk Studios"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/elk-studios/"><b>{i}</b></a></li>)}
      if (i === "Endorphina"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/endorphina/"><b>{i}</b></a></li>)}
      if (i === "Evolution Gaming"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/evolution-gaming/"><b>{i}</b></a></li>)}
      if (i === "IGT"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/igt/"><b>{i}</b></a></li>)}
      if (i === "Iron Dog Studios"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/iron-dog-studio/"><b>Iron Dog Studio</b></a></li>)}
      if (i === "iSoftBet"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/isoftbet/"><b>{i}</b></a></li>)}
      if (i === "Kalamba Games"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/kalamba-games/"><b>{i}</b></a></li>)}
      if (i === "Microgaming"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/microgaming/"><b>{i}</b></a></li>)}
      if (i === "Net Entertainment"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/net-entertainment/"><b>{i}</b></a></li>)}
      if (i === "NextGen Gaming (NYX)"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/nextgen-gaming/"><b>{i}</b></a></li>)}
      if (i === "Nolimit City"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/nolimit-city/"><b>{i}</b></a></li>)}
      if (i === "Play’n Go"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/playn-go/"><b>{i}</b></a></li>)}
      if (i === "Playtech"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/playtech/"><b>{i}</b></a></li>)}
      if (i === "Pragmatic Play"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/pragmatic-play/"><b>{i}</b></a></li>)}
      if (i === "Push Gaming"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/push-gaming/"><b>{i}</b></a></li>)}
      if (i === "Quickspin"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/quickspin/"><b>{i}</b></a></li>)}
      if (i === "Red Tiger"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/red-tiger/"><b>{i}</b></a></li>)}
      if (i === "Scientific Games"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/scientific-games/"><b>{i}</b></a></li>)}
      if (i === "Thunderkick"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/thunderkick/"><b>{i}</b></a></li>)}
      if (i === "Yggdrasil"){return(<li key={idx} className="list"><a href="/pelinvalmistajat/yggdrasil/"><b>{i}</b></a></li>)}
      else {return(<li key={idx} className="list">{i}</li>)}
    });
    const lisenssi = post.kasinonLisenssi.map(function(l,idx) {
      if(l === "Malta Gaming Authority"){return(<a href="/lisenssit/malta/" key={idx}><b>{l}<br/></b></a>)}
      if(l === "Gibraltar"){return(<a href="/lisenssit/gibraltar/" key={idx}><b>{l}<br/></b></a>)}
      if(l === "Curacao"){return(<a href="/lisenssit/curacao/" key={idx}><b>{l}<br/></b></a>)}
      if(l === "Viro"){return(<a href="/lisenssit/viro/" key={idx}><b>{l}<br/></b></a>)}
      if(l === "UK Gambling Commission"){return(<a href="/lisenssit/uk/" key={idx}><b>{l}<br/></b></a>)}
    })
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
          title={post.seoBrowserTitle}
          description={post.seoMetaDescription}
          canonical={`https://kasinohub.com/kokemuksia/${post.kasinonSlug}/`}
          languageAlternates={[
            {
              hrefLang: 'fi-FI',
              href: `https://kasinohub.com/kokemuksia/${post.kasinonSlug}/`,
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
            { question: `Onko ${post.kasinonNimi} turvallinen kasino?` , answer: `${post.seoFaq1}` },
            { question: `Jakaako ${post.kasinonNimi} pelaajilleen bonusta tai ilmaisspinnejä?` , answer: `${post.seoFaq2}` },
            { question: `Miten pelitilin avaaminen onnistuu ${post.kasinonNimi} -casinolle?` , answer: `${post.seoFaq3}` },
            { question: `Onko ${post.kasinonNimi} huijaus?` , answer: `${post.seoFaq4}` },
            { question: `Miten voin tehdä talletuksia ja kotiutuksia ${post.kasinonNimi} -casinolla?` , answer: `${post.seoFaq5}` },
            { question: `Minkä lisenssin valvonnassa ${post.kasinonNimi} toimii ja ovatko voitot verovapaita?` , answer: `${post.seoFaq6}` },
          ]}
        />
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'KasinoHub',
              item: 'https://kasinohub.com/',
            },
            {
              position: 2,
              name: 'Arvostelut',
              item: 'https://kasinohub.com/kokemuksia/',
            },
            {
              position: 3,
              name: `${post.kasinonNimi}`,
              item: `https://kasinohub.com/kokemuksia/${post.kasinonSlug}/`,
            },
          ]}
        />
        <ArticleJsonLd
          url={`https://kasinohub.com/kokemuksia/${post.kasinonSlug}/`}
          headline={`${post.kasinonNimi}`}
          images={[
            `${post.kasinonIsoLogo.file.url}`
          ]}
          datePublished={`${post.publishDate}`}
          dateModified={`${post.modifyDate}`}
          authorName={`${post.kirjoittaja.kirjoittajanNimi}`}
          publisherName='KasinoHub'
          publisherLogo='https://kasinohub.com/images/kasino-hub.png'
          description={`${post.seoMetaDescription}`}
          overrides={{
            '@type': 'Review',
            'itemReviewed': {
              '@type': 'Game',
              'name' : `${post.kasinonNimi}`,
              'url' : `https://kasinohub.com/kokemuksia/${post.kasinonSlug}/`,
            },
            'reviewRating' : {
              '@type': 'Rating',
              'ratingValue' : `${post.arvostelu}`,
              'bestRating' : '5',
              'worstRating': '1'
            }
          }}
        />
          <div className={`${kasinoStyles.kasino}`} id="kasino">
            <table className={kasinoStyles.kasinoBlock} id="height">
              <tbody>
                <tr className={kasinoStyles.kasinoTr}>
                  <td> 
                    <div className={kasinoStyles.top}>
                      <h1><center>{post.kasinonNimi}</center></h1>
                      <img className={kasinoStyles.kasinonLogo} src={post.kasinonIsoLogo.file.url} alt={post.kasinonIsoLogo.title} width="220" height="140"/>
                      <div className={kasinoStyles.tahdet}>
                        {post.arvostelu === 1 && <img src="/images/star/bigstar1.png" alt='Arvostelu 1/5' width="21" height="20"/>}
                        {post.arvostelu === 2 && <img src="/images/star/bigstar2.png" alt='Arvostelu 2/5' width="42" height="20"/>}
                        {post.arvostelu === 3 && <img src="/images/star/bigstar3.png" alt='Arvostelu 3/5' width="63" height="20"/>}
                        {post.arvostelu === 4 && <img src="/images/star/bigstar4.png" alt='Arvostelu 4/5' width="84" height="20"/>}
                        {post.arvostelu === 5 && <img src="/images/star/bigstar5.png" alt='Arvostelu 5/5' width="105" height="20"/>}
                        {post.arvostelu == null && <span>-</span>}
                      </div>
                    </div>
                    <div className={kasinoStyles.center}>
                      <div className={kasinoStyles.vahvuus}><ul>{post.kasinonPlussat.map(function(g, idx) {
                        return(<li key={idx}><PlusCircle className={kasinoStyles.icon}/>{g}</li>)
                      })}</ul></div>
                      <p className={kasinoStyles.kuvaus}>{post.lyhytBonuskuvaus}</p>
                    </div>
                    <div className={kasinoStyles.bottom}>
                      <div className={kasinoStyles.btn}>
                        {post.kasinoSuljettu !== true
                          ?<a className={`${kasinoStyles.bonusBtn} button`} href={post.affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a> 
                          :<div className={`${kasinoStyles.bonusBtn} ${kasinoStyles.closed} button`}>Kasino suljettu</div> 
                        }
                      </div>
                      <div className={kasinoStyles.offerItem}>
                        <div className={kasinoStyles.offer}>{post.ilmaiskierrokset}</div>
                        <i>Ilmaiskierrokset</i>
                      </div>
                      <div className={kasinoStyles.offerItem}>
                        <div className={kasinoStyles.offer}>{post.bonusRaha}</div>
                        <i>Bonukset</i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={kasinoStyles.ala}>
              {post.saannot != null &&
                <div className={kasinoStyles.saannot}>{documentToReactComponents(post.saannot.json)}</div>
              }
              <div className={kasinoStyles.sidebar}>
                <div className={kasinoStyles.pageNav}>
                  <h5>Navigointi:</h5>
                  <div className={kasinoStyles.drop}><Menu className={`${kasinoStyles.icon} material-icons`}/></div>
                  <ul className={kasinoStyles.anchor}>
                    <li><div onClick={() => scrollTo('#info')}><Casino className={`${kasinoStyles.icon} material-icons`}/> Bonukset </div></li>
                    <li><div onClick={() => scrollTo('#info2')}><Info className={`${kasinoStyles.icon} material-icons`}/> Yleisesti</div></li>
                    <li><div onClick={() => scrollTo('#info3')}><Help className={`${kasinoStyles.icon} material-icons`}/> UKK </div></li>      
                    <li><div onClick={() => scrollTo('#info4')}><Description className={`${kasinoStyles.icon} material-icons`}/> Arvostelu </div></li>   
                    <li><div onClick={() => scrollTo('#info5')}><Person className={`${kasinoStyles.icon} material-icons`}/> Arvostelijan kokemukset </div></li>       
                    <li><div onClick={() => scrollTo('#info6')}><Casino className={`${kasinoStyles.icon} material-icons`}/> Pelinvalmistajat</div></li>
                  </ul>
                </div>
              </div>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={post.kasinonNimi}/>
              <div className={kasinoStyles.content}>
              <h2 id="info"><Casino className={`${kasinoStyles.icon} material-icons`}/> {post.kasinonNimi} bonus</h2>
                <hr />
                <div className={kasinoStyles.kasinoText}>{documentToReactComponents(post.bonustiedot.json, {
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
                {post.lunastaBonus.toString() !== 'false' && <a className={kasinoStyles.bonusBtn} href={post.affiliateLinkki} target="_blank" rel="noreferrer">Hyödynnä <b>{post.kasinonNimi}</b> bonus tästä!</a>}
                <h2 id="info2"><Info className={`${kasinoStyles.icon} material-icons`}/>{post.kasinonNimi} yleisesti:</h2>
                <hr />
                <div className={kasinoStyles.right}>
                  <div className={kasinoStyles.box}>
                    <table className={kasinoStyles.boxContent}>
                      <tbody>
                      <tr>
                        <td className={`${kasinoStyles.yht} yht`}>Omistaja:</td>
                        <td id="omistaja">
                          {post.kasinonOmistaja === "White Hat Gaming Limited" && <a href="/omistajat/white-hat-gaming/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "N1 Interactive Ltd" && <a href="/omistajat/n1-interactive-ltd/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Betpoint Group Limited" && <a href="/omistajat/betpoint-group-limited/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Co-Gaming Ltd" && <a href="/omistajat/co-gaming-limited/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Hero Gaming" && <a href="/omistajat/hero-gaming/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Araxio Development N.V" && <a href="/omistajat/araxio-development-n-v/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Genesis Global" && <a href="/omistajat/genesis-global/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Kindred Group" && <a href="/omistajat/kindred-group/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Betsson Group" && <a href="/omistajat/betsson-group/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Bethard Group" && <a href="/omistajat/bethard-group/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Aspire Global International LTD" && <a href="/omistajat/aspire-global-international-ltd/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Rootz Ltd" && <a href="/omistajat/rootz-ltd/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          {post.kasinonOmistaja === "Gammix Limited" && <a href="/omistajat/gammix-limited/" id="omistajaLink"><b>{post.kasinonOmistaja}</b></a>}
                          <b id="omistajaNoLink">{post.kasinonOmistaja}</b>
                        </td>
                      </tr>
                      <tr>
                        <td className={`${kasinoStyles.yht} yht`}>Perustamisvuosi:</td>
                        <td> <b>{post.kasinonPerustamisvuosi}</b></td>
                      </tr>
                      <tr>
                        <td className={`${kasinoStyles.yht} yht`}>Lisenssi:</td>
                        <td id="lisenssi">{lisenssi}</td>
                      </tr>
                      <tr className={kasinoStyles.over}>
                        <td>Kasinon kotisivut: </td>
                        <td>
                          {post.kasinoSuljettu !== true 
                          ?<b><a href={post.affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">{post.kasinonKotisivut}</a></b>
                          : "-"
                          }
                          </td>
                      </tr>                             
                      </tbody>
                    </table>
                    <table className={kasinoStyles.boxContent}>
                      <tbody>
                        <tr>
                          <td>Bonukset: </td>
                          <td><b>{post.bonusRaha}</b></td>
                        </tr>
                        <tr>
                          <td>Ilmaiskierrokset: </td>
                          <td><b>{post.ilmaiskierrokset}</b></td>
                        </tr>
                        <tr className={kasinoStyles.over} >
                          <td className={`${kasinoStyles.yht} yht`}>Email: </td>
                          <td><b><a href={`mailto:${post.kasinonEmail}`} >{post.kasinonEmail}</a></b></td>
                        </tr>
                        <tr>
                          <td className={`${kasinoStyles.yht} yht`}>Puhelin:</td>
                          <td> <b>
                            {post.aspaPuhelin !== "-" && <a href={`tel:${post.aspaPuhelin}`}>{post.aspaPuhelin}</a> }
                            {post.aspaPuhelin === "-" && <span>{post.aspaPuhelin}</span> }
                            </b></td>
                        </tr>
                      </tbody>
                    </table>
                    <table className={`${kasinoStyles.bool} ${kasinoStyles.boxContent}`}>
                      <tbody>
                      <tr>
                        <td>Livechat: </td>
                        <td className="boolean">
                          {post.livechat.toString() === "true" && <img data-src="/images/boolean/true.svg" alt="true icon" className="lazyload" width="15" height="15"/>}
                          {post.livechat.toString() === "false" && <img data-src="/images/boolean/false.svg" alt="false icon" className="lazyload" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td>Sivut käännetty: </td>
                        <td className="boolean">
                          {post.sivutkaannetty.toString() === "true" && <img data-src="/images/boolean/true.svg" alt="true icon" className="lazyload" width="15" height="15"/>}
                          {post.sivutkaannetty.toString() === "false" && <img data-src="/images/boolean/false.svg" alt="false icon" className="lazyload" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td>Suomi Asiakaspalvelu: </td>
                        <td className="boolean">
                          {post.suomiAsiakaspalvelu.toString() === "true" && <img data-src="/images/boolean/true.svg" alt="true icon" className="lazyload" width="15" height="15"/>}
                          {post.suomiAsiakaspalvelu.toString() === "false" && <img data-src="/images/boolean/false.svg" alt="false icon" className="lazyload" width="15" height="15"/>}
                        </td>
                      </tr>
                      <tr>
                        <td>Suomi Kampanjat: </td>
                        <td className="boolean">
                          {post.suomiKampanjat.toString() === "true" && <img data-src="/images/boolean/true.svg" alt="true icon" className="lazyload" width="15" height="15"/>}
                          {post.suomiKampanjat.toString() === "false" && <img data-src="/images/boolean/false.svg" alt="false icon" className="lazyload" width="15" height="15"/>}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
                <h5>Tuotevalikoima</h5>
                <div className={kasinoStyles.talletus}>
                  <ul className="tuotteet" id="tuote">{post.tuotevalikoima.map(function(x, idx) {
                    return (<li className="list" key={idx}>{x}</li>)
                  })}</ul>
                </div>
                {post.seoFaq1 != null &&
                <div className={`${kasinoStyles.accordions} accordions`}>
                  <h2 id="info3"><Help className={`${kasinoStyles.icon} material-icons`}/>{post.kasinonNimi} UKK:</h2>
                  <hr />
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Onko {post.kasinonNimi} turvallinen kasino? </h5><AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq1}</p>
                  </div>
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Jakaako {post.kasinonNimi} pelaajilleen bonusta tai ilmaisspinnejä? </h5><AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq2}</p>
                  </div>
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Miten pelitilin avaaminen onnistuu {post.kasinonNimi} -casinolle?</h5> <AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq3}</p>
                  </div>
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Onko {post.kasinonNimi} huijaus? </h5><AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq4}</p>
                  </div>
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Miten voin tehdä talletuksia ja kotiutuksia {post.kasinonNimi} -casinolla? </h5><AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq5}</p>
                  </div>
                  <div className="accordion">
                    <div className="accordion-title kasino"><h5>Minkä lisenssin valvonnassa {post.kasinonNimi} toimii ja ovatko voitot verovapaita?  </h5><AngleUp className="material-icons"/></div>
                    <p className="accordion-answer">{post.seoFaq6}</p>
                  </div>           
                </div>
                }
                <h2 id="info4"><Description className={`${kasinoStyles.icon} material-icons`}/> {post.kasinonNimi} arvostelu:</h2>
                <hr />
                <div className={kasinoStyles.left}>
                  <img data-src={post.screenshot.file.url} alt={post.screenshot.title} className={`${kasinoStyles.ssImg} lazyload`} width="370"/>
                  <div className={kasinoStyles.kasinoText}>{documentToReactComponents(post.arvosteluteksti.json, {
                    renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                        <img className="lazyload page-img" width="370" height="180"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                        />
                      ),
                    },
                  })}</div>
                </div>
                <h2  id="info5"><Person className={`${kasinoStyles.icon} material-icons`}/> Arvostelijan kokemukset: {post.kasinonNimi}</h2>
                <hr />
                <div className={kasinoStyles.kasinoText}>{documentToReactComponents(post.arvostelijanKokemukset.json)}</div>
                <div className={`${kasinoStyles.author} author`}>
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${post.kirjoittaja.slug}/`}><img data-src={post.kirjoittaja.kirjoittajanKuva.file.url} alt={post.kirjoittaja.kirjoittajanKuva.title} className="lazyload" width="60" height="60"/></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${post.kirjoittaja.slug}/`}><h5>{post.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>{post.publishDate} - Viimeksi päivitetty: {post.modifyDate}</p>
                  </div>
                  </div>
              </div>
                <h2 id="info6"><Casino className={`${kasinoStyles.icon} material-icons`}/> Pelinvalmistajat</h2>
                <hr />
                <div className={kasinoStyles.talletus}>
                <ul className="pelit" id="pelit">{valmistaja}</ul>
                </div>
                <h2 className="rahansiirrot"><Payment className={`${kasinoStyles.icon} material-icons`}/> Rahansiirrot </h2>
                <hr />
                <div className={kasinoStyles.rahat}>
                  <div className="talletus">{post.rahansiirrot.map(function(r, idx) {
                    return(<a key={idx} href={`/maksutavat/${r.replace(" ","-").toLowerCase()}/`}><img data-src={`/images/maksu/${r.replace(" ", "").toLowerCase()}.png`} alt={r} className="lazyload" width="77" height="25"/></a>)
                  })}
                  </div>
                </div>
               {/*} {post.julkkis != null &&
                <div className={kasinoStyles.celeb}>
                  <div className={kasinoStyles.kasinoText}>
                    <QuoteLeft className={kasinoStyles.quote}/>
                    {documentToReactComponents(post.julkkisArvostelu.json)}</div>
                  <div className={kasinoStyles.bottom}>
                    <img src={post.julkkis.kuva.file.url} alt={post.julkkis.kuva.title} />
                    <h5>{post.julkkis.nimi}</h5>
                  </div>
                </div>
                }*/}
              </div>
            </div>
          </div>
          <div className="relatedCasino">
            <h2>Voisit olla kiinnostunut myös...</h2>
            {similar.edges.slice(0, 3).map(edge=>(
              <div key={edge.node.kasinonSlug} className="card">
                <a href={`/kokemuksia/${edge.node.kasinonSlug}/`}>
                <img className="cardImg lazyload" data-src={edge.node.kasinonPieniLogo.file.url} alt={edge.node.kasinonPieniLogo.title} width="310" height="100"/>
                <div className="cardBg"></div>
                <div className="infos">
                  <h4>{edge.node.kasinonNimi}</h4>
                  <p className={`${kasinoStyles.tahdet} tahti`}>
                    {edge.node.arvostelu === 1 && <img src="/images/star/bigstar1.png" alt='Arvostelu 1/5' width="21" height="20"/>}
                    {edge.node.arvostelu === 2 && <img src="/images/star/bigstar2.png" alt='Arvostelu 2/5' width="42" height="20"/>}
                    {edge.node.arvostelu === 3 && <img src="/images/star/bigstar3.png" alt='Arvostelu 3/5' width="63" height="20"/>}
                    {edge.node.arvostelu === 4 && <img src="/images/star/bigstar4.png" alt='Arvostelu 4/5' width="84" height="20"/>}
                    {edge.node.arvostelu === 5 && <img src="/images/star/bigstar5.png" alt='Arvostelu 5/5' width="105" height="20"/>}
                    {edge.node.arvostelu == null && <span>-</span>}
                  </p>
                  <div className="bonusBlock">
                    <div className="blockItem">
                      <i>Bonus:</i>
                      <div>{edge.node.bonusRaha}</div>
                    </div>
                    <div className="blockItem">
                      <i>Ilmaiskierrokset:</i>
                      <div>{edge.node.ilmaiskierrokset}</div>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        <div className={`${kasinoStyles.fixedTop} fixed`} id="fixed">
        {post.kasinoSuljettu !== true     
        ?<div className={`${kasinoStyles.rowTop} row`} id="rowTop">
          <div className={kasinoStyles.data}>
            <img src={post.kasinonPieniLogo.file.url} alt={post.kasinonPieniLogo.title} width="100" height="43"/>
            <a className={`${kasinoStyles.btn} `} href={post.affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored" itemProp="url"><span>Pelaa!</span></a> 
          </div>
          <div className={kasinoStyles.bonus}>
              <h5>Bonukset:</h5>  
              <p>{post.bonusRaha} + {post.ilmaiskierrokset}</p>
          </div>     
        </div>
        :<div className={`${kasinoStyles.rowTop} row`} id="rowTop">
          <div className={`${kasinoStyles.data} ${kasinoStyles.data2}`}>
            <img src={post.kasinonPieniLogo.file.url} alt={post.kasinonPieniLogo.title} width="100" height="43"/>
          </div>
          <div className={kasinoStyles.bonus}>
            <h5>Bonukset:</h5>  
            <p>{post.bonusRaha} + {post.ilmaiskierrokset}</p>
          </div>     
        </div>
        }
        </div> 
      </Layout>
    )
  }
}
export default KasinoTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulKasino (kasinonSlug: { eq: $slug }){
      kasinonNimi
      kasinonSlug
      affiliateLinkki
      arvostelu
      bonusRaha
      ilmaiskierrokset
      lyhytBonuskuvaus
      bonustiedot {
        json
      }
      kasinonKategoriat
      kasinonKotisivut
      kasinonOmistaja
      kasinonPerustamisvuosi
      kasinonLisenssi
      kasinonPlussat
      tuotevalikoima
      pelinvalmistajat
      kasinonEmail
      aspaPuhelin
      livechat
      sivutkaannetty
      suomiAsiakaspalvelu
      suomiKampanjat
      rahansiirrot
      minimitalletus
      lunastaBonus
      kasinonIsoLogo {
        file {
          url
        }
        title
      }
      kasinonPieniLogo {
        file {
          url
        }
        title
      }
      screenshot {
        file {
          url
        }
        title
      }
      arvosteluteksti {
        json
      }
      arvostelijanKokemukset {
        json
      }
      seoFaq1
      seoFaq2
      seoFaq3
      seoFaq4
      seoFaq5
      seoFaq6
      # saannot {
      #   json
      # }
      seoBrowserTitle
      seoMetaDescription
      publishDate(formatString:"DD.MM.YYYY")
      modifyDate(formatString:"DD.MM.YYYY")
      kasinoSuljettu
      kirjoittaja{
        kirjoittajanNimi
        esittelyteksti
        slug
        kirjoittajanKuva {
          file {
            url
          }
          title
        }
      }
    }
    allContentfulKasino (filter: {node_locale: {eq: "fi-FI"}, poistaLinkkiArvosteluun: {ne: true}, kasinonSlug: {ne: $slug}}){
      edges {
        node {
          kasinonNimi
          kasinonSlug
          kasinonPieniLogo {
            file {
              url
            }
            title
          }
          kasinonOmistaja
          arvostelu
          bonusRaha
          ilmaiskierrokset
          kasinonKategoriat
        }
      }
    }
  }
`