import React ,{Component} from "react";
import  ReactDOM  from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById('root'))

const Header=function(){
    return(
        <header>头部</header>
    )
}

function Content(){
    return(
        <main>
            内容部分
            <MyButton/>
        </main>
    )
}

function MyButton(){
    return(<>
    <button>求点击</button></>)
}


class App extends Component{
    render(  ){
        const a=18.2
        return (<>
        <Header/>
        <h1>欢迎React{a}</h1>
        <Content/>
        </>)
    };
}


root.render(
    <App></App>
)