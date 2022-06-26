import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";

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

const RecentArticles = () => {
  const [articles, loading] = useArticles();

  const sortedCreatedBy = articles.sort((a, b) => {
    if (a.sys.createdAt > b.sys.createdAt) {
      return -1;
    }
    if (a.sys.createdAt < b.sys.createdAt) {
      return 1;
    }
    return 0;
  });

  console.log(sortedCreatedBy);
  console.log(articles);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <SEOHelmet title="Recent Articles | Encyclopedia of Ludic Terms"/>
      <div className="pageTitle">
        <h1>Recent Articles</h1>
      </div>
      <div style={{ width: "max-content" }}>
        {!loading &&
          sortedCreatedBy.length > 0 &&
          sortedCreatedBy.slice(0, 5).map((item) => (
            <StyledLink to={`../articles/${item.fields.slug}`}>
              <li key={item.fields.slug}>{item.fields.mainTitle}</li>
            </StyledLink>
          ))}
      </div>
    </Section>
  );
};

export default RecentArticles;
