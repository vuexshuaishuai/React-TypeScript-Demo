import React, { Component } from 'react'
import { ThemeContext } from "../Selected"

interface Props {
    
}
interface State {
    
}

class Comp3 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    { value => <span style={{color:value}}>{value}</span>}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Comp3
