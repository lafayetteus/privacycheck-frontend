import React from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import { useLocation } from "@reach/router"
import Header from "../components/Header"
import "../styles/main.scss"

export const TRANSITION_DURATION = 400

const TRANSITION_STYLES = {
  default: {
    transition: `opacity ${TRANSITION_DURATION}ms ease`,
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

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <React.Fragment>
      <Header {...location} />

      <SwitchTransition>
        <Transition
          key={location.pathname}
          mountOnEnter
          unmountOnExit
          appear
          timeout={TRANSITION_DURATION}
        >
          {status => (
            <main
              id="maincontent"
              style={{
                ...TRANSITION_STYLES.default,
                ...TRANSITION_STYLES[status],
              }}
            >
              {children}
            </main>
          )}
        </Transition>
      </SwitchTransition>
    </React.Fragment>
  )
}

export default Layout
