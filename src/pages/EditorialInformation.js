import Section from "../components/UI/Section/Section";
import styled from "styled-components";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { useGeneralContent } from "../hooks/useGeneralContent";

const StyledList = styled.ul`
  line-height: 35px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #006838;
    text-decoration: none;
  }
`;

const EditorialInformation = () => {
  const [generalContent, isLoading] = useGeneralContent();
  return (
    <Section>
      <div className="pageTitle">
        <h1>Editorial Information</h1>
      </div>
      {!isLoading && (
        <Markdown children={generalContent[0].fields.editorialText} />
      )}
      {isLoading && <p>Loading...</p>}
      <h2>EoLT Editorial Board</h2>
      <StyledList>
        {!isLoading && (
          <Markdown children={generalContent[0].fields.editorialBoard} />
        )}
        {isLoading && <p>Loading...</p>}
      </StyledList>
      <h2>EoLT Authors</h2>
      <StyledLink to="../author-list">List of Authors</StyledLink>
    </Section>
  );
};

export default EditorialInformation;
