import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import SymbolBase from './Symbol/SymbolBase';
import ExplainBase from './Explain/ExplainBase';
import FormBase from './Form/FormBase';
import TableBase from './Table/TableBase';

// import FormTableBase from './FormTable/FormTableBase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <SymbolBase></SymbolBase>
    <ExplainBase></ExplainBase>
    <RecoilRoot>
      <FormBase></FormBase>
      <TableBase></TableBase>
    </RecoilRoot>
    {/* <FormTableBase></FormTableBase> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
