import React, { useState } from "react"
import BlockContent from "@sanity/block-content-to-react"
import { Transition } from "react-transition-group"
import ContactModal from "./ContactModal"

export const TRANSITION_DURATION = 400

const TRANSITION_STYLES = {
  default: {
    transition: `opacity ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms ease`,
    opacity: 0,
  },
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
}

const HowItWorks = ({
  _type,
  index,
  showNav,
  title,
  description,
  image,
  cta,
  buttonCta,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <React.Fragment>
      <section
        id={`${_type}_${index}`}
        className="how-it-works page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
      >
        <div className="grid-container contained">
          <div className="df fdc fdr--sm intro__header">
            <h2 className="serif--md serif--lg--md serif--xl--lg  col c6--sm">
              {title}
            </h2>
            <div className="col c6--sm pt2 pt0--sm serif--sm serif--md--md serif--lg--lg rich-text">
              <BlockContent blocks={description} />
            </div>
          </div>
          {image && (
            <div className="tc">
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
                  className="pt5 pt10--md pt12--lg reveal__delay--2 col c8--lg tc x"
                />
              </picture>
            </div>
          )}
        </div>
      </section>
      <Transition
        in={isModalOpen}
        mountOnEnter
        unmountOnExit
        appear
        timeout={TRANSITION_DURATION}
      >
        {status => (
          <ContactModal
            setIsModalOpen={setIsModalOpen}
            style={{
              ...TRANSITION_STYLES.default,
              ...TRANSITION_STYLES[status],
            }}
          />
        )}
      </Transition>
    </React.Fragment>
  )
}

export default HowItWorks
