import * as React from "react";
import { GraphicPlateNode } from "sitebuilder.client";
import { Cols, Col } from "respectre/layout";
import { Img } from "respectre/elements";
import renderHTML from "react-render-html";

interface OwnProps {
  node: GraphicPlateNode | null;
}

export default class GraphicPlate extends React.Component<OwnProps> {
  render() {
    const { node } = this.props;
    if (!node) return null;
    const { image, heading, content } = node.attributes;
    return (
      <Cols>
        <Col column size="6">
          <Img src={image} type="img-responsive" alt={node.id} />
        </Col>
        <Col column size="6">
          <div>{renderHTML(heading)}</div>
          <div>{renderHTML(content)}</div>
        </Col>
      </Cols>
    );
  }
}
