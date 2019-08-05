import React from 'react';
import Routes from './routes'
import './global.css';
import Header from './components/header/index';
import Footer from './components/Footer/index';

//COMPONENTES lista
const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);


export default App;
