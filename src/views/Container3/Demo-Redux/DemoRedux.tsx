import React, { Component } from 'react'
import { Input, Button } from "antd";
import { connect } from "react-redux"
import actions from "../../../store/actions/DemoRedux"
import "./DemoRedux.css"

interface Props {
    
}
interface State {
    
}

class DemoRedux extends Component<any, Props, State> {
    public textInput:React.RefObject<Input> = React.createRef();

    public ChangeName = () => {
        if(this.textInput.current){
            let Content = this.textInput.current.state.value;
            this.props.changeName(Content)
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="demo-redux">
                <p>输入框的值：{this.props.name}</p>
                <Input placeholder="请输入内容" ref={this.textInput}></Input>
                <div>
                    <Button type="primary" onClick={() => this.ChangeName()}>输出</Button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default connect((state:any) => {
    return state.DemoRedux;
},actions)(DemoRedux)
