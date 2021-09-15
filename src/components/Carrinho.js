import React from "react";
import styled from "styled-components";

const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Caixinha = styled.div `
    display: block;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
    border: 1px solid black;
    width: 300px;
    height: 500px;
    text-align: center;
`

class Carrinho extends React.Component {
    state = {
        compras: [{
            id: 1,
            nome: '01',
            valor: '',
            imagem: 'https://picsum.photos/200/200'
        },
        {
            id: 2,
            nome: '02',
            valor: '',
            imagem: 'https://picsum.photos/200/201'
        },
        {
            id: 3,
            nome: '03',
            valor: '',
            imagem: 'https://picsum.photos/200/202'
        }
    ],
        carrinhoCheio: ''
    }

    componentDidUpdate() {
        localStorage.setItem("compras", JSON.stringify(this.state.compras))
      };
    
      componentDidMount() {
        const compras = localStorage.getItem("compras")
        if (compras) {
          this.setState({ compras: JSON.parse(compras)})
        }
      }

      adicionaItem = () => {
         const carrinhoCheio = {
             id: this.state.id,
             nome: this.state.nome,
             valor: this.state.valor,
             imagem: this.state.imagem
         }
         this.setState({
          compras: [carrinhoCheio, ...this.state.compras]
      })
    
    }

      apagaItem = (itemId) => {
        const novaListaItems = this.state.carrinhoCheio.filter((compras) => {
            if (itemId === compras.id) {
                return false
            } else {
                return true
            }
        })

        this.setState({carrinhoCheio: novaListaItems})
      }



    render() {
    return (

        <MainContainer>
            <Caixinha>
                <h3>Carrinho:</h3>
                x Produto aqui x<br/><br/>

                Valor total: R$0,00

            </Caixinha>
        </MainContainer>

    )
}
}

export default Carrinho
