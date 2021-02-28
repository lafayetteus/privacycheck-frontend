import React, { useState } from "react"
import fetch from "node-fetch"
import cx from "classnames"
import { email as emailRegex } from "magic-tricks/lib/regex"
import { Link } from "gatsby"
import Logo from "./Logo"
import xss from "xss"

const Footer = () => {
  const [state, setState] = useState({
    email: null,
    isError: null,
    isSuccess: null,
    isSubmitting: false,
    showInvalidEmailError: false,
  })

  const onChangeEmail = event => {
    const { showInvalidEmailError } = state
    setState({
      ...state,
      email: xss(event.target.value),
      showInvalidEmailError: showInvalidEmailError
        ? !emailRegex.test(event.target.value)
        : showInvalidEmailError,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!state.email) {
      setState({
        ...state,
        isError: "Please enter your email address",
      })
      return
    }

    if (!emailRegex.test(state.email)) {
      setState({
        ...state,
        showInvalidEmailError: true,
        isSubmitting: false,
      })

      return
    }

    setState({
      ...state,
      isSubmitting: true,
      showInvalidEmailError: false,
    })

    fetch(".netlify/functions/mailchimp", {
      method: "POST",
      body: JSON.stringify({
        firstName: "",
        lastName: "",
        email: state.email,
        phone: "",
        message: "",
      }),
    })
      .then(res => {
        return res.json()
      })
      .then(response => {
        if (response.success) {
          setState({
            ...state,
            isError: null,
            isSuccess: "Thank you for signing up!",
          })
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <footer
      className={cx(
        "footer bg--black color--white pt5 pb10 pt7--sm pb7--sm pt10--lg pb10--lg pr",
        {
          submitting: state.isSubmitting,
        }
      )}
      id="contact"
    >
      <section className="grid-container contained">
        <div className="row">
          <div className="col c12 c5--lg c4--xl">
            <Link to="/">
              <Logo className="header__logo" />
            </Link>
          </div>
          <div className="show--lg col c2 c4--xl" />
          <form className="col c12 c5--lg c4--xl pt2 pt0--lg">
            <p className="sans--md--md">
              Stay Informed. Our weekly newsletter provides a tightly edited
              rundown of privacy news and tips.
            </p>
            <div className="footer__form-fields pr">
              <label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Account*"
                  className="contact-form__input db x mt2"
                  onChange={onChangeEmail}
                  required
                />
              </label>
              <button className="footer__form-submit pa" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            {state.isError && (
              <p className="mt1 sans--sm sans--md--md error">{state.isError}</p>
            )}
            {state.showInvalidEmailError && (
              <p className="mt1 sans--sm sans--md--md error">
                Please fix your email address.
              </p>
            )}
            {state.isSuccess && (
              <p className="mt1 sans--sm sans--md--md">{state.isSuccess}</p>
            )}
          </form>
        </div>
        <small className="pa sans--sm credit">
          © {new Date().getFullYear()} Privacy Check
        </small>
      </section>
    </footer>
  )
}

export default Footer
