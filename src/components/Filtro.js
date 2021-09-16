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

export default class Filtro extends React.Component {
  render() {
    return (
      <MainContainer>
        <Caixinha>
          <h3>Filtrar Pesquisas</h3>
          <br></br>
          <label htmlFor="min">Valor Minimo: </label>
          <input type="number" name="valorMin" id="min"></input>
          <br></br>
          <label htmlFor="max">Valor Maximo: </label>
          <input type="number" name="valorMax" id="max"></input>
          <br></br>
        </Caixinha>
      </MainContainer>
    );
  }
}
