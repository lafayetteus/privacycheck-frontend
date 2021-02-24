// Polyfills
require("unfetch")

const React = require("react")
const Layout = require("./src/layout/Layout.jsx").default

// Wrap every page with the main layout
exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
