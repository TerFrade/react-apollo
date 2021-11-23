module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "ANIAPI",
        fieldName: "aniList",
        url: "https://graphql.anilist.co",
      },
    },
  ],
};
