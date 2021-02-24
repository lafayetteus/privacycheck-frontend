import React from "react"
import SEO from "../components/Seo"
import ComponentsList from "../components/ComponentsList"

const Home = ({ pageContext }) => {
  const { components = [], seo } = pageContext

  return (
    <React.Fragment>
      <SEO {...seo} />
      <ComponentsList components={components} />
    </React.Fragment>
  )
}
export default Home
