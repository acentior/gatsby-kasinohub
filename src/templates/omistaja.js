// Omistaja - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./kasinopeli.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

class OmistajaTemplate extends React.Component {
  componentDidMount(){
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
    //similar posts
    var valmis = document.getElementById('maksutapa');
    var relate = document.getElementsByClassName('same');
    var card = document.getElementsByClassName('card');
    var r;
    for (r = 0; r < relate.length; r++) {
        var eka = relate[r].innerHTML;
        var toka = valmis.innerHTML;
        if(eka !== toka) {
          card[r].remove()
        }
    }
  }
  render() {
    const omistaja = get(this.props, 'data.contentfulKasinonOmistajat')
    const similar = get(this.props, 'data.allContentfulKasinonOmistajat')

    const { breadcrumb: { crumbs }} = this.props.pageContext
    return ( 
      <Layout location={this.props.location} id="main">
        <GatsbySeo
          title={omistaja.seoBrowserTitle}
          description={omistaja.seoMetaDescription}
          canonical={`https://kasinohub.com/omistajat/${omistaja.slug}/`}
          languageAlternates={[
            {
              hrefLang: 'fi-FI',
              href: `https://kasinohub.com/omistajat/${omistaja.slug}/`,
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
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'KasinoHub',
              item: 'https://kasinohub.com/',
            },
            {
              position: 2,
              name: 'Kasinoiden omistajat',
              item: 'https://kasinohub.com/omistajat/',
            },
            {
              position: 3,
              name: `${omistaja.omistajaOtsikko}`,
              item: `https://kasinohub.com/omistajat/${omistaja.slug}/`,
            },
          ]}
        />

        <div className={styles.pageContent}>
          <div className={`${styles.kasinopeli}`} id="kasinopeli">
          <img className={styles.img} src={omistaja.kansikuva.file.url} alt={omistaja.kansikuva.title} width="1080" height="350"/>
            <div className={styles.content}>
              <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={omistaja.omistajaOtsikko}/>
              <h1 className={styles.title}><center>{omistaja.omistajaOtsikko}</center></h1>
              <div className={styles.text}>{documentToReactComponents(omistaja.ylateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
              <h2>Omistajan kasinot:</h2>
              <ul className="casinoCard">
              {omistaja.omistuksetlista != null &&
                omistaja.omistuksetlista.map(({kasinonNimi, kasinonSlug, affiliateLinkki, poistaLinkkiArvosteluun, arvostelu, bonusRaha, ilmaiskierrokset,kasinonPieniLogo}) => (
                  <li key={kasinonSlug}>
                  <div className="hitsLi">
                    <a className="top" style={{ boxShadow: `none` }} href={`/kokemuksia/${kasinonSlug}/`}>
                      <img className="lazyload heroImage" data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} width="140" height="76"/>
                      <h4 className="head" style={{marginBottom: '12px'}}>{kasinonNimi}</h4>
                    </a>
                    <hr />
                      <div className="bonus">
                        <p>Bonukset: <b>{bonusRaha}</b> </p>
                        <p>Ilmaiskierrokset: <b>{ilmaiskierrokset}</b></p>
                      </div>
                      <p className="tahti">
                        {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                        {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                        {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                        {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                        {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                        {arvostelu == null && <span>-</span>}
                      </p>
                      <a className="btn button" href={affiliateLinkki} target="_blank" rel="noreferrer">Kasinolle</a>  
                  </div>
                </li>
                ))}
              </ul>
              <div className={styles.text}>{documentToReactComponents(omistaja.alateksti.json, {
                  renderNode: {
                      [BLOCKS.EMBEDDED_ASSET]: node => (
                          <img className="lazyload page-img"
                          data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                          alt={node.data.target.fields.title["fi-FI"]}
                          />
                      ),
                  },
              })}</div>
              <div className={styles.author}>
                <div className={styles.authorBlock}>
                <a href={`/kirjoittaja/${omistaja.kirjoittaja.slug}/`}><img data-src={omistaja.kirjoittaja.kirjoittajanKuva.file.url} width="100" height="100" className="lazyload" alt={omistaja.kirjoittaja.kirjoittajanKuva.title} /></a>
                <div className={styles.text}>
                  <h5>Kirjoittaja: {omistaja.kirjoittaja.kirjoittajanNimi}</h5>
                  <p>{omistaja.kirjoittaja.esittelyteksti} <a href={`/kirjoittaja/${omistaja.kirjoittaja.slug}/`}>Lue lisää kirjoittajasta!</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related2">
            <h2>Muita alan yrityksiä: </h2>
            {similar.edges.map(({node})=>(
              <div key={node.slug} className="card">
                <a href={`/omistajat/${node.slug}/`}>
                <img className="cardImg lazyload" data-src={node.kansikuva.file.url} alt={node.kansikuva.title} width="339" height="140"/>
                <h4>{node.omistajaOtsikko}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default OmistajaTemplate
export const pageQuery = graphql`
  query OmistajaBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulKasinonOmistajat(slug: {eq: $slug}) {
        omistajaOtsikko
        slug
        seoBrowserTitle
        seoMetaDescription
        kansikuva {
          file {url}
          title
        }
        omistuksetlista {
          kasinonNimi
          kasinonSlug
          affiliateLinkki
          arvostelu
          bonusRaha
          ilmaiskierrokset
          poistaLinkkiArvosteluun
          kasinonPieniLogo {
            file {url}
            title
          }
        }
        ylateksti {
          json
        }
        alateksti {
          json
        }
        publishDate(formatString:"DD.MM.YYYY")
        modifyDate(formatString:"DD.MM.YYYY")
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
    allContentfulKasinonOmistajat(filter: {node_locale: {eq: "fi-FI"}, slug: {ne: $slug}},limit:4) {
        edges {
        node {
            omistajaOtsikko
            slug
            kansikuva {
                file {url}
                title
            }
        }
        }
    }
  }
`