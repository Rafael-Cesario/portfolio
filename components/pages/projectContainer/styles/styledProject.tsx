import { palette } from "@/styles/palette";
import styled from "styled-components";

export const StyledProject = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 5rem 1rem;
  background-color: #151515;
  border-radius: ${palette.element.borderRadius};
  box-shadow: 10px 10px 5px #00000020;
  position: relative;
  padding: 2rem;

  .title {
    position: absolute;
    transform: translate(0, -50px);
    background-color: ${palette.colors.bgBlue};
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: ${palette.element.borderRadius};
    box-shadow: 10px 10px 2px #00000020;
  }

  a {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-1rem, -20px);
    text-decoration: none;
    color: #aaa;

    :hover {
      color: ${palette.colors.textBlue};
    }
  }

  .txt {
    margin: 1rem 0;
    color: #aaa;
  }

  .stack {
    margin: 1rem 0;
    color: #aaa;
    margin-bottom: 1rem;

    span {
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  .scope {
    margin: 1rem 0;
    color: ${palette.colors.textBlue};
  }
`;
