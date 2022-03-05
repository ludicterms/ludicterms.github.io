import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import Info from "../components/Info/Info";
import useSearchData from "../hooks/useSearchData";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";
import { useArticles } from "../hooks/useArticles";

const Wrapper = styled.div`
  margin-top: 100px;
`


const Home = () => {
  const [articles, isLoading] = useArticles();
  const [isActive, setIsActive] = useState(false);

  const { searchResults, searchTerm, handleChange } = useSearchData(
    articles,
    true,
    setIsActive
  );

  const handleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  return (
    <Wrapper>
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
            isHome={true}
          />
        )}
      </Section>

      {!isActive && (
        <React.Fragment>
          {/* <Button
            path={"contents"}
            className="btnDark centered"
            style={{ width: "100px", height: "20px" }}
            buttonName={"Browse"}
           /> */}
          <Info />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default Home;
