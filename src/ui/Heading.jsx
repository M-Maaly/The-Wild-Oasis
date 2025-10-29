import styled, { css } from "styled-components";

const test = css`
  /* text-align: center; */
  /* padding: 20px; */
`;

const Heading = styled.h1`
  /* background-color: teal; */

  ${test}
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 3rem;
      text-align: center;
    `}

  line-height: 1.4;
`;

export default Heading;
