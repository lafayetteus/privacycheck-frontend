import React from "react"
import cx from "classnames"
import BlockContent from "@sanity/block-content-to-react"

const HowItWorks = ({
  _key,
  triggerContact,
  setIsModalOpen,
  title,
  description,
  list = [],
}) => (
  <section
    id={`section_${_key}`}
    className="how-it-works page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
  >
    <div className="grid-container contained">
      <div className="df fdc fdr--sm intro__header">
        <h2 className="serif--lg serif--xl--lg col c6--sm pr2 pr4--lg">
          {title}
        </h2>
        {!!description.length > 0 && (
          <div className="col c6--sm pt2 pt0--sm serif--sm serif--md--md serif--lg--lg rich-text">
            <BlockContent blocks={description} />
          </div>
        )}
      </div>
      {!!list.length && (
        <React.Fragment>
          {list.map((item, index) => {
            return (
              <div
                className={cx("row", {
                  "pt2 pt5--lg": index > 0,
                  "pt4 pt10--lg": index === 0,
                })}
                key={item._key}
              >
                <div className="col show--lg c2--lg c3--xl" />
                <div className="col c4--lg c3--xl">
                  <p className="serif--md serif--lg--lg pr2 pr5--lg">
                    {item.title}
                  </p>
                </div>
                <div className="col c6--lg pt1 pt0--lg">
                  <div className="sans--md sans--lg--lg rich-text">
                    <BlockContent blocks={item.description} />
                  </div>
                </div>
              </div>
            )
          })}
        </React.Fragment>
      )}
      {triggerContact && (
        <button
          className="mxa button--primary mt2 mt5--md"
          onClick={() => setIsModalOpen(true)}
        >
          Contact Us
        </button>
      )}
    </div>
  </section>
)

export default HowItWorks
