import React, { useState } from "react"
import BlockContent from "@sanity/block-content-to-react"

const Hero = ({ triggerContact, setIsModalOpen, title, subtitle, image }) => {
  return (
    <section
      className="hero df bb--black"
      style={{ backgroundImage: `url(${image.url}?w=2400)` }}
    >
      <div className="hero__content">
        <h2 className="serif--lg serif--xl--md serif--xxl--lg">{title}</h2>
        <div className="serif--md serif--lg--md pt2 pt4--md pt6--lg">
          <BlockContent blocks={subtitle} />
        </div>
        {triggerContact && (
          <button
            className="mxa button--primary button--primary--white mt2 mt5--md color--white"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </button>
        )}
      </div>
    </section>
  )
}

export default Hero
