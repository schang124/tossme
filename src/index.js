import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseStyle from './styles'
import registerServiceWorker from './registerServiceWorker';

const render = () => {
    baseStyle();
    ReactDOM.render(<App />, document.getElementById('toss'));
};

render();
registerServiceWorker();

