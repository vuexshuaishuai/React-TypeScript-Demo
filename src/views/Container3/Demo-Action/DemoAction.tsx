import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Button } from "antd";
import "./DemoActions.css"
import  myActions  from "../../../mobx/actions"

@observer
class DemoAction extends Component<any> {

    render() {
        return (
            <div className="demo-action">
                <div className="action-one">
                    <p> {myActions.DemoStore.LangName} </p>
                    <p> {myActions.DemoStore.LangHigh}cm </p>
                    <Button type="primary" onClick={myActions.ChangeData}>点击</Button>
                    <Button type="primary" onClick={myActions.ChangeName}>Bound</Button>
                </div>
            </div>
        )
    }
}

export default DemoAction
