import * as React from "react";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { Button } from "reactstrap";

interface IProps {
  dragControl: any;
}

const ColumnControls: React.SFC<IProps> = props => {
  const { dragControl } = props;
  return (
    <ControlWrapper className="column-controls">
      <Controls>
        <ul className="list-unstyled">
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
    </ControlWrapper>
  );
};

export default ColumnControls;

const ControlWrapper = styled.div`
  /* &:after {
    opacity: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 15px;
    border: 1px solid var(--primary);
    width: calc(100% - 30px);
    height: 100%;
  } */
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  z-index: 10;
`;
