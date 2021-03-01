import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const IntroSection = ({
  _key,
  triggerContact,
  setIsModalOpen,
  title,
  subtitle,
  description,
}) => (
  <section
    id={`section_${_key}`}
    className="intro page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
  >
    <div className="grid-container contained">
      <div className="df fdc fdr--sm intro__header">
        <h2 className="serif--lg serif--xl--lg serif--xl--lg  col c6--sm pr2 pr4--lg">
          {title}
        </h2>
        <div className="col c6--sm pt2 pt0--sm">
          <p className="serif--sm serif--md--md serif--lg--lg">{subtitle}</p>
          <div className="sans--sm sans--md--md sans--lg--lg rich-text pt2  pt5--lg">
            <BlockContent blocks={description} />
            {triggerContact && (
              <button
                className="mxa button--primary mt2 mt5--md"
                onClick={() => setIsModalOpen(true)}
              >
                Contact Us
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default IntroSection
