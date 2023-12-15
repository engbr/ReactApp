import React from "react";
import  ReactDOM  from "react-dom/client";
import '@/index.css'


const root=ReactDOM.createRoot(document.getElementById('root'))

// const app=<h1 id="a" className="b">欢迎 React</h1>
// 函数式组件
// 组件的名称首字母一定要大写（必须大写）
// html共有107个标签，如果首字母小写优先在107个标签内查找，看是组件还是html标签？
// div和Div意义不一样

// const app=function(){
    // 函数式组件是拥有自己独立的作用域
    // return出去的内容就是组件的模版
//     return <h1 >欢迎 React</h1>
// }

const App=function(){

    const name='莉莉'

    //return后面的内容就是组件的代码
    // 如果组件的代码过于复杂可以使用一个空标签包裹
    // 内容过于复杂可以使用（）进行包裹代表一个整体
    return (<>
    <h1 >{name} 欢迎 React</h1> 
    <h2>我会不会显示呢？</h2>
    </>)
}

root.render(
    // 调用时该函数返回的内容就是jsx 代码
    // jsx理解为：当react遇到 <理解为标签及是组件
    // 如果遇到{}代表js表达式
    // <App/>
    //组件的单双都可以自由使用
    <App></App>
    );