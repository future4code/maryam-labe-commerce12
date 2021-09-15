import React from 'react';
import PaginaHome from './components/itens/home'
import Carrinho from './components/Carrinho';
import styled from 'styled-components';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`

const DividindoLayout = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
`


class App extends React.Component {

  state = {
    produtos: [{
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    }, {
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    }]

  }
  



  
  render() {
    return (
      <MainContainer>
        <DividindoLayout>
        <Carrinho />
        <PaginaHome />
        <Carrinho />
        </DividindoLayout>
      </MainContainer>
    );
  }
}



export default App;