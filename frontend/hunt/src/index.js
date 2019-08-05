import React from 'react'; //DEPENDENCIA PADRAO
import ReactDOM from 'react-dom'; //ARVORE HTML, OU SEJA, FUNCIONALIDADES DO HTML
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
