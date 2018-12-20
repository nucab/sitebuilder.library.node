import * as React from "react";
import { GraphicPlateNode } from "sitebuilder.client";
import { Cols, Col } from "respectre/layout";
import { Img } from "respectre/elements";

interface OwnProps {
  node: GraphicPlateNode | null;
}

class GraphicPlate extends React.Component<OwnProps> {
  render() {
    const { node } = this.props;
    if (!node) return null;
    const renderHeading = (tag: string, text: string) => {
      if (tag === "h1") return <h1>{text}</h1>;
      if (tag === "h2") return <h2>{text}</h2>;
      if (tag === "h3") return <h3>{text}</h3>;
      if (tag === "h4") return <h4>{text}</h4>;
      if (tag === "h5") return <h5>{text}</h5>;
      if (tag === "h6") return <h6>{text}</h6>;
    };
    const { headingTag, image, heading, content } = node.attributes;
    const tag = headingTag || "h1";
    return (
      <Cols>
        <Col size="6">
          <Img src={image} type="img-responsive" alt={node.id} />
        </Col>
        <Col size="6">
          {renderHeading(tag, heading)}
          {content}
        </Col>
      </Cols>
    );
  }
}

export default GraphicPlate;
