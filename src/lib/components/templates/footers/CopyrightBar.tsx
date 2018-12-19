import * as React from "react";

interface OwnProps {}

const CopyrightBar: React.SFC<OwnProps> = props => {
  return <div>COPYRIGHT © Sun City VIP Club Copyright RESERVED</div>;
};

CopyrightBar.defaultProps = {
  color: undefined
};

export default CopyrightBar;
