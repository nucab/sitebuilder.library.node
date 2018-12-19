import * as React from "react";
import { Form, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import { ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { ModalHeader } from "reactstrap";

interface OwnProps {
  show: boolean;
  onToggle: () => void;
}
interface OwnState {
  isOpen: boolean;
}

export default class RegisterModal extends React.Component<OwnProps, OwnState> {
  static getDerivedStateFromProps(props: OwnProps, state: OwnState) {
    if (props.show !== state.isOpen) {
      return {
        isOpen: props.show
      };
    }
    return null;
  }
  state: OwnState = {
    isOpen: false
  };
  handleToggle = () => {
    if (this.props.onToggle) return this.props.onToggle();
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Modal isOpen={this.state.isOpen} toggle={this.handleToggle}>
        <ModalHeader toggle={this.handleToggle} />
        <Form className="">
          <ModalBody>
            <FormGroup className="mr-sm-2">
              <Label for="username">Username</Label>
              <Input size={15} type="username" name="username" />
            </FormGroup>
            <FormGroup className="mr-sm-2">
              <Label for="username">First Name</Label>
              <Input size={15} type="firstname" name="firstname" />
            </FormGroup>
            <FormGroup className="mr-sm-2">
              <Label for="username">Last Name</Label>
              <Input size={15} type="lastname" name="lastname" />
            </FormGroup>
            <FormGroup className="mr-sm-2">
              <Label for="email">Email</Label>
              <Input size={15} type="email" name="email" />
            </FormGroup>
            <FormGroup className="mr-sm-2">
              <Label for="password">Password</Label>
              <Input type="password" size={15} name="password" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Sign up now</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}
