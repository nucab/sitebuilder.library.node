import * as React from "react";
import {
  LargeSmallPicturePlateNode,
  ImageAttributes
} from "sitebuilder.client";
import { Img } from "respectre/elements";
import styled from "styled-components";
import cx from "classnames";

interface OwnProps {
  node: LargeSmallPicturePlateNode | null;
}

export default class LargeSmallPicturePlate extends React.Component<OwnProps> {
  render() {
    const { node } = this.props;
    if (!node) return null;
    const { items, main } = node.attributes;
    return (
      <Cards>
        {items.map((item: ImageAttributes, idx: number) => (
          <div key={idx} className={cx({ main: main === idx })}>
            <Img src={item.image} type="img-responsive" alt="" />
          </div>
        ))}
      </Cards>
    );
  }
}

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  > div {
    position: relative;
    &.main {
      /* display: flex; */
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }
`;
