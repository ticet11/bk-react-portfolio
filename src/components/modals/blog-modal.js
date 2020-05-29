import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('.app-wrapper')

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px",
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)",
            },
        };
    }
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.isOpen}
                    onRequestClose={() => {
                        this.props.handleModalClose();
                    }}
                    style={this.customStyles}
                >
                    <h1>ModalBoy</h1>
                </ReactModal>
            </div>
        );
    }
}
