import styled, { createGlobalStyle } from "styled-components";
import Bg from "../assets/bg.jpg"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'League Gothic', sans-serif;
}
`;
//header
export const Header = styled.header`
  width: 100%;
  height: 15vh;
  border: red solid;
  display: flex;
  justify-content: space-between;
  background-image: url(${Bg})
`;
export const Logo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: red solid;
  img {
    height: 10vh;
  }
`;
export const Nav = styled.nav`
  border: red solid;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: red solid;
    
    li{
      width:7vw;
      list-style: none;
      font-size:1.5em;
      font-weight:900;
      letter-spacing:2px;
      text-transform:uppercase;
      :hover{
        text-shadow:3px 3px 10px #E5D09A;
        transition: 1s;
      }
    }
  }
`;
//Main
export const Main = styled.main`
width:100%;
height: 80vh;
color: #fff;
font-size:2rem;
div{
  border: solid red;
  width: 50%;
  height: 50vh;
}
`

