const queries = require("../api/queries")
const sanity = require("../api/sanity")

//
// === Get Data ===
//

module.exports.getAllPageData = () => {
  // Fetch all data needs

  const homeQuery = sanity.fetch(queries.homepage)
  const pagesQuery = sanity.fetch(queries.pages)

  // Wait for all data needs
  return Promise.all([homeQuery, pagesQuery])
}

//
// === Create All Pages ===
//

module.exports.createAllPages = (promiseResults, actions, resolve, reject) => {
  const [homepage, pages = []] = promiseResults

  const header = {
    navigation: homepage.components.filter(item => item.showNav),
  }
  //
  // === Create pages ===
  //

  try {
    // Homepage
    actions.createPage({
      path: "/",
      component: require.resolve("../templates/Home.jsx"),
      context: {
        ...homepage,
        ...header,
      },
    })

    pages.forEach(page => {
      actions.createPage({
        path: `/${page.slug}`,
        component: require.resolve("../templates/Page.jsx"),
        context: {
          ...header,
          ...page,
        },
      })
    })

    // 404;
    actions.createPage({
      path: "/404",
      component: require.resolve("../templates/404.jsx"),
      context: {
        ...homepage,
        ...header,
      },
    })

    // Preview
    actions.createPage({
      path: "/preview",
      component: require.resolve("../templates/Preview.jsx"),
    })
  } catch (error) {
    reject(error)
    return
  }

  resolve()
}
