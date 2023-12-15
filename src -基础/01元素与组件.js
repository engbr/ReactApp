import React from "react"; //导入react核心库
import  ReactDOM  from "react-dom/client";//导入react库，用来解析DOM
import '@/index.css'

//ReactDOM.createRoot(document.getElementById('root')通过它创建DOM
const root=ReactDOM.createRoot(document.getElementById('root'))

//元素：元素是组件的最小单位，只有一个html标签
// 组价：由一个或者多个元素组合而成的

const app=<h1 id="a" className="b">欢迎 React</h1>
// 此时的app是一个虚拟DOM
console.log(app);

root.render(app);