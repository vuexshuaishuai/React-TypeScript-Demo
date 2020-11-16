import * as React from 'react';
import { BrowserRouter, Route, } from "react-router-dom";
import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import Slider from "./Common/Slider";
import DemoRef from "./views/Container1/Demo-Ref/DemoRef"
import Selected from "./views/Container1/select/Selected"
import DemoFragment from "./views/Container1/Demo-Fragment/DemoFragment"
import DemoShowHide from "./views/Container2/Demo-ShowHide/DemoShowHide"
import "./App.css"

const { Header, Content } = Layout;

export interface IAppProps {
  
}

export interface IAppState {
  collapsed:boolean
}

export default class App extends React.Component<any,IAppProps, IAppState> {
  public state = {
    collapsed:false,
    name:"23"
  }
  public toggle = () => {
    this.setState({
      collapsed:!this.state.collapsed
    })
  }

  public render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Layout>
            {/* 左侧菜单 */}
            <Slider collapsed = {this.state.collapsed}></Slider>
            {/* 顶部 */}
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              {/* 主要内容 */}
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}>
                    <Route path="/" component={DemoRef} exact></Route>
                    <Route path="/Home/Demo-Ref" component={DemoRef}></Route>
                    <Route path="/Home/Demo-Select" component={Selected}></Route>
                    <Route path="/Home/Demo-Fragment" component={DemoFragment}></Route>
                    <Route path="/Data/Demo-ShowHide" component={DemoShowHide}></Route> 
              </Content>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}
