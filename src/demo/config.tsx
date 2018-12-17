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
      template: 2,
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
    children: ["6a9c0034-f373-4c30-86ab-cdcf6a3504ac"]
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
  }
};

export default config;
