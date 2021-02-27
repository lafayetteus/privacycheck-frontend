import React from "react"

const Close = props => (
  <svg
    {...props}
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37 1L1 37"
      stroke={props.className === "color--white" ? "#ffffff" : "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinecap="round"
    />
    <path
      d="M1 1L37 37"
      stroke={props.className === "color--white" ? "#ffffff" : "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinecap="round"
    />
  </svg>
)

export default Close
