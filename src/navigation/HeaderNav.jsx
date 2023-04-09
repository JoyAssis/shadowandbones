import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from "../pages/Main"
import Serie from "../pages/Serie"
import Logo from "../assets/logo.png"
import Cast from "../pages/Cast"

import * as S from "../styles/Styles"
import styled from "styled-components";

//LINK STYLE
const Links = styled(Link)`
  text-decoration-line: none;
  color:#9b7c4f;
}
`
function HeaderNav(){
  return(
    <>
    <BrowserRouter>
    <S.Header>
      <S.Logo>
        <img src={Logo} alt="" />
      </S.Logo>
      
     <S.Nav>
      <ul>
        <li>
          <Links to="/">Inicio</Links>
        </li>
        <li>
          <Links to="serie">A Série</Links>
        </li>
        <li>
          <Links to="cast">Personagens</Links>
        </li>
      </ul>
    </S.Nav> 
    </S.Header>
    
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="serie" element={<Serie/>} />
      <Route path="cast" element={<Cast/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default HeaderNav