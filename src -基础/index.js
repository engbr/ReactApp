import React from "react";
import  ReactDOM  from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById('root'))

const App=()=>{
    return(
        //创建虚拟DOM
        //React.createElement可以接收多个参数，第一个参数标签名字，第二个参数是一个对象

        // 我们写在return后面的代码就是jsx，react会将其解析为虚拟DOM
        //然后虚拟DOM会渲染成真实DOM
        // diff算法：同级对比新老节点，只更新发生有变化的地方
        // fiber算法：在同层级比较加上一个，更新等待

       React.createElement('div',
       {
        id:'app',
        className:'app',
       }, React.createElement('h1',{title:'一句诗'},'床前明月光')     
        , React.createElement('header',{ title:'一句话' },'你真帅气')
        , React.createElement('main',{ title:'欢迎的话' },'欢迎李白来到React世界')
        , React.createElement('footer',{ title:'React作用' },'React是构建用户界面的js库')
       )
    )
}
root.render(
    <App/>
)