
import React from "react"
import styled from 'styled-components'
export default function PaginaHome (){

    

    const EstiloProdutosGerais = styled.div`
    margin: 0 auto;
    padding: 0 auto;
    flex-direction: row;
    border: 2px solid #CCC;
    justify-content: center ;
    text-align: center;
    align-items: center;
    width: 500px;

    `;
    


    
    return(
        
        <EstiloProdutosGerais>
        <h1>Produtos</h1>
        <h2>Produto 1</h2>
        <p>Preço: </p>
        <button>Adicionar ao carrinho</button>


        <h2>Produto 2</h2>
        <p>Preço: </p>
        <button>Adicionar ao carrinho</button>

        </EstiloProdutosGerais>
       
    )
}