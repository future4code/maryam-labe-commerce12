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
  border: 1px solid black;
  width: 300px;
  text-align: center;
  padding-bottom: 20px;
`;

export default class Filtro extends React.Component {
  render() {
    return (
      <MainContainer>
        <Caixinha>
          <h3>Filtrar Pesquisas</h3>
          
          <label htmlFor="min">Minimo: </label>
          <input
            placeholder="Valor Mínimo"
            type="number"
            name="valorMin"
            id="min"
            value={this.props.valorMin}
            onChange={this.props.atualizarMin}
          ></input>
          <br></br>
          <label htmlFor="max">Maximo: </label>
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
