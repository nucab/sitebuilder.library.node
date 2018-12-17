import * as React from "react";
import { Container } from "reactstrap";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import { Styles } from "sitebuilder.client";

export interface IProps {
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

const Header3: React.SFC<IProps> = props => {
  return (
    <div style={props.styles ? props.styles : {}}>
      <Container>
        <div className="d-flex align-items-center">
          <Logo />
          <LoginBar />
        </div>
      </Container>
      <Navigation styles={props.navStyles ? props.navStyles : {}} boxed />
    </div>
  );
};

export default Header3;
