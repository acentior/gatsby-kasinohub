const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const kasino = path.resolve('./src/templates/kasino.js')
    const artikkelipost = path.resolve('./src/templates/artikkeli.js')
    const kasinopeli = path.resolve('./src/templates/kasinopeli.js')
    const valmistaja = path.resolve('./src/templates/pelinvalmistaja.js')
    const uutinenpost = path.resolve('./src/templates/kasinotarjoukset.js')
    const maksutapa = path.resolve('./src/templates/maksutapa.js')
    const lisenssi = path.resolve('./src/templates/lisenssi.js')
    const omistaja = path.resolve('./src/templates/omistaja.js')
    const kirjoittaja = path.resolve('./src/templates/kirjoittaja.js')

    resolve(
      graphql(
        `
          {
            allContentfulKasino(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  kasinonNimi
                  kasinonSlug
                }
              }
            }
            allContentfulArtikkeli (filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulUutinen (filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulKasinopeli (filter: {node_locale: {eq: "fi-FI"}}){
              edges {
                node {
                  pelinNimi
                  slug
                }
              }
            }
            allContentfulPelinvalmistaja(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  pelinvalmistajanNimi
                  slug
                }
              }
            }
            allContentfulMaksutapa(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  maksutavanNimi
                  slug
                }
              }
            }
            allContentfulLisenssi(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  lisenssiOtsikko
                  slug
                }
              }
            }
            allContentfulKasinonOmistajat(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  omistajaOtsikko
                  slug
                }
              }
            }
            allContentfulKirjoittaja(filter: {node_locale: {eq: "fi-FI"}}) {
              edges {
                node {
                  kirjoittajanNimi
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulKasino.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/kokemuksia/${post.node.kasinonSlug}/`,
            component: kasino,
            context: {
              slug: post.node.kasinonSlug,
              title: post.node.kasinonNimi
            },
          })
        })

        const artikkelit = result.data.allContentfulArtikkeli.edges
        artikkelit.forEach((artikkeli, index) => {
          createPage({
            path: `/artikkelit/${artikkeli.node.slug}/`,
            component: artikkelipost,
            context: {
              slug: artikkeli.node.slug,
              title: artikkeli.node.title
            },
          })
        })

        const uutiset = result.data.allContentfulUutinen.edges
        uutiset.forEach((uutinen, index) => {
          createPage({
            path: `/kasinotarjoukset/${uutinen.node.slug}/`,
            component: uutinenpost,
            context: {
              slug: uutinen.node.slug,
              title: uutinen.node.title
            },
          })
        })

        const kasinopelit = result.data.allContentfulKasinopeli.edges
        kasinopelit.forEach((peli, index) => {
          createPage({
            path: `/kasinopelit/${peli.node.slug}/`,
            component: kasinopeli,
            context: {
              slug: peli.node.slug,
              title: peli.node.pelinNimi
            },
          })
        })

        const pelinvalmistaja = result.data.allContentfulPelinvalmistaja.edges
        pelinvalmistaja.forEach((pvalmistaja, index) => {
          createPage({
            path: `/pelinvalmistajat/${pvalmistaja.node.slug}/`,
            component: valmistaja,
            context: {
              slug: pvalmistaja.node.slug,
              title: pvalmistaja.node.pelinvalmistajanNimi
            },
          })
        })

        const maksutavat = result.data.allContentfulMaksutapa.edges
        maksutavat.forEach((maksut, index) => {
          createPage({
            path: `/maksutavat/${maksut.node.slug}/`,
            component: maksutapa,
            context: {
              slug: maksut.node.slug,
              title: maksut.node.maksutavanNimi
            },
          })
        })

        const lisenssit = result.data.allContentfulLisenssi.edges
        lisenssit.forEach((lis, index) => {
          createPage({
            path: `/lisenssit/${lis.node.slug}/`,
            component: lisenssi,
            context: {
              slug: lis.node.slug,
              title: lis.node.lisenssiOtsikko
            },
          })
        })

        const omistajat = result.data.allContentfulKasinonOmistajat.edges
        omistajat.forEach((omis, index) => {
          createPage({
            path: `/omistajat/${omis.node.slug}/`,
            component: omistaja,
            context: {
              slug: omis.node.slug,
              title: omis.node.omistajaOtsikko
            },
          })
        })

        const kirjoittajat = result.data.allContentfulKirjoittaja.edges
        kirjoittajat.forEach((kirj, index) => {
          createPage({
            path: `/kirjoittaja/${kirj.node.slug}/`,
            component: kirjoittaja,
            context: {
              slug: kirj.node.slug,
              title: kirj.node.kirjoittajanNimi
            },
          })
        })

      })
    )
  }
  )
}

// Replacing '/' would result in empty string which is invalid
/*const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage)
    createPage(page)
  }
}*/
