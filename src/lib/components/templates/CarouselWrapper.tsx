import * as React from "react";
import { CarouselNode } from "sitebuilder.client";
import { Button } from "reactstrap";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import Carousel from "./Carousel";

interface OwnProps {
  node: CarouselNode;
}

interface IState {
  isOpen: boolean;
}

export default class CarouselWrapper extends React.Component<OwnProps, IState> {
  state = {
    isOpen: false
  };
  public render() {
    const { node } = this.props;
    return (
      <Wrapper>
        <Carousel node={node} />
        <div className="overlay">
          <StyledButton color="transparent" onClick={this.handleOpen}>
            Edit Carousel &nbsp;
            <Icon icon="cog" />
          </StyledButton>
        </div>
      </Wrapper>
    );
  }
  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
}

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  min-height: 250px;
  border: 1px dashed #ddd;
  background-color: #fff;
  .overlay {
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    z-index: 30;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;
