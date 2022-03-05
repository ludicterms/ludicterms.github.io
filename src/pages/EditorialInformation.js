import Section from "../components/UI/Section/Section";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledList = styled.ul`
    line-height: 35px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
        color: #006838;
        text-decoration: none;
    }
`

const EditorialInformation = () => {
  return (
    <Section>
      <div className="pageTitle">
        <h1>Editorial Information</h1>
      </div>
      <h2>EoLT Editorial Board</h2>
      <StyledList>
          <li>Paweł Grabarczyk - Chief Editor</li>
          <li>Espen Aarseth - Editor</li>
          <li>Ida Kathrine Hammeleff Jørgensen - Editor</li>
          <li>Michael S. Debus - Editor</li>
          <lil>Miruna Vozaru - Editor</lil>
          <li>Nina Patricia Houe - Editor</li>
          <li>Rune Kristian Lundedal Nielsen - Editor</li>
          <li>Frederik Bakkerud - Copy Editor</li>
      </StyledList>
      <h2>EoLT Authors</h2>
      <StyledLink to='../author-list'>List of Authors</StyledLink>
    </Section>
  );
};

export default EditorialInformation;
