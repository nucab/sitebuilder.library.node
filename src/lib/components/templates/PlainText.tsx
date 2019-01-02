import * as React from "react";
import { PlainTextNode } from "sitebuilder.client";
import renderHTML from "react-render-html";

interface OwnProps {
  node: PlainTextNode | null;
}

class PlainText extends React.Component<OwnProps> {
  render() {
    const { node } = this.props;
    if (!node) return null;
    const { heading, content } = node.attributes;
    return (
      <div>
        {renderHTML(heading)}
        {renderHTML(content)}
      </div>
    );
  }
}

export default PlainText;
