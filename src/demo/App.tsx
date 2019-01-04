import * as React from "react";
import { Config } from "sitebuilder.client";
import { HeaderPanel, FooterPanel, Node } from "../lib";
import defaults from "./config";
// import "spectre.css/dist/spectre.css";
import "spectre.css/src/spectre.scss";
import "spectre.css/src/spectre-exp.scss";
import "spectre.css/src/spectre-icons.scss";
// import "../../node_modules/bootstrap/scss/bootstrap.scss";
import "./index.scss";
import { Container } from "respectre/layout";

interface OwnProps {}
interface OwnState {
  config: Config | null;
}

class App extends React.Component<OwnProps, OwnState> {
  state: OwnState = {
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
      <Container size="xl">
        <HeaderPanel header={config.header} />
        <Node node={page} />
        <FooterPanel footer={config.footer} />
      </Container>
    );
  }
}

export default App;
