import React from "react";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";

const AuthorList = () => {
  const [articles, loading] = useArticles();

  // 1. Extract all author strings from the articles array
  const allAuthors = articles.map((article) => article.fields.author);

  // 2. Pass them into a Set to remove duplicates, then turn it back into a clean array
  const uniqueAuthors = [...new Set(allAuthors)];

  // 3. Sort the unique names alphabetically
  const sortedAuthors = uniqueAuthors.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  React.useEffect(() => {
    // Note: Since react-snap runs in a headless browser to build your HTML, 
    // wrapping window.scrollTo in a standard useEffect hook is safe here.
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <SEOHelmet title="List of Authors | Encyclopedia of Ludic Terms" />
      <Section>
        <div className="pageTitle">
          <h1>List of Authors</h1>
        </div>
        <div>
          {!loading &&
            sortedAuthors.length > 0 &&
            sortedAuthors.map((authorName, index) => (
              /* Added a unique 'key' prop using the index to prevent React console warnings */
              <p key={index}>{authorName}</p>
            ))}
        </div>
      </Section>
    </React.Fragment>
  );
};

export default AuthorList;