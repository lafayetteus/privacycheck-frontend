import React, { useState } from "react"
import Close from "./Close"
import fetch from "node-fetch"
import cx from "classnames"
import { email as emailRegex } from "magic-tricks/lib/regex"
import xss from "xss"

const ContactModal = ({ setIsModalOpen, style }) => {
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
    isSuccess: false,
    isError: false,
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

  const handleSubmit = async event => {
    event.preventDefault()

    if (!state.firstName || !state.lastName || !state.email || !state.phone) {
      setState({
        ...state,
        isError: "Please fix the invalid or missing fields",
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
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        message: state.message,
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
    <div
      style={{ ...style }}
      className={cx("pf fill top left right bottom contact-modal bg--black", {
        submitting: state.isSubmitting,
      })}
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className="pa contact-modal__close"
      >
        <Close className="color--white" />
      </button>
      <form
        name="contact"
        className="contact-modal__form contact-form col c12 c10--md c6--lg mxa mt5 mt7--md mt10--lg"
      >
        <p className="serif--lg serif--xl--md">Contact Us.</p>
        <p className="serif--md serif--lg--lg pt1">Protect your digital Life</p>

        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            className="contact-form__input mt5 mt10--lg db x"
            required
            onChange={event => {
              event.preventDefault()
              const { target } = event
              setState({
                ...state,
                firstName: xss(target.value),
              })
            }}
          />
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            className="contact-form__input mt2 db x"
            required
            onChange={event => {
              event.preventDefault()
              const { target } = event
              setState({
                ...state,
                lastName: xss(target.value),
              })
            }}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="contact-form__input mt2 db x"
            required
            onChange={onChangeEmail}
          />
        </label>
        <label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            className="contact-form__input mt2 db x"
            required
            onChange={event => {
              event.preventDefault()
              const { target } = event
              setState({
                ...state,
                phone: xss(target.value),
              })
            }}
          />
        </label>
        <label>
          <textarea
            name="message"
            placeholder="Message*"
            className="contact-form__input contact-form__input---textarea mt2 db x"
            required
            onChange={event => {
              event.preventDefault()
              const { target } = event
              setState({
                ...state,
                message: xss(target.value),
              })
            }}
          />
        </label>
        <button
          className="mxa button--primary button--primary--white mt2 mt5--md "
          onClick={handleSubmit}
        >
          Submit
        </button>

        {state.isError && (
          <p className="serif--md error mt1">
            Uh oh. Something went wrong. Please double-check the form & try
            again.
          </p>
        )}
        {state.showInvalidEmailError && (
          <p className="mt1 sans--sm sans--md--md error">
            Please fix your email address.
          </p>
        )}
        {state.isSuccess && <p className="serif--md mt1">{state.isSuccess}</p>}
      </form>
    </div>
  )
}
export default ContactModal
