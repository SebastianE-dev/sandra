import { graphql, useStaticQuery } from "gatsby"

const usePage = () => {
  const data = useStaticQuery(graphql`
    {
      page: wordpressPage(title: { eq: "Home" }) {
        hero: childWordPressAcfHero {
          id
          title
          text {
            button_text
            paragraph
            subtitle
            title
          }
        }
        info: childWordPressAcfInfo {
          id
          text {
            info_bold_
            info_start
            text_end
            title
          }
        }
        extra: childWordPressAcfExtraInfo {
          id
          text
        }
      }
    }
  `)

  return [
    { ...data.page.hero, secctionName: "hero" },
    { ...data.page.info, secctionName: "info" },
    { ...data.page.extra, secctionName: "extra" },
  ]
}

export default usePage
