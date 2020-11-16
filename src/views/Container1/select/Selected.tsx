import React, { Component } from 'react';
import "./Select.css"
import Comp1 from "./components/Comp1"
import { Select } from "antd";
const { Option } = Select;
interface Props {
    
}
interface State {
    
}
export const ThemeContext = React.createContext("light")
export default class Selected extends Component<Props, State> {
    public state = {
        selectColor:"red"
    }
    public handleChange = (event:string) => {
        this.setState({
            selectColor:event
        })
    }
    render() {
        const { selectColor } = this.state
        return (
            <div className="selected">
                <Select defaultValue={selectColor} style={{ width: 200 }} onChange={this.handleChange}>
                    <Option value="red">红色</Option>
                    <Option value="green">绿色</Option>
                    <Option value="blue">蓝色</Option>
                </Select>
                <ThemeContext.Provider value={selectColor}>
                    <Comp1></Comp1>
                </ThemeContext.Provider>
            </div>
        )
    }
}
