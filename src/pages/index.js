import React from "react"
import usePage from "../hooks/use-page-data"
import { Hero, Info, Extra } from "../components"

const Index = () => {
  const data = usePage()
  return (
    <>
      {data.map(section => {
        const name = section.secctionName
        switch (name) {
          case "hero":
            return <Hero key={section.id} {...section} />
          case "info":
            return <Info key={section.id} {...section} />
          case "extra":
            return <Extra key={section.id} {...section} />

          default:
            return <p>ups</p>
        }
      })}
    </>
  )
}

export default Index
