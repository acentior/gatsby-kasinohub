import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { Sort } from "@styled-icons/material/Sort"
import { Close } from "@styled-icons/material/Close"

var createReactClass = require('create-react-class');
var options = {
	categories: [
		'kasinonKategoriat',
		'kasinonOmistaja',
		'kasinonLisenssi',
		'pelinvalmistajat',
		'tuotevalikoima',
		'arvostelu',
	],
	postsPerPage: 20,
	activeClass: 'active',
};
var App = createReactClass({
	getInitialState() {
		return {
			listOfPosts: null,
			currentPageId: 1,
			chosen: null,
			categories: null,
		}
	},
	UNSAFE_componentWillMount() {
		var posts = get(this, 'props.data.allContentfulKasino.edges')
		let chosenPreset = [];
		for(let i = 0; i < options.categories.length; i++) {
			chosenPreset.push('1all');
		}
		this.setState({
			listOfPosts: posts,
			chosen: chosenPreset,
			categories: options.categories,
		})
	},
	componentDidMount() {
    this.activeLink();
	var rajaa = document.getElementById("rajaa");
	var close = document.getElementById("close");
	var page =  document.querySelectorAll(".pagerLi");
	for(var p= 0; p < page.length; p++) {
		page[p].addEventListener("click", function() {
			close.classList.toggle("openSearch"); 
			close.parentNode.classList.remove("openSearch");
			window.scrollTo(0,0);
		})
	}
    rajaa.addEventListener("click", function() {
	  this.classList.toggle("active");
	  close.classList.toggle("openSearch");  
      this.nextElementSibling.classList.toggle("openSearch");    
	})
    close.addEventListener("click", function() {
	  this.classList.remove("openSearch");
	  this.parentNode.classList.remove("openSearch");    
	  window.scrollTo(0,0);
	})
	// Sort arrays
	var i, switching, b, shouldSwitch;
	var list = document.getElementsByClassName('filter-nav');
	for(var l= 0; l<list.length; l++) {
		switching = true;
		while (switching) {
			switching = false;
			b = list[l].getElementsByTagName("li");
			for (i = 0; i < (b.length - 1); i++) {
			  shouldSwitch = false;
			  if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			  }
			}
			if (shouldSwitch) {
			  b[i].parentNode.insertBefore(b[i + 1], b[i]);
			  switching = true;
			}
		}
	}
	// EXTERNAL LINKS _blank 
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
	} 
	},
	componentDidUpdate(prevProps, prevState){
		if(prevState.currentPageId !== this.state.currentPageId){
			this.activeLink();
		}
	},
	activeLink() {
		if (document.querySelector(`[data-rel="${this.state.currentPageId}"]`) !== null) {
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
			var elem = document.querySelector(`[data-rel="${this.state.currentPageId}"]`).parentNode;
			var siblings = getSiblings(elem);
			elem.classList.add(options.activeClass);
			var a;
			for (a = 0; a < siblings.length; a++) {
				siblings[a].classList.remove(options.activeClass);
			}
		}
	},
	pagesSwitcher(e) {
		e.preventDefault();
		let newPageId = e.currentTarget.getAttribute('data-rel');
		this.setState({
			currentPageId: newPageId
		})
	},
	filtersSwitcher(e) {
		e.preventDefault();
		let cat = e.currentTarget.getAttribute('data-category'),
			filter = e.currentTarget.getAttribute('data-filter'),
			catPos = this.state.categories.indexOf(cat),
			chosen = this.state.chosen;
		chosen.splice(catPos,1,filter);
		this.setState({
			chosen: chosen,
			currentPageId: 1
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
		var s;
		for (s= 0; s < siblings.length; s++) {
			siblings[s].classList.remove(options.activeClass);
		}
		e.currentTarget.parentNode.classList.toggle(options.activeClass);
		this.activeLink();
	},
	clearAll(e) {
		e.preventDefault();
		var posts = get(this, 'props.data.allContentfulKasino.edges')
		let chosenPreset = [];
		for(let i = 0; i < options.categories.length; i++) {
			chosenPreset.push('1all');
		}
		this.setState({
			listOfPosts: posts,
			chosen: chosenPreset,
			categories: options.categories,
			currentPageId: 1
		})
		if (document.querySelector(`[data-rel="${this.state.currentPageId}"]`) !== null) {
			document.querySelector('[data-rel="1"]').parentNode.classList.add(options.activeClass);
		}
		var ele = document.querySelectorAll('[data-filter="1all"]');
		for (var el = 0; el<ele.length; el++) {
			var elem = ele[el];
			var getSiblings = function (elem) {
				var siblings = [];
				var sibling = elem.parentNode.parentNode.firstChild;
				while (sibling) {
					if (sibling.nodeType === 1 && sibling !== elem) {
						siblings.push(sibling);
					}
					sibling = sibling.nextSibling;
				}
				return siblings;
			};
			var siblings = getSiblings(elem);
			for ( var s= 0; s < siblings.length; s++) {
				siblings[s].classList.remove(options.activeClass);
			}
			elem.parentNode.classList.add(options.activeClass);
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},
	render: function() {
		const katalogi = get(this, 'props.data.contentfulPagesKatalogiSivut')
		let postsPerPage = options.postsPerPage,
			currentPageId = this.state.currentPageId,
			catNames = this.state.categories,
			chosenFilters = this.state.chosen;
		var filtersPack = {};
		this.state.categories.forEach((category) => {
			filtersPack[category] = [];
		});
		for(var category in filtersPack) {
			this.state.listOfPosts.forEach(({node}) => {
				if(filtersPack[category].indexOf(node[category]) === -1) {
					filtersPack[category].push(node[category]);
				}
			});
		}
		// filter posts
		let filteredPosts = this.state.listOfPosts.filter((item) => {
			let picker = [];
			for(let i = 0; i < options.categories.length; i++) {
				if(item.node[catNames[i]]) {
					var string = item.node[catNames[i]].toString();
					var cf = chosenFilters[i];
					if(item.node[catNames[i]] === chosenFilters[i] || string.includes(cf) || item.node[catNames[i]] == chosenFilters[i] || chosenFilters[i] === '1all') {
						picker.push(true);
					} else {
						picker.push(false);
					}
				}
			}
			if(picker.every((n) => {return n === true})) {
				return item.node;
			}
		});
		let pagedPosts = filteredPosts.filter((item, i) => {
			return i > currentPageId * postsPerPage - postsPerPage -1 && i <= currentPageId * postsPerPage -1;
		});
		let pagesCounter = Math.ceil(filteredPosts.length / postsPerPage),
			totalPages = [];
		for(let i = 1; i <= pagesCounter; i++) {totalPages.push(i);}

		return (
			<Layout location={this.props.location}>
				<GatsbySeo
				title={katalogi.seoBrowserTitle}
				description={katalogi.seoMetaDescription}
				canonical='https://kasinohub.com/kokemuksia/'
				languageAlternates={[
					{
					hrefLang: 'fi-FI',
					href: 'https://kasinohub.com/kokemuksia/',
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
				<div style={{ background: '#fff' }}>
          		<div className="pageWrapper" style={{paddingTop:'0'}}>
					<h1 className="headline" style={{borderImage:'radial-gradient(circle, rgba(94,57,148,1) 0%, rgba(255,255,255,1) 100%) 1/1/ 0 stretch'}}><center>{katalogi.title}</center></h1>
					<div className="wrapperText" style={{marginBottom: '2em'}}>{documentToReactComponents(katalogi.ylaosanTeksti1.json, {
						renderNode: {
						[BLOCKS.EMBEDDED_ASSET]: node => (
							<img className="lazyload page-img"
							src={`${node.data.target.fields.file["fi-FI"].url}`}
							alt={node.data.target.fields.title["fi-FI"]}
							loading="lazy"
							/>
						)},
					})}</div>
         	 		<button id="rajaa"><Sort className="material-icons"/> Rajaa hakutuloksia</button>
					<div className="left-panel">
            			<h5 className="title">Rajaa hakutuloksia</h5>
						<Filters filtersPack={filtersPack} filtersSwitcher={this.filtersSwitcher} />
						<button id="clear" onClick={this.clearAll} >Tyhjennä</button>
						<button id="close">Sulje <Close className="material-icons"/></button>
					</div>
					<div className="right-panel">
						<div className="count">
							{filteredPosts.length == 1 && <p>{filteredPosts.length} arvostelu</p>}
							{filteredPosts.length == 0 && <p>{filteredPosts.length} arvostelua</p>}
							{filteredPosts.length > 1 && <p>{filteredPosts.length} arvostelua</p>}
						</div>
						<Posts posts={pagedPosts} />
						{pagesCounter > 1 && <Pager totalPages={totalPages} currentPage={currentPageId} pagesSwitcher={this.pagesSwitcher} />}
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
			return <FilterLists category={item} filtersPack={filtersPack} filtersSwitcher={this.props.filtersSwitcher} listKey={i} key={i} />
		});

		return (
			<div className="filter-navs">
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
		let filtersSwitcher = this.props.filtersSwitcher,
			  category = this.props.category;
		let listContent = this.props.filtersPack[category].map((item, i) => {
			if(item == "*Tieto tulossa"){
				return null;
			}
			return <li key={i} className="element" data-position={item}><a data-category={category} data-filter={item} onClick={filtersSwitcher} href="#">{item}</a></li>
		});

		return (<>
			<div className="filter">
				<h5>{capitalize(category.replace('kasinonOmistaja','Kasinon omistaja').replace('kasinonLisenssi','Lisenssi').replace('kasinonKategoriat','Kategoriat'))}</h5>
				{category == "kasinonLisenssi" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a className="elementLink" data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					<li key="Curacao" className="element" data-position="Curacao"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Curacao" onClick={filtersSwitcher} href="#">Curacao</a></li>
					<li key="Gibraltar" className="element" data-position="Gibraltar"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Gibraltar" onClick={filtersSwitcher} href="#">Gibraltar</a></li>
					<li key="Malta" className="element" data-position="Malta Gaming Authority"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Malta Gaming Authority" onClick={filtersSwitcher} href="#">Malta Gaming Authority</a></li>
					<li key="UK" className="element" data-position="UK Gambling Commission"><a className="elementLink" data-category="kasinonLisenssi" data-filter="UK Gambling Commission" onClick={filtersSwitcher} href="#">UK Gambling Commission</a></li>
					<li key="Viro" className="element" data-position="Viro"><a className="elementLink" data-category="kasinonLisenssi" data-filter="Viro" onClick={filtersSwitcher} href="#">Viro</a></li>
				</ul>
				}
				{category == "kasinonKategoriat" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a className="elementLink" data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					<li key="mobiilikasino" className="element" data-position="mobiilikasino"><a className="elementLink" data-category="kasinonKategoriat" data-filter="mobiilikasino" onClick={filtersSwitcher} href="#">Mobiilikasino</a></li>
					<li key="nettikasino" className="element" data-position="nettikasino"><a className="elementLink" data-category="kasinonKategoriat" data-filter="nettikasino" onClick={filtersSwitcher} href="#">Nettikasino</a></li>
					<li key="pikakasino" className="element" data-position="pikakasino"><a className="elementLink" data-category="kasinonKategoriat" data-filter="pikakasino" onClick={filtersSwitcher} href="#">Pikakasino</a></li>
				</ul>
				}
				{category == "arvostelu" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a className="elementLink" data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					<li key="5" className="element" data-position="5"><a className="elementLink" data-category="arvostelu" data-filter="5" onClick={filtersSwitcher} href="#">5</a></li>
					<li key="4" className="element" data-position="4"><a className="elementLink" data-category="arvostelu" data-filter="4" onClick={filtersSwitcher} href="#">4</a></li>
					<li key="3" className="element" data-position="3"><a className="elementLink" data-category="arvostelu" data-filter="3" onClick={filtersSwitcher} href="#">3</a></li>
				</ul>
				}
				{category == "tuotevalikoima" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a className="elementLink" data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					<li key="Bingo" className="element" data-position="Bingo"><a className="elementLink" data-category="tuotevalikoima" data-filter="Bingo" onClick={filtersSwitcher} href="#">Bingo</a></li>
					<li key="Fantasy Sports" className="element" data-position="Fantasy Sports"><a className="elementLink" data-category="tuotevalikoima" data-filter="Fantasy Sports" onClick={filtersSwitcher} href="#">Fantasy Sports</a></li>
					<li key="Kasino &amp; kolikkopelit" className="element" data-position="Kasino &amp; kolikkopelit"><a className="elementLink" data-category="tuotevalikoima" data-filter="Kasino &amp; kolikkopelit" onClick={filtersSwitcher} href="#">Kasino &amp; kolikkopelit</a></li>
					<li key="Live-vedonlyönti" className="element" data-position="Live-vedonlyönti"><a className="elementLink" data-category="tuotevalikoima" data-filter="Live-vedonlyönti" onClick={filtersSwitcher} href="#">Live-vedonlyönti</a></li>
					<li key="Livekasino" className="element" data-position="Livekasino"><a className="elementLink" data-category="tuotevalikoima" data-filter="Livekasino" onClick={filtersSwitcher} href="#">Livekasino</a></li>
					<li key="Nettiarvat" className="element" data-position="Nettiarvat"><a className="elementLink" data-category="tuotevalikoima" data-filter="Nettiarvat" onClick={filtersSwitcher} href="#">Nettiarvat</a></li>
					<li key="Nettipokeri" className="element" data-position="Nettipokeri"><a className="elementLink" data-category="tuotevalikoima" data-filter="Nettipokeri" onClick={filtersSwitcher} href="#">Nettipokeri</a></li>
					<li key="Vedonlyönti" className="element" data-position="Vedonlyönti"><a className="elementLink" data-category="tuotevalikoima" data-filter="Vedonlyönti" onClick={filtersSwitcher} href="#">Vedonlyönti</a></li>
				</ul>
				}
				{category == "pelinvalmistajat" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a className="elementLink" data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					<li key="1x2 Games" className="element" data-position="1x2 Games"><a className="elementLink" data-category="pelinvalmistajat" data-filter="1x2 Games" onClick={filtersSwitcher} href="#">1x2 Games</a></li>
					<li key="Amatic" className="element" data-position="Amatic"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Amatic" onClick={filtersSwitcher} href="#">Amatic</a></li>
					<li key="BeeFee" className="element" data-position="BeeFee"><a className="elementLink" data-category="pelinvalmistajat" data-filter="BeeFee" onClick={filtersSwitcher} href="#">BeeFee</a></li>
					<li key="Big Time Gaming" className="element" data-position="Big Time Gaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Big Time Gaming" onClick={filtersSwitcher} href="#">Big Time Gaming</a></li>
					<li key="Booming Games" className="element" data-position="Booming Games"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Booming Games" onClick={filtersSwitcher} href="#">Booming Games</a></li>
					<li key="Elk Studios" className="element" data-position="Elk Studios"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Elk Studios" onClick={filtersSwitcher} href="#">Elk Studios</a></li>
					<li key="Evolution Gaming" className="element" data-position="Evolution Gaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Evolution Gaming" onClick={filtersSwitcher} href="#">Evolution Gaming</a></li>
					<li key="Gamomat" className="element" data-position="Gamomat"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Gamomat" onClick={filtersSwitcher} href="#">Gamomat</a></li>
					<li key="IGT" className="element" data-position="IGT"><a className="elementLink" data-category="pelinvalmistajat" data-filter="IGT" onClick={filtersSwitcher} href="#">IGT</a></li>
					<li key="Iron Dog Studios" className="element" data-position="Iron Dog Studios"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Iron Dog Studios" onClick={filtersSwitcher} href="#">Iron Dog Studios</a></li>
					<li key="iSoftBet" className="element" data-position="iSoftBet"><a className="elementLink" data-category="pelinvalmistajat" data-filter="iSoftBet" onClick={filtersSwitcher} href="#">iSoftBet</a></li>
					<li key="Kalamba Games" className="element" data-position="Kalamba Games"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Kalamba Games" onClick={filtersSwitcher} href="#">Kalamba Games</a></li>
					<li key="Microgaming" className="element" data-position="Microgaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Microgaming" onClick={filtersSwitcher} href="#">Microgaming</a></li>
					<li key="Net Entertainment" className="element" data-position="Net Entertainment"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Net Entertainment" onClick={filtersSwitcher} href="#">Net Entertainment</a></li>
					<li key="NextGen Gaming (NYX)" className="element" data-position="NextGen Gaming (NYX)"><a className="elementLink" data-category="pelinvalmistajat" data-filter="NextGen Gaming (NYX)" onClick={filtersSwitcher} href="#">NextGen Gaming (NYX)</a></li>
					<li key="Nolimit City" className="element" data-position="Nolimit City"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Nolimit City" onClick={filtersSwitcher} href="#">Nolimit City</a></li>
					<li key="Play’n Go" className="element" data-position="Play’n Go"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Play’n Go" onClick={filtersSwitcher} href="#">Play’n Go</a></li>
					<li key="Pragmatic Play" className="element" data-position="Pragmatic Play"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Pragmatic Play" onClick={filtersSwitcher} href="#">Pragmatic Play</a></li>
					<li key="Push Gaming" className="element" data-position="Push Gaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Push Gaming" onClick={filtersSwitcher} href="#">Push Gaming</a></li>
					<li key="Quickfire" className="element" data-position="Quickfire"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Quickfire" onClick={filtersSwitcher} href="#">Quickfire</a></li>
					<li key="Quickspin" className="element" data-position="Quickspin"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Quickspin" onClick={filtersSwitcher} href="#">Quickspin</a></li>
					<li key="Red Tiger" className="element" data-position="Red Tiger"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Red Tiger" onClick={filtersSwitcher} href="#">Red Tiger</a></li>
					<li key="Relax Gaming" className="element" data-position="Relax Gaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Relax Gaming" onClick={filtersSwitcher} href="#">Relax Gaming</a></li>
					<li key="Scientific Games" className="element" data-position="Scientific Games"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Scientific Games" onClick={filtersSwitcher} href="#">Scientific Games</a></li>
					<li key="Sthlmgaming" className="element" data-position="Sthlmgaming"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Sthlmgaming" onClick={filtersSwitcher} href="#">Sthlmgaming</a></li>
					<li key="Thunderkick" className="element" data-position="Thunderkick"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Thunderkick" onClick={filtersSwitcher} href="#">Thunderkick</a></li>
					<li key="Wazdan" className="element" data-position="Wazdan"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Wazdan" onClick={filtersSwitcher} href="#">Wazdan</a></li>
					<li key="Yggdrasil" className="element" data-position="Yggdrasil"><a className="elementLink" data-category="pelinvalmistajat" data-filter="Yggdrasil" onClick={filtersSwitcher} href="#">Yggdrasil</a></li>
				</ul>
				}
				{category == "kasinonOmistaja" &&
				<ul key={this.props.listKey} className="filter-nav">
					<li className={`${options.activeClass} element`} data-position="1all"><a data-category={category} data-filter="1all" onClick={filtersSwitcher} href="#">Kaikki</a></li>
					{listContent}
				</ul>
				}
			</div>
			</>
		);
	}
});

var Posts = createReactClass({
	render: function() {
		if(this.props.posts[0] == null) {
			return(<p className="noResults">Ei hakutuloksia</p>)
		}
		else {
		return (
			<ul className="casinoCard">
			  {this.props.posts.map(({node}) => {
				return (
				<li key={node.kasinonSlug} className="casinoLi">
					<div className="hitsLi">
					<a className="top" style={{ boxShadow: `none` }} href={`/kokemuksia/${node.kasinonSlug}/`}>
						<img className="heroImage lazyload" data-src={node.kasinonPieniLogo.file.url} alt={node.kasinonPieniLogo.title} width="140" height="76"/>
						<h4 className="head" style={{marginBottom: '12px'}}>{node.kasinonNimi}</h4>
					</a>
					<hr />
					<div className="bonus">
						<p>Bonukset: <b>{node.bonusRaha}</b> </p>
						<p>Ilmaiskierrokset: <b>{node.ilmaiskierrokset}</b></p>
					</div>
					<p className="tahti">
						{node.arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' width='16' height='16'/>}
						{node.arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' width='33' height='16'/>}
						{node.arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' width='50' height='16'/>}
						{node.arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' width='67' height='16'/>}
						{node.arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' width='84' height='16'/>}
						{node.arvostelu == null && <span>-</span>}
					</p>
					<a className="btn button" href={node.affiliateLinkki} target="_blank" rel="noreferrer">Kasinolle</a>  
					</div>
				</li>
				)
			})}
			</ul>
		);}
	}
});

var Pager = createReactClass({
	render: function() {
		let cur = +this.props.currentPage,
			max = +this.props.totalPages.length,
			go = this.props.pagesSwitcher;
		return (
			<ul className="pager">
				{cur > 1 && <li><a data-rel={cur - 1} onClick={go} href="#">&lt;</a></li>}
				{this.props.totalPages.map((item,i) => {
					let isFirst = i === 0;
					let isLast = i === max - 1;
					if(i < cur + 2 && i > cur - 4 || isFirst || isLast ) {
						return <li key={i} className="pagerLi"><a data-rel={item} onClick={go} href="#">{item}</a></li>
					} else if( i === cur - 5 || i === cur + 2 ) {
						return <li key={i}>...</li>
					}
				})}
				{cur < max && <li><a data-rel={cur + 1} onClick={go} href="#">&gt;</a></li>}
			</ul>
		);
	}
});

export default App

export const pageQuery = graphql`
query {
	site {
		siteMetadata {
		  title
		}
	}
	contentfulPagesKatalogiSivut(title: {eq: "Nettikasino -arvostelut"}){
		title
		seoBrowserTitle
		seoMetaDescription
		ylaosanTeksti1 {
		json
		}
	}
    allContentfulKasino (filter: {node_locale: {eq: "fi-FI"}, poistaLinkkiArvosteluun: {ne: true}}, sort: {order: DESC, fields: publishDate}) {
    edges {
        node {
        kasinonNimi
        kasinonSlug
        affiliateLinkki
        arvostelu
        bonusRaha
        ilmaiskierrokset
        kasinonKategoriat
        kasinonOmistaja
        kasinonLisenssi
        kasinonPlussat
        tuotevalikoima
        pelinvalmistajat
        rahansiirrot
        minimitalletus
		lunastaBonus
		sivutkaannetty
		livechat
		suomiAsiakaspalvelu
		suomiKampanjat
		updatedAt
		snntJaEhdot
        kasinonPieniLogo {
            file {
            url
            }
            title
        }
    }
    }
  }
}
`