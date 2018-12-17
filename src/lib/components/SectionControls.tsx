import * as React from "react";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { Button } from "reactstrap";

interface IProps {}

const SectionControls: React.SFC<IProps> = props => {
  return (
    <Controls className="section-controls">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Button color="primary">
            <Icon icon="move" />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <Icon icon="cog" />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <Icon icon="trash" />
          </Button>
        </li>
      </ul>
    </Controls>
  );
};

export default SectionControls;

const Controls: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 100;
  ul {
    margin: 0;
  }
  li {
    margin-right: 2px !important;
  }
`;
