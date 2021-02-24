import React from "react"
import Hero from "./Hero"
import Reveal from "./Reveal"
import IntroSection from "./IntroSection"
import OurSolution from "./OurSolution"
import HowItWorks from "./HowItWorks"
import News from "./News"

const ComponentList = ({ components = [] }) => (
  <React.Fragment>
    {components.map((component, index) => {
      switch (component._type) {
        case "hero":
          return <Hero key={component._key} {...component} />
        case "introSection":
          return (
            <Reveal key={component._key}>
              <IntroSection {...component} />
            </Reveal>
          )
        case "ourSolution":
          return (
            <Reveal key={component._key}>
              <OurSolution {...component} />
            </Reveal>
          )
        case "howItWorks":
          return (
            <Reveal key={component._key}>
              <HowItWorks {...component} />
            </Reveal>
          )
        case "news":
          return (
            <Reveal key={component._key}>
              <News {...component} />
            </Reveal>
          )
        default:
          return null
      }
    })}
  </React.Fragment>
)

export default ComponentList
