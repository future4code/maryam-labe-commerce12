import React from "react";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import Produtos from "./components/Produtos";
import styled from "styled-components";
import { listaProdutos } from "./components/ListaDeProdutos";
import Foto01 from '../src/img/01.jpeg'
import Foto02 from '../src/img/02.jpg'
import Facebook from './img/facebook.png'
import Instagram from './img/instagram.png'
import GitHub from './img/github.png'
import Twitter from './img/twitter.png'
import Logo from './img/logo.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div `
  display: grid;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 10px;
  align-items: center;
  grid-column: 1/-1;
`

const TituloPrincipal = styled.div `
  display: flex;
  align-items: center;
  color: #582E17;
  margin-top: 10px;
`

const DividindoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-content: center;
  margin: 70px;
`

const Footer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    position: relative;

    img {
      width: 30px;
      height: 30px;
      margin: 3px;
    }

    p {
      margin-left: 10px;
    }
`

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
        imagem: Foto01,
        nome: "Camiseta NASA - Unisex",
        valor: 100,
        descricao: "Camiseta com estampa da Nasa no tamanho P.",
        quantidade: 1,
      },
      {
        id: 2,
        imagem: Foto02,
        nome: "Camiseta Alienígena - Feminino",
        valor: 150,
        descricao: "Camiseta com estampa de alien no tamanho G.",
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
        <Header>
          <TituloPrincipal>
          <img 
          src={Logo}
          alt="Logotipo"
          />
          </TituloPrincipal>
          </Header>
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
        <Footer>
          <img 
          src={Facebook} 
          alt="Facebook"
          title="Curta a nossa página no Facebook!"
          />
          
          <img 
          src={Instagram} 
          alt="Instagram"
          title="Siga o nosso perfil no Instagram!"
          />

          <img 
          src={Twitter} 
          alt="Twitter"
          title="Siga a gente no Twitter!"
          />

          <img 
          src={GitHub} 
          alt="GitHub"
          title="Feito por Emilly, Maria Helena e Willian"
          />

          <p>© 2021 - Todos os direitos reservados.</p>
        </Footer>
      </MainContainer>
    );
  }
}

export default App;
