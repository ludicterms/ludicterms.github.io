import React from "react";
//import styles from "./Main.module.css";

import SearchBar from "../components/UI/SearchBar/SearchBar";

import useSearchData from "../hooks/useSearchData";
import { useArticles } from "../hooks/useArticles";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";

const Contents = () => {
  const [articles, isLoading] = useArticles();
  const { searchResults, searchTerm, handleChange } = useSearchData(
    articles,
    false
  );

  return (
    <Section>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <CardContainer
        isLoading={isLoading}
        /* httpError={props.httpError} */
        data={searchResults}
      />
    </Section>
  );
};

export default Contents;
