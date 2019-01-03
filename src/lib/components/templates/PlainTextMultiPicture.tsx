import * as React from "react";
import { PlainTextMultiPictureNode, ImageAttributes } from "sitebuilder.client";
import { Cols, Col } from "respectre/layout";
import { Img } from "respectre/elements";
import renderHTML from "react-render-html";

interface OwnProps {
  node: PlainTextMultiPictureNode | null;
}

export default class PlainTextMultiPicture extends React.Component<OwnProps> {
  render() {
    const { node } = this.props;
    if (!node) return null;
    const { items, content } = node.attributes;
    return (
      <Cols>
        <Col column size="6">
          <div>{renderHTML(content)}</div>
        </Col>
        <Col column size="6">
          <Cols>
            {items.map((item: ImageAttributes, idx: number) => (
              <Col key={idx} column size="6" className="mb-3">
                <Img src={item.image} type="img-responsive" alt="" />
              </Col>
            ))}
          </Cols>
        </Col>
      </Cols>
    );
  }
}
