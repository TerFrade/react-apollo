exports.createPages = async function ({ actions, graphql }) {
  const results = await graphql(`
    query {
      aniList {
        Page {
          characters {
            id
          }
        }
      }
    }
  `);
  if (results.error) {
    console.log("something went wrong");
    return;
  }

  results.data.aniList.Page.characters.forEach((character) => {
    actions.createPage({
      path: `/character/${character.id}`,
      component: require.resolve("./src/templates/character.tsx"),
      context: {
        charactersId: character.id,
      },
    });
  });
};
