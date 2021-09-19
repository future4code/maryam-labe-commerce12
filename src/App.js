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
    ordem: "nenhum",
    ordemCrescimento: 1,
    carrinho: [
      {
        id: 1,
        imagem: "https://picsum.photos/200/200",
        nome: "Camisa1",
        valor: 100,
        descricao: "camisa de espaço",
        quantidade: 1,
      },
      {
        id: 2,
        imagem: "https://picsum.photos/200/201",
        nome: "Camisa2",
        valor: 150,
        descricao: "camisa de nave",
        quantidade: 2,
      },
    ],
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
  controlarInputCrescimento = (event) => {
    this.setState({ ordemCrescimento: event.target.value });
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
      .sort((a, b) => {
        switch (this.state.ordem) {
          case "nome":
            return this.state.ordemCrescimento * a.nome.localeCompare(b.nome);
          case "valor":
            return this.state.ordemCrescimento * (a.valor - b.valor);
          case "nenhum":
            break;
          default:
            break;
        }
      });
    return produtosFiltrados;
  };

  adicionarItemCarrinho = (id) => {
    let produtosNoCarrinho = this.state.carrinho.find((produtos) => {
      return id === produtos.id;
    });

    if (produtosNoCarrinho) {
      const novoProdutoNoCarrinho = this.state.carrinho.map((produto) => {
        if (id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });
      this.setState({ carrinho: novoProdutoNoCarrinho });
    } else {
      const produtoParaAdicionar = listaProdutos.find(
        (produto) => id === produto.id
      );
      const novoProdutoNoCarrinho = [
        ...this.state.carrinho,
        { ...produtoParaAdicionar, quantidade: 1 },
      ];

      this.setState({ carrinho: novoProdutoNoCarrinho });
    }
  };

  removerItemCarrinho = (id) => {
    const novoProdutoNoCarrinho = this.state.carrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ carrinho: novoProdutoNoCarrinho });
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
            ordemCrescimento={this.state.ordemCrescimento}
            atualizarOrdemCrescimento={this.controlarInputCrescimento}
            atualizarOrdem={this.controlarInputOrdem}
            adicionarProduto={this.adicionarItemCarrinho}
          />
          <Carrinho
            produtos={this.state.carrinho}
            excluir={this.removerItemCarrinho}
          />
        </DividindoLayout>
      </MainContainer>
    );
  }
}

export default App;
