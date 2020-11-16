import React, { Component } from 'react'
import { Button } from "antd"
import DemoSlot from "./components/DemoSlot"
import { CloseOutlined } from "@ant-design/icons";
import "./DemoShowHide.css"

interface Props {
    
}
interface State {
    
}

class DemoShowHide extends Component<any, Props, State> {
    state = {
        isShow:false,
    }
    public onShow = () => {
        this.setState({
            isShow:true
        })
    }
    public onHide = () => {
        this.setState({
            isShow:false
        })
    }
    render() {
        const { isShow } = this.state;
        const ContentBox = isShow?
        <DemoSlot>
            <div className="modal">
                <div className="inner">
                    <div className="inner-header">
                        <p>弹框</p>
                        <CloseOutlined onClick={this.onHide} />
                    </div>
                </div>
            </div>
        </DemoSlot>:null
        return (
            <>
                <Button type="primary" onClick={this.onShow}>点击打开</Button>
                { ContentBox }
            </>
        )
    }
}

export default DemoShowHide
