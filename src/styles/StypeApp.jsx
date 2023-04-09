import styled from "styled-components";
import Bg from "../assets/bg.jpg";
import Responsivo from "../assets/bg-media.png";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Bg});
  @media(max-width:768px) {
    background-image: url(${Responsivo});
    background-size:100% 100%;
    background-repeat:no-repeat;
  }
  
`;
