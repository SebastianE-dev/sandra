/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sandra",
    description: "be a freelancer",
    develop: "Sebastian E",
    siteUrl: "https://sebastiane-dev.github.io/sandra",
  },
  pathPrefix: `/sandra`,
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "sandra.local",
        protocol: "http",

        restApiRoutePrefix: "wp-json",

        hostingWPCOM: false,

        useACF: true,

        acfOptionPageIds: [],

        perPage: 100,

        concurrentRequests: 10,

        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
  ],
}
