import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import Info from "../components/Info/Info";
import useSearchData from "../hooks/useSearchData";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";
import { useArticles } from "../hooks/useArticles";
import Button from "../components/UI/Button/Button";
import { ContentBox } from "../components/UI/ContentBox.styles";

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Home = () => {
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
  
  const [isActive, setIsActive] = useState(false);

  const { searchResults, searchTerm, handleChange } = useSearchData(
    sortedArticles,
    true,
    setIsActive
  );

  const handleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Section>
        <SearchBar
          searchTerm={searchTerm}
          onChange={handleChange}
          onKeyUp={handleChange}
          onBlur={handleBlur}
        />
        {isActive &&
          (!!searchResults.length ? (
            <CardContainer
              isLoading={isLoading}
              data={searchResults}
              isHome={true}
            />
          ) : (
            <ContentBox>
              <h2>No results found</h2>
              <p>Try to search for a different keyword or contact us</p>
            </ContentBox>
          ))}
      </Section>

      {!isActive && (
        <React.Fragment>
          <Button
            path={"contents"}
            className="btnDark centered"
            style={{
              width: "100px",
              height: "20px",
              fontSize: "18px",
              fontWeight: 500,
            }}
            buttonName={"Browse"}
          />
          <Info />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default Home;
