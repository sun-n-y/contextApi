import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App3 from './App3';
import AppContext2 from './context2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppContext2>
      <App3 />
    </AppContext2>
  </>
);
