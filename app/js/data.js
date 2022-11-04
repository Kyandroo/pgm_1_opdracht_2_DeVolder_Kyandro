/*
De hoofdnavigatie is een array van objecten. Ieder object bestaat uit:

name (string - de naam van het menuitem)
link (string - de link naar de resource)
type (string - type van link: internal of external)
*/

const navigation = [{
    name: "Projecten",
    link: "To id of projects of this page",
    type: "internal"
  },
  {
    name: "Graduaat Programmeren",
    link: "https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren",
    type: "external"
  },
  {
    name: "Programmeren 1",
    link: "https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren/studieprogramma",
    type: "external"
  }
]

/*
De events is een array van objecten. Ieder object bestaat uit:

title (string)
link (string)
*/

const events = [{
    title: "Interactieve workshops voor leerlingen laatste graad secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/dienstverlening/diensten-voor-scholen/winterlab"
  },
  {
    title: 'Workshops "Zeg het met 3D, Code, Kleur, Beeld en geluid"',
    link: "https://ahsdevelopers.github.io/zeghetmetkleur/"
  },
  {
    title: "Studie-informatiedagen (SID-ins): aanbod aan studie- en beroepsmogelijkheden na je secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/sid-ins"
  }
]

/*
De projecten is een array van objecten. Ieder object bestaat uit:

id (string - de unieke identificatie van een project, gebruik https://www.guidgenerator.com. om deze te genereren)
title (string)
synopsis (string)
author (object) bestaat uit:
  firstName (string)
  lastName (string)
technologies (array van objecten). Object bestaat uit:
  id (number - uniek per technologie)
  name (string - link naar een online afbeelding )
screenshots (array van string)
*/

const projects = [{
    id: "aa9c5fcd-1312-435e-829a-06d83c65fcaf",
    title: "Dialectische Gedragstherapie (DGT)",
    synopsis: "Webapp ter ondersteuning van Dialectische Gedragstherapie (DGT)",
    author: {
      firstName: "Charlotte",
      lastName: "Delvaux"
    },
    technologies: [{
        id: 1,
        name: "Angular"
      },
      {
        id: 2,
        name: "NestJS"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "b3f0db3a-ffc4-47e6-815f-cff2cb14950e",
    title: "Buurtkajaks Gent",
    synopsis: "Native mobile applicatie om kajaks te reserveren in Gent",
    author: {
      firstName: "Dylan",
      lastName: "Cathelijn"
    },
    technologies: [{
        id: 1,
        name: "React Native"
      },
      {
        id: 2,
        name: "Firebase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "cefa8c79-2a40-41bd-8123-09fa6b521a81",
    title: "Tekst.ai",
    synopsis: "Een gebruiksvriendelijk en personaliseerbaar dashboard voor Tekst.ai",
    author: {
      firstName: "Jan",
      lastName: "Deschacht"
    },
    technologies: [{
        id: 1,
        name: "NextJS"
      },
      {
        id: 2,
        name: "Strapi"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "823f8f6d-0993-407d-a83f-e09a22d51aaa",
    title: "Virtual Closet",
    synopsis: "Sociale applicatie om kleding (uit jouw kledingkast) te matchen tot een goede outfit door andere gebruikers",
    author: {
      firstName: "Thabisa",
      lastName: "Dingani"
    },
    technologies: [{
        id: 1,
        name: "React Native"
      },
      {
        id: 2,
        name: "Firebase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "418f719b-0bd6-4fb8-b7a4-f78c2627ce70",
    title: "Car expense",
    synopsis: "Platform om kosten van een auto te bijhouden inclusief speech-to-text",
    author: {
      firstName: "Jamie-Lee",
      lastName: "Hart"
    },
    technologies: [{
        id: 1,
        name: "ReactJS"
      },
      {
        id: 2,
        name: "Supabase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "ab61a977-f29f-4e03-b316-7fd54bfad48b",
    title: "Crypto Tracker",
    synopsis: "Mobiele (native) applicatie voor het tracken van cryptomunten",
    author: {
      firstName: "Aiden",
      lastName: "Soufi"
    },
    technologies: [{
        id: 1,
        name: "React Native"
      },
      {
        id: 2,
        name: "Firebase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "24a659d6-9b4e-4ce0-b428-69102442395e",
    title: "La Macarena",
    synopsis: "Website voor La Macarena, een organisatie die verschillende activeiten organiseert voor jonge vrouwen",
    author: {
      firstName: "Nicolas",
      lastName: "Cnudde"
    },
    technologies: [{
        id: 1,
        name: "VueJS"
      },
      {
        id: 2,
        name: "GraphQL"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "3111bdbd-6857-46c7-b6af-ca5687c88879",
    title: "TorchLight",
    synopsis: "Mobiele applicatie om characters bij te houden tijdens een Dungeons and Dragons spel",
    author: {
      firstName: "Bram",
      lastName: "Vandenbussche"
    },
    technologies: [{
        id: 1,
        name: "Angular"
      },
      {
        id: 2,
        name: "Firebase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    id: "2a1a11a3-6d33-4fd3-b9a4-4ea323d61bd0",
    title: "DiscoverSound",
    synopsis: "Webapplicatie waarbij je willekeurige nummers te horen krijgt van onbekende bands",
    author: {
      firstName: "Bram",
      lastName: "Criel"
    },
    technologies: [{
        id: 1,
        name: "ReactJS"
      },
      {
        id: 2,
        name: "Firebase"
      }
    ],
    screenshots: [
      "",
      "",
      "",
      ""
    ]
  }
]

/*
Socials (lijst van social media)

Social: object
  image
  link
*/

const socials = [{
    name: "Website",
    image: "",
    link: "https://www.arteveldehogeschool.be/"
  },
  {
    name: "Linkedin",
    image: "",
    link: "https://www.linkedin.com/school/arteveldehogeschool/"
  },
  {
    name: "Facebook",
    image: "",
    link: "https://www.facebook.com/"
  },
  {
    name: "Instagram",
    image: "",
    link: "https://www.instagram.com/"
  },
  {
    name: "Youtube",
    image: "",
    link: "https://www.youtube.com/"
  }
]