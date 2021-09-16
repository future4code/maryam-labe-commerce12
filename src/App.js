import React from "react";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import Produtos from "./components/Produtos";
import styled from "styled-components";
import { listaProdutos } from "./components/ListaDeProdutos";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const DividindoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
`;

class App extends React.Component {
  state = {
    valorMin: "",
    valorMax: "",
  };

  controlarInputMax = (event) => {
    this.setState({ valorMax: event.target.value });
  };
  controlarInputMin = (event) => {
    this.setState({ valorMin: event.target.value });
  };

  filtrarProdutos = (produtos) => {

    const produtosFiltrados = produtos
    .filter((produto) => {
      return this.state.valorMin === "" || produto.valor >=this.state.valorMin
    })
    .filter((produto) => {
      return this.state.valorMax === "" || produto.valor <=this.state.valorMax
    })
    return produtosFiltrados
    
  };

  render() {
    return (
      <MainContainer>
        <DividindoLayout>
          <Filtro
            atualizarMax={this.controlarInputMax}
            atualizarMin={this.controlarInputMin}
            valorMax={this.state.valorMax}
            valorMin={this.state.valorMin}
          />
          <Produtos produtos={this.filtrarProdutos(listaProdutos)} />
          <Carrinho />
        </DividindoLayout>
      </MainContainer>
    );
  }
}

export default App;
