import * as React from "react";
import { Container } from "reactstrap";
import Menu from "./Menu";
import CopyrightBar from "./CopyrightBar";
import { Styles } from "sitebuilder.client";

export interface IProps {
  styles: Styles | null;
  navStyles: Styles | null;
}

const Footer1: React.SFC<IProps> = props => {
  return (
    <div style={props.styles ? props.styles : {}}>
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <Menu separator styles={props.navStyles ? props.navStyles : {}} />
        </div>
        <div className="text-center">
          <CopyrightBar />
        </div>
      </Container>
    </div>
  );
};

export default Footer1;
