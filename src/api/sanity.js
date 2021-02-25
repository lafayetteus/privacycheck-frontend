const sanityClient = require("@sanity/client")

module.exports = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
})
