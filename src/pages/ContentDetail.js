import NotFound from "./NotFound";
import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Button from "../components/UI/Button/Button";
import Article from "../components/Article/Article";
import TableOfContents from "../components/TableOfContents/TableOfContents";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";
import { Helmet } from "react-helmet-async"; 

const StyledWrapper = styled.div`
  position: relative;
  height: max-content;
  display: flex;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const TabletUpOnly = styled.span`
  display: block;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentDetail = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [article, isLoading] = useSingleArticle(contentId);

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!article) {
    return (
      <React.Fragment>
        <NotFound />
      </React.Fragment>
    );
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // Pulling properties exactly as they are named in the Article setup
  const title = article?.mainTitle || "Untitled Entry";
  const authorName = article?.author || "Encyclopedia Contributor";
  const abstractText = article?.abstract || "";
  const editorName = "Pawel Grabarczyk";
  
  // Checking if contentful has an update or post date, otherwise fallback to first publication year
  const publishDate = article?.date || article?.publishDate || "2022";

  return (
    <React.Fragment>
      {/* Original built-in SEO wrapper */}
      <SEOHelmet
        title={`${title} | Encyclopedia of Ludic Terms`}
        description={abstractText}
        type="article"
      />
      
      {/* New Google Scholar Targeting Headers */}
      <Helmet>
        <meta name="citation_title" content={title} />
        <meta name="citation_author" content={authorName} />
        <meta name="citation_editor" content={editorName} />
        <meta name="citation_publication_date" content={publishDate} />
        <meta name="citation_book_title" content="Encyclopedia of Ludic Terms" />
        <meta name="citation_abstract" content={abstractText} />
      </Helmet>

      {/* COinS for Zotero */}
      <span
        className="Z3988"
        title={[
          "ctx_ver=Z39.88-2004",
          "rft_val_fmt=info:ofi/fmt:kev:mtx:book",
          "rft.genre=bookitem",
          `rft.atitle=${encodeURIComponent(title)}`,
          "rft.btitle=Encyclopedia%20of%20Ludic%20Terms",
          `rft.date=${publishDate}`,
          `rft.au=${encodeURIComponent(authorName)}`,
        ].join("&")}
      />

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
            {!isLoading && <Article article={article} />}
          </div>
        </Section>
        <TabletUpOnly>
          <TableOfContents />
        </TabletUpOnly>
      </StyledWrapper>
    </React.Fragment>
  );
};

export default ContentDetail;