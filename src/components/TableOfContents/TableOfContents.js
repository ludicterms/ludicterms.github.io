import React from "react";
import styled from "styled-components";
import useHeadingsData from "../../hooks/useHeadingsData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Headings from "./Headings";

const StyledNav = styled.div`
  align-self: flex-start;
  width: 300px;
  min-width: 200px;
  padding: 16px;
  margin: 8px;
  position: sticky;
  z-index: 2;
  display: flex;
  flex-flow: column;
  top: 35%;
  right: 16px;
  overflow: auto;
  max-height: calc(100vh - 70px);
  background-color: #ebebeb;
  border-radius: 12px;

  @media screen and (max-width: 900px) {
    display: none;
  }

  ul {
    line-height: 1.8;
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      ul {
        margin-left: 15px;
        li {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      }
      a {
        text-decoration: none;
        color: #006838;
      }
    }
  }

  li.active > a {
    color: #767676;
  }
`;

const TableOfContents = () => {
  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  return (
    <StyledNav aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </StyledNav>
  );
};

export default TableOfContents;
