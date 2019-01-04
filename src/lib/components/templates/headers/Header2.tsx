import * as React from "react";
import Navigation from "./NavigationBar";
import Logo from "./Logo";
import { Container } from "reactstrap";
import { Styles } from "sitebuilder.client";

export interface OwnProps {
  onSubmit: (values: any) => void;
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

class Header2 extends React.Component<OwnProps> {
  render() {
    return (
      <div style={this.props.styles ? this.props.styles : {}}>
        <Container>
          <div className="d-flex">
            <Logo />
            <Navigation
              styles={this.props.navStyles ? this.props.navStyles : {}}
            />
          </div>
        </Container>
      </div>
    );
  }
  handleSubmit = (values: any) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(values);
    }
  };
}

export default Header2;
