import React, { Component } from 'react'
import { Layout, Menu } from "antd";
import { HomeOutlined, CarryOutOutlined, } from "@ant-design/icons";
import { withRouter, } from "react-router-dom"
import "./Slider.css"

const { Sider }  = Layout;
const { SubMenu } = Menu;

interface Props {
    collapsed?:boolean;
}
interface State {
    
}

class Slider extends Component<any, Props, State> {
    public onNavigate = (path: string) => {
        this.props.history.push(path);
    };
    render() {
        return (
            <div className="slider">
                <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                    {/* Logo */}
                    <div className="logo">
                    React Demo
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <SubMenu key="sub1" icon={<HomeOutlined />} title="菜单容器 1">
                            <Menu.Item key="3" onClick={ () => this.onNavigate('/Home/Demo-Ref') }>Ref操作展示</Menu.Item>
                            <Menu.Item key="4" onClick={ () => this.onNavigate("/Home/Demo-Select") }>Select操作展示</Menu.Item>
                            <Menu.Item key="5" onClick={ () => this.onNavigate("/Home/Demo-Fragment")}>Fragment操作展示</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<CarryOutOutlined />} title="菜单容器 2">
                            <Menu.Item key="6" onClick={ () => this.onNavigate("/Data/Demo-ShowHide")}>弹框显示隐藏</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default withRouter(Slider);
