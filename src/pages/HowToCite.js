import React from "react";
import Section from "../components/UI/Section/Section";
import Markdown from "react-markdown";
import { useGeneralContent } from "../hooks/useGeneralContent";
import SEOHelmet from "../components/SEOHelmet/SEOHelmet";

const HowToCite = () => {
  const [generalContent, isLoading] = useGeneralContent();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <SEOHelmet title="How to Cite | Encylopedia of Ludic Terms"/>
      <Section>
        <div className="pageTitle">
          <h1>How to Cite</h1>
        </div>
        {!isLoading && (
          <Markdown children={generalContent[0].fields.howToCite} />
        )}
        {isLoading && <p>Loading...</p>}
      </Section>
    </React.Fragment>
  );
};

export default HowToCite;
