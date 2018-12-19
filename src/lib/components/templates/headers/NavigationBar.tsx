import * as React from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";
import { Styles } from "sitebuilder.client";

import "./navigation.scss";

interface OwnProps {
  styles?: Styles | null;
  boxed?: boolean;
}

const Boxed: React.SFC<{ boxed?: boolean }> = props =>
  props.boxed ? <Container>{props.children}</Container> : <>{props.children}</>;

export default class NavigationBar extends React.Component<OwnProps> {
  state = {
    isOpen: false
  };
  static defaultProps = {
    boxed: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Wrapper
        style={this.props.styles ? this.props.styles : {}}
        linkColor={this.props.styles ? this.props.styles.color : null}
        backgroundColor={
          this.props.styles ? this.props.styles.backgroundColor : null
        }
        className="d-flex align-items-center"
      >
        <Boxed boxed={this.props.boxed}>
          <Navbar light expand="md">
            {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="d-flex flex-fill justify-content-between">
                <NavItem>
                  <NavLink href="/components/">首页</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    电子
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    MG
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/components/">PT</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    BBIN
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    棋牌
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    捕魚
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    彩票
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    视讯
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    体育
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    优惠
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    客服
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">糖果派对</DropdownItem>
                    <DropdownItem tag="a">连环夺宝2</DropdownItem>
                    <DropdownItem tag="a">糖果派对2</DropdownItem>
                    <DropdownItem tag="a">开心消消乐</DropdownItem>
                    <DropdownItem tag="a">连环夺宝</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Boxed>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div<{
  linkColor: string | null | undefined;
  backgroundColor: string | null | undefined;
}>`
  a {
    color: ${props =>
      props.linkColor ? props.linkColor : "inherit"} !important;
  }
  .navbar-nav .dropdown-menu {
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : "inherit"} !important;
  }
  .dropdown-item:focus,
  .dropdown-item:hover {
    color: ${props =>
      props.linkColor ? props.linkColor : "inherit"} !important;
    opacity: 0.75;
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : "inherit"} !important;
  }
`;
