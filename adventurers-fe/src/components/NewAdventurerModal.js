import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewAdventurerForm from "./NewAdventurerForm";

class NewAdventurerModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Editing Adventurer";
        var button = <Button onClick={this.toggle}>Edit</Button>;

        if (create) {
            title = "Creating New Adventurer";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create New
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewAdventurerForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            student={this.props.adventurer}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewAdventurerModal;