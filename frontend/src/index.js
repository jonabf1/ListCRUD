import React from 'react'; //FUNCIONALIDADES DO REACT
import ReactDOM from 'react-dom'; //ARVORE DE FUNCIONALIDADES DO HTML (DIV, P, HREF e etc)
import App from './App'; //IMPORTANDO O APP(que é a pagina principal)
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //RENDERIZANDO O APP na tela
//COM SUPORTE AO HTML PELO REACT DOM


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
