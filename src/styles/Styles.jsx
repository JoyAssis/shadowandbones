import styled, { createGlobalStyle } from "styled-components";

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
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #A5A972;
`;
export const Logo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 10vh;
  }
`;
export const Nav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    li{
      width:7vw;
      list-style: none;
      font-size:1.5em;
      font-weight:900;
      letter-spacing:2px;
      text-transform:uppercase;
      :hover{
        text-shadow:10px 10px 10px #AEE4C2;
        transition: 1s;
      }
      @media(max-width:768px){
        width:15vw;
        font-size:1em;
      }
    }
  }
`;
//Main
export const Main = styled.main`
width:100%;
height: 80vh;
color: #E5D09A;
font-size:2rem;
display:flex;
justify-content: flex-end;
align-items: flex-end;
font-family: 'Allerta', sans-serif;
div{
  width: 50%;
  height: 50vh;
  padding-right:5em;
  @media(max-width:768px){
    width: 100%;
    height: 70vh;
    padding-right:0;
    text-align:center;
  }
}
`
//serie
export const Serie = styled.section`
width:100%;
height: 85vh;
color: #E5D09A;
font-size:1.5rem;
display:flex;
justify-content: flex-end;
align-items: flex-end;
font-family: 'Allerta', sans-serif;
background-color: rgba(33, 33, 34, 0.65);
@media(max-width:768px){
  justify-content: center;
  font-size:1.2em;
}

div{
  width: 50%;
  height: 80vh;
  padding-right:5em;
  text-align:right;
  @media(max-width:768px){
    width:100%;
    padding-right:1em;
    padding-left:1em;
  }
  
  p{
    padding-bottom:2em;
  }
}
`
//personagens
export const Cast = styled.section`
width:100%;
height:85vh;
display:flex;
justify-content:flex-end;
align-items:end;
`
export const Figure = styled.figure`
  width:50vw;
 img{
  width:100%;
  border-bottom: 5px solid #A5A972;
 }
 @media(max-width:768px){
  display:none;
 }
`

