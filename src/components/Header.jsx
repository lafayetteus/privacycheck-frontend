import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Logo from "./Logo"

const Header = ({ pathname }) => {
  return (
    <header
      className={cx("grid-container contained header df jcb pb2 pt2", {
        pf: pathname === "/",
        psy: pathname !== "/",
      })}
    >
      <Link href="/">
        <Logo className="header__logo" />
      </Link>
      <p>Lafayette American</p>
    </header>
  )
}

export default Header
