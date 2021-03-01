import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const OurSolution = ({ _key, title, image, description, details }) => (
  <section
    id={`section_${_key}`}
    className="our-solution page-section bb--black   pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
  >
    <div className="grid-container contained">
      <h2 className="serif--lg serif--xl--lg serif--xl--lg">{title}</h2>
      <picture>
        <source
          srcSet={`${image.url}?w=2400&auto=format`}
          media="(min-width: 1600px)"
        />
        <source
          srcSet={`${image.url}?w=1600&auto=format`}
          media="(min-width: 1000px)"
        />
        <source
          srcSet={`${image.url}?w=1000&auto=format`}
          media="(min-width: 600px)"
        />
        <img
          alt={image.alt}
          src={`${image.url}?w=400&auto=format`}
          className="pt5 pt7--md pt10--lg x reveal__delay--2"
        />
      </picture>
      <aside className="pt2 pt3--lg df fdc fdr--md reveal__delay--3">
        <div className="serif--md serif--lg--md col c6--lg pr2 pr4--lg">
          <BlockContent blocks={description} />
        </div>
        <div className="pt2 pt0--lg sans--md sans--lg--md col c6--lg rich-text">
          <BlockContent blocks={details} />
        </div>
      </aside>
    </div>
  </section>
)

export default OurSolution
