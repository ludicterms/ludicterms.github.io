//TODO: I think I need to move the process.env directly into the client because now there is the error that it can't read "accessToken":
//checkout console log of https://sophiaauer.me/eolt/ to see the error

const client = require("contentful").createClient({
  space: process.env.REACT_APP_CONTENFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const getArticles = () =>
  client.getEntries().then((response) =>
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

export { getArticles, getSingleArticle };
