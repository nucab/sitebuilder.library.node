import * as React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import RegisterModal from "./RegisterModal";

interface OwnProps {
  formInline?: boolean;
}

interface OwnState {
  showRegisterModal: boolean;
}

export default class SigninInlineForm extends React.Component<
  OwnProps,
  OwnState
> {
  static defaultProps = {
    formInline: true
  };
  state = {
    showRegisterModal: false
  };
  render() {
    return (
      <div className="px-0 py-2">
        <Form inline={this.props.formInline}>
          <FormGroup className="mr-sm-2">
            <Input
              size={15}
              type="username"
              name="username"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup className="mr-sm-2">
            <Input
              type="password"
              size={15}
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          {/* <FormGroup className="mr-sm-2">
            <Input
              className="form-control"
              type="text"
              name="valid"
              placeholder="验证码"
              size={10}
            />
          </FormGroup> */}
          <Button type="submit" color="primary" className="mr-sm-2">
            Login
          </Button>
          <Button color="primary" onClick={this.handleToggleRegisterModal}>
            Register
          </Button>
          <RegisterModal
            show={this.state.showRegisterModal}
            onToggle={this.handleToggleRegisterModal}
          />
        </Form>
      </div>
    );
  }

  handleToggleRegisterModal = () => {
    this.setState({ showRegisterModal: !this.state.showRegisterModal });
  };
}
