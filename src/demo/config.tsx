const config = {
  root: {
    id: "root",
    type: "Root",
    attributes: {},
    parent: null,
    children: [
      "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
      "04598659-9ccd-45f6-b749-4facd13e5eac"
    ]
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
      navStyles: {}
    },
    parent: null,
    children: []
  },
  "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d": {
    id: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    type: "Page",
    attributes: {
      path: "/",
      frontPage: true,
      title: "Default Page"
    },
    parent: "root",
    children: [
      "a0121bc3-d241-4614-92af-7cc7681240f9",
      "fbf86c2c-42d5-4cee-97a2-d989910cba85",
      "3c2a4b6f-94c1-4926-b43b-9c10a73ecc74",
      "f0785c8c-fe41-41cd-a93c-22eb8e7112ba",
      "225a6615-21ea-4866-97be-8fc33095e4aa",
      "f9277f8c-e72e-4c4c-84c0-fae1a571780f"
    ]
  },
  "a0121bc3-d241-4614-92af-7cc7681240f9": {
    id: "a0121bc3-d241-4614-92af-7cc7681240f9",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["788e4de3-bc7a-4300-b263-a1436a927b84"]
  },
  "788e4de3-bc7a-4300-b263-a1436a927b84": {
    id: "788e4de3-bc7a-4300-b263-a1436a927b84",
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
    parent: "a0121bc3-d241-4614-92af-7cc7681240f9",
    children: []
  },
  "fbf86c2c-42d5-4cee-97a2-d989910cba85": {
    id: "fbf86c2c-42d5-4cee-97a2-d989910cba85",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["f48fbcbd-ccb6-45b3-bb34-50d4b4735fed"]
  },
  "f48fbcbd-ccb6-45b3-bb34-50d4b4735fed": {
    id: "f48fbcbd-ccb6-45b3-bb34-50d4b4735fed",
    type: "PlainText",
    attributes: {
      heading: "<h2 style=\"text-align:center;\">Recent Games</h2>",
      content:
        "<p style=\"text-align:center;\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
    },
    parent: "fbf86c2c-42d5-4cee-97a2-d989910cba85",
    children: []
  },
  "3c2a4b6f-94c1-4926-b43b-9c10a73ecc74": {
    id: "3c2a4b6f-94c1-4926-b43b-9c10a73ecc74",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["fb12c8f9-47fb-425d-a973-c7763df6b37d"]
  },
  "fb12c8f9-47fb-425d-a973-c7763df6b37d": {
    id: "fb12c8f9-47fb-425d-a973-c7763df6b37d",
    type: "MultiProduct",
    attributes: {
      items: [
        {
          id: "721505ef-b6ea-47e5-8eb6-3d8bea798392",
          image: "https://yakuthemes.com/gameforest/img/game/game-1.jpg",
          title: "<h3>Assassin's Creed Syndicate</h3>",
          description:
            "Defeating the corrupt tyrants entrenched there will require not only strength, but leadership."
        },
        {
          id: "f166168e-bd36-4c4d-a613-4d41cc39a08c",
          image: "https://yakuthemes.com/gameforest/img/game/game-2.jpg",
          title: "<h3>Rise of the Tomb Raider</h3>",
          description:
            "Tomb Raider, Lara becomes more than a survivor as she embarks on her first great."
        },
        {
          id: "d900496a-2f6c-43af-9178-c0b6821a082f",
          image: "https://yakuthemes.com/gameforest/img/game/game-3.jpg",
          title: "<h3>The Witcher 3: Wild Hunt</h3>",
          description:
            "The world is in chaos. The air is thick with tension and the smoke of burnt villages."
        }
      ]
    },
    parent: "3c2a4b6f-94c1-4926-b43b-9c10a73ecc74",
    children: []
  },
  "f0785c8c-fe41-41cd-a93c-22eb8e7112ba": {
    id: "f0785c8c-fe41-41cd-a93c-22eb8e7112ba",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["2e28a41d-5fcf-4df7-a2fe-1959fa693ff5"]
  },
  "2e28a41d-5fcf-4df7-a2fe-1959fa693ff5": {
    id: "2e28a41d-5fcf-4df7-a2fe-1959fa693ff5",
    type: "PlainTextMultiPicture",
    attributes: {
      items: [
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-1.jpg"
        },
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-2.jpg"
        },
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-3.jpg"
        },
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-4.jpg"
        },
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-5.jpg"
        },
        {
          image: "https://yakuthemes.com/gameforest/img/game/game-6.jpg"
        }
      ],
      content:
        "Quoniam, si dis placet, ab Epicuro loqui discimus. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Quae quo sunt excelsiores, eo dant clariora indicia naturae. Duo Reges: constructio interrete. Illum mallem levares, quo optimum atque humanissimum virum, Cn. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Quo modo autem philosophus loquitur?"
    },
    parent: "f0785c8c-fe41-41cd-a93c-22eb8e7112ba",
    children: []
  },
  "225a6615-21ea-4866-97be-8fc33095e4aa": {
    id: "225a6615-21ea-4866-97be-8fc33095e4aa",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["db58c1b0-8a76-477d-95e6-56a7e6fda3ec"]
  },
  "db58c1b0-8a76-477d-95e6-56a7e6fda3ec": {
    id: "db58c1b0-8a76-477d-95e6-56a7e6fda3ec",
    type: "GraphicPlate",
    attributes: {
      image: "https://yakuthemes.com/gameforest/img/blog/blog-1.jpg",
      heading: "<h2>The best service products are rich</h2>",
      content:
        "Quoniam, si dis placet, ab Epicuro loqui discimus. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Quae quo sunt excelsiores, eo dant clariora indicia naturae. Duo Reges: constructio interrete. Illum mallem levares, quo optimum atque humanissimum virum, Cn. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Quo modo autem philosophus loquitur?"
    },
    parent: "225a6615-21ea-4866-97be-8fc33095e4aa",
    children: []
  },
  "f9277f8c-e72e-4c4c-84c0-fae1a571780f": {
    id: "f9277f8c-e72e-4c4c-84c0-fae1a571780f",
    type: "Section",
    attributes: {
      type: "row",
      styles: {
        paddingBottom: 30,
        paddingTop: 30
      }
    },
    parent: "336ab6b1-a1a8-45e3-a5c2-8ca2850f012d",
    children: ["5dab5f6f-9e04-4e37-aed0-35ddef6d6796"]
  },
  "5dab5f6f-9e04-4e37-aed0-35ddef6d6796": {
    id: "5dab5f6f-9e04-4e37-aed0-35ddef6d6796",
    type: "LargeSmallPicturePlate",
    attributes: {
      main: 2,
      items: [
        {
          image:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1546506572/2.png"
        },
        {
          image:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1546506656/3.png"
        },
        {
          image:
            "https://res.cloudinary.com/dmhahyfum/image/upload/v1546506260/1.png"
        }
      ]
    },
    parent: "f9277f8c-e72e-4c4c-84c0-fae1a571780f",
    children: []
  },
  "04598659-9ccd-45f6-b749-4facd13e5eac": {
    id: "04598659-9ccd-45f6-b749-4facd13e5eac",
    type: "Page",
    attributes: {
      path: "/contact",
      title: "Contact"
    },
    parent: "root",
    children: []
  }
};

export default config;
