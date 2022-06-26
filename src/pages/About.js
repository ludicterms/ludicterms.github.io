import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import Section from "../components/UI/Section/Section";
import { useGeneralContent } from "../hooks/useGeneralContent";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <SEOHelmet
        title="About | Encyclopedia of Ludic Terms"
        description="A lexicon of terms and concepts that are frequently used in game studies’ discourses"
      />
      <Section>
        <div className="pageTitle">
          <h1>Encyclopedia of Ludic Terms</h1>
        </div>
        {!isLoading && (
          <StyledMarkdown children={generalContent[0].fields.about} />
        )}
        {isLoading && <p>Loading...</p>}
      </Section>
    </React.Fragment>
  );
};

export default About;
