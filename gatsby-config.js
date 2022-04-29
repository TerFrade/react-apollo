module.exports = {
  siteMetadata: {
    lang: `en`,
    title: `Anime List`,
    description: `A small anime list with a basic search feature`,
    url: `https://www.gatsbyjs.org/`,
    image: `/images/favicon.png`,
    twitterUsername: "",
    copyright: `Copyright © 2020`,
    author: ``,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "ANIAPI",
        fieldName: "aniList",
        url: "https://graphql.anilist.co",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anime List`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
