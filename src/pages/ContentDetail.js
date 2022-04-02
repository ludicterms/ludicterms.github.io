import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Button from "../components/UI/Button/Button";
import Article from "../components/Article/Article";
import TableOfContents from "../components/TableOfContents/TableOfContents";

const StyledWrapper = styled.div`
  position: relative;
  height: max-content;
  display: flex;

  @media screen and (max-width: 900px) {
  
  display: block;
}
`

const ContentDetail = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [article, isLoading] = useSingleArticle(contentId);

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const handleBackClick = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  //TODO: split up below content into components since this is a page so it should be stateless and only calling components!
  document.getElementById("root");
  return (
    <StyledWrapper>
      <Section>
      <div>
        <Button
          className={"btnLight leftAligned"}
          style={{ width: "70px", height: "15px" }}
          onClick={handleBackClick}
          buttonName={"Go Back"}
          path={""}
        ></Button>
        <Article article={article} />
      </div>
    </Section>
    <TableOfContents />
    </StyledWrapper>
  );
};

export default ContentDetail;
