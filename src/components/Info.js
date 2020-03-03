import React from "react"
import { css } from "@emotion/core"
import grid from "../utils/grid"

const breakpoints = [576, 768, 992, 1200]

const Info = ({ text }) => {
  return (
    <section
      css={css`
        ${grid};
        background-color: #191f21;
      `}
    >
      <div
        css={css`
          grid-area: content;
          display: grid;
          grid-template-rows: 0rem repeat(3, min-content) 0rem;
          grid-row-gap: 4rem;
          grid-template-areas:
            "."
            "content1"
            "content2"
            "content3"
            ".";

          .container:nth-of-type(1) {
            grid-area: content1;
          }
          .container:nth-of-type(2) {
            grid-area: content2;
          }
          .container:nth-of-type(3) {
            grid-area: content3;
          }

          @media (min-width: ${breakpoints[2] + "px"}) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 5rem 1fr 5rem;
            grid-column-gap: 3rem;
            grid-template-areas:
              ". . ."
              "content1 content2 content3 "
              ". . .";
          }
        `}
      >
        {text.map(tx => (
          <div
            className="container"
            css={css`
              color: white;
              display: grid;
              grid-template-rows: min-content 1fr;
              grid-row-gap: 2rem;
            `}
          >
            <h2
              css={css`
                font-size: 5vw;
                color: #ec3158;
                @media (min-width: ${breakpoints[2] + "px"}) {
                  font-size: 2rem;
                }
              `}
            >
              {tx.title}
            </h2>
            <div
              className="text"
              css={css`
                p,
                strong {
                  font-size: 5vw;
                }
                @media (min-width: ${breakpoints[1] + "px"}) {
                  p {
                    width: 735px;
                  }
                  p,
                  strong {
                    font-size: 1.8rem;
                  }
                }
                @media (min-width: ${breakpoints[2] + "px"}) {
                  p {
                    width: unset;
                  }
                  p,
                  strong {
                    font-size: 1.2rem;
                  }
                }
              `}
            >
              <p>
                {tx.info_start}{" "}
                <strong
                  css={css`
                    font-weight: 700;
                    border-bottom: solid 1px #ec3158;
                  `}
                >
                  {tx.info_bold_}
                </strong>
              </p>
              <p>{tx.text_end}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Info
