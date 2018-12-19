import * as React from "react";
import styled from "styled-components";
// import Marquee from "react-marquee";
import { MdNotifications } from "react-icons/md";

export interface OwnProps {
  children: any;
}

export function TextScroller(props: OwnProps) {
  return (
    <Wrapper className="d-flex align-items-center">
      <div className="mr-2">
        <MdNotifications />
      </div>
      <div className="marquee d-flex align-items-center">
        <div className="inner">{props.children}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .marquee {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    .inner {
      position: relative;
      animation: scroll 20s infinite linear;
    }
    @keyframes scroll {
      0% {
        left: 500px;
      }
      100% {
        left: -950px;
      }
    }
    @-webkit-keyframes scroll {
      0% {
        left: 500px;
      }
      100% {
        left: -950px;
      }
    }
  }
`;
