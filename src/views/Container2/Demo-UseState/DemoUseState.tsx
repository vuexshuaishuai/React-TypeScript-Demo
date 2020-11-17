import React, { useState } from 'react'
import { Button } from "antd"

function DemoUseState(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>我今年 <span style={{color:"red",}}>{ count }</span> 岁了！</p>
            <Button type="primary" onClick={() => setCount(count + 1)}>点击增加</Button>
        </div>
    )
}

export default DemoUseState
