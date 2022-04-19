import React from "react";
import Section from "../components/UI/Section/Section";
import Markdown from "react-markdown";
import { useGeneralContent } from "../hooks/useGeneralContent";

const HowToCite = () => {
  const [generalContent, isLoading] = useGeneralContent();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <div className="pageTitle">
        <h1>How to Cite</h1>
      </div>
      {!isLoading && <Markdown children={generalContent[0].fields.howToCite} />}
      {isLoading && <p>Loading...</p>}
    </Section>
  );
};

export default HowToCite;
