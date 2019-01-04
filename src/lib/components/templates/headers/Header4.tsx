import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./NavigationBar";
import LoginBar from "./LoginBar";
import Logo from "./Logo";
import { TextScroller } from "./TextScroller";
import { Styles } from "sitebuilder.client";

export interface OwnProps {
  onSubmit: (values: any) => void;
  styles: Styles | null;
  navStyles: Styles | null;
  topStyles: Styles | null;
}

class Header4 extends React.Component<OwnProps> {
  render() {
    return (
      <div style={this.props.styles ? this.props.styles : {}}>
        <Container>
          <Row>
            <Col sm={4}>
              <TextScroller>
                为了能够提供更优良的游戏品质，网站定期对游戏厅进行维护，具体维护时间如下：（1）★AG亚游-国际厅中的【旗舰厅及
              </TextScroller>
            </Col>
            <Col sm={8}>
              <LoginBar align="right" onSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="d-flex align-items-center">
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

export default Header4;
