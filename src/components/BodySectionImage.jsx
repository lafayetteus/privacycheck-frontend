import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const BodySectionImage = ({
  _type,
  index,
  showNav,
  title,
  description,
  image,
  details,
}) => (
  <section
    id={`${_type}_${index}`}
    className="our-solution page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
  >
    <div className="grid-container contained">
      <div className="row">
        <div className="col c6--lg">
          <h2 className="serif--lg serif--xl--lg">{title}</h2>
        </div>
        <div className="col c6--lg pt4 pt0--lg">
          <div className="serif--md serif--lg--md col c6--lg">
            <BlockContent blocks={description} />
          </div>
        </div>
        <div className="col c8--lg pt5 reveal__delay--2">
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
              className="x"
            />
          </picture>
        </div>
        <div className="col c4--lg pt1 pt0--lg reveal__delay--2">
          <div className="sans--sm sans--md--md col c6--lg rich-text">
            <BlockContent blocks={details} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BodySectionImage
