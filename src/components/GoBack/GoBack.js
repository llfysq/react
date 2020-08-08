import React, { Component } from 'react'
import "../../pages/Register/components/Register.css"
import {withRouter} from "react-router-dom"
class GoBack extends Component {
    goBack(){
        // console.log(this.props)
        this.props.history.goBack()
    }
    render() {
        return (
            <p  className="nav-zhu" onClick={this.goBack.bind(this)}>返回</p>
        )
    }
}
export default withRouter(GoBack)
