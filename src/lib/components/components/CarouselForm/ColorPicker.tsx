import * as React from "react";
import { Popover, Button } from "@blueprintjs/core";
import { SketchPicker } from "react-color";
import { Label, Row, Col } from "reactstrap";
import styled from "styled-components";

export interface IProps {
  label?: string | undefined;
  name: string;
  value: string | undefined;
  onChange: (name: string, value: string) => void;
}

interface IState {
  color: string | undefined;
  isOpen: boolean;
}

export default class ColorPicker extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      color: props.value,
      isOpen: false
    };
  }
  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.value !== prevState.color) {
      return {
        color: nextProps.value
      };
    }
    return null;
  }
  public render() {
    return (
      <>
        {this.props.label && <Label>{this.props.label}</Label>}
        <Row>
          <Col sm="4">
            <div className="d-flex">
              <PreviewColor color={this.state.color} />
              <Popover
                isOpen={
                  this.state.isOpen === true
                    ? /* Controlled */ true
                    : /* Uncontrolled */ undefined
                }
              >
                <Button text="Pick a color" />
                <SketchPicker
                  color={this.state.color}
                  onChangeComplete={this.handleChange}
                />
              </Popover>
              {this.state.color && this.state.color !== "transaprent" && (
                <Button onClick={() => this.handleChange("transaprent")}>
                  Clear
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
  private handleChange = (color: any) => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        typeof color === "string" ? color : color.hex
      );
      return;
    }
    this.setState({ color: typeof color === "string" ? color : color.hex });
  };
}

const PreviewColor = styled.div<{ color: string | undefined }>`
  flex-grow: 1;
  border: 1px solid #ced4da;
  background-color: #fff;
  position: relative;
  padding: 5px;
  &:after {
    content: "";
    position: absolute;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    background-color: ${props => (props.color ? props.color : "")};
  }
`;
