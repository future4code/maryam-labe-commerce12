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

const arrayDeProdutos = [
  {
    id: 1,
    imagem: "https://picsum.photos/200/200",
    nome: "Camisa1",
    valor: 100,
    descricao: "camisa de espaço",
  },
  {
    id: 2,
    imagem: "https://picsum.photos/200/201",
    nome: "Camisa2",
    valor: 150,
    descricao: "camisa de nave",
  },
  {
    id: 3,
    imagem: "https://picsum.photos/200/202",
    nome: "Camisa3",
    valor: 70,
    descricao: "Camisa de nave",
  },
];


class App extends React.Component {
  state = {
    listaState: arrayDeProdutos,
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

  adicionaCarrinho = () => {
    const novaCompra = {
      nome: this.state.nome,
      valor: this.state.nome,
    };

    this.setState({
      listaState: [...this.state.listaState, novaCompra]
    });

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
          <Produtos 
          produtos={this.filtrarProdutos(listaProdutos)} 
          />
          <Carrinho />
        </DividindoLayout>
      </MainContainer>
    );
  }
}

export default App;
