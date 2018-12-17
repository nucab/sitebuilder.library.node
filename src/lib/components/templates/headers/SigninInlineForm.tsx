import * as React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

interface IProps {
  formInline?: boolean;
}

const SigninInlineForm: React.SFC<IProps> = props => {
  return (
    <div className="px-0 py-2">
      <Form inline={props.formInline} className="">
        <FormGroup className="mr-sm-2">
          <input
            className="form-control"
            size={15}
            type="email"
            name="email"
            placeholder="游戏账号"
          />
        </FormGroup>
        <FormGroup className="mr-sm-2">
          <input
            className="form-control"
            type="password"
            size={15}
            name="password"
            placeholder="密码"
          />
        </FormGroup>
        <FormGroup className="mr-sm-2">
          <input
            className="form-control"
            type="text"
            name="valid"
            placeholder="验证码"
            size={10}
          />
        </FormGroup>
        <Button type="submit" color="primary" className="mr-sm-2">
          登录
        </Button>
        <Button type="submit" color="primary">
          忘记密码
        </Button>
      </Form>
    </div>
  );
};

SigninInlineForm.defaultProps = {
  formInline: true
};

export default SigninInlineForm;
