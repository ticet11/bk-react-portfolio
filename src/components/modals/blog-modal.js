import React, { Component } from "react";
import ReactModal from "react-modal";

export default class BlogModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ReactModal isOpen={true}>
                    <h1>ModalBoy</h1>
                </ReactModal>
            </div>
        );
    }
}
