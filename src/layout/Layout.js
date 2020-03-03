import React from "react"
import { css, Global } from "@emotion/core"
import { Final } from "../components"

const bg = css`
  background-image: url("images/background.svg");
  background-size: 20%;
  background-attachment: fixed;
  background-color: #222b2e;
`

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-size: 16px;
          }
        `}
      />
      <main css={bg}>
        {children}
        <Final />
      </main>
      <footer
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10vh;
          color: #4b565a;
          background-color: #191f21;
        `}
      >
        <p>Develop by Sebastian E</p>
      </footer>
    </>
  )
}

export default Layout
