import React from "react"
import { css } from "@emotion/core"
import grid from "../utils/grid"
import facepaint from "facepaint"

const breakpoints = [576, 768, 992, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const heroStyles = css`
  color: white;
`
const contentWrapper = css`
  grid-area: content;
  .block {
    display: grid;
    grid-template-rows: 3rem min-content 3rem min-content 3rem min-content 3rem min-content 3rem;
    grid-template-areas:
      "."
      "text"
      "."
      "title"
      "."
      "paragraph"
      "."
      "btn"
      ".";

    .text {
      grid-area: text;
    }
    .titleContainer {
      grid-area: title;
    }
    .paragraph {
      grid-area: paragraph;
    }
    .btn {
      grid-area: btn;
    }
  }

  @media (min-width: ${breakpoints[2] + "px"}) {
    display: grid;
    grid-template-columns: 3rem 1fr 3rem;
    grid-template-rows: 8rem 1fr 8rem;
    grid-template-areas:
      ". . ."
      ". block ."
      ". . .";
    .block {
      grid-area: block;
      background-color: #222b2e;
      box-shadow: 0px 10px 45px -1px rgba(0, 0, 0, 0.5);
      grid-template-columns: 2rem 1fr 2rem 1fr 2rem;
      grid-template-rows: 3rem 2rem min-content 1rem min-content 1rem min-content 2rem 3rem;
      grid-template-areas:
        ". . . . ."
        ". . . title ."
        ". text . title ."
        ". . . title ."
        ". paragraph . title ."
        ". . . title ."
        ". btn . title ."
        ". . . title ."
        ". . . . .";
    }
  }
`

const titleContainer = css`
  height: 100vw;
  background-color: #ec3158;
  display: grid;
  box-shadow: 0px 10px 45px -1px rgba(0, 0, 0, 0.5);
  grid-template-columns: 5vw 1fr 5vw;
  grid-template-rows: 5vw 1fr 5vw;
  grid-template-areas:
    ". . ."
    ". bg ."
    ". . .";

  @media (min-width: ${breakpoints[1] + "px"}) {
    grid-template-columns: 2.5rem calc(700px - 5rem) 2.5rem;
    grid-template-rows: 2.2rem 1fr 2.2rem;

    height: 760px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints[2] + "px"}) {
    grid-template-columns: 2.5rem 1fr 2.5rem;
    height: 500px;
  }

  .bg {
    grid-area: bg;
    background-image: url("images/background.svg");
    background-size: 50%;
    filter: blur(1px);
  }
  .bg-title {
    grid-area: bg;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale();
  }
`
const button = css`
  background-color: #ec3158;
  display: block;
  width: max-content;
  border: none;
  color: white;
  font-size: 5vw;
  font-weight: 700;
  padding: 1rem 1rem;
  outline: none;
  :focus {
    border: none;
    outline: none;
  }

  @media (min-width: ${breakpoints[1] + "px"}) {
    font-size: 2.4rem;
  }
  @media (min-width: ${breakpoints[2] + "px"}) {
    font-size: 1.2rem;
    padding: 0.4em 1rem;
  }
`
const textStyle = css`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 1rem;
  align-self: end;
`

const Hero = ({ title, text }) => {
  return (
    <section css={[grid, heroStyles]}>
      <div css={contentWrapper} className="contentWrapper">
        <div className="block">
          <div className="text" css={textStyle}>
            <h2
              css={mq({
                fontSize: ["13vw", "13vw", "4rem"],
              })}
            >
              {text.title}
            </h2>
            <p
              css={mq({
                color: ["#ec3158"],
                fontSize: ["6vw", "6vw", "2.9rem", "1.3rem"],
              })}
            >
              {text.subtitle}
            </p>
          </div>
          <div css={titleContainer} className="titleContainer">
            <div className="bg"></div>
            <div className="bg-title">
              <h1
                css={mq({
                  width: ["70vw", "70vw", "70vw", "min-content"],
                  fontSize: ["13vw", "13vw", "13vw", "5rem"],
                })}
              >
                {title}
              </h1>
            </div>
          </div>
          <p
            className="paragraph"
            css={mq({
              fontSize: ["5vw", "5vw", "2.3rem", "1.2rem"],
            })}
          >
            {text.paragraph}
          </p>
          <button className="btn" css={button}>
            {text.button_text}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
