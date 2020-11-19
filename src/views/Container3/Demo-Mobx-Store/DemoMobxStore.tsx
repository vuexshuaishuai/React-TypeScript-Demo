import React, { Component } from 'react'
import { Button } from "antd";
import "./DemoMobxStore.css"
import OneMobx from "./demo-mobx/MobxGood";
import GoodMostMobx from "./demo-mobx/MobxGoodMost"
import { observer } from "mobx-react"

interface Props {
    
}
interface State {
    
}
@observer
class DemoMobxStore extends Component<any,Props, State> {
    public CallbackGood = () => {
        OneMobx.TotalNum = 500;
    }
    public CallbackGoodMost = () => {
        GoodMostMobx.TotalNum = 1000;
    }
    render() {
        return (
            <div className="demo-mobx-store">
                <div className="mobx-first">
                    <p>仓库count值：<span>{OneMobx.count}</span></p>
                    <p>仓库totalNum值：<span>{OneMobx.TotalNum}</span></p>
                    <Button type="primary" onClick={this.CallbackGood}>点击</Button>
                </div>
                <div className="mobx-second">
                    <p>第二种写法</p>
                    <p>仓库goodCount值：{GoodMostMobx.goodCount} </p>
                    <p>仓库TotalNum的值：{ GoodMostMobx.TotalNum} </p>
                    <Button type="primary" onClick={this.CallbackGoodMost}>点击</Button>
                </div>
            </div>
        )
    }
}

export default DemoMobxStore
