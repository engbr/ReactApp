import React ,{Component} from "react";
import  ReactDOM  from "react-dom/client";
import '@/index.css'


const root=ReactDOM.createRoot(document.getElementById('root'))




class App extends Component{

    //reader是每一个类组件都必须要实现的一个钩子函数
      //reader内部是可以写业务逻辑的最终返回的是一个组件模版jsx代码
    render(  ){
        const a=18.2
        return (<>
        <h1>欢迎React{a}</h1>
        </>)
    };
}

root.render(
    <App></App>
)