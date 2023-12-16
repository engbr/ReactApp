import React from "react";

class App extends React.Component {
    render() {
        const obj = {
            color: 'red',
            // fontSize: '40px',
            fontSize: 50
        }
        return (<>
            {/* 该写法是错误的，因为在react开发中不是html元素，不支持直接设置为字符串 */}
            {/* <h1 style='color:red;'>好好学习吧！努力绊倒别人</h1>  */}

            <h1 style={obj}>好好学习吧！努力绊倒别人!</h1>
        </>)
    }

}

export default App


