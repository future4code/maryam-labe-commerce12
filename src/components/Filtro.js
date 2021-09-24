import React from "react";
import styled from "styled-components";
import Buscar from '../img/busca.png'


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Caixinha = styled.div`
  display: block;
  border: 1px solid purple;
  border-radius: 4px;
  width: 250px;
  text-align: center;
  padding-bottom: 20px;
  background-color: white;

  h3 {
    font-family: monospace;
    font-size: x-large;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export default class Filtro extends React.Component {
  render() {
    return (
      <MainContainer>
        <Caixinha>
          <h3>Filtrar Pesquisas <img src={Buscar} alt="Carrinho" /></h3>
          
          <label htmlFor="min">Mínimo: </label>
          <input
            placeholder="Valor Mínimo"
            type="number"
            name="valorMin"
            id="min"
            value={this.props.valorMin}
            onChange={this.props.atualizarMin}
          ></input>
          <br></br>
          <label htmlFor="max">Máximo: </label>
          <input
            placeholder="Valor Máximo"
            type="number"
            name="valorMax"
            id="max"
            value={this.props.valorMax}
            onChange={this.props.atualizarMax}
          ></input>
          <br></br>
          <label htmlFor="max">Pesquisa: </label>
          <input
            placeholder="Nome do produto"
            type="text"
            id="pesquisaNome"
            value={this.props.pesquisaNome}
            onChange={this.props.atualizarpesquisaNome}
          ></input>
        </Caixinha>
      </MainContainer>
    );
  }
}
