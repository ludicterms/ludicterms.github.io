import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import Section from "../components/UI/Section/Section";
import { useGeneralContent } from "../hooks/useGeneralContent";

const StyledMarkdown = styled(Markdown)`
  && {
    li {
      margin: 16px 0;
      &::marker {
        content: "(" counter(list-item) ") ";
      }
    }
  }
`;

const About = () => {
  const [generalContent, isLoading] = useGeneralContent();
  return (
    <Section>
      <div className="pageTitle">
        <h1>Encyclopedia of Ludic Terms</h1>
      </div>
      {!isLoading && (
        <StyledMarkdown children={generalContent[0].fields.about} />
      )}
      {isLoading && <p>Loading...</p>}
    </Section>
  );
};

export default About;
