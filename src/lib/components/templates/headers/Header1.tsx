import * as React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import Topbar from "./Topbar";
import { Styles } from "sitebuilder.client";

export interface IProps {
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

const Header1: React.SFC<IProps> = props => {
  return (
    <div style={props.styles ? props.styles : {}}>
      <Topbar boxed styles={props.topStyles ? props.topStyles : {}} />
      <LoginBarWrapper>
        <Container>
          <div className="d-flex align-items-center">
            <Logo />
            <LoginBar />
          </div>
        </Container>
      </LoginBarWrapper>
      <Navigation boxed styles={props.navStyles ? props.navStyles : {}} />
    </div>
  );
};

const LoginBarWrapper = styled.div`
  /* background-color: #181124; */
`;

export default Header1;
