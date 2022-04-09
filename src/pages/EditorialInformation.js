import React from "react";
import Section from "../components/UI/Section/Section";
import styled from "styled-components";
import Markdown from "react-markdown";
import { useGeneralContent } from "../hooks/useGeneralContent";

const StyledList = styled.ul`
  line-height: 35px;
`;

const EditorialInformation = () => {
  const [generalContent, isLoading] = useGeneralContent();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    </Section>
  );
};

export default EditorialInformation;
