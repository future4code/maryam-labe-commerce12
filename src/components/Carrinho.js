import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Caixinha = styled.div`
  display: block;
  justify-content: center;
  align-content: center;
  border: 1px solid black;
  width: 300px;
  text-align: center;
  padding-bottom: 20px;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  margin: 8px 30px 0px 30px;
  

  p {
    margin: 0;
  }
`;

class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0;

    for (let produto of this.props.produtos) {
      valorTotal += produto.valor * produto.quantidade;
    }
    return valorTotal;
  };

  render() {
    return (
      <MainContainer>
        <Caixinha>
          <h3>Carrinho: </h3>
          {this.props.produtos.map((produto) => {
            return (
              <ItemContainer>
                <p>{produto.nome}</p>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.excluir(produto.id)}>
                  Remover
                </button>
              </ItemContainer>
            );
          })}
          <p>Valor total: R${this.pegarValorTotal()},00</p>
        </Caixinha>
      </MainContainer>
    );
  }
}

export default Carrinho;
