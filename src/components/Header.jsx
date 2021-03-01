import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import cx from "classnames"
import Logo from "./Logo"
import scrollToElement from "scroll-to-element"
import viewport from "magic-tricks/lib/viewport"
import Menu from "./Menu"
import Close from "./Close"

const Header = ({ pathname, navigation = [] }) => {
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

    if (pathname !== "/") {
      navigate("/", {
        state: destination,
      })

      setTimeout(() => {
        scrollToElement(`${destination}`, {
          offset: -70,
          ease: "inQuart",
          duration: 1000,
        })
      }, 500)
    }
  }

  const onScroll = () => {
    if (global.scrollY >= global.innerHeight - 75) {
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
    <React.Fragment>
      <header
        className={cx("header", {
          pf: pathname === "/",
          "psy scrolled": pathname !== "/",
          "bb--black scrolled": scrolled,
        })}
      >
        <section className="grid-container contained df jcb pb2 pt2 aic">
          <Link to="/">
            <Logo className="header__logo" />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="header__mobile-button hide--lg"
          >
            <Menu
              className={cx("", {
                "color--white": pathname === "/" && !scrolled,
              })}
            />
          </button>
          <nav className="df show--lg">
            {navigation.map((item, index) => {
              return (
                <a
                  key={item._key}
                  onClick={scroll}
                  className="sans--sm mr1"
                  href={`#section_${item._key}`}
                >
                  {item.navTitle}
                </a>
              )
            })}
            <a onClick={scroll} className="sans--sm" href="#contact">
              Contact
            </a>
          </nav>
        </section>
      </header>
      <aside
        className={cx(
          "hide--lg mobile-navigation pf bg--black color--white fill top left right bottom p2",
          {
            open: menuOpen,
          }
        )}
      >
        <header className="df jcb aic">
          <Link to="/">
            <Logo className="header__logo" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="header__mobile-button header__mobile-button--close"
          >
            <Close className="color--white" />
          </button>
        </header>
        <nav className="pt2">
          {navigation.map((item, index) => {
            return (
              <a
                key={item._key}
                onClick={scroll}
                className="sans--xl db color--white pt1"
                href={`#${item._type}_${index + 1}`}
              >
                {item.navTitle}
              </a>
            )
          })}
          <a
            onClick={scroll}
            className="sans--xl db color--white pt1"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </aside>
    </React.Fragment>
  )
}

export default Header
