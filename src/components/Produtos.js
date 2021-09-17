import React from "react";
import styled from "styled-components";

// recebe a props produtos = lista de produtos
export default class Produtos extends React.Component {
  render() {
    // seria legal colocar um if para saber se a lista esta cheia, mas quando eu coloco não consigo acessar a variável camisas
    console.log(this.props.produtos);
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
              <MeuBotao


              //onClick={() => this.props.adicionarProduto(this.props.id)}
              >
                Adicionar ao carrinho
              </MeuBotao>
            </div>
            <br></br>
          </ProdutoCardContainer>
        </ProdutosContainer>
      );
    });

    return (
      <div>
        <ProdutoHeader>
          <p>Numero de Produtos: {this.props.produtos.length}</p>
          <div>
          <label for="sort">Ordenação: </label>
          <select
            name="sort"
            value={this.props.ordem}
            onChange={this.props.atualizarOrdem}
          >
            <option value="nenhum">Nenhuma</option>
            <option value="nome">Nome</option>
            <option value="valor">Preço</option>
          </select>
          </div>
        </ProdutoHeader>
        <ProdutosContainer>{camisas}</ProdutosContainer>
      </div>
    );

  }
}

const ProdutosContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProdutoCardContainer = styled.div`
  width: 200px;
  background-color: white;
  border: 1px solid black;
  text-align: center;
  margin: 16px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const ImageCardContainer = styled.img`
  width: 100%;
  height: 110px;
`;

const Title = styled.h3`
  color: grey;
`;

const CardDescricao = styled.p`
  color: grey;
`;

const CardPreco = styled.div`
  color: gray;
  font-size: 15px;
`;

const MeuBotao = styled.button`
  span:first-of-type {
    font-size: 14px;
  }
`;
const ProdutoHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`