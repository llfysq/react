// redux状态层
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {getIndexGoods} from "../util/request"

// 初始状态
const initState={
    goodsList:[],//商品列表数据
}
const changeGoodsList=(arr)=>{
    return {type:"changeGoogs",list:arr}
}

// 发送请求
export const requestGoodsList=()=>{
    return (dispatch,getState)=>{
        // 发送请求
        getIndexGoods().then(res=>{
            dispatch(changeGoodsList(res.data.data))
        })
    }
}

//reducer 修改state
const reducer=(state=initState,action)=>{
    switch(action.type){
        // 修改商品列表
        case "changeGoods":
            return{
                ...state,
                goodsList:action.list
            }
            default:
                return state;
    }
}

// 创建仓库
const store=createStore(reducer,applyMiddleware(thunk))

// 导出数据
export const goodsList=(state)=>state.goodsList

export default store