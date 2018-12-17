import * as React from "react";
import { CarouselNode, Node } from "sitebuilder.client";
import OwlCarousel from "react-owl-carousel2";
import { Button } from "reactstrap";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

interface OwnProps {
  node: CarouselNode;
}

interface IState {
  isOpen: boolean;
}

export default class Carousel extends React.Component<OwnProps, IState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  public render() {
    const {
      node,
      node: {
        attributes: { items }
      }
    } = this.props;
    return (
      <Wrapper>
        <OwlCarousel
          ref="car"
          options={{
            items: 1,
            nav: false,
            dots: true,
            rewind: true,
            autoplay: true
          }}
          // style={{ width: "1140px" }}
        >
          {items.map((item, idx) => (
            <img key={idx} className="img-fluid" src={item.src} />
          ))}
        </OwlCarousel>
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
    top: 40% !important;
    left: 48% !important;
    width: 100%;
    height: 100%;
    background: rgba(64, 119, 223, 0.7);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;
