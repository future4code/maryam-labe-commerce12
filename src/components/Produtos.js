import React from "react";
import styled from "styled-components";

// recebe a props produtos = lista de produtos
export default class Produtos extends React.Component {
  render() {
    // seria legal colocar um if para saber se a lista esta cheia, mas quando eu coloco não consigo acessar a variável camisas
    //console.log(this.props.produtos);
    const camisas = this.props.produtos.map((camisa) => {
      return (
        <ProdutosContainer>
          <ProdutoCardContainer key={camisa.id}>
            <div>
              <ImageCardContainer
                src={camisa.imagem}
                alt=""
              ></ImageCardContainer>
              <Title>{camisa.nome}</Title>
              <CardDescricao>{camisa.descricao}</CardDescricao>
              <CardPreco>R$ {camisa.valor},00</CardPreco>
            </div>
            <div>
              <MeuBotao onClick={() => this.props.adicionarProduto(camisa.id)}>
                Adicionar ao carrinho
              </MeuBotao>
            </div>
            <br></br>
          </ProdutoCardContainer>
        </ProdutosContainer>
      );
    });

    return (
      <ProdutoBory>
        <ProdutoHeader>
          <p>Número de Produtos: {this.props.produtos.length}</p>
          <ProdutoOrdem>
            <div>
              <label for="sort">Ordenação: </label>
              <select
                name="sort"
                value={this.props.ordem}
                onChange={this.props.atualizarOrdem}
              >
                <option value="nenhum"></option>
                <option value="nome">Nome</option>
                <option value="valor">Preço</option>
              </select>
            </div>
            <div>
              <label for="order"></label>
              <select
                name="order"
                value={this.props.ordemCrescimento}
                onChange={this.props.atualizarOrdemCrescimento}
              >
                <option value={1}>crescente</option>
                <option value={-1}>decrescente</option>
              </select>
            </div>
          </ProdutoOrdem>
        </ProdutoHeader>
        <ProdutosContainer>{camisas}</ProdutosContainer>
      </ProdutoBory>
    );
  }
}

const ProdutosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
`;

const ProdutoCardContainer = styled.div`
  width: 200px;
  background-color: white;
  border: 1px solid purple;
  text-align: center;
  margin: 16px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 5px 5px 5px 5px;
`;

const ImageCardContainer = styled.img`
  width: 100%;
  height: 200px;
`;

const Title = styled.h3`
  color: #724AC4;
`;

const CardDescricao = styled.p`
  color: #3C2766;
`;

const CardPreco = styled.div`
  color: gray;
  font-size: 15px;
  font-weight: bold;
`;

const MeuBotao = styled.button`
  span:first-of-type {
    font-size: 14px;
  }
`;
const ProdutoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

const ProdutoOrdem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProdutoBory = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
