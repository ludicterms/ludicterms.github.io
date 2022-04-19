import React from "react";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";

const AuthorList = () => {
  const [articles, loading] = useArticles();

  const sortedAuthor = articles.sort((a, b) => {
    if (a.fields.author < b.fields.author) {
      return -1;
    }
    if (a.fields.author > b.fields.author) {
      return 1;
    }
    return 0;
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <div className="pageTitle">
        <h1>List of Authors</h1>
      </div>
      <div>
        {!loading &&
          sortedAuthor.length > 0 &&
          sortedAuthor.map((item) => <p>{item.fields.author} </p>)}
      </div>
    </Section>
  );
};

export default AuthorList;
