import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";
import styled from "styled-components";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 35px;
  font-size: 18px;
  color: black;
  :hover {
    color: #006838;
    text-decoration: underline;
  }
  li {
    list-style: none;
  }
`;

const TableOfContents = () => {
  const [articles, loading] = useArticles();
  const sortedArticles = articles.sort((a, b) => {
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
      <SEOHelmet title="Table of Contents | Encylopedia of Ludic Terms"/>
      <Section>
        <div className="pageTitle">
          <h1>Table of Contents</h1>
        </div>
        <div style={{ width: "max-content" }}>
          {!loading &&
            sortedArticles.length > 0 &&
            sortedArticles.map((item) => (
              <StyledLink to={`../articles/${item.fields.slug}`}>
                <li key={item.fields.slug}>{item.fields.mainTitle}</li>
              </StyledLink>
            ))}
        </div>
      </Section>
    </React.Fragment>
  );
};

export default TableOfContents;
