import React from "react"
import Hero from "./Hero"
import Reveal from "./Reveal"
import IntroSection from "./IntroSection"
import OurSolution from "./OurSolution"
import HowItWorks from "./HowItWorks"
import News from "./News"
import BodySectionImage from "./BodySectionImage"
import BodySectionRichText from "./BodySectionRichText"

const ComponentList = ({ components = [] }) => (
  <React.Fragment>
    {components.map((component, index) => {
      switch (component._type) {
        case "hero":
          return <Hero index={index} key={component._key} {...component} />
        case "introSection":
          return (
            <Reveal key={component._key}>
              <IntroSection index={index} {...component} />
            </Reveal>
          )
        case "ourSolution":
          return (
            <Reveal key={component._key}>
              <OurSolution index={index} {...component} />
            </Reveal>
          )
        case "howItWorks":
          return (
            <Reveal key={component._key}>
              <HowItWorks index={index} {...component} />
            </Reveal>
          )
        case "news":
          return (
            <Reveal key={component._key}>
              <News index={index} {...component} />
            </Reveal>
          )
        case "bodySectionImage":
          return (
            <Reveal key={component._key}>
              <BodySectionImage index={index} {...component} />
            </Reveal>
          )
        case "bodySectionRichText":
          return (
            <Reveal key={component._key}>
              <BodySectionRichText index={index} {...component} />
            </Reveal>
          )
        default:
          return null
      }
    })}
  </React.Fragment>
)

export default ComponentList
