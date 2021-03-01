import React, { useState } from "react"
import SEO from "../components/Seo"
import ComponentsList from "../components/ComponentsList"
import { Transition } from "react-transition-group"
import ContactModal from "../components/ContactModal"

const TRANSITION_DURATION = 400

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

const Home = ({ pageContext }) => {
  const { components = [], seo } = pageContext
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <React.Fragment>
      <SEO {...seo} />
      <ComponentsList setIsModalOpen={setIsModalOpen} components={components} />
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
export default Home
