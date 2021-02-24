import React, { Component } from "react"
import classNames from "classnames"
import viewport from "magic-tricks/lib/viewport"

const INITIAL_STATE = {
  isRevealed: false,
}

export default class Reveal extends Component {
  constructor() {
    super()

    this.state = { ...INITIAL_STATE }
  }

  componentDidMount = () => {
    viewport.listen(this.onScroll)
    this.onScroll()
  }

  onScroll = () => {
    if (!this.el) return

    const { threshold, timeout } = this.props
    const position = this.el.getBoundingClientRect()

    if (
      (position.top >= 0 && position.top <= global.innerHeight - threshold) ||
      (position.top <= 0 && position.bottom >= -threshold)
    ) {
      setTimeout(() => {
        this.onReveal()
      }, timeout)
    }
  }

  onReveal = () => {
    this.setState({ isRevealed: true })
    viewport.unlisten(this.onScroll)
  }

  render() {
    const { className, children, isRevealed, ...props } = this.props
    const { isRevealed: isScrollRevealed } = this.state

    const statefulReveal =
      isRevealed === true || isRevealed === false
        ? isRevealed
        : isScrollRevealed

    return (
      <div
        {...props}
        ref={el => (this.el = el)}
        className={classNames(className, "reveal", {
          active: statefulReveal,
        })}
      >
        {children}
      </div>
    )
  }
}

Reveal.defaultProps = {
  timeout: 0,
  threshold: 0,
}
