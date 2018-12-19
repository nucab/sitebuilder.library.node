import * as React from "react";
import {
  Node as NodeType,
  CarouselNode,
  PlainTextNode
} from "sitebuilder.client";
import Node from "./Node";
import Section from "./templates/Section";
import Carousel from "./templates/Carousel";
import PlainText from "./templates/PlainText";

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
    case "Carousel":
      return <Carousel node={node as CarouselNode} />;
    case "PlainText":
      return <PlainText node={node as PlainTextNode} />;
    default:
      return null;
  }
};

RenderNode.defaultProps = defaultProps;

export default RenderNode;
