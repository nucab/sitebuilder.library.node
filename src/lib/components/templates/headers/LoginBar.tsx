import * as React from "react";
import cx from "classnames";
import SigninInlineForm from "./SigninInlineForm";

export interface OwnProps {
  align?: "left" | "right";
  onSubmit: (values: any) => void;
}

export default class LoginBar extends React.Component<OwnProps, any> {
  static defaultProps = {
    align: "left"
  };
  public render() {
    let alignment = "justify-content-start";
    if (this.props.align === "right") {
      alignment = "justify-content-end";
    }
    return (
      <div className={cx("d-flex", alignment)}>
        <SigninInlineForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
  handleSubmit = (values: any) => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(values);
    }
  };
}
