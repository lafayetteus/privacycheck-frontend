import React from "react"
import SEO from "../components/Seo"
import BlockContent from "@sanity/block-content-to-react"

const Page = ({ pageContext }) => {
  const { title, seo, content } = pageContext
  return (
    <React.Fragment>
      <section className="grid-container contained">
        <SEO metaTitle={title} {...seo} />
        <main className="row">
          <section className="col c12">
            <BlockContent blocks={content} />
          </section>
        </main>
      </section>
    </React.Fragment>
  )
}

export default Page
