import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建一个绑定根标签的对象
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将App组件渲染到跟标签中

// <React.StrictMode>  开启严格模式
root.render(
  <React.StrictMode>  
   
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
