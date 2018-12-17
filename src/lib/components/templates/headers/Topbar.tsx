import * as React from "react";
import { Navbar, Nav, NavItem, NavLink, Container } from "reactstrap";
import styled from "styled-components";
import LanguageBar from "./LanguageBar";
import { Styles } from "sitebuilder.client";

interface IProps {
  styles?: Styles | null;
  boxed?: boolean;
}

const Boxed: React.SFC<{ boxed?: boolean }> = props =>
  props.boxed ? <Container>{props.children}</Container> : <>{props.children}</>;

const Topbar: React.SFC<IProps> = props => {
  return (
    <Wrapper
      className="d-none d-md-block"
      style={props.styles ? props.styles : {}}
      linkColor={props.styles ? props.styles.color : null}
    >
      <Boxed boxed={props.boxed}>
        <div className="d-flex flex-fill">
          <Navbar light expand="md" className="flex-grow-1 p-0">
            <Nav navbar className="d-flex flex-fill justify-content-between">
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  太阳城简介
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  代理加盟
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  手机投注
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  VIP贵宾会
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  天天抢红包
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  MG老虎机
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  免费试玩
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  下载中心
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  APP下载
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  银联扫码
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  QQ钱包
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <LanguageBar />
        </div>
      </Boxed>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ linkColor: string | null | undefined }>`
  /* background-color: #ecebec; */
  font-size: small;
  a {
    color: ${props =>
      props.linkColor ? props.linkColor : "inherit"} !important;
  }
`;

Topbar.defaultProps = {
  boxed: false
};

export default Topbar;
