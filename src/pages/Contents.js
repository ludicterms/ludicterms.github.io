import React from "react";
//import styles from "./Main.module.css";

import SearchBar from "../components/UI/SearchBar/SearchBar";

import useSearchData from "../hooks/useSearchData";
import { useArticles } from "../hooks/useArticles";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";
import { ContentBox } from "../components/UI/ContentBox.styles";

const Contents = () => {
  const [articles, isLoading] = useArticles();
  const sortedArticles = articles.sort((a, b) => {
    if (a.fields.mainTitle < b.fields.mainTitle) {
      return -1;
    }
    if (a.fields.mainTitle > b.fields.mainTitle) {
      return 1;
    }
    return 0;
  });
  const { searchResults, searchTerm, handleChange } = useSearchData(
    sortedArticles,
    false
  );

  return (
    <Section>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      {!!searchResults.length ? (
        <CardContainer
          isLoading={isLoading}
          /* httpError={props.httpError} */
          data={searchResults}
          isHome={false}
        />
      ) : (
        <ContentBox>
          <h2>No results found</h2>
          <p>Try to search for a different keyword or contact us</p>
        </ContentBox>
      )}
    </Section>
  );
};

export default Contents;
