const config = {
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
      template: 1,
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
      template: 1,
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
      "524e674b-f1ba-48ac-9889-4441584fe635",
      "5224614e-25fc-42be-b90d-fbcafa9aad85"
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
  "524e674b-f1ba-48ac-9889-4441584fe635": {
    id: "524e674b-f1ba-48ac-9889-4441584fe635",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["ad054134-a0de-4289-9677-0a23f7b8d8d4"]
  },
  "ad054134-a0de-4289-9677-0a23f7b8d8d4": {
    id: "ad054134-a0de-4289-9677-0a23f7b8d8d4",
    type: "PlainText",
    attributes: {
      heading: "<h2>The best service products are rich</h2>",
      content:
        "Quoniam, si dis placet, ab Epicuro loqui discimus. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Quae quo sunt excelsiores, eo dant clariora indicia naturae. Duo Reges: constructio interrete. Illum mallem levares, quo optimum atque humanissimum virum, Cn. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Quo modo autem philosophus loquitur?"
    },
    parent: "524e674b-f1ba-48ac-9889-4441584fe635",
    children: []
  },
  "5224614e-25fc-42be-b90d-fbcafa9aad85": {
    id: "5224614e-25fc-42be-b90d-fbcafa9aad85",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "9987f922-b31b-421f-981b-8784bf4f2342",
    children: ["3f3e1b1b-be74-43dd-99d5-b2ac864ca359"]
  },
  "3f3e1b1b-be74-43dd-99d5-b2ac864ca359": {
    id: "3f3e1b1b-be74-43dd-99d5-b2ac864ca359",
    type: "MultiProduct",
    attributes: {
      items: [
        {
          id: "3d7d7250-0853-11e9-b568-0800200c9a66",
          image: "https://yakuthemes.com/gameforest/img/game/game-1.jpg",
          title: "<h3>Assassin's Creed Syndicate</h3>",
          description:
            "Defeating the corrupt tyrants entrenched there will require not only strength, but leadership."
        },
        {
          id: "654a0b90-0853-11e9-b568-0800200c9a66",
          image: "https://yakuthemes.com/gameforest/img/game/game-2.jpg",
          title: "<h3>Rise of the Tomb Raider</h3>",
          description:
            "Tomb Raider, Lara becomes more than a survivor as she embarks on her first great."
        },
        {
          id: "7a203670-0853-11e9-b568-0800200c9a66",
          image: "https://yakuthemes.com/gameforest/img/game/game-3.jpg",
          title: "<h3>The Witcher 3: Wild Hunt</h3>",
          description:
            "The world is in chaos. The air is thick with tension and the smoke of burnt villages."
        }
      ]
    },
    parent: "5224614e-25fc-42be-b90d-fbcafa9aad85",
    children: []
  }
};

export default config;
