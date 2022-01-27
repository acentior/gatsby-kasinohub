// Kaikki nettikasinot - sivu 
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { GatsbySeo, ArticleJsonLd, FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AngleUp } from "@styled-icons/fa-solid/AngleUp"
import { Sort } from "@styled-icons/material/Sort"
import { Close } from "@styled-icons/material/Close"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const SliderWithTooltip  = createSliderWithTooltip(Slider);
function percentFormatter(v) {
	return `${v}`;
}
var createReactClass = require('create-react-class');
var options = {
	categories: [
    'bonusRaha',
		'ilmaiskierrokset',
    'kasinonPerustamisvuosi',
    'kasinonLisenssi',
    'sivutkaannetty',
    'kasinonKategoriat'
	],
	activeClass: 'active',
};
var KaikkiKasinot = createReactClass({
	getInitialState() {
		return {
			listOfPosts: null,
			currentPageId: 1,
			chosen: null,
			categories: null,
      isChecked: false,
		}
	},
	UNSAFE_componentWillMount() {
		var posts = get(this, 'props.data.contentfulPageKaikkiNettikasinotSivu.kaikkiNettikasinotLista')
		let chosenPreset = [];
		for(let i = 0; i < options.categories.length; i++) {
			chosenPreset.push('11all');
		}
		this.setState({
			listOfPosts: posts,
			chosen: chosenPreset,
			categories: options.categories,
      isChecked: options.isChecked,
		})
	},
	componentDidMount() { 
    var rajaa = document.getElementById("rajaa");
    var close = document.getElementById("close");
    rajaa.addEventListener("click", function() {
      this.classList.toggle("active");
      close.classList.toggle("openSearch");  
        this.nextElementSibling.classList.toggle("openSearch");    
    })
    close.addEventListener("click", function() {
      this.classList.remove("openSearch");
      this.previousElementSibling.classList.remove("openSearch");  
      this.previousElementSibling.previousElementSibling.classList.remove("active");    
    })
		var chg = document.getElementsByClassName('rc-slider-handle');
		for(var d =0; d <chg.length; d++) {
			if (chg[d].getAttribute('aria-valuenow') != 0) {
				chg[d].classList.add("changed");
			}
		}
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
    var elem = document.getElementById("kk");
    elem.classList.add("current");
  },
	filtersSwitcher(e) {
     //Sliders
     if ( e.currentTarget == null) {
      let element = document.querySelectorAll('.rc-slider-handle');
      for(var e = 0; e<element.length; e++) {
        if(element[0].getAttribute('aria-valuenow') > element[0].getAttribute('aria-valuemin') ) {
          let	fil = element[0].parentNode.parentNode,
            cat = fil.getAttribute('data-category'),
            catPos = this.state.categories.indexOf(cat),
            value = fil.querySelector('.rc-slider-handle').getAttribute('aria-valuenow'),
            chosen = this.state.chosen;
            chosen.splice(catPos,1,value);
            this.setState({
              chosen: chosen,
            })
        }
        if(element[1].getAttribute('aria-valuenow') > element[1].getAttribute('aria-valuemin') ) {
          let	fil = element[1].parentNode.parentNode,
            cat = fil.getAttribute('data-category'),
            catPos = this.state.categories.indexOf(cat),
            value = fil.querySelector('.rc-slider-handle').getAttribute('aria-valuenow'),
            chosen = this.state.chosen;
            chosen.splice(catPos,1,value);
            this.setState({
              chosen: chosen,
            })
        }
        if(element[2].getAttribute('aria-valuenow') > element[2].getAttribute('aria-valuemin')) {
          let	fil = element[2].parentNode.parentNode,
            cat = fil.getAttribute('data-category'),
            catPos = this.state.categories.indexOf(cat),
            value = fil.querySelector('.rc-slider-handle').getAttribute('aria-valuenow'),
            chosen = this.state.chosen;
            chosen.splice(catPos,1,value);
            this.setState({
              chosen: chosen,
            })
        }
        else {
            let	fil = element[e].parentNode.parentNode,
            cat = fil.getAttribute('data-category'),
            catPos = this.state.categories.indexOf(cat),
            value = '11all',
            chosen = this.state.chosen;
            chosen.splice(catPos,1,value);
            this.setState({
              chosen: chosen,
            })
        }
      }
    }
    //Lists
    else {
      let  cat = e.currentTarget.getAttribute('data-category');
      if (cat == "kasinonLisenssi") {
        e.preventDefault();
        let filter = e.currentTarget.getAttribute('data-filter'),
        catPos = this.state.categories.indexOf(cat),
        chosen = this.state.chosen;
        chosen.splice(catPos,1,filter);
        this.setState({
          chosen: chosen,
        })
        var getSiblings = function (elem) {
          var siblings = [];
          var sibling = elem.parentNode.firstChild;
          while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
              siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
          }
          return siblings;
        };
        var elem = e.currentTarget.parentNode;
        var siblings = getSiblings(elem);
        for (var r = 0; r < siblings.length; r++) {
          siblings[r].classList.remove(options.activeClass);
        }
        e.currentTarget.parentNode.classList.add(options.activeClass);
      }
      //Boolean
      else if (cat == "sivutkaannetty") {
        if (document.getElementById(true).checked && !document.getElementById(false).checked) {
          let filter = document.getElementById(true).getAttribute('data-filter'),
          catPos = this.state.categories.indexOf(cat),
          chosen = this.state.chosen,
          isChecked = this.state.isChecked;
          chosen.splice(catPos,1,filter);
          this.setState({
            isChecked: !isChecked,
            chosen: chosen,
          })
          document.getElementById(true).parentNode.classList.toggle(options.activeClass);
        }
        else if (document.getElementById(false).checked && !document.getElementById(true).checked) {
          let filter = document.getElementById(false).getAttribute('data-filter'),
          catPos = this.state.categories.indexOf(cat),
          chosen = this.state.chosen,
          isChecked = this.state.isChecked;
          chosen.splice(catPos,1,filter);
          this.setState({
            isChecked: !isChecked,
            chosen: chosen,
          })
          document.getElementById(false).parentNode.classList.toggle(options.activeClass);
        }
        else if ((document.getElementById(false).checked && document.getElementById(true).checked) || (!document.getElementById(false).checked && !document.getElementById(true).checked)) {
          let filter = '11all',
          catPos = this.state.categories.indexOf(cat),
          chosen = this.state.chosen,
          isChecked = this.state.isChecked;
          chosen.splice(catPos,1,filter);
          this.setState({
            isChecked: !isChecked,
            chosen: chosen,
          })
          e.currentTarget.parentNode.classList.toggle(options.activeClass);
        }
      }
      else if (cat =="kasinonKategoriat"){
        if (document.getElementById("pikakasino").checked) {
          let filter = document.getElementById("pikakasino").getAttribute('data-filter'),
          catPos = this.state.categories.indexOf(cat),
          chosen = this.state.chosen,
          isChecked = this.state.isChecked;
          chosen.splice(catPos,1,filter);
          this.setState({
            isChecked: !isChecked,
            chosen: chosen,
          })
          document.getElementById("pikakasino").parentNode.classList.toggle(options.activeClass);
        } else {
          let filter = '11all',
          catPos = this.state.categories.indexOf(cat),
          chosen = this.state.chosen,
          isChecked = this.state.isChecked;
          chosen.splice(catPos,1,filter);
          this.setState({
            isChecked: !isChecked,
            chosen: chosen,
          })
          e.currentTarget.parentNode.classList.toggle(options.activeClass);
        }
      }
    }
	},
	render: function() {
    const page = get(this, 'props.data.contentfulPageKaikkiNettikasinotSivu')
		let	catNames = this.state.categories,
			chosenFilters = this.state.chosen;
		var filtersPack = {};
		this.state.categories.forEach((category) => {
			filtersPack[category] = [];
		});
		for(var category in filtersPack) {
			this.state.listOfPosts.forEach((item) => {
				if(filtersPack[category].indexOf(item[category]) === -1) {
					filtersPack[category].push(item[category]);
				}
			});
		}
		// filter posts
		let filteredPosts = this.state.listOfPosts.filter((item) => {
			let picker = [];
			for(let i = 0; i < options.categories.length; i++) {
        var string = item[catNames[i]].toString();
        var hasNumber = /\d/;
        if(hasNumber.test(item[catNames[i]]) === true) {
          var matches = item[catNames[i]].match(/(\d+)/);
          var nbr = parseInt(matches[0]);
        }
        if ((chosenFilters[0] != "11all" && item[catNames[0]] == "-") ||(chosenFilters[1] != "11all" && item[catNames[1]] == "-")) {
          picker.push(false);
        }
        if(nbr >= chosenFilters[i]  || string === chosenFilters[i] || string.includes(chosenFilters[i]) || chosenFilters[i] === '11all') {
          picker.push(true);
        } else {
          picker.push(false);
        }
			}
			if(picker.every((n) => {return n === true})) {
				return item;
			}
		});
		return (
			<Layout location={this.props.location}>
          <GatsbySeo
            title={page.seoBrowserTitle}
            description={page.seoMetaDescription}
            canonical='https://kasinohub.com/kaikki-nettikasinot/'
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: 'https://kasinohub.com/kaikki-nettikasinot/',
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
            url='https://kasinohub.com/kaikki-nettikasinot/'
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
              { question: 'Onko kaikilla nettikasinoilla pelaaminen turvallista?', answer: 'Emme tietenkään voi mennä takuuseen siitä, etteikö maailmasta voisi löytyä harvakseltaan yksittäisiä pelipaikkoja, joiden toiminnasta voisi löytyä jotakin moitittavaa. Siitä olemme kuitenkin varmoja, että kaikki nettikasinot, jotka sivustollamme esiintyvät, ovat ehdottoman turvallisia pelipaikkoja 365 päivänä vuodessa!' },
              { question: 'Onko kaikki nettikasinot laillisia Suomen monopolin vuoksi?', answer: 'Suomessa vallitsevan Veikkauksen monopolin myötä varsinaisia kivijalka-casinoita ei valtiomme rajojen sisälle voida pystyttää - ellei sen toiminnasta vastaa Veikkaus itse. Internetin osalta Veikkaus ei kuitenkaan voi kuluttajien käyttäytymistä hallita, jonka myötä aivan kaikki nettikasinot ovat kyllä 110 prosenttisesti laillisia pelipaikkoja suomalaispelureille.' },
              { question: 'Eivätkö kaikki maailman nettikasinot ole pitkälti samanlaisia keskenään?', answer: 'Periaatteen tasolla kaikki kasinot toimivat hyvin pitkälti samankaltaisin tavoin, mutta täydellisen identtisiä eivät netin pelipaikat tietty ikinä ole. Kun eroja lähtee ihan kunnolla etsimään, voidaan huomata, että kaikki maailman nettikasinot tarjoavat pelaajille erilaisten ulkoasujen lisäksi myös vaihtelevat peli-, maksutapa- ja kampanjavalikoimat, joidenka lisäksi eroja löytyy myös pelaamisen aloittamisen ja nostojen nopeuden osalta.' },
              { question: 'Saako kaikilla nettikasinoilla bonareita tai lahjoja kampanjoista?', answer: 'Kuten sanottua, kaikilla nettikasinoilla on aina oma lähestymistapa omien asiakkaidensa huomioimiseen, ja tämä vaihtelevuus näkyy markkinoilla erilaisten kampanjoiden ja bonarietujen muodossa. Jotkin pelipaikat eivät tällaisia kampanjoita järjestä esimerkiksi laisinkaan, kun taasen toiset casinot lyövät erilaisia etuja tarjolle lähes jatkuvaan tahtiin.' },
              { question: 'Mistä voin löytää kaikki nettikasinot listattuna?', answer: 'Löydät netin kaikki kasinot ehdottomasti helpoiten sivustoltamme, sillä teemme kellonympäri töitä uusien pelipaikkojen lisäämiseksi sivumme tarjontaan. Toimitustiimimme kasaama kaikki nettikasinot lista onkin heittämällä Internetin kattavin ja laadukkain, ja painimmekin tarjonnan osalta aivan eri sarjoissa kuin mitkään muut sivustot.' },
              { question: 'Tarjoaako kaikki nettikasinot verovapaita nostoja Suomeen?', answer: 'Se, pystyykö suomalaispelaaja nostaamaan rahaa tililtään verottomaan tyyliin, riippuu pelipaikan omistamasta lisenssistä. Näin ollen siis aivan kaikkia nettikasinoita ei tällainen verottomuus valitettavasti koske. Suosittelemmekin sinua siis tarkastamaan aina casinon lisenssi-asiat ennen kuin aloitat sivustolla pelaamisen.' },
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
              <h3 className="listHead">Kaikki maailman nettikasinot -lista</h3>
              <i className="update allUpdate">Päivitetty: {page.kaikkiNettikasinotPvm}</i>
              <button id="rajaa"><Sort className="material-icons"/> Suodata listaa</button>
              <Filters filtersPack={filtersPack} filtersSwitcher={this.filtersSwitcher} chosen={this.state.chosen}/>
						  <button id="close" style={{ marginBottom: '1em'}}>Sulje <Close className="material-icons"/></button>
              <div className="countAll">
                {filteredPosts.length === 1 && <p>{filteredPosts.length} kasino</p>}
                {filteredPosts.length === 0 && <p>{filteredPosts.length} kasinoa</p>}
                {filteredPosts.length > 1 && <p>{filteredPosts.length} kasinoa</p>}
              </div>
              <Posts posts={filteredPosts} />
              <div className="wrapperTop">
              <img data-src={page.kuva.file.url} alt={page.kuva.title} className="lazyload wrapperImage"/>
                {documentToReactComponents(page.ylaosanTeksti2.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: node => (
                    <img className="lazyload page-img"
                      data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                      alt={node.data.target.fields.title["fi-FI"]}
                      width="60" height="60"                      
                    />
                  ),
                },
              })}</div>
              <div className="accordions">
                <h2>Kaikki nettikasinot &amp; Usein kysytyt kysymykset</h2>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko kaikilla nettikasinoilla pelaaminen turvallista? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Emme tietenkään voi mennä takuuseen siitä, etteikö maailmasta voisi löytyä harvakseltaan yksittäisiä pelipaikkoja, joiden toiminnasta voisi löytyä jotakin moitittavaa. Siitä olemme kuitenkin varmoja, että kaikki nettikasinot, jotka sivustollamme esiintyvät, ovat ehdottoman turvallisia pelipaikkoja 365 päivänä vuodessa!</p>
                </div>
                <div className="accordion">
                  <div className="accordion-title"><h5>Onko kaikki nettikasinot laillisia Suomen monopolin vuoksi? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Suomessa vallitsevan Veikkauksen monopolin myötä varsinaisia kivijalka-casinoita ei valtiomme rajojen sisälle voida pystyttää - ellei sen toiminnasta vastaa Veikkaus itse. Internetin osalta Veikkaus ei kuitenkaan voi kuluttajien käyttäytymistä hallita, jonka myötä aivan kaikki nettikasinot ovat kyllä 110 prosenttisesti laillisia pelipaikkoja suomalaispelureille.</p>
                </div>                
                <div className="accordion">
                  <div className="accordion-title"><h5>Eivätkö kaikki maailman nettikasinot ole pitkälti samanlaisia keskenään? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Periaatteen tasolla kaikki kasinot toimivat hyvin pitkälti samankaltaisin tavoin, mutta täydellisen identtisiä eivät netin pelipaikat tietty ikinä ole. Kun eroja lähtee ihan kunnolla etsimään, voidaan huomata, että kaikki maailman nettikasinot tarjoavat pelaajille erilaisten ulkoasujen lisäksi myös vaihtelevat peli-, maksutapa- ja kampanjavalikoimat, joidenka lisäksi eroja löytyy myös pelaamisen aloittamisen ja nostojen nopeuden osalta.</p>
                </div>     
                <div className="accordion">
                  <div className="accordion-title"><h5>Saako kaikilla nettikasinoilla bonareita tai lahjoja kampanjoista? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Kuten sanottua, kaikilla nettikasinoilla on aina oma lähestymistapa omien asiakkaidensa huomioimiseen, ja tämä vaihtelevuus näkyy markkinoilla erilaisten kampanjoiden ja bonarietujen muodossa. Jotkin pelipaikat eivät tällaisia kampanjoita järjestä esimerkiksi laisinkaan, kun taasen toiset casinot lyövät erilaisia etuja tarjolle lähes jatkuvaan tahtiin.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Mistä voin löytää kaikki nettikasinot listattuna? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Löydät netin kaikki kasinot ehdottomasti helpoiten sivustoltamme, sillä teemme kellonympäri töitä uusien pelipaikkojen lisäämiseksi sivumme tarjontaan. Toimitustiimimme kasaama kaikki nettikasinot lista onkin heittämällä Internetin kattavin ja laadukkain, ja painimmekin tarjonnan osalta aivan eri sarjoissa kuin mitkään muut sivustot.</p>
                </div> 
                <div className="accordion">
                  <div className="accordion-title"><h5>Tarjoaako kaikki nettikasinot verovapaita nostoja Suomeen? </h5><AngleUp className="material-icons"/></div>
                  <p className="accordion-answer">Se, pystyykö suomalaispelaaja nostaamaan rahaa tililtään verottomaan tyyliin, riippuu pelipaikan omistamasta lisenssistä. Näin ollen siis aivan kaikkia nettikasinoita ei tällainen verottomuus valitettavasti koske. Suosittelemmekin sinua siis tarkastamaan aina casinon lisenssi-asiat ennen kuin aloitat sivustolla pelaamisen.</p>
                </div>            
              </div>
              <div className="author">
                  <div className="authorBlock">
                  <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><img data-src={page.kirjoittaja.kirjoittajanKuva.file.url} className="lazyload" alt={page.kirjoittaja.kirjoittajanKuva.title} /></a>
                  <div className="text">
                    <a href={`/kirjoittaja/${page.kirjoittaja.slug}/`}><h5>{page.kirjoittaja.kirjoittajanNimi}</h5></a>
                    <p>Viimeksi päivitetty: {page.modify}</p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </Layout>
		);
	}
});

var Filters = createReactClass({
	render: function() {
		let filtersPack = this.props.filtersPack,
			categories = [];
		for(var category in filtersPack) {
			categories.push(category);
		}
		let lists = categories.map((item, i) => {
			return <FilterLists category={item} filtersPack={filtersPack} filtersSwitcher={this.props.filtersSwitcher} listKey={i} key={i} chosen={this.props.chosen}/>
		});
		return (
			<div className="filters">
				{lists}
			</div>
		);
	}
});

var FilterLists = createReactClass({
	render: function() {
		const capitalize = (s) => {
			if (typeof s !== 'string') return ''
			return s.charAt(0).toUpperCase() + s.slice(1)
		}
    let isChecked = this.props.isChecked;
		let filtersSwitcher = this.props.filtersSwitcher,
			  category = this.props.category,
        chosen = this.props.chosen;
		return (<>
			<div className="filter" data-category={category}>
				<h5>{capitalize(category.replace('bonusRaha','Bonukset (€)').replace('ilmaiskierrokset','Ilmaiskierrokset (kpl)').replace('kasinonLisenssi','Lisenssi').replace('kasinonPerustamisvuosi','Perustamisvuosi').replace('sivutkaannetty','Sivut suomeksi?').replace('kasinonKategoriat','Pelaa pankkitunnuksilla?'))}</h5>
        {category == "bonusRaha" &&
        <>
          <span className="now">{chosen[0] != "11all" && <>{chosen[0]} - 3300€</>}</span>
        	<SliderWithTooltip tipFormatter={percentFormatter} tipProps={{ overlayClassName: 'foo' }} allowCross={false} defaultValue={'11all'} min={0} max={3300} step={100} onAfterChange={filtersSwitcher}/>
					<span className="sliderVal min">0</span>
					<span className="sliderVal max">3300</span>
        </>
        }
        {category == 'ilmaiskierrokset' &&
        <>
          <span className="now">{chosen[1] != "11all" &&<>{chosen[1]} - 1000kpl</>}</span>
          <SliderWithTooltip tipFormatter={percentFormatter} tipProps={{ overlayClassName: 'foo' }} allowCross={false} defaultValue={'11all'} min={0} max={1000} step={100} onAfterChange={filtersSwitcher}/>
          <span className="sliderVal min">0</span>
          <span className="sliderVal max">1000</span>
        </>
        }
        {category == 'kasinonPerustamisvuosi' &&
        <>
          <span className="now">{chosen[2] != "11all" ?<>{chosen[2]}-2022</> :"1997-2022"}</span>
          <SliderWithTooltip tipFormatter={percentFormatter} tipProps={{ overlayClassName: 'foo' }} allowCross={false} defaultValue={1997} min={1997} max={2022} step={1} onAfterChange={filtersSwitcher}/>
          <span className="sliderVal min">1997</span>
          <span className="sliderVal max">2022</span>
        </>
        }
        {category == "kasinonLisenssi" &&
          <ul key={this.props.listKey} className="filter-nav">
            <li className={`${options.activeClass} element`} data-position="11all"><a className="elementLink" data-category={category} data-filter="11all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
            <li key="Curacao" className="element" data-position="Curacao"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Curacao" onClick={filtersSwitcher} href="#">Curacao</a></li>
            <li key="Gibraltar" className="element" data-position="Gibraltar"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Gibraltar" onClick={filtersSwitcher} href="#">Gibraltar</a></li>
            <li key="Malta" className="element" data-position="Malta Gaming Authority"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Malta Gaming Authority" onClick={filtersSwitcher} href="#">Malta Gaming Authority</a></li>
            <li key="UK" className="element" data-position="UK Gambling Commission"><a className="elementLink" data-category="kasinonLisenssi" data-filter="UK Gambling Commission" onClick={filtersSwitcher} href="#">UK Gambling Commission</a></li>
            <li key="Viro" className="element" data-position="Viro"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Viro" onClick={filtersSwitcher} href="#">Viro</a></li>
          </ul>
        }
        {category == "sivutkaannetty" && 
          <div key={this.props.listKey} className="filterBox">
            <label data-position="true" key="true"><input type="checkbox" id="true" checked={isChecked} className="element" data-category={category} data-filter="true" onChange={filtersSwitcher} />Kyllä</label>
            <label data-position="false" key="false"><input type="checkbox" id="false" checked={isChecked} className="element" data-category={category} data-filter="false" onChange={filtersSwitcher} />Ei</label>
          </div>
        }
        {category == "kasinonKategoriat" && 
          <div key={this.props.listKey} className="filterBox">
            <label data-position="pikakasino" key="pikakasino"><input type="checkbox" id="pikakasino" checked={isChecked} className="element" data-category="kasinonKategoriat" data-filter="pikakasino" onChange={filtersSwitcher} />Pikakasino</label>
          </div>
        }
			</div>
		</>);
	}
});

var Posts = createReactClass({
	render: function() {
		if(this.props.posts[0] == null) {
			return(<p className="noResults">Ei hakutuloksia</p>)
		}
		else {
		return (
		<table className="casinoTable">
			<tbody>
			{this.props.posts.map((item) => {
				return (
          <tr className="casino" key={`ikit${item.kasinonSlug}`}>
            <td className="casinotop">
              <div className="logo">
                <img data-src={item.kasinonPieniLogo.file.url} alt={item.kasinonPieniLogo.title} className="lazyload" width="120" height="51"/>
                <div className="name">
                  <h5 className="title">{item.kasinonNimi}</h5>
                </div>
              </div>
              <div className="casinoRate"> 
                <div className="arvostelu tahti">
                  {item.arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' width='16' height='16'/>}
                  {item.arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' width='33' height='16'/>}
                  {item.arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' width='50' height='16'/>}
                  {item.arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' width='67' height='16'/>}
                  {item.arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' width='84' height='16'/>}
                  {item.arvostelu == null && <span>-</span>}
                </div>
                {item.poistaLinkkiArvosteluun !== true && <a href={`/kokemuksia/${item.kasinonSlug}/`} className="linkki">Lue arvostelu</a>}
              </div>
              <div className="contentBox first">
                <div className="contentInfo">
                    <div className="offerItem">
                    <i>Bonukset:</i>
                    <div className="offer">{item.bonusRaha}</div>
                    </div>
                    <div className="offerItem">
                    <i>Kierrokset:</i>
                    <div className="offer">{item.ilmaiskierrokset}</div>
                    </div>
                </div>
              </div>
              <div className="contentBox second">
                <div className="contentText">
                  {item.listatekstit !== null &&
                    <div>{item.listatekstit.kaikkiNettikasinotSivuLista.kaikkiNettikasinotSivuLista}</div>
                  }
                  {item.listatekstit == null &&
                    <div>-</div>
                  }
                </div>
              </div>
              <div className="contentButton">
                <div className="contentBtn only">
                  <a className="btn" href={item.affiliateLinkki} target="_blank" rel="noopener noreferrer sponsored">Kasinolle</a>
                </div>
                {item.snntJaEhdot != null &&
                  <a className="saannot" href={item.snntJaEhdot} target="_blank"  rel="noopener noreferrer sponsored">Säännöt ja ehdot</a>
                }
              </div>
          </td>
        </tr>
			)
			})}
			</tbody>
		</table>
	);}
	}
});

export default KaikkiKasinot

export const pageQuery = graphql`
  query KaikkiKasinotQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPageKaikkiNettikasinotSivu {
      title
      seoBrowserTitle
      seoMetaDescription
      kaikkiNettikasinotPvm(formatString:"DD.MM.YYYY")
      kaikkiNettikasinotLista {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        sivutkaannetty
        kasinonLisenssi
        kasinonPerustamisvuosi
        kasinonKategoriat
        snntJaEhdot
        poistaLinkkiArvosteluun
        listatekstit {
          kaikkiNettikasinotSivuLista {
            kaikkiNettikasinotSivuLista
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
