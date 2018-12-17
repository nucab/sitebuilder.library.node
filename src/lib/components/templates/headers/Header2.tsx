import * as React from "react";
import Navigation from "./NavigationBar";
import Logo from "./Logo";
import { Container } from "reactstrap";
import { Styles } from "sitebuilder.client";

export interface IProps {
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

const Header2: React.SFC<IProps> = props => {
  return (
    <div style={props.styles ? props.styles : {}}>
      <Container>
        <div className="d-flex">
          <Logo />
          <Navigation styles={props.navStyles ? props.navStyles : {}} />
        </div>
      </Container>
    </div>
  );
};

export default Header2;
