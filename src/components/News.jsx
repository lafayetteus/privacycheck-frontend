import React, { useEffect, useState } from "react"
import cx from "classnames"
import { useScrollPercentage } from "react-scroll-percentage"

const News = ({ _key, title, list = [] }) => {
  const [progressWidth, setProgressWidth] = useState(0)
  const scroll = () => {
    const wrapper = document.querySelector(".news-slider")

    const width = wrapper.scrollWidth - wrapper.clientWidth
    const scrolled = wrapper.scrollLeft

    setProgressWidth(((scrolled / width) * 100).toFixed(2))
  }

  useEffect(() => {
    document.querySelector(".news-slider").addEventListener("scroll", scroll)
    return () => {}
  }, [])

  return (
    <section
      id={`section_${_key}`}
      className="news page-section bb--black pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
    >
      <div className="grid-container contained">
        <h2 className="serif--lg serif--xl--lg serif--xl--lg  col c6--sm">
          {title}
        </h2>
      </div>
      {list.length && (
        <div className="news-slider__wrapper">
          <ul className="pt5 pt10--lg news-slider banner list">
            {list.map((item, index) => {
              const { date, title, description, url } = item
              const styledDate = `${date.split("-")[1]}-${date.split("-")[2]}-${
                date.split("-")[0]
              }`

              return (
                <li
                  key={item._key}
                  className="news-slider__slide b--black p2 di mr2 mr5--lg"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-slider__link"
                  >
                    <p className="sans--sm">{styledDate}</p>
                    <p className="pt1 serif--md serif--lg--md">{title}</p>
                    <p className="pt1 sans--sm sans--md--md">{description}</p>
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="grid-container contained">
            <div className="progress-bar col c10 c6--lg mxa pr">
              <div
                className="progress-bar__current pa"
                style={{
                  width: progressWidth + "%",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default News
