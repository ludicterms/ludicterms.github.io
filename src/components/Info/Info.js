import React from "react";
import Section from "../UI/Section/Section";
import Markdown from "react-markdown";
import { ContentBox } from "../UI/ContentBox.styles";
import { useGeneralContent } from "../../hooks/useGeneralContent"

const Info = () => {
  const [generalContent, isLoading] = useGeneralContent();

  return (
    <Section>
      <ContentBox>
      {!isLoading && (
        <Markdown children={generalContent[0].fields.projectDescription} />
      )}
      {isLoading && <p>Loading...</p>}
      </ContentBox>
    </Section>
  );
};

export default Info;
