import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';
import AppContext from './context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App3 />
  </AppContext>
);
