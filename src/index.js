import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
document.body.style = 'background: #23272a;';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));