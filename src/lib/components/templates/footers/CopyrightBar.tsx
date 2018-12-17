import * as React from "react";

interface IProps {}

const CopyrightBar: React.SFC<IProps> = props => {
  return <div>COPYRIGHT © Sun City VIP Club Copyright RESERVED</div>;
};

CopyrightBar.defaultProps = {
  color: undefined
};

export default CopyrightBar;
