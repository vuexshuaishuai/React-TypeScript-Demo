import React, { Component } from 'react'
import Comp3 from "./Comp3"

interface Props {
    
}
interface State {
    
}

class Comp2 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                组件2
                <Comp3></Comp3>
            </div>
        )
    }
}

export default Comp2
