import * as React from "react";
import CarouselForm from "./CarouselForm";
import { Dialog, Classes } from "@blueprintjs/core";
import { HeaderNode } from "sitebuilder.client";

interface IProps {
  title: string;
  isOpen: boolean;
  carousel: any;
  handleClose: () => void;
}

const CarouselModal: React.SFC<IProps> = props => {
  const { title, isOpen, carousel, handleClose } = props;
  return (
    <Dialog
      onClose={handleClose}
      title={title}
      isOpen={isOpen}
      canOutsideClickClose={false}
    >
      <div style={{ minHeight: 180 }} className={Classes.DIALOG_BODY}>
        <CarouselForm carousel={carousel} data={{}} onClose={handleClose} />
      </div>
    </Dialog>
  );
};

export default CarouselModal;
