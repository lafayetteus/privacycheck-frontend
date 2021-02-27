import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import cx from "classnames"

const IntroSection = ({
  _type,
  index,
  showNav,
  title,
  subtitle,
  description,
  quote,
  image,
}) => (
  <section
    id={`${_type}_${index}`}
    className={cx(
      "intro page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1",
      {
        "color--black": !image,
      }
    )}
  >
    <div className="grid-container contained">
      <div className="df fdc fdr--sm intro__header">
        <h2 className="serif--md serif--lg--md serif--xl--lg  col c6--sm">
          {title}
        </h2>
        <div className="col c6--sm pt2 pt0--sm">
          <p className="serif--sm serif--md--md serif--lg--lg">{subtitle}</p>
          <div className="sans--sm sans--md--md sans--lg--md rich-text pt2  pt5--lg">
            <BlockContent blocks={description} />
          </div>
        </div>
      </div>
      <div className="mxa tc pt5 pt7--sm pt10--lg reveal__delay--2"></div>
      <p className="serif--md serif--lg--md col c10 c9--sm c8--md c5--lg mxa">
        {quote}
      </p>
      {image && (
        <div className="tc">
          <picture>
            <source
              srcSet={`${image.url}?w=1600&auto=format`}
              media="(min-width: 1000px)"
            />
            <source
              srcSet={`${image.url}?w=1200&auto=format`}
              media="(min-width: 800px)"
            />
            <source
              srcSet={`${image.url}?w=1000&auto=format`}
              media="(min-width: 600px)"
            />
            <img
              alt={image.alt}
              src={`${image.url}?w=300&auto=format`}
              className="pt5 pt7--sm pt10--lg mxa col c10 c9--sm c8--md"
            />
          </picture>
        </div>
      )}
    </div>
  </section>
)

export default IntroSection
