import * as React from "react";
import cx from "classnames";
import SigninInlineForm from "./SigninInlineForm";

export interface IProps {
  align?: "left" | "right";
}

export default class LoginBar extends React.Component<IProps, any> {
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
        <SigninInlineForm />
      </div>
    );
  }
}
