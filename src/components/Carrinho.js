import React from "react";
import styled from "styled-components";

const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Caixinha = styled.div `
    display: block;
    justify-content: center;
    align-content: center;
    border: 1px solid black;
    width: 300px;
    text-align: center;
    padding-bottom: 20px;
`

class Carrinho extends React.Component {

    render() {
    return (

        <MainContainer>
            <Caixinha>
                <h3>Carrinho:</h3>
                x Produto aqui x <button>Remover</button><br/><br/>
                x Produto aqui x <button>Remover</button><br/><br/>
                x Produto aqui x <button>Remover</button><br/><br/>
                x Produto aqui x <button>Remover</button><br/><br/>

                <b>Valor total: R$0,00</b>

            </Caixinha>
        </MainContainer>

    )
}
}

export default Carrinho
