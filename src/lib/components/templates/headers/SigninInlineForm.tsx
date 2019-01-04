import * as React from "react";
import { FormGroup, Button } from "reactstrap";
import RegisterModal from "./RegisterModal";
import { Formik, Form, Field, FormikValues, FormikActions } from "formik";

interface OwnProps {
  formInline?: boolean;
  onSubmit: (values: FormValues) => void;
}

interface OwnState {
  showRegisterModal: boolean;
}

interface FormValues {
  username: string;
  password: string;
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
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikActions<FormikValues>
          ) => {
            this.handleSubmit(values);
            setSubmitting(false);
          }}
          render={props => {
            const { values } = props;
            return (
              <Form className="form-inline">
                <FormGroup className="mr-sm-2">
                  <Field
                    className="form-control"
                    size={15}
                    type="username"
                    name="username"
                    placeholder="Username"
                  />
                </FormGroup>
                <FormGroup className="mr-sm-2">
                  <Field
                    className="form-control"
                    type="password"
                    size={15}
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button type="submit" color="primary" className="mr-sm-2">
                  Login
                </Button>
                <Button
                  color="primary"
                  onClick={this.handleToggleRegisterModal}
                >
                  Register
                </Button>
                <RegisterModal
                  show={this.state.showRegisterModal}
                  onToggle={this.handleToggleRegisterModal}
                />
              </Form>
            );
          }}
        />
      </div>
    );
  }
  handleSubmit = (values: FormValues) => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(values);
    }
  };
  handleToggleRegisterModal = () => {
    this.setState({ showRegisterModal: !this.state.showRegisterModal });
  };
}
