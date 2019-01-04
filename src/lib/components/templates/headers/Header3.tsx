import * as React from "react";
import { Container } from "reactstrap";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import { Styles } from "sitebuilder.client";

export interface OwnProps {
  onSubmit: (values: any) => void;
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

class Header3 extends React.Component<OwnProps> {
  render() {
    return (
      <div style={this.props.styles ? this.props.styles : {}}>
        <Container>
          <div className="d-flex align-items-center">
            <Logo />
            <LoginBar onSubmit={this.handleSubmit} />
          </div>
        </Container>
        <Navigation
          styles={this.props.navStyles ? this.props.navStyles : {}}
          boxed
        />
      </div>
    );
  }
  handleSubmit = (values: any) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(values);
    }
  };
}

export default Header3;
