import * as React from "react";
import { Dialog, Classes, Tooltip, Button, Card } from "@blueprintjs/core";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { map } from "lodash";
import request from "superagent";
import { Image } from "cloudinary-react";
import uuidv4 from "uuid/v4";
import { IAttachment } from "../../../../../types/attachments";

interface IProps {
  handleAddImage: (url: string, items: any) => void;
  type?: string | null;
  items?: any;
  onSuccess: (image: string) => void;
  onToggle: () => void;
  isOpen: boolean;
  size?: string;
}

interface IState {
  id: string;
  isOpen: boolean;
  image: IAttachment | any | null;
  uploading: boolean;
}

type AllProps = IProps;

class ImageUploaderModal extends React.Component<AllProps, IState> {
  static defaultProps = {
    size: "thumb"
  };
  static getDerivedStateFromProps(nextProps: AllProps, prevState: IState) {
    if (nextProps.isOpen !== prevState.isOpen) {
      return {
        isOpen: nextProps.isOpen
      };
    }
    return null;
  }
  public state: IState = {
    id: "",
    isOpen: false,
    image: null,
    uploading: false
  };
  public render() {
    let dimension = {};
    if (this.props.size === "thumb") {
      dimension = {
        width: 240,
        height: 240
      };
    }
    return (
      <div>
        <Dialog
          onClose={this.handleToggle}
          title="Choose Image"
          isOpen={this.state.isOpen}
          usePortal
          enforceFocus
          // canOutsideClickClose
          // canEscapeKeyClose
          autoFocus
        >
          <div className={Classes.DIALOG_BODY}>
            {!this.state.image ? (
              <StyledDropzone onDrop={this.onImageSelected}>
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
                <Button small>Upload Image</Button>
              </StyledDropzone>
            ) : (
                <Card>
                  <div>
                    <Image
                      className="img-fluid"
                      publicId={this.state.image.public_id}
                      {...dimension}
                      crop="fill"
                    />
                  </div>
                </Card>
              )}
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Tooltip content="This button is hooked up to close the dialog.">
                <Button onClick={this.handleToggle}>Close</Button>
              </Tooltip>
              <Button
                loading={this.state.uploading}
                onClick={this.handleSelectedImage}
                intent="primary"
              >
                Select
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
  onImageSelected = (files: any[]) => {
    this.setState({ uploading: true });
    map(files, file => {
      request
        .post(process.env.REACT_APP_CLOUDINARY_BASE_URL)
        .field("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET)
        .field("file", file)
        .field("multiple", true)
        .field("tags", "website-builder")
        .field("context", "")
        .end((err: any, res: any) => {
          const id = uuidv4();
          const data = {
            id,
            ...res.body
          };
          // this.props.createAttachment(data);
          if (!err) {
            this.setState({ uploading: false, id });
            this.setState({ image: data });
          }
        });
    });
  };
  private handleSelectedImage = () => {
    const image = this.state.image;
    this.setState({ image: null });
    console.log(image.url);
    if (this.props.type === "addImage") {
      this.props.handleAddImage(image.url, this.props.items);
    }
    this.props.onSuccess(image ? image.url : "");
  };
  private handleToggle = () => {
    if (this.props.onToggle) {
      this.props.onToggle();
      return;
    }
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
}
export default ImageUploaderModal;

const StyledDropzone = styled(Dropzone)`
  width: 100%;
  height: 200px;
  border: 1px dashed #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
