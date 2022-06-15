import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('app'));

//const h1 = React.createElement('h1', null, '🛒 Quatu | Shopping Cart');
const appName = 'Qhatu';
const h1 = <h1>🛒 {appName === 'Qhatu' ? '🤔' : '😢'} | Shopping Cart</h1>;

root.render(h1);
