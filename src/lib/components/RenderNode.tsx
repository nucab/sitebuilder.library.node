import * as React from "react";
import styled from "styled-components";
import { Node as NodeType, CarouselNode } from "sitebuilder.client";
import Node from "./Node";
import Section from "./templates/Section";
import Carousel from "./templates/Carousel";
import ColumnControls from "./ColumnControls";
import SectionControls from "./SectionControls";

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
  const { dragControl, node } = props;
  if (!node) return null;
  const current = props.current ? props.current : 0;
  switch (node.type) {
    case "Root":
      return (
        <>
          <Section node={node}>
            <Node node={node} current={0} />
          </Section>
        </>
      );
    case "Section": {
      if (node.attributes.type === "column") {
        <ControlWrapper>
          <Node node={node} current={current + 1} />
          <ColumnControls dragControl={dragControl} />
        </ControlWrapper>;
        return <Node node={node} current={current + 1} />;
      }
      return (
        <Section node={node}>
          <ControlWrapper>
            <Node node={node} current={0} />
            <SectionControls />
          </ControlWrapper>
        </Section>
      );
    }
    case "Carousel":
      return <Carousel node={node as CarouselNode} />;
    default:
      return null;
  }
};

RenderNode.defaultProps = defaultProps;

export default RenderNode;

const ControlWrapper = styled.div`
  position: relative;
  &:hover {
    .section-controls {
      opacity: 1;
    }
  }
`;
