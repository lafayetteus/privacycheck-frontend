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
const Hero = ({ title, subtitle, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <React.Fragment>
      <section
        className="hero df bb--black"
        style={{ backgroundImage: `url(${image.url}?w=2400)` }}
      >
        <div className="hero__content">
          <h2 className="serif--lg serif--xl--md serif--xxl--lg">{title}</h2>
          <div className="serif--md serif--lg--md pt2 pt4--md pt6--lg">
            <BlockContent blocks={subtitle} />
          </div>
          <button
            className="mxa button--primary button--primary--white mt2 mt5--md color--white"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </button>
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

export default Hero
