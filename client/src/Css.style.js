import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    overflow-x: hidden;
    background-color: #FFFFFF;
    color: #51565b;
    font-family: 'Roboto';
    font-size: 15px;
}
a:link {
  font-family: 'BenchNine';
  text-decoration: none;
  text-transform: uppercase;
  color: #eb008c;
}
a:visited {
  color: #eb008c;
}
a:hover{
  color: #3D3D3D;
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
  color: #3D3D3D;
  padding: 10px;
  background-color: #e2e2e2;
`;

export const NavItem = styled.div`
  width: 120px;
  font-family: arial;
  /* font-size: 15px; */
  margin: 2px;
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  /* margin: 0px 105px 0px 0px; */
  border-radius: 12px;
  font-size: 12px;
  border: 0px;
  cursor: pointer;
`;

export const HeaderBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: #3D3D3D;
  font-family: 'BenchNine';
  font-size: 60px;
  a:link {
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
  }
  a:visited {
    color: #ffffff;
  }
  a:hover{
    color: #eb008c;
  }

`
export const BodyAll = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* min-width: 800px; */
  padding: 30px 10px 100px 10px;
  overflow: scroll;
`

export const BodyContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  /* border: 3px black solid; */
`

export const BodyMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px white solid; */
`
export const BodySpace = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px white solid; */
`

export const BodySide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px white solid; */
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  padding: 15px;
  margin: 10px;
  background-color: #CDCDCD;
  border-radius: 5px;
  a:link {
    font-size: 20px;
  }
  /* border: 1px solid black; */
`

export const SideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  margin: 10px;
  background-color: #CDCDCD;
  border-radius: 5px;
  flex-direction: column;
  a:link {
    font-size: 20px;
  }
`
export const TextTitle = styled.div`
  color: #eb008c;
  font-family: 'BenchNine';
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
`

export const TextDetail = styled.div`
  font-size: 12px;
`
export const PostButton = styled.button`
  padding: 10px 15px;
  margin: 0px 30px 20px 30px;
  border-radius: 12px;
  font-size: 12px;
  border: 0px;
  width: 150px;
  cursor: pointer;
  background-color: #eb008c;
  color: #FFFFFF;
`;

export const SubmitContainer = styled.div`
  margin: 5px 0px 0px 0px;
`

export const SubmitButton = styled.button`
  padding: 10px 15px;
  margin: 10px 0px;
  border-radius: 12px;
  font-size: 12px;
  border: 0px;
  width: 100px;
  cursor: pointer;
`;

export const Confirmed = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #eb008c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #FFFFFF;
  height: 50px;
  margin: 10px 0px 5px 0px;
`;

export const ReplyContainer = styled.div`
  margin: 10px 0px 15px 0px;
  padding: 15px;
  background-color: #e2e2e2;
  border-radius: 5px;
`

export default GlobalStyle;