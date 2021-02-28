import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import cx from "classnames"

const IntroSection = ({ _type, index, title, subtitle, description }) => (
  <section
    id={`${_type}_${index}`}
    className="intro page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
  >
    <div className="grid-container contained">
      <div className="df fdc fdr--sm intro__header">
        <h2 className="serif--lg serif--xl--lg serif--xl--lg  col c6--sm">
          {title}
        </h2>
        <div className="col c6--sm pt2 pt0--sm">
          <p className="serif--sm serif--md--md serif--lg--lg">{subtitle}</p>
          <div className="sans--sm sans--md--md sans--lg--md rich-text pt2  pt5--lg">
            <BlockContent blocks={description} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default IntroSection
