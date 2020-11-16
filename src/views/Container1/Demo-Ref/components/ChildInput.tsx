import React from 'react'
import { Input } from "antd"

const ChildInput = React.forwardRef((props,ref:any) => (
    <div>
        <Input placeholder="子组件的输入框" ref={ref}></Input>
    </div>
))

export default ChildInput
