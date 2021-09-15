import React from 'react';
import './App.css';
import PaginaHome from './components/itens/home'
import Carrinho from './components/Carrinho';

class App extends React.Component {

  state = {
    produtos: [{
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    }, {
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    }]

  }
  



  
  render() {
    return (
      <div>
        <PaginaHome />
        <Carrinho />
      </div>
    );
  }
}



export default App;