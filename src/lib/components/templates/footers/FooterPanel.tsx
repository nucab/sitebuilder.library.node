import * as React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";
import { FooterNode, Styles } from "sitebuilder.client";
import { parseStyles } from "../../utils";

interface IProps {
  footer: FooterNode | null;
}

const FooterPanel: React.SFC<IProps> = props => {
  let template = 1;
  let styles: Styles | null = null;
  let navStyles: Styles | null = null;
  if (props.footer) {
    template = props.footer.attributes.template;
  }
  if (props.footer && props.footer.attributes.styles) {
    styles = parseStyles(props.footer.attributes.styles);
  }
  if (props.footer && props.footer.attributes.navStyles) {
    navStyles = parseStyles(props.footer.attributes.navStyles);
  }

  const footerProps = {
    styles,
    navStyles
  };
  switch (template) {
    case 1:
      return <Footer1 {...footerProps} />;
    case 2:
      return <Footer2 {...footerProps} />;
    case 3:
      return <Footer3 {...footerProps} />;
    case 4:
      return <Footer4 {...footerProps} />;
    case 5:
      return <Footer5 {...footerProps} />;
  }
  return null;
};

export default FooterPanel;
