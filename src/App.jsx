import HeaderNav from './navigation/HeaderNav'
import * as S from "./styles/Styles"
import { Background } from './styles/StypeApp'


function App() {
  return (
    <Background>
      <S.GlobalStyle/>
      <HeaderNav/>    
    </Background>
  )
}

export default App
