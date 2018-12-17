import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import { TextScroller } from "./TextScroller";
import { Styles } from "sitebuilder.client";

export interface IProps {
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

const Header4: React.SFC<IProps> = props => {
  console.log(props);
  return (
    <div style={props.styles ? props.styles : {}}>
      <Container>
        <Row>
          <Col sm={4}>
            <TextScroller>
              为了能够提供更优良的游戏品质，网站定期对游戏厅进行维护，具体维护时间如下：（1）★AG亚游-国际厅中的【旗舰厅及
            </TextScroller>
          </Col>
          <Col sm={8}>
            <LoginBar align="right" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="d-flex align-items-center">
          <Logo />
          <Navigation styles={props.navStyles ? props.navStyles : {}} />
        </div>
      </Container>
    </div>
  );
};

export default Header4;
