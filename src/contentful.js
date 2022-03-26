const client = require("contentful").createClient({
  space: process.env.REACT_APP_CONTENFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getArticles = () =>
  client.getEntries({ content_type: "gameArticle" }).then((response) =>
    //sort the items in alphabatical order
    response.items.sort((a, b) => {
      if (a.fields.mainTitle < b.fields.mainTitle) {
        return -1;
      }
      if (a.fields.mainTitle > b.fields.mainTitle) {
        return 1;
      }
      return 0;
    })
  );

const getSingleArticle = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "gameArticle",
    })
    .then((response) => response.items);

const getGeneralContent = () =>
  client
    .getEntries({ content_type: "generalContent" })
    .then((response) => response.items);

export { getArticles, getSingleArticle, getGeneralContent };
