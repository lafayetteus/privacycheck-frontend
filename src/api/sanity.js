const sanityClient = require("@sanity/client")

module.exports = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || "ut33d2oh",
  dataset: "production",
  useCdn: false,
})
