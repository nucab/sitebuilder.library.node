import * as React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Menu from "./Menu";
import CopyrightBar from "./CopyrightBar";

export interface IProps {}

export default class Footer2 extends React.Component<IProps, any> {
  public render() {
    return (
      <Wrapper className="text-white py-3">
        <Container>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <Menu separator />
            </div>
            <CopyrightBar />
          </div>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #0a0f22;
`;
