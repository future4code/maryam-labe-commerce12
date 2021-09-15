import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaginaHome from './components/itens/home'


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

      </div>
    );
  }
}



export default App;