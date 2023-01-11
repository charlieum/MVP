import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    overflow-x: hidden
}
* {
    padding: 0;
    margin: 0
}
`;

export const NavAll = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: gray;
  color: black;
  padding: 5px;
  border: 1px black solid;
`;

export const NavItem = styled.div`
  width: 150px;
  font-family: arial;
  border: 1px white solid;
  margin: 5px;
`;

export const HeaderBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
  background-color: grey;
  border: 1px black solid;
`
export const BodyAll = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
  background-color: grey;
  border: 1px black solid;
`

export const BodyContent = styled.div`
  display: flex;
  width: 80%;
  border: 1px black solid;
`

export const BodyMain = styled.div`
  flex: 3;
  border: 1px white solid;
`

export const BodySide = styled.div`
  flex: 1;
  border: 1px white solid;
`


export default GlobalStyle;