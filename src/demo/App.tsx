import * as React from "react";
import { Config } from "sitebuilder.client";
import { HeaderPanel, FooterPanel, Node } from "../lib";
import config from "./config";
// import "../../node_modules/bootstrap/scss/bootstrap.scss";
import { Container } from "reactstrap";

interface OwnProps {}
interface OwnState {
  config: Config | null;
}

class App extends React.Component<OwnProps, OwnState> {
  state: OwnState = {
    config: null
  };
  componentDidMount() {
    const config = new Config(config);
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
        <HeaderPanel header={config.header} />
        <Node node={page} />
        <FooterPanel footer={config.footer} />
      </Container>
    );
  }
}

export default App;
