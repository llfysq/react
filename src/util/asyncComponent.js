// 懒加载封装组件
import React, { Component } from 'react'
// fn就是传过来的函数()=>import("./pages/Login/Login")
function asyncComponent(fn){
class Zujian extends Component {
    constructor(){
        super()
        this.state={
            // c就是他传递过来路径对应的组件
            C:null
        }
    }
    // 加载完成后
    componentDidMount(){
        // 返回的是一个promise,所以用then去接收他的返回值
        fn().then(module=>{
            this.setState({
                C:module.default
            })
        })
    }
    render() {
        // 将传过来的那个组件显示在页面上
        const {C}=this.state
        return (
            <div>
                {/*  {C?<C></C>:null}这样子返回的时候会报错，因为他现在已经不是一个组件了，要把组件的属性原样值赋给他 */}
                 {/* {C?<C></C>:null}  */}


               {C?<C {...this.props}></C>:null} 
            </div>
        )
    }
}
// 要return一个组件
return Zujian
}
export default asyncComponent