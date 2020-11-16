import React, { Component } from 'react'
import Comp2 from "./Comp2"

interface Props {
    
}
interface State {
    
}

class Comp1 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                组件1
                <Comp2></Comp2>
            </div>
        )
    }
}

export default Comp1
