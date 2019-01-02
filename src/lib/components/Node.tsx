import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
import RenderNode from "./RenderNode";
import RecurseNode from "./RecurseNode";

interface OwnProps {
  node: NodeType | null;
  current: number;
}

export default class Node extends React.Component<OwnProps, any> {
  static defaultProps: Partial<OwnProps> = {
    current: 0
  };
  public render() {
    const { node, current } = this.props;
    if (!node) return;
    const { children } = node;
    if (!children) return null;
    if (current === children.length - 1) {
      return <RenderNode node={node} current={current} />;
    }
    return <RecurseNode node={node} current={0} />;
  }
}
