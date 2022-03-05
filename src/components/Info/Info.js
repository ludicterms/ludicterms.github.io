import React from "react";
import Section from "../UI/Section/Section";
import { ContentBox } from "../UI/ContentBox.styles";

const Info = () => {
  return (
    <Section>
      <ContentBox>
        <p>Some description about the project</p>
        <p style={{ fontSize: "12px", fontStyle: "italic" }}>
          Principal Editors and responsibly people of the page: Mike
        </p>
      </ContentBox>
    </Section>
  );
};

export default Info;
