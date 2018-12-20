const config: any = {
  root: {
    id: "root",
    type: "Root",
    attributes: {},
    parent: null,
    children: ["9987f922-b31b-421f-981b-8784bf4f2342"]
  },
  header: {
    id: "header",
    type: "Header",
    attributes: {
      template: 4,
      styles: {},
      navStyles: {},
      topStyles: {}
    },
    parent: null,
    children: []
  },
  footer: {
    id: "footer",
    type: "Footer",
    attributes: {
      template: 3,
      styles: {},
      navStyles: {},
      topStyles: {}
    },
    parent: null,
    children: []
  },
  "9987f922-b31b-421f-981b-8784bf4f2342": {
    id: "9987f922-b31b-421f-981b-8784bf4f2342",
    type: "Page",
    attributes: {
      path: "/",
      frontPage: true,
      title: "Default Page"
    },
    parent: "root",
    children: [
      "6a9c0034-f373-4c30-86ab-cdcf6a3504ac",
      "6a9c0034-f373-4c30-86ab-cdcf6a3504ad",
      "6a9c0034-f373-4c30-86ab-cdcf6a3504af",
      "6a9c0034-f373-4c30-86ab-cdcf6a3504ag"
    ]
  },
  "6a9c0034-f373-4c30-86ab-cdcf6a3504ac": {
    id: "6a9c0034-f373-4c30-86ab-cdcf6a3504ac",
    type: "Section",
    attributes: {
      type: "row"
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["ef0ae96d-f023-4c39-8f81-608cd203beef"]
  },
  "6a9c0034-f373-4c30-86ab-cdcf6a3504ad": {
    id: "6a9c0034-f373-4c30-86ab-cdcf6a3504ad",
    type: "Section",
    attributes: {
      type: "row"
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["ef0ae96d-f023-4c39-8f81-608cd203beeg"]
  },
  "6a9c0034-f373-4c30-86ab-cdcf6a3504af": {
    id: "6a9c0034-f373-4c30-86ab-cdcf6a3504af",
    type: "Section",
    attributes: {
      type: "row"
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["ef0ae96d-f023-4c39-8f81-608cd203beeh"]
  },
  "6a9c0034-f373-4c30-86ab-cdcf6a3504ag": {
    id: "6a9c0034-f373-4c30-86ab-cdcf6a3504ag",
    type: "Section",
    attributes: {
      type: "row"
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["ef0ae96d-f023-4c39-8f81-608cd203beei"]
  },
  "ef0ae96d-f023-4c39-8f81-608cd203beef": {
    id: "ef0ae96d-f023-4c39-8f81-608cd203beef",
    type: "Carousel",
    attributes: {
      items: [
        {
          src:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png",
          altText: "carousel image 1"
        },
        {
          src:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png",
          altText: "carousel image 2"
        },
        {
          src:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/slot_banner.png",
          altText: "carousel image 3"
        },
        {
          src:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png",
          altText: "carousel image 4"
        },
        {
          src:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410730/sport_banner.png",
          altText: "carousel image 5"
        }
      ],
      options: {
        items: 4,
        loop: true,
        nav: false,
        rewind: false,
        autoplay: false
      }
    },
    parent: "6a9c0034-f373-4c30-86ab-cdcf6a3504ac",
    children: []
  },
  "ef0ae96d-f023-4c39-8f81-608cd203beeg": {
    id: "ef0ae96d-f023-4c39-8f81-608cd203beeg",
    type: "PlainText",
    attributes: {
      headingTag: "h1",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. In eo enim positum est id, quod dicimus esse expetendum. Duo Reges: constructio interrete. Hoc est non dividere, sed frangere. Illa videamus, quae a te de amicitia dicta sunt."
    },
    parent: "6a9c0034-f373-4c30-86ab-cdcf6a3504ad",
    children: []
  },
  "ef0ae96d-f023-4c39-8f81-608cd203beeh": {
    id: "ef0ae96d-f023-4c39-8f81-608cd203beeh",
    type: "MultiProduct",
    attributes: {
      items: [
        {
          image: "https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg",
          title: "Ubuntu",
          description:
            "Empower every person and every organization on the planet to        achieve more."
        },
        {
          image: "https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg",
          title: "Ubuntu",
          description:
            "Empower every person and every organization on the planet to        achieve more."
        },
        {
          image: "https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg",
          title: "Ubuntu",
          description:
            "Empower every person and every organization on the planet to        achieve more."
        }
      ]
    },
    parent: "6a9c0034-f373-4c30-86ab-cdcf6a3504af",
    children: []
  },
  "ef0ae96d-f023-4c39-8f81-608cd203beei": {
    id: "ef0ae96d-f023-4c39-8f81-608cd203beei",
    type: "GraphicPlate",
    attributes: {
      image: "https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg",
      headingTag: "h1",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullum inveniri verbum potest quod magis idem declaret Latine, quod Graece, quam declarat voluptas. In eo enim positum est id, quod dicimus esse expetendum. Duo Reges: constructio interrete. Hoc est non dividere, sed frangere. Illa videamus, quae a te de amicitia dicta sunt."
    },
    parent: "6a9c0034-f373-4c30-86ab-cdcf6a3504ag",
    children: []
  }
};

export default config;
