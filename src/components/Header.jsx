import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Logo from "./Logo"
import scrollToElement from "scroll-to-element"
import viewport from "magic-tricks/lib/viewport"

const Header = ({ pathname }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scroll = event => {
    event.preventDefault()
    setMenuOpen(false)
    const destination = event.target.hash

    scrollToElement(`${destination}`, {
      offset: -70,
      ease: "inQuart",
      duration: 1000,
    })
  }

  const onScroll = () => {
    console.log(global.innerHeight)
    console.log(global.scrollY)

    if (global.scrollY >= global.innerHeight) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    viewport.listen(onScroll)
    return () => {
      viewport.unlisten(onScroll)
    }
  }, [])

  return (
    <header
      className={cx("header", {
        pf: pathname === "/",
        "psy color--black": pathname !== "/",
        "color--black": scrolled,
      })}
    >
      <section className="grid-container contained df jcb pb2 pt2">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <nav className="df">
          <a href="#about" onClick={scroll} className="sans--sm mr1">
            About
          </a>
          <a href="#how-it-works" onClick={scroll} className="sans--sm mr1">
            How It Works
          </a>
          <a href="#news" onClick={scroll} className="sans--sm mr1">
            News
          </a>
          <a href="#contact" onClick={scroll} className="sans--sm">
            Contact
          </a>
        </nav>
      </section>
    </header>
  )
}

export default Header
