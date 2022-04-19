import React from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import styled from "styled-components";
import Markdown from "react-markdown";
import { useGeneralContent } from "../../hooks/useGeneralContent";

const StyledMarkdown = styled(Markdown)`
  && {
    li {
      line-height: 2;
      scroll-margin-top: 120px;
    }
    h1 {
      scroll-margin-top: 120px;
    }
    h2 {
      scroll-margin-top: 120px;
    }
    table {
      max-width: 100%;
    }

    tr:nth-child(odd) {
      background-color: #eee;
    }

    th {
      background-color: #555;
      color: #fff;
    }

    th,
    td {
      text-align: left;
      padding: 0.5em 1em;
    }

    img {
      width: 60%;
    }

    @media screen and (max-width: 900px) {
      img {
        width: 100%;
      }
    }
  }
`;

const Article = ({ article }) => {
  const [generalContent, isLoading] = useGeneralContent();
  return (
    <React.Fragment>
      <div className="pageTitle">
        <p style={{ marginBottom: "15px", lineHeight: "50px" }}>
          {article.mainTitle}
        </p>
      </div>
      <h4
        style={{
          fontSize: "18px",
          marginBottom: "35px",
          marginTop: "0",
          fontWeight: "400",
        }}
      >
        {article.author}
      </h4>
      <h3 style={{ fontStyle: "italic", fontWeight: "normal" }}>
        {article.subtitle}
      </h3>
      <Markdown children={article.abstract} />
      <StyledMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        children={article.mainContent}
        id={"mainContent"}
      />
      <h1
        id={`bibliography-${article.slug}`}
        style={{ scrollMarginTop: "120px" }}
      >
        Bibliography
      </h1>
      <Markdown children={article.bibliography} rehypePlugins={[rehypeSlug]} />
      {article.authorInfo && (
        <Markdown children={article.authorInfo} rehypePlugins={[rehypeSlug]} />
      )}
      <h1 id={`copyright-${article.slug}`} style={{ scrollMarginTop: "120px" }}>
        Copyright
      </h1>
      {!isLoading && (
        <StyledMarkdown children={generalContent[0].fields.copyright} />
      )}
      {isLoading && <p>Loading...</p>}
    </React.Fragment>
  );
};

export default Article;
