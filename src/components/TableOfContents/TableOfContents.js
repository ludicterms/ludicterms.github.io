import React from "react";
import styled, { css } from "styled-components";
import useHeadingsData from "../../hooks/useHeadingsData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Headings from "./Headings";

const StyledNav = styled.div`
  ${(props) =>
    !props.isMobile &&
    css`
      position: sticky;
      z-index: 2;
      top: 35%;
      right: 16px;
      overflow: auto;
      width: 300px;
      min-width: 200px;
    `}
  align-self: flex-start;

  padding: 16px;
  margin: 8px;
  display: flex;
  flex-flow: column;
  max-height: calc(100vh - 70px);
  background-color: #f8f7f8;
  border-radius: 12px;

  /* @media screen and (max-width: 900px) {
    display: none;
  } */

  ul {
    line-height: 1.8;
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      ul {
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
    text-decoration: underline;
  }
`;

const TableOfContents = (props) => {
  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  return (
    <StyledNav aria-label="Table of contents" isMobile={props.isMobile}>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </StyledNav>
  );
};

export default TableOfContents;
