// Kirjoittaja - template
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import styles from "./kasinopeli.module.scss"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"

class KirjoittajaTemplate extends React.Component {
  componentDidMount() {
    /* External links _blank */
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname !== window.location.hostname) {
          links[i].target = '_blank';
          links[i].rel = 'noopener';
      }
    }
  }
  render() {
    const kirjoittaja = get(this.props, 'data.contentfulKirjoittaja')

    return (
      <Layout location={this.props.location}>
        <div className={styles.article}>
        <GatsbySeo
            title={kirjoittaja.kirjoittajanNimi}
            canonical={`https://kasinohub.com/kirjoittaja/${kirjoittaja.slug}/`}
            languageAlternates={[
              {
                hrefLang: 'fi-FI',
                href: `https://kasinohub.com/kirjoittaja/${kirjoittaja.slug}/`,
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
          <div className={styles.pageContent}>
            <div className={`${styles.kasinopeli}`} id="kirjoittaja">
              <div className={`${styles.wrapper} wrapper`}>
                  <div className={styles.wrapperContent}>
                    <div className="top">
                      <h1 className="section-headline"><center>{kirjoittaja.kirjoittajanNimi}</center></h1>
                      <div className="image">
                        <img src={kirjoittaja.kirjoittajanKuva.file.url} alt={kirjoittaja.kirjoittajanKuva.title} width="200" height="254"/>
                      </div>
                    </div>
                    <div className="wrapperText">{documentToReactComponents(kirjoittaja.pitkEsittelyteksti.json, {
                        renderNode: {
                            [BLOCKS.EMBEDDED_ASSET]: node => (
                                <img className="lazyload page-img"
                                data-data-src={`${node.data.target.fields.file["fi-FI"].url}`}
                                alt={node.data.target.fields.title["fi-FI"]}
                                />
                            ),
                        },
                    })}</div>   
                    <div className="email">
                        <p>Ota yhteyttä sähköpostitse: <a href={`mailto:${kirjoittaja.email}`}>{kirjoittaja.email}</a></p>
                    </div>
                  </div>
              </div>
              <div className="relatedCasino latest">
              <h2>Viimeisimmät kasinoarvostelut </h2>
                {kirjoittaja.kasino.slice(0, 3).map(({kasinonNimi,kasinonSlug,arvostelu,kasinonPieniLogo,poistaLinkkiArvosteluun, bonusRaha,ilmaiskierrokset}) =>
                  <>{poistaLinkkiArvosteluun !== true
                    ?<div key={kasinonSlug} className="card">
                      <a href={`/kokemuksia/${kasinonSlug}/`}>
                        <img className="cardImg lazyload" data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} width="120" height="51"/>
                        <div className="cardBg"></div>
                        <div className="infos">
                          <h4>{kasinonNimi}</h4>
                          <p className="tahti">
                            {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                            {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                            {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                            {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                            {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                            {arvostelu == null && <span>-</span>}
                          </p>
                          <div className="bonusBlock">
                            <div className="blockItem">
                              <i>Bonus:</i>
                              <div>{bonusRaha}</div>
                            </div>
                            <div className="blockItem">
                              <i>Ilmaiskierrokset:</i>
                              <div>{ilmaiskierrokset}</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    :<div key={kasinonSlug} className="card">
                      <img className="cardImg lazyload" data-src={kasinonPieniLogo.file.url} alt={kasinonPieniLogo.title} width="120" height="51"/>
                        <div className="cardBg"></div>
                        <div className="infos">
                          <h4>{kasinonNimi}</h4>
                          <p className="tahti">
                            {arvostelu === 1 && <img data-src="/images/star/bigstar1.png" alt='Arvostelu 1/5' className='lazyload' height="16" width="16"/>}
                            {arvostelu === 2 && <img data-src="/images/star/bigstar2.png" alt='Arvostelu 2/5' className='lazyload' height="16" width="33"/>} 
                            {arvostelu === 3 && <img data-src="/images/star/bigstar3.png" alt='Arvostelu 3/5' className='lazyload' height="16" width="50"/>}
                            {arvostelu === 4 && <img data-src="/images/star/bigstar4.png" alt='Arvostelu 4/5' className='lazyload' height="16" width="67"/>}
                            {arvostelu === 5 && <img data-src="/images/star/bigstar5.png" alt='Arvostelu 5/5' className='lazyload' height="16" width="84"/>}
                            {arvostelu == null && <span>-</span>}
                          </p>
                          <div className="bonusBlock">
                            <div className="blockItem">
                              <i>Bonus:</i>
                              <div>{bonusRaha}</div>
                            </div>
                            <div className="blockItem">
                              <i>Ilmaiskierrokset:</i>
                              <div>{ilmaiskierrokset}</div>
                            </div>
                          </div>
                        </div>
                    </div>
                  }</>
                )}
              </div>
              {kirjoittaja.kasinopeli !== null &&
              <div className="related2 latest">
              <h2>Viimeisimmät peliarvostelut</h2>
                {kirjoittaja.kasinopeli.slice(0, 3).map(({slug,kuvaKategoriaSivulle,pelinNimi})=>
                <div key={slug} className="card" >
                  <a href={`/kasinopelit/${slug}/`}>
                    <img className="cardImg lazyload" data-src={kuvaKategoriaSivulle.file.url} alt={kuvaKategoriaSivulle.title} width="300" height="140"/>
                    <h4>{pelinNimi}</h4>
                  </a>
                </div>
              )}
              </div>
              }
              {kirjoittaja.artikkeli !== null &&
              <div className="related2 latest">
                <h2>Viimeisimmät artikkelit</h2>
                {kirjoittaja.artikkeli.slice(0, 3).map(({slug,heroImage,title,publishDate})=>
                <div key={slug} className="card">
                  <a href={`/artikkelit/${slug}/`}>
                    <img className="cardImg lazyload" data-src={heroImage.file.url} alt={heroImage.title} width="300" height="140"/>
                    <h4>{title}</h4>
                  </a>
                </div>
                )}
                </div>
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default KirjoittajaTemplate

export const pageQuery = graphql`
  query KirjoittajaBySlug($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    contentfulKirjoittaja (slug: {eq: $slug}) {
      kirjoittajanNimi
      slug
      pitkEsittelyteksti {
          json
        }
      email
      kirjoittajanKuva {
        file{url}
        title
      }
      artikkeli {
        title
        publishDate(formatString:"DD.MM.YYYY")
        modifyDate(formatString:"DD.MM.YYYY")
        slug
        heroImage {
          file {
            url
          }
          title
        }
      }
      kasinopeli {
        pelinNimi
        publishDate
        modifyDate
        slug
        kuvaKategoriaSivulle {
          file {
            url
          }
          title
        }
      }
      kasino {
        publishDate
        modifyDate
        kasinonNimi
        kasinonSlug
        arvostelu
        ilmaiskierrokset
        bonusRaha
        poistaLinkkiArvosteluun
        kasinonPieniLogo {
          file {
            url
          }
          title
        }
      }
    }
  }
`
