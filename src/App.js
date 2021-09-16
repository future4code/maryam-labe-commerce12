import React from 'react';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import styled from 'styled-components';
import {listaProdutos} from './components/ListaDeProdutos'

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
  }
  
  
  render() {
  
    
    return (
      <MainContainer>
        <DividindoLayout>
          <Filtro />
          <Produtos produtos={listaProdutos}/>
          <Carrinho />
        </DividindoLayout>
      </MainContainer>
    );
  }
}



export default App;