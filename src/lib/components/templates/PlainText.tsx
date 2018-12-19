import * as React from "react";
import { PlainTextNode } from "sitebuilder.client";

interface OwnProps {
  node: PlainTextNode | null;
}

class PlainText extends React.Component<OwnProps> {
  render() {
    const renderHeading = (tag: string, text: string) => {
      if (tag === "h1") return <h1>{text}</h1>;
      if (tag === "h2") return <h2>{text}</h2>;
      if (tag === "h3") return <h3>{text}</h3>;
      if (tag === "h4") return <h4>{text}</h4>;
      if (tag === "h5") return <h5>{text}</h5>;
      if (tag === "h6") return <h6>{text}</h6>;
    };
    const { node } = this.props;
    if (!node) return null;
    const { headingTag, heading, content } = node.attributes;
    const tag = headingTag || "h1";
    return (
      <div>
        {renderHeading(tag, heading)}
        {content}
      </div>
    );
  }
}

export default PlainText;
