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
    pesquisaNome: "",
    ordem: "nome",
  };

  controlarInputMax = (event) => {
    this.setState({ valorMax: event.target.value });
  };
  controlarInputMin = (event) => {
    this.setState({ valorMin: event.target.value });
  };
  controlarInputNome = (event) => {
    this.setState({ pesquisaNome: event.target.value });
  };
  controlarInputOrdem = (event) => {
    this.setState({ ordem: event.target.value });
  };

  filtrarProdutos = (produtos) => {
    const produtosFiltrados = produtos
      .filter((produto) => {
        return (
          this.state.valorMin === "" || produto.valor >= this.state.valorMin
        );
      })
      .filter((produto) => {
        return (
          this.state.valorMax === "" || produto.valor <= this.state.valorMax
        );
      })
      .filter((produto) => {
        return (
          produto.nome
            .toLowerCase()
            .includes(this.state.pesquisaNome.toLowerCase()) ||
          produto.descricao
            .toLowerCase()
            .includes(this.state.pesquisaNome.toLowerCase())
        );
      })
      .sort((a,b) =>{
        switch (this.state.ordem) {
          case "nome":
            return a.nome.localeCompare(b.nome);
          case "valor":
            return a.valor - b.valor;  
          case "nenhum":
            break 
          default:
            break
        }
      })
    return produtosFiltrados;
  };

  render() {
    return (
      <MainContainer>
        <DividindoLayout>
          <Filtro
            atualizarMax={this.controlarInputMax}
            atualizarMin={this.controlarInputMin}
            atualizarpesquisaNome={this.controlarInputNome}
            valorMax={this.state.valorMax}
            valorMin={this.state.valorMin}
            pesquisaNome={this.state.pesquisaNome}
          />
          <Produtos
            produtos={this.filtrarProdutos(listaProdutos)}
            ordem={this.state.ordem}
            atualizarOrdem={this.controlarInputOrdem}
          />
          <Carrinho />
        </DividindoLayout>
      </MainContainer>
    );
  }
}

export default App;
