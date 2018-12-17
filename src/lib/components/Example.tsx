import * as React from "react";
import { FiSettings } from "react-icons/fi";
import { Icon } from "@blueprintjs/core";
import udiliaLogo from "./udilia-logo.svg";
import "./Example.css";

interface OwnProps {
  test: string;
}

const Example: React.SFC<OwnProps> = props => (
  <div className="Example">
    {props.test}
    <FiSettings />
    <Icon icon="cog" />
    <Icon icon="move" />
    <img src={udiliaLogo} alt="React logo" width="62" />
    <h1 className="Example-text">Create React Library</h1>
  </div>
);

export default Example;
