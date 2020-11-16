import * as React from 'react';
import { Input, Button, } from "antd"
import "./DemoRef.css"
import ChildInput from "./components/ChildInput"
import HomeContent from "./components/RefContent"

export interface IAppProps {
    
}

class Home extends React.Component<any,IAppProps> {
  state = {
    data:"暂时没有内容",
  }
  //父组件输入框ref
  public FatherInput:React.RefObject<Input> = React.createRef();
  //子组件输入框ref
  public ChildrenInput:React.RefObject<Input> = React.createRef();

  //获取父组件的焦点
  public getFocusFather = () => {
    if(this.FatherInput.current){
      this.FatherInput.current.focus();
    }
  }
  //获取子组件的焦点
  public getFocusChild = () => {
    if(this.ChildrenInput.current){
      this.ChildrenInput.current.focus();
    }
  }
  //获取父组件的内容
  getContentFather = (e:any) => {
    if(this.FatherInput.current){
      this.setState({
        data:this.FatherInput.current.state.value
      })
    }
    // this.setState({
    //   data:e.target.value
    // })
  }

  public render() {
    return (
      <div className="demo-refs">
        <div className="refs-btns">
          <Button type="primary" onClick={this.getFocusFather}>获取父组件焦点</Button>
          <Button danger onClick={this.getFocusChild}>获取子组件焦点</Button>
        </div>
        <Input placeholder="父组件的输入框" ref={this.FatherInput} onBlur={this.getContentFather}></Input>
        <ChildInput ref={this.ChildrenInput}></ChildInput>
        <HomeContent data={this.state.data}></HomeContent>
      </div>
    );
  }
}
export default Home;