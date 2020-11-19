import React, { Component } from 'react'
import { observable, computed, decorate, autorun} from "mobx";
import { Button } from "antd";
import { observer } from "mobx-react"
import "./DemoMobx.css"

interface Props {
    
}
interface State {
    
}

@observer 
class DemoMobx extends Component<any, Props, State> {
    //定义初始值
    public DemoState = observable({
        count:0,
        age:25,
    })
    //定义箱子
    public DemoBox = observable.box("学习mobx的箱子");

    //初始值增加
    public CountAdd = () => {
        this.DemoState.count++;
    }
    //初始值减少
    public CountDown = () => {
        this.DemoState.count--;
    }
    //改变箱子内容
    public ChangeBox = () => {
        this.DemoBox.set("箱子：" + new Date().toLocaleDateString()  + " " + Math.floor( Math.random()*100 + 1));
    }
    //【计算属性】
    get total(){
        return this.DemoState.count + this.DemoState.age;
    }
    public ChangeAge = () => {
        this.DemoState.age = 26;
    }
    //【autorun】
    public DemoAutorun = autorun(() => {
        console.log(this.DemoState.count + " : " + this.DemoState.age)
    })

    componentDidMount(){
        //监听箱子的改变
        this.DemoBox.observe(change => {
            // alert("兄die，箱子变了！箱子变了！")
            console.log(change);
        })
    }
    render() {
        return (
            <div className="demo-mobx">
                <div className="mobx-demo1">
                    <p>当前数值： {this.DemoState.count}</p>
                    <Button type="primary" onClick={this.CountAdd}>点击增加</Button>
                    <Button type="primary" onClick={this.CountDown}>点击减少</Button>
                </div>
                <div className="mobx-box">
                    <p>Box内容：{this.DemoBox.get()}</p>
                    <Button type="primary" onClick={this.ChangeBox}>点击改变</Button>
                </div>
                <div className="mobx-computed">
                    <p>今年年龄：{this.total}</p>
                    <Button onClick={this.ChangeAge} type="primary">改变年龄</Button>
                </div>
            </div>
        )
    }
}
decorate(DemoMobx,{
    total: computed
})
export default DemoMobx
