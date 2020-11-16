import React, { Component } from 'react'
import FragmentTds from "./components/FragmentTds"
import "./DemoFragment.css"

interface Props {
    
}
interface State {
    
}

class DemoFragment extends Component<any, Props, State> {
    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="demo-fragment">
                    React.fragment用法：
                    <table className="fragment-table">
                        <tbody>
                            <tr>
                                <FragmentTds></FragmentTds>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default DemoFragment
