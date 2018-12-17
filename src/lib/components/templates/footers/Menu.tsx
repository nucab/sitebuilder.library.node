import * as React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";
import { Styles } from "sitebuilder.client";

export interface IProps {
  separator: boolean;
  center?: boolean;
  styles?: Styles | null;
  boxed?: boolean;
}

export default class Menu extends React.Component<IProps, any> {
  static defaultProps = {
    separator: false,
    center: false
  };
  public render() {
    return (
      <Wrapper
        separator={this.props.separator}
        style={this.props.styles ? this.props.styles : {}}
        linkColor={this.props.styles ? this.props.styles.color : null}
      >
        <Navbar expand="xs" className="p-0">
          <Nav
            navbar
            className={`d-flex flex-fill ${
              this.props.center
                ? "justify-content-center"
                : "justify-content-start"
            } justify-content-start flex-wrap`}
          >
            <NavItem>
              <NavLink href="/">关于我们</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">隐私政策</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">责任博彩</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">常見問題</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">规则条款</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">合营加盟</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">联系我们</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div<{
  separator?: boolean;
  linkColor: string | null | undefined;
}>`
  a {
    position: relative;
    padding: ${props => (props.separator ? "0.5rem 1.5rem" : "0.5rem 1rem")};
    &:after {
      opacity: ${props => (props.separator ? "1" : "0")};
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      background-color: #68686a;
      width: 1px;
      height: 50%;
    }
    color: ${props =>
      props.linkColor ? props.linkColor : "inherit"} !important;
  }
  li {
    &:last-child {
      a {
        &:after {
          display: none;
        }
      }
    }
  }
`;
