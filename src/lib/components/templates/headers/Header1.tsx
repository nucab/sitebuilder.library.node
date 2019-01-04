import * as React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import Topbar from "./Topbar";
import { Styles } from "sitebuilder.client";

export interface OwnProps {
  onSubmit: (values: any) => void;
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

class Header1 extends React.Component<OwnProps> {
  render() {
    return (
      <div style={this.props.styles ? this.props.styles : {}}>
        <Topbar
          boxed
          styles={this.props.topStyles ? this.props.topStyles : {}}
        />
        <LoginBarWrapper>
          <Container>
            <div className="d-flex align-items-center">
              <Logo />
              <LoginBar onSubmit={this.handleSubmit} />
            </div>
          </Container>
        </LoginBarWrapper>
        <Navigation
          boxed
          styles={this.props.navStyles ? this.props.navStyles : {}}
        />
      </div>
    );
  }
  handleSubmit = (values: any) => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(values);
    }
  };
}

const LoginBarWrapper = styled.div`
  /* background-color: #181124; */
`;

export default Header1;
