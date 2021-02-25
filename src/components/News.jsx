import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const News = ({ title, list = [] }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
    },
    mode: "free-snap",
    spacing: 15,
    loop: false,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  return (
    <section
      id="news"
      className="news bg--white grid-container contained  pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1"
    >
      <h2 className="serif--md serif--lg--md serif--xl--lg  col c6--sm">
        {title}
      </h2>
      {list.length && (
        <ul className="pt5 pt10--lg keen-slider news-slider" ref={sliderRef}>
          {list.map(item => {
            const { date, title, description, url } = item
            const styledDate = `${date.split("-")[1]}-${date.split("-")[2]}-${
              date.split("-")[0]
            }`

            return (
              <li
                key={item._key}
                className="keen-slider__slide news-slider__slide"
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
          {slider && (
            <div className="dots">
              {[...Array(slider.details().size).keys()].map(idx => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  />
                )
              })}
            </div>
          )}
        </ul>
      )}
    </section>
  )
}

export default News
