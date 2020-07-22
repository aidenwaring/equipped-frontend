import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
document.body.style = 'background: #2c2f33;';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));