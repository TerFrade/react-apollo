exports.createPages = async function ({ actions, graphql }) {
  const totalPage = await graphql(`
    query {
      aniList {
        Page {
          pageInfo {
            lastPage
          }
          characters {
            id
          }
        }
      }
    }
  `);

  for (let index = 1; index <= 20; index++) {
    const results = await graphql(`
      query {
        aniList {
          Page(page: ${index}) {
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
    if (results.data.aniList.Page != null) {
      results.data.aniList.Page.characters.forEach((character) => {
        actions.createPage({
          path: `/character/${character.id}`,
          component: require.resolve("./src/templates/character.tsx"),
          context: {
            charactersId: character.id,
          },
        });
      });
    }
  }
};
