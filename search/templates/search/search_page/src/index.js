import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SymbolBase from './Symbol/SymbolBase';
import ExplainBase from './Explain/ExplainBase';
import FormTableBase from './FormTable/FormTableBase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SymbolBase></SymbolBase>
    <ExplainBase></ExplainBase>
    <FormTableBase></FormTableBase>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
