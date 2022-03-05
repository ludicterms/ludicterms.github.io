import Section from "../components/UI/Section/Section";
import styled from "styled-components";
import { ContentBox } from "../components/UI/ContentBox.styles";

const StyledContentBox = styled(ContentBox)`
    margin-left: 0;
    marging-right: 0;
`

const Contact = () => {
    return(
        <Section>
        <div className="pageTitle">
            <h1>Get in touch</h1>
        </div>
        <div>
            <StyledContentBox>
                <p>The most reliable way to reach the EoLT editorial board is via email, as it enables us to respond to your inquiries from anywhere and at any time. Thus, if you have any questions, suggestions, or remark, feel free to reach out to the below email address.</p>
                <blockquote><b>Email:</b> contact [at] eolt.org</blockquote>
                <p>The account is monitored only during business days and on the basis of the CET timezone. Please be patient and give us time to read, consider, and respond to your emails.</p>
            </StyledContentBox>
        </div>
        </Section>
        
        
    )
};

export default Contact;