import React from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import styled from "styled-components";
import Markdown from "react-markdown";

const StyledMarkdown = styled(Markdown)`
  && {
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
  }
`;

const Article = ({ article }) => {
  return (
    <React.Fragment>
      <div className="pageTitle">
        <p style={{ marginBottom: "15px" }}>{article.mainTitle}</p>
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
        {" "}
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
        id={`bibliography-${article.mainTitle}`}
        style={{ scrollMarginTop: "120px" }}
      >
        Bibliography{" "}
      </h1>
      <Markdown children={article.bibliography} rehypePlugins={[rehypeSlug]} />
      {article.authorInfo && (
        <Markdown children={article.authorInfo} rehypePlugins={[rehypeSlug]} />
      )}
    </React.Fragment>
  );
};

export default Article;
