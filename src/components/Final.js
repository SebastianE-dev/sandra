import React from "react"
import { css } from "@emotion/core"
import grid from "../utils/grid"

const breakpoints = [576, 768, 992, 1200]

const Final = () => {
  return (
    <section
      css={css`
        ${grid}
        height:50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: ${breakpoints[2] + "px"}) {
          height: 500px;
        }
      `}
    >
      <button
        css={css`
          background-color: #ec3158;
          color: white;
          width: max-content;
          display: block;
          border: none;
          font-size: 4vw;
          font-weight: 700;
          padding: 1rem 1rem;
          outline: none;
          :focus {
            border: none;
            outline: none;
          }

          @media (min-width: ${breakpoints[1] + "px"}) {
            font-size: 2rem;
          }
        `}
      >
        Buy now for just $8{" "}
      </button>
    </section>
  )
}

export default Final
