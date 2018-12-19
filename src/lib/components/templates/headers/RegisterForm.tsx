import * as React from "react";
import { Formik, Field, Form, FormikActions } from "formik";
import { FormGroup } from "reactstrap";

interface OwnProps {}

interface FormValues {
  username: string;
}

export default class RegisterForm extends React.Component<OwnProps, any> {
  public render() {
    const initialValues = {
      username: ""
    };
    return (
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikActions<FormValues>
          ) => {
            // const { header } = this.props;
            // if (!header) return setSubmitting(false);
            // this.context.updateNode(header.id, values);
            setSubmitting(false);
          }}
          render={props => {
            const { setFieldValue, isSubmitting, values } = props;
            return (
              <Form>
                <FormGroup>
                  <Field
                    name="username"
                    placeholder="Top"
                    className="form-control"
                  />
                </FormGroup>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}
