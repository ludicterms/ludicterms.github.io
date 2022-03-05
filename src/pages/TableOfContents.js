import { Link } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useArticles } from "../hooks/useArticles";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 35px;
  font-size: 18px;
  color: black;
  :hover {
    color: #006838;
    text-decoration: none;
  }
  li {
    list-style: none; 
  }
`;

const TableOfContents = () => {
  const [articles, loading] = useArticles();

  return (
    <Section>
      <div className="pageTitle">
        <h1>Table of Contents</h1>
      </div>
      <div>
        {!loading &&
          articles.length > 0 &&
          articles.map((item) => (
            <StyledLink to={`../contents/${item.fields.slug}`}>
              <li>{item.fields.mainTitle}</li>
            </StyledLink>
          ))}
      </div>
    </Section>
  );
};

export default TableOfContents;
