import React from "react"
import { css } from "@emotion/core"
import grid from "../utils/grid"

const breakpoints = [576, 768, 992, 1200]

const Extra = ({ text }) => {
  return (
    <section
      css={css`
        ${grid};
        height: 85vw;
        background-color: #ec3158;
        @media (min-width: ${breakpoints[1] + "px"}) {
          height: 550px;
        }
      `}
    >
      <div
        css={css`
          grid-area: content;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <p
          css={css`
            position: relative;
            font-size: 4.2vw;
            text-align: center;
            width: 70vw;
            margin: 0 auto;
            margin-top: -15px;

            ::after {
              content: "";
              position: absolute;
              left: 40%;
              bottom: -15px;
              width: 20%;
              height: 2px;
              background-color: white;
            }

            @media (min-width: ${breakpoints[1] + "px"}) {
              font-size: 1.7rem;
              width: 671px;
            }
          `}
        >
          {text}
        </p>
      </div>
    </section>
  )
}

export default Extra
