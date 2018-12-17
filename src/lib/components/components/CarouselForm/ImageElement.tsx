import * as React from "react";
import styled from "styled-components";
import { Button, Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import ImageUploaderModal from "../../../components/ImageUploaderModal";
import CarouselUploaderModal from './CarouselUploaderModal';
import { Label, Badge } from "reactstrap";

export interface IProps {
  handleAddImage: (url: string, items: any) => void;
  items?: any;
  type?: string | null;
  name: string;
  value: string;
  label: string | null;
  size: string | null;
  onChange: (name: string, value: string) => void;
}

export interface IFirstTemplateState {
  showImageUploader: boolean;
}

export default class ImageElement extends React.Component<
  IProps,
  IFirstTemplateState
  > {
  public readonly state = {
    showImageUploader: false
  };
  public render() {
    const { value } = this.props;
    return (
      <div>
        {this.props.label && (
          <Label>
            {this.props.label}
            {this.props.size && (
              <Badge color="primary" className="ml-2">
                Recommended size: {this.props.size}
              </Badge>
            )}
          </Label>
        )}

        <Wrapper>
          {value && (
            <Image style={{ backgroundImage: `url(${this.props.value})` }} />
          )}
          <div className="overlay">
            <Button
              minimal
              icon={
                <Icon
                  color="#fff"
                  icon={value ? IconNames.EDIT : IconNames.PLUS}
                  iconSize={Icon.SIZE_LARGE}
                  intent={Intent.PRIMARY}
                />
              }
              onClick={this.handleToggleImageUploader}
            />
          </div>
          <CarouselUploaderModal
            type={this.props.type}
            onSuccess={this.handleImageUpload}
            onToggle={this.handleToggleImageUploader}
            isOpen={this.state.showImageUploader}
            handleAddImage={this.props.handleAddImage}
            items={this.props.items}
          />
        </Wrapper>
      </div>
    );
  }
  private handleImageUpload = (value: string) => {
    this.props.onChange(this.props.name, value);
    // this.props.onChange(this.props.value, value); //test 
    this.handleToggleImageUploader();
  };
  private handleToggleImageUploader = () => {
    this.setState({ showImageUploader: !this.state.showImageUploader });
  };
}

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  min-height: 250px;
  border: 1px dashed #ddd;
  background-color: #fff;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(64, 119, 223, 0.7);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
`;
