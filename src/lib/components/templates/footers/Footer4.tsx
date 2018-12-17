import * as React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import CopyrightBar from "./CopyrightBar";
import Description from "./Description";
import Logo from "./Logo";
import Menu from "./Menu";

export interface IProps {}

export default class Footer4 extends React.Component<IProps, any> {
  public render() {
    return (
      <Wrapper className="py-3">
        <Container>
          <Menu center />
          <Description separator theme="dark" />
          <div className="d-flex align-items-center justify-content-between">
            <CopyrightBar />
            <Logo />
          </div>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #e6e6e6;
`;
