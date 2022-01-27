import React from "react"
import { Link } from 'gatsby'
import { Search as SearchIcon } from "@styled-icons/fa-solid"
import styled from "styled-components"

const Root = styled.div`
  position: relative;
  margin: 21px;
  align-self: center;
  float: right;
  font-size: 100%;
  @media(max-width: 997px) {
    margin: 15px;
    order: 2;
  }
  .SearchIcon {
    cursor: pointer;
  }
`
const Haku = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  position: absolute;
  right: 0;
  top: 2em;
  background: white;
  width: 250px;
  padding: 0 .2em;
  box-shadow: 0px 2px 6px 0px #c9c9c9;
  @media (max-width: 997px) {
    right: -1em;
  }
  .search__input {
    outline: none;
    border: none;
    padding: 5px 1%;
    font-size: 16px;
    border-radius: 2px;
    width: 98%;
    background: white;
    cursor: pointer;
    color: ${({ theme }) => theme.foreground};
    position: relative;
    right: 0px;
    @media (max-width: 997px) {
      padding: 10px 1%;
    }
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 1em;
      width: 1em;
      border-radius: 50em;
      background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
      opacity: .3;
      cursor: pointer;
    }
  }
`
const Result = styled.div`
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
  color: black;
  -webkit-overflow-scrolling: touch;
  z-index: 2;
  right: 0;
  width: 100%;
  .item-search {
    padding: 6px;
    font-size: 15px;
    border-bottom: 1px solid #ebebeb;
    span {
      font-weight: bold;
    }
    .link {
      text-decoration: none;
    }
  }
`
// Search component
class Search extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = {
      openSearch: false,
      query: '',
      results: [],
      suggest: true,
    };
    this.searchFocus = React.createRef();
  }
  handleClick() {
    if (!this.state.openSearch) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
       openSearch: !prevState.openSearch,
    }));
    if(this.searchFocus.current) {
      this.searchFocus.current.focus();
    }
  }
  handleOutsideClick(e) {    
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }
  render() {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(1).toUpperCase() + s.slice(2)
    }
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <>
          {(page.url === "/404.html" || page.url === "/dev-404-page/" || page.url === "/offline-plugin-app-shell-fallback/" || page.url === "/404/" || page.url === "/kokemuksia/lapilanders/" || page.url === "/kokemuksia/play-fast-casino/" || page.url === "/kokemuksia/masked-singer/" || page.url === "/kokemuksia/chanz/" || page.url === "/kokemuksia/true-flip/" || page.url === "/kokemuksia/playouwin/" || page.url === "/kokemuksia/slothino/" || page.url === "/kokemuksia/casiplay/" || page.url === "/kokemuksia/woo-casino/" || page.url === "/kokemuksia/wishmaker/" || page.url === "/kokemuksia/william-hill/" || page.url === "/kokemuksia/wild-fortune/" || page.url === "/kokemuksia/webbyslot/" || page.url === "/kokemuksia/vegas-mobile-casino/" || page.url === "/kokemuksia/tsars/" || page.url === "/kokemuksia/trada-casino/" || page.url === "/kokemuksia/the-online-casino/" || page.url === "/kokemuksia/temple-nile/" || page.url === "/kokemuksia/swift-casino/" || page.url === "/kokemuksia/svenbet/" || page.url === "/kokemuksia/sugar-casino/" || page.url === "/kokemuksia/sticky-wilds/" || page.url === "/kokemuksia/stelario/" || page.url === "/kokemuksia/spinurai/" || page.url === "/kokemuksia/spinstation/" || page.url === "/kokemuksia/spinrider/" || page.url === "/kokemuksia/spinshake/" || page.url === "/kokemuksia/spinland/" || page.url === "/kokemuksia/spinia/" || page.url === "/kokemuksia/slotty-vegas/" || page.url === "/kokemuksia/savarona/" || page.url === "/kokemuksia/roku-casino/" || page.url === "/kokemuksia/rocket-casino/" || page.url === "/kokemuksia/regals-casino/" || page.url === "/kokemuksia/rant-casino/" || page.url === "/kokemuksia/pokerstars-casino/" || page.url === "/kokemuksia/playjango/" || page.url === "/kokemuksia/playamo/" || page.url === "/kokemuksia/platincasino/" || page.url === "/kokemuksia/paradise-casino/" || page.url === "/kokemuksia/nightrush/" || page.url === "/kokemuksia/neptune-play/" || page.url === "/kokemuksia/neonvegas/" || page.url === "/kokemuksia/n1-casino/" || page.url === "/kokemuksia/mozzart/" || page.url === "/kokemuksia/moi-casino/" || page.url === "/kokemuksia/millionvegas/" || page.url === "/kokemuksia/miami-dice/" || page.url === "/kokemuksia/mason-slots/" || page.url === "/kokemuksia/casimba/" || page.url === "/kokemuksia/cashiopeia/" || page.url === "/kokemuksia/el-carado/" || page.url === "/kokemuksia/dream-vegas/" || page.url === "/kokemuksia/dozen-spins/" || page.url === "/kokemuksia/diamond-7/" || page.url === "/kokemuksia/crazy-fox/" || page.url === "/kokemuksia/joo-casino/" || page.url === "/kokemuksia/jambo-casino/" || page.url === "/kokemuksia/jackpot-paradise/" || page.url === "/kokemuksia/instantpay-casino/" || page.url === "/kokemuksia/hey-casino/" || page.url === "/kokemuksia/hello-casino/" || page.url === "/kokemuksia/gutsxpress" || page.url === "/kokemuksia/gunsbet/" || page.url === "/kokemuksia/grandmaster-jack/" || page.url === "/kokemuksia/grandivy/" || page.url === "/kokemuksia/golden-star-casino/" || page.url === "/kokemuksia/getslots/" || page.url === "/kokemuksia/gday-casino/" || page.url === "/kokemuksia/euslot/" || page.url === "/kokemuksia/euroslots/" || page.url === "/kokemuksia/cookie-casino/" || page.url === "/kokemuksia/chillispins/" || page.url === "/kokemuksia/casoo/" || page.url === "/kokemuksia/boomerang/" || page.url === "/kokemuksia/pk-com/" || page.url === "/kokemuksia/kahuna/" || page.url === "/kokemuksia/casinoly/" || page.url === "/kokemuksia/apuestamos/" || page.url === "/kokemuksia/mucho-vegas/" || page.url === "/kokemuksia/slotbox/" || page.url === "/kokemuksia/dreamz/" || page.url === "/kokemuksia/comeon/" || page.url === "/kokemuksia/dunder/" || page.url === "/kokemuksia/lapalingo/" || page.url === "/kokemuksia/live-lounge/" || page.url === "/kokemuksia/lucky-casino/" || page.url === "/kokemuksia/lucky-days-casino/" || page.url === "/kokemuksia/nopeampi-casino/" || page.url === "/kokemuksia/pixelbet/" || page.url === "/kokemuksia/lokicasino/" || page.url === "/kokemuksia/livecasino-com/" || page.url === "/kokemuksia/slothunter/" || page.url === "/kokemuksia/wunderino/" || page.url === "/kokemuksia/fun-casino/" || page.url === "/kokemuksia/emojino/" || page.url === "/kokemuksia/evospin/" || page.url === "/kokemuksia/one-casino/" || page.url === "/kokemuksia/pinocasino/" || page.url === "/kokemuksia/spin-samurai/" || page.url === "/kokemuksia/huikee/" || page.url === "/kokemuksia/20bet/"|| page.url === "/kokemuksia/21-nova/"|| page.url === "/kokemuksia/21-prive/"|| page.url === "/kokemuksia/24k-casino/"|| page.url === "/kokemuksia/all-reels/" || page.url === "/kokemuksia/avalon78/" || page.url === "/kokemuksia/barbados-casino/" || page.url === "/kokemuksia/bertil/" || page.url === "/kokemuksia/betamo/" || page.url === "/kokemuksia/betchan/" || page.url === "/kokemuksia/betmaster/" || page.url === "/kokemuksia/betvili/" || page.url === "/kokemuksia/ridika/" || page.url === "/kokemuksia/gale-and-martin/" || page.url === "/kokemuksia/billion-casino/" || page.url === "/kokemuksia/casinobud/" || page.url === "/kokemuksia/bob-casino/" || page.url === "/kokemuksia/bongo/") 
          ?  null
          : <div className="item-search" key={page.url}>
              <Link to={page.url} className="link" onClick={this.handleClick}>
                {page.template == null &&
                  <span>{capitalize(page.url).replaceAll('/','').replaceAll('-', ' ').replace('Evasteet','Evästeet').replace('Hedelmapelit','Hedelmäpelit').replace('Kasinot ilman lisenssia','Kasinot ilman lisenssiä').replace('Kayttoehdot','Käyttöehdot').replace('Nettikasinot ilman rekisteroitymista','Nettikasinot ilman rekisteröitymistä').replace('Pnp kasinot','PnP-kasinot')}</span>
                }
                {page.template != null &&
                  <span>{page.template}</span>
                }
              </Link>
            </div>
          }
          </>
        ))
      } else if (this.state.query.length > 2) {
        return 'Ei hakutuloksia haulla ' + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return 'Lisää vähintään 3 merkkiä'
      } else {
        return ''
      }

    }

    const Icon = () => {
      return (
        <SearchIcon className="SearchIcon" style={{width:'16px'}} onClick={this.handleClick} />
      )
    }
    return (
      <Root className={this.props.classNames} ref={node => { this.node = node; }}>
          <Icon />
          {this.state.openSearch && (
          <Haku name="div">
            <input
              id="input"
              name="input"
              className="search__input"
              type="search"
              ref={this.searchFocus}
              onChange={this.search}
              placeholder={'Hae'}
              autoComplete="off"
              autoFocus
            />
            <Result className="search__list">
              <ResultList />
            </Result>
          </Haku>
          )}
      </Root>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })
      results = Array.from(new Set(results))
      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search