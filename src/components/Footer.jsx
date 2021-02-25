import React, { useState } from "react"
import fetch from "node-fetch"

const Footer = () => {
  const [state, setState] = useState({
    email: null,
    isError: null,
    isSuccess: null,
  })
  const handleSubmit = event => {
    event.preventDefault()
    if (!state.email) {
      setState({
        ...state,
        isError: "Please enter your email address",
      })
      return
    }

    fetch(".netlify/functions/mailchimp", {
      method: "POST",
      body: JSON.stringify({
        firstName: null,
        lastName: null,
        email: state.email,
        phone: null,
        message: null,
      }),
    })
      .then(response => {
        // console.log(response.body)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <footer className="footer bg--grey pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg">
      <section className="grid-container contained">
        <div className="row">
          <div className="show--lg col c3" />
          <div className="col c12 c4--lg">
            <p className="serif--md">
              Stay Informed. Our weekly newsletter provides a tightly edited
              rundown of privacy news and tips.
            </p>
          </div>
          <div className="show--lg col c1" />
          <form className="col c12 c4--lg pt2 pt0--lg">
            <p className="sans--md--md">Sign up to our privacy roundup</p>
            <div className="footer__form-fields pr">
              <label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Account*"
                  className="contact-form__input db x mt2"
                  onChange={e => {
                    const { target } = e
                    setState({
                      ...state,
                      email: target.value,
                    })
                  }}
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
          </form>
        </div>
      </section>
    </footer>
  )
}

export default Footer
