import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Markdown from "react-markdown";

const ContentDetail = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [article, isLoading] = useSingleArticle(contentId);

  if (isLoading) return <p>Loading...</p>;

  const handleBackClick = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  //TODO: split up below content into components since this is a page so it should be stateless and only calling components!

  return (
    <Section>
      <button onClick={handleBackClick}>Go Back</button>
      <h1>{article.mainTitle}</h1>
      <h3 style={{ fontStyle: "italic" }}> {article.subtitle}</h3>
      <Markdown children={article.abstract} />
      <Markdown children={article.mainContent} />
      <Markdown children={article.bibliography} />
      <Markdown children={article.authorInfo} />
    </Section>
  );
};

export default ContentDetail;
