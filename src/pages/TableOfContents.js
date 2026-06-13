import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";
import styled from "styled-components";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";

// Styled List wrapper to replace the generic parent div
const StyledListWrapper = styled.ul`
  width: max-content;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 35px;
  font-size: 18px;
  color: black;
  display: block; /* Ensures the whole line remains comfortably clickable */
  
  &:hover {
    color: #006838;
    text-decoration: underline;
  }
`;

const TableOfContents = () => {
  const [articles, loading] = useArticles();
  
  const sortedArticles = [...articles].sort((a, b) => {
    if (a.fields.mainTitle < b.fields.mainTitle) {
      return -1;
    }
    if (a.fields.mainTitle > b.fields.mainTitle) {
      return 1;
    }
    return 0;
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <SEOHelmet title="Table of Contents | Encyclopedia of Ludic Terms"/>
      <Section>
        <div className="pageTitle">
          <h1>Table of Contents</h1>
        </div>
        
        {/* Changed from a <div> to a semantic <ul> element */}
        <StyledListWrapper>
          {!loading &&
            sortedArticles.length > 0 &&
            sortedArticles.map((item) => (
              /* Correct HTML Syntax: <ul> -> <li> -> <a> */
              <li key={item.fields.slug}>
                <StyledLink to={`../articles/${item.fields.slug}`}>
                  {item.fields.mainTitle}
                </StyledLink>
              </li>
            ))}
        </StyledListWrapper>
      </Section>
    </React.Fragment>
  );
};

export default TableOfContents;