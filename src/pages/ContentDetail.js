import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Markdown from "react-markdown";
import Button from "../components/UI/Button/Button";

const ContentDetail = () => {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [article, isLoading] = useSingleArticle(contentId);

  if (isLoading) return <p style={{textAlign: "center"}}>Loading...</p>;

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
      >
      </Button>

      <p style={{ fontStyle: "italic" }}>
        Disclaimer: this is just a dummy text copied from
        https://plato.stanford.edu/entries/abduction/{" "}
      </p>
      <div className="pageTitle">
        <h1 style={{marginBottom: "15px"}}>{article.mainTitle}</h1>
      </div>
      <h4 style={{fontSize: "18px", marginBottom: "35px", marginTop: "0", fontWeight: "400"}}>{article.author}</h4>
      <h3 style={{ fontStyle: "italic", fontWeight: "normal" }}>
        {" "}
        {article.subtitle}                                                                                                                                                  
      </h3>
      <Markdown children={article.abstract} />
      <Markdown children={article.mainContent} />
      <h1>Bibliography </h1>
      <Markdown children={article.bibliography} />
      <h1> Author </h1>
      <Markdown children={article.authorInfo} />
    </Section>
  );
};

export default ContentDetail;
