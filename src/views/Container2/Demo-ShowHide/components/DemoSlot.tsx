import React, { Component } from 'react'
import ReactDOM from "react-dom"

const modalRoot: HTMLElement | null = document.getElementById('modal-root');
class DemoSlot extends Component<any, any> {

    public el = document.createElement("div")

    componentDidMount() {
        if (modalRoot) {
            modalRoot.appendChild(this.el);
        }
    }

    componentWillUnmount() {
        if (modalRoot) {
            modalRoot.removeChild(this.el);
        }
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
        // return (
        //     <div>
        //         {this.props.children}
        //     </div>
        // )
    }
}

export default DemoSlot
