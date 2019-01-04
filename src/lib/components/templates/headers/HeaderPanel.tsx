import * as React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import { parseStyles } from "../../utils";
import { HeaderNode, Styles } from "sitebuilder.client";

interface OwnProps {
  header: HeaderNode | null;
  onSubmit: (values: any) => void;
}

class HeaderPanel extends React.Component<OwnProps> {
  render() {
    let template = 1;
    let styles: Styles | null = null;
    let navStyles: Styles | null = null;
    let topStyles: Styles | null = null;
    if (this.props.header) {
      template = this.props.header.attributes.template;
    }
    if (this.props.header && this.props.header.attributes.styles) {
      styles = parseStyles(this.props.header.attributes.styles);
    }
    if (this.props.header && this.props.header.attributes.navStyles) {
      navStyles = parseStyles(this.props.header.attributes.navStyles);
    }
    if (this.props.header && this.props.header.attributes.topStyles) {
      topStyles = parseStyles(this.props.header.attributes.topStyles);
    }
    const headerProps = {
      styles,
      navStyles,
      topStyles
    };
    switch (template) {
      case 1:
        return <Header1 onSubmit={this.handleSubmit} {...headerProps} />;
      case 2:
        return <Header2 onSubmit={this.handleSubmit} {...headerProps} />;
      case 3:
        return <Header3 onSubmit={this.handleSubmit} {...headerProps} />;
      case 4:
        return <Header4 onSubmit={this.handleSubmit} {...headerProps} />;
      default:
        return null;
    }
  }
  handleSubmit = (values: any) => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(values);
    }
    return values;
  };
}

export default HeaderPanel;
