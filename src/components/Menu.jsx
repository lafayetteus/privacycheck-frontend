import React from "react"

const Menu = props => (
  <svg
    {...props}
    width="38"
    height="27"
    viewBox="0 0 38 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V3.8H38V0H0ZM0 11.4V15.2H38V11.4H0ZM0 22.8V26.6H38V22.8H0Z"
      fill={props.className === "color--white" ? "#ffffff" : "#000000"}
    />
  </svg>
)

export default Menu
