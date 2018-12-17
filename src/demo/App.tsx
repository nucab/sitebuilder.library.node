import * as React from "react";
import { Config } from "sitebuilder.client";
import { Node } from "../lib";
import defaults from "./config";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { Container } from "reactstrap";

interface OwnProps {}
interface OwnState {}

class App extends React.Component<OwnProps, OwnState> {
  state = {
    config: null
  };
  componentDidMount() {
    const config = new Config(defaults);
    this.setState({ config });
  }
  render() {
    const { config } = this.state;
    if (!config) return null;
    const page = config.root.findChild({
      type: "Page",
      attributes: { path: "/" }
    });
    if (!page) return null;
    return (
      <Container>
        <Node node={page} />
      </Container>
    );
  }
}

export default App;
