import Section from "../components/UI/Section/Section";
import Markdown from "react-markdown";
import styled from "styled-components";
import { ContentBox } from "../components/UI/ContentBox.styles";
import { useGeneralContent } from "../hooks/useGeneralContent";

const StyledContentBox = styled(ContentBox)`
  margin-left: 0;
  margin-right: 0;
`;

const Contact = () => {
  const [generalContent, isLoading] = useGeneralContent();
  return (
    <Section>
      <div className="pageTitle">
        <h1>Get in touch</h1>
      </div>
      <div>
        <StyledContentBox>
          {!isLoading && (
            <Markdown children={generalContent[0].fields.contactUs} />
          )}
          {isLoading && <p>Loading...</p>}
        </StyledContentBox>
      </div>
    </Section>
  );
};

export default Contact;
