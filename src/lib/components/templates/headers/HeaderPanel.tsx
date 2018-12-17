import * as React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import { parseStyles } from "../../utils";
import { HeaderNode, Styles } from "sitebuilder.client";

interface IProps {
  header: HeaderNode | null;
}

const HeaderPanel: React.SFC<IProps> = props => {
  let template = 1;
  let styles: Styles | null = null;
  let navStyles: Styles | null = null;
  let topStyles: Styles | null = null;
  if (props.header) {
    template = props.header.attributes.template;
  }
  if (props.header && props.header.attributes.styles) {
    styles = parseStyles(props.header.attributes.styles);
  }
  if (props.header && props.header.attributes.navStyles) {
    navStyles = parseStyles(props.header.attributes.navStyles);
  }
  if (props.header && props.header.attributes.topStyles) {
    topStyles = parseStyles(props.header.attributes.topStyles);
  }
  const headerProps = {
    styles,
    navStyles,
    topStyles
  };
  switch (template) {
    case 1:
      return <Header1 {...headerProps} />;
    case 2:
      return <Header2 {...headerProps} />;
    case 3:
      return <Header3 {...headerProps} />;
    case 4:
      return <Header4 {...headerProps} />;
  }
  return null;
};

export default HeaderPanel;
