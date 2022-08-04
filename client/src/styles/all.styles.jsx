import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background-color: yellow;
    margin: 0px;
    padding: 0px;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: teal;
  text-align: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  margin: 5px;

  &:hover {
    & label {
      color: #16d804;
    }
  }
`;

export const ButtonLabel = styled.label`
  font-size 20px;
  color: pink;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: ${props => props.newColor};
`;

export const OrdList = styled.ol`
  list-style-position: inside;
`;

export const Lists = styled.li`
  font-size: 25px;
  color: #3b49c7;
`;