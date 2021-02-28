import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import cx from "classnames"

const BodySectionRichText = ({ _type, index, title, description }) => (
  <section
    id={`${_type}_${index}`}
    className={cx(
      "page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
    )}
  >
    <div className="grid-container contained">
      <div className="df fdc fdr--sm intro__header">
        <h2 className="serif--lg serif--xl--lg serif--xl--lg col c6--md">
          {title}
        </h2>
        <div className="col c6--md pt2 pt0--sm">
          <div className="sans--sm sans--md--md sans--lg--md rich-text">
            <BlockContent blocks={description} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BodySectionRichText
