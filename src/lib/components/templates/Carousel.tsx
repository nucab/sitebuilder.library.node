import * as React from "react";
import { CarouselNode } from "sitebuilder.client";
import OwlCarousel from "react-owl-carousel2";

interface OwnProps {
  node: CarouselNode | null;
}

interface OwnState {}

export default class Carousel extends React.Component<OwnProps, OwnState> {
  public render() {
    const { node } = this.props;
    if (!node) return;
    return (
      <OwlCarousel
        ref={node.id}
        options={{
          items: 1,
          nav: false,
          dots: true,
          rewind: true,
          autoplay: true
        }}
        style={{ width: "1170px" }}
      >
        {node.attributes.items.map((item, idx) => (
          <img key={idx} className="img-fluid" src={item.src} />
        ))}
      </OwlCarousel>
    );
  }
}
