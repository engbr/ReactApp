import React ,{Component} from "react";
import  ReactDOM  from "react-dom/client";
// import '@/index.css'


const root=ReactDOM.createRoot(document.getElementById('root'))


class App extends Component{
    render(  ){
        const a=18.2
        return (<>
        <h1>欢迎React{a}</h1>
        </>)
    };
}

//类组件-原理通过实例化得到组件模版
const bpp=new App().render()
root.render(
   bpp
)
