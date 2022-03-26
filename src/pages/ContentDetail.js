import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import Button from "../components/UI/Button/Button";

const StyledMarkdown = styled(Markdown)`
  && {
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

  return (
    <Section>
      <Button
        className={"btnLight leftAligned"}
        style={{ width: "70px", height: "15px" }}
        onClick={handleBackClick}
        buttonName={"Go Back"}
        path={""}
      ></Button>
      <div className="pageTitle">
        <h1 style={{ marginBottom: "15px" }}>{article.mainTitle}</h1>
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
      <StyledMarkdown remarkPlugins={[remarkGfm]} children={article.mainContent}  />
      <h1>Bibliography </h1>
      <Markdown children={article.bibliography} />
      {article.authorInfo && (
        <>
          <h1> Author </h1>
          <Markdown children={article.authorInfo} />
        </>
      )}
    </Section>
  );
};

export default ContentDetail;
