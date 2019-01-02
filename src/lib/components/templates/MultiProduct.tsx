import * as React from "react";
import { MultiProductNode, ProductAttributes } from "sitebuilder.client";
import { Cols, Col } from "respectre/layout";
import renderHTML from "react-render-html";

interface OwnProps {
  node: MultiProductNode | null;
}

export default class MultiProduct extends React.Component<OwnProps, any> {
  public render() {
    const { node } = this.props;
    if (!node) return null;
    const { items } = node.attributes;
    const size = items.length;
    return (
      <Cols>
        {items.map((item: ProductAttributes, idx: number) => (
          <Col column key={idx} size={12 / size}>
            <div className="card" style={{ height: "100%" }}>
              <div className="card-image">
                <img
                  className="img-responsive"
                  src={item.image}
                  alt="OS X El Capitan"
                />
              </div>
              <div className="card-body">
                <div className="card-title h5">{renderHTML(item.title)}</div>
                {renderHTML(item.description)}
              </div>
            </div>
          </Col>
        ))}
      </Cols>
    );
  }
}
