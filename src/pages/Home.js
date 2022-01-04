import React, { useState } from "react";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import Info from "../components/Info/Info";
import useSearchData from "../hooks/useSearchData";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";
import { Link } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import Button from "../components/UI/Button/Button";

const Home = () => {
  const [articles, isLoading] = useArticles();
  const [isActive, setIsActive] = useState(false);

  const { searchResults, searchTerm, handleChange } = useSearchData(
    articles,
    true,
    setIsActive
  );

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <React.Fragment>
      <Section>
        <SearchBar
          searchTerm={searchTerm}
          onChange={handleChange}
          onKeyUp={handleChange}
          onBlur={handleBlur}
        />
        {isActive && (
          <CardContainer
            isLoading={isLoading}
            /* httpError={props.httpError} */
            data={searchResults}
          />
        )}
      </Section>

      {!isActive && (
        <React.Fragment>
          <Button
            path={"contents"}
            className="btnDark centered"
            style={{ width: "100px", height: "20px" }}
            buttonName={"Browse"}
           />
          <Info />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
