import * as React from "react";
import { Container } from "reactstrap";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

export interface OwnProps {}

export default class Footer3 extends React.Component<OwnProps, any> {
  public render() {
    return (
      <Wrapper className="text-white py-3">
        <Container>
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <Logo />
            </div>
            <Menu />
          </div>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #1c1c1f;
`;
