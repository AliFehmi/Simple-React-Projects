import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContextProvider from './LoginContext';
import ItemamountContextProvider from './ItemamountContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemamountContextProvider>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
    </ItemamountContextProvider>
  </React.StrictMode>
);


