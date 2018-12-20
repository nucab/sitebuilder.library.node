import * as React from "react";
import {
  Node as NodeType,
  PlainTextNode,
  MultiProductNode,
  CarouselNode,
  GraphicPlateNode
} from "sitebuilder.client";
import Node from "./Node";
import Section from "./templates/Section";
import Carousel from "./templates/Carousel";
import PlainText from "./templates/PlainText";
import MultiProduct from "./templates/MultiProduct";
import GraphicPlate from "./templates/GraphicPlate";

interface OwnProps {
  current?: number;
  dragControl?: any;
  node: NodeType | null;
}

const defaultProps: OwnProps = {
  current: 0,
  node: null
};

const RenderNode: React.SFC<OwnProps> = props => {
  const { node } = props;
  if (!node) return null;
  const current = props.current ? props.current : 0;
  switch (node.type) {
    case "Root":
      return (
        <>
          <Section node={node}>
            <Node node={node} current={current + 1} />
          </Section>
        </>
      );
    case "Section": {
      return (
        <Section node={node}>
          <Node node={node} current={current + 1} />
        </Section>
      );
    }
    case "PlainText":
      return <PlainText node={node as PlainTextNode} />;
    case "MultiProduct":
      return <MultiProduct node={node as MultiProductNode} />;
    case "Carousel":
      return <Carousel node={node as CarouselNode} />;
    case "GraphicPlate":
      return <GraphicPlate node={node as GraphicPlateNode} />;
    default:
      return null;
  }
};

RenderNode.defaultProps = defaultProps;

export default RenderNode;
