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
    public countInput: React.RefObject<Input> = React.createRef();

    public ChangeName = () => {
        if(this.textInput.current){
            let Content = this.textInput.current.state.value;
            this.props.changeName(Content)
        }
    }
    // 加
    public CountIncrease = () => {
        this.props.CountIncrease();
    }
    // 减
    public CountReduce = () => {
        this.props.CountReduce();
    }
    // 
    public CallbackDisabled = () => {

    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div className="demo-redux">
                {/* Demo 1  */}
                <div className="redux-input">
                    <p>输入框的值：{this.props.name}</p>
                    <Input placeholder="请输入内容" ref={this.textInput}></Input>
                    <div>
                        <Button type="primary" onClick={() => this.ChangeName()}>输出</Button>
                    </div>
                </div>
                {/* Demo 2  */}
                <div className="demo-count">
                    <Button type="primary" onClick={() => this.CountReduce()} disabled={this.props.count === 0}>-</Button>
                    <Input placeholder="数值" ref={this.countInput} value={this.props.count}></Input>
                    <Button type="primary" onClick={() => this.CountIncrease()}>+</Button>
                </div>
            </div>
        )
    }
}

export default connect((state:any) => {
    return state.DemoRedux;
},actions)(DemoRedux)
