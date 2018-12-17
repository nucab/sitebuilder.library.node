import * as React from "react";
import styled from "styled-components";
import { parseStyles } from "../utils";

interface IProps {
  className?: string;
  node: any;
}

const Section: React.SFC<IProps> = props => {
  const styles = props.node.attributes
    ? parseStyles(props.node.attributes.styles)
    : "";
  return (
    <Wrapper className={props.className} styles={styles}>
      {props.children} <div className="background" />
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section<{ styles: any }>`
  ${props => props.styles}
  position: relative;
  .background {
    position: absolute;
  }
`;
