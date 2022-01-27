/*const queries = require('./src/utils/algolia');*/
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
require("dotenv").config()

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://kasinohub.netlify.app/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'KasinoHub',
    description: 'Parhaat nettikasinot ja tietoa rahapeleistä',
    siteUrl: 'https://kasinohub.com/'
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-next-seo',
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fi'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kasinohub.com/',
        sitemap: 'https://kasinohub.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: '/rd/'}]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
            {
            site {
              siteMetadata {
                  siteUrl
              }
            }
            low: allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: true}, path: {nin: ["/","/pikakasinot/","/uudet-kasinot/","/kaikki-nettikasinot/","/kasinobonukset/","/ilmaiskierroksia/","/ilmaista-pelirahaa/","/non-sticky-bonus/","/kasinopelit/","/kasinotarjoukset/","/kasinot-ilman-rekisteroitymista/","/parhaat-kasinot/","/suomalaiset-kasinot/","/arvostelut/","/pelikasinot/","/nopeat-kotiutukset/","/hedelmapelit/","/jackpot-pelit/","/megaways/","/nettiarvat/","/bingo/","/keno/","/lotto/","/eurojackpot/","/pelinvalmistajat/","/maksutavat/","/lisenssit/","/omistajat/","/404/","/dev-404-page/","/404.html","/offline-plugin-app-shell-fallback"]}}) {
              edges {
                node {
                  path
                }
              }
            }
            allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: true}, path: {in: ["/","/pikakasinot/","/uudet-kasinot/","/kaikki-nettikasinot/","/kasinobonukset/","/ilmaiskierroksia/","/ilmaista-pelirahaa/","/non-sticky-bonus/","/kasinopelit/","/kasinotarjoukset/","/kasinot-ilman-rekisteroitymista/","/parhaat-kasinot/","/suomalaiset-kasinot/","/arvostelut/","/pelikasinot/","/nopeat-kotiutukset/","/hedelmapelit/","/jackpot-pelit/","/megaways/","/nettiarvat/","/bingo/","/keno/","/lotto/","/eurojackpot/","/pelinvalmistajat/","/maksutavat/","/lisenssit/","/omistajat/"], nin :["/offline-plugin-app-shell-fallback","/404/","/dev-404-page/","/404.html"]}}) {
              edges {
                node {
                  path
                }
              }
            }
            arv: allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: false}, path: {nin: ["/offline-plugin-app-shell-fallback/","/kokemuksia/lapilanders/","/kokemuksia/play-fast-casino/","/kokemuksia/masked-singer/","/kokemuksia/casiplay/","/kokemuksia/true-flip/","/kokemuksia/slothino/","/kokemuksia/playouwin/","/kokemuksia/woo-casino/","/kokemuksia/wishmaker/","/kokemuksia/william-hill/","/kokemuksia/wild-fortune/","/kokemuksia/webbyslots/","/kokemuksia/vegas-mobile-casino/","/kokemuksia/tsars/","/kokemuksia/trada-casino/","/kokemuksia/the-online-casino/","/kokemuksia/temple-nile/","/kokemuksia/swift-casino/","/kokemuksia/svenbet/","/kokemuksia/sugar-casino/","/kokemuksia/sticky-wilds/","/kokemuksia/stelario/","/kokemuksia/spinurai/","/kokemuksia/spinstation/","/kokemuksia/spinrider/","/kokemuksia/spinshake/","/kokemuksia/spinland/","/kokemuksia/spinia/","/kokemuksia/slotty-vegas/","/kokemuksia/savarona/","/kokemuksia/roku-casino/","/kokemuksia/rocket-casino/","/kokemuksia/regals-casino/","/kokemuksia/rant-casino/","/kokemuksia/pokerstars-casino/","/kokemuksia/playjango/","/kokemuksia/playamo/","/kokemuksia/platincasino/","/kokemuksia/paradise-casino/","/kokemuksia/nightrush/","/kokemuksia/neptune-play/","/kokemuksia/neonvegas/","/kokemuksia/n1-casino/","/kokemuksia/mozzart/","/kokemuksia/moi-casino/","/kokemuksia/millionvegas/","/kokemuksia/miami-dice/","/kokemuksia/mason-slots/","/kokemuksia/el-carado/","/kokemuksia/lokicasino/","/kokemuksia/dream-vegas/","/kokemuksia/dozen-spins/","/kokemuksia/diamond-7/","/kokemuksia/livecasino-com/","/kokemuksia/crazy-fox/","/kokemuksia/joo-casino/","/kokemuksia/jambo-casino/","/kokemuksia/jackpot-paradise/","/kokemuksia/instantpay-casino/","/kokemuksia/hey-casino/","/kokemuksia/hello-casino/","/kokemuksia/gutsxpress/","/kokemuksia/gunsbet/","/kokemuksia/grandmaster-jack/","/kokemuksia/grandivy/","/kokemuksia/golden-star-casino/","/kokemuksia/getslots/","/kokemuksia/gday-casino/","/kokemuksia/euslot/","/kokemuksia/euroslots/","/kokemuksia/cookie-casino/","/kokemuksia/chillispins/","/kokemuksia/casoo/","/kokemuksia/casimba/","/kokemuksia/cashiopeia/","/kokemuksia/pk-com/","/kokemuksia/kahuna/","/kokemuksia/casinoly/","/kokemuksia/apuestamos/","/kokemuksia/mucho-vegas/","/kokemuksia/slotbox/","/kokemuksia/dreamz/","/kokemuksia/boomerang/","/kokemuksia/chanz/","/kokemuksia/comeon/","/kokemuksia/dunder/","/kokemuksia/lapalingo/","/kokemuksia/live-lounge/","/kokemuksia/lucky-casino/","/kokemuksia/lucky-days-casino/","/kokemuksia/nopeampi-casino/","/kokemuksia/pixelbet/","/kokemuksia/slothunter/","/kokemuksia/wunderino/","/kokemuksia/fun-casino/","/kokemuksia/emojino/","/kokemuksia/evospin/","/kokemuksia/one-casino/","/kokemuksia/pinocasino/","/kokemuksia/spin-samurai/","/kokemuksia/huikee/","/kokemuksia/20bet/","/kokemuksia/21-nova/","/kokemuksia/21-prive/","/kokemuksia/24k-casino/","/kokemuksia/all-reels/","/kokemuksia/avalon78/","/kokemuksia/barbados-casino/","/kokemuksia/bertil/","/kokemuksia/betamo/","/kokemuksia/betchan/","/kokemuksia/betmaster/","/kokemuksia/betvili/","/kokemuksia/ridika/","/kokemuksia/gale-and-martin/","/kokemuksia/billion-casino/","/kokemuksia/casinobud/","/kokemuksia/bob-casino/","/kokemuksia/bongo/"]}}) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, low, allSitePage, arv }) => {
          let pages = []
          allSitePage.edges.map(edge => {
            pages.push ({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 1.0,
            })
          })
          arv.edges.map(edge => {
            pages.push ({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: 0.7,
            })
          })
          low.edges.map(edge => {
            pages.push ({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `monthly`,
              priority: 0.5,
            })
          }) 
          return pages
        },
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `KasinoHub`,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
        ],
        crumbLabelUpdates: [
          {
            pathname: '/',
            crumbLabel: 'KasinoHub'
          }
        ],
        trailingSlashes: true,
     }
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KasinoHub`,
        short_name: `KasinoHub`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5e3994`,
        display: `minimal-ui`,
        icon: `./static/images/maskable_icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'SitePage',
        fields: [
          {
            name: 'template',
            indexed: true,
            resolver: 'context.title',
            attributes: {
              encode: 'extra',
              tokenize: 'forward',
              threshold: 0,
              depth: 2,
            },
            store: true,
            suggest: true,
          },
          {
            name: 'page',
            indexed: true,
            resolver: 'component',
            attributes: {
              encode: 'extra',
              tokenize: 'forward',
              threshold: 0,
              depth: 2,
            },
            store: false,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'path',
            store: true,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /rd/,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-remove-generator',
      options: {
        removeVersionOnly: true,
        content: 'WordPress 5.3.3'
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WH2TJ3G",  
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
