import React from "react";
import Personagens from "../assets/cast.png"
import * as S from "../styles/Styles"

export default function Cast(){
  return(
    <S.Cast>
    <S.Figure>
      <img src={Personagens} alt="cast" />
    </S.Figure>
    </S.Cast>
  )
}