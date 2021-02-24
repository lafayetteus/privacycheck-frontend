require("dotenv").config()

const { getAllPageData, createAllPages } = require("./src/build/createPages")

exports.createPages = ({ actions }) =>
  new Promise((resolve, reject) => {
    getAllPageData().then(allResponses =>
      createAllPages(allResponses, actions, resolve, reject)
    )
  })
