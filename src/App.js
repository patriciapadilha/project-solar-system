import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Mission />
        <footer>
          Projeto desenvolvido para conclução do bloco Hello World React na Trybe
        </footer>
      </div>
    );
  }
}

export default App;
