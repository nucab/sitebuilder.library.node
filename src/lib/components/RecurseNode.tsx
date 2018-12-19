import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
import RenderNode from "./RenderNode";

interface OwnProps {
  node: NodeType;
  current: number;
}

export default class RecurseNode extends React.Component<OwnProps> {
  render() {
    const { node, current } = this.props;
    return (
      <>
        {node.children.map((node: NodeType) => {
          if (!node) return;
          if (node.type === "Section" && node.attributes.type === "row") {
            return <RenderNode key={node.id} node={node} current={current} />;
          }
          if (node.type === "Section" && node.attributes.type === "column") {
            return <RenderNode key={node.id} node={node} current={current} />;
          }
          return (
            <React.Fragment key={node.id}>
              <RenderNode node={node} current={current} />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
