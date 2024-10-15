export interface Album {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  directory: string;
}

export interface Work {
  id: string,
  date: string,
  title: string,
  subtitle?: string,
  description: string,
  thumbnail: string,
  directory: string
}

export const albums: Album[] = [
  {
    id: "01928f96-7b90-782b-beda-8c9fa6adae81",
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/albums/album1/1.jpg",
    directory: "album1"
  },
  {
    id: "01928f96-9c6b-7902-a1ab-3fbeb9f02043",
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/albums/album2/2.jpg",
    directory: "album2"
  },
  {
    id: "01928f96-b260-7d18-b1b7-219fd52e5d38",
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/albums/album3/3.jpg",
    directory: "album3"
  }
]

export const works: Work[] = [
  {
    id: "01928eeb-583f-723f-845c-c083e81449fc",
    date: "2024/06/01",
    thumbnail: "works/work1/1.jpg",
    title: "Lorem ipsum 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat.",
    directory: "work1"
  },
  {
    id: "01928eeb-583f-723f-845c-c083e81449fc",
    date: "2024/07/01",
    thumbnail: "works/work1/1.jpg",
    title: "Lorem ipsum 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat.",
    directory: "work1"
  },
  {
    id: "01928eeb-f267-79ef-b8a1-ff748cc7cd1d",
    date: "2024/08/01",
    thumbnail: "works/work2/2.jpg",
    title: "Lorem ipsum 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat.",
    directory: "work2"
  },
  {
    id: "01928eec-1782-7f3a-8b6f-ae60b7523080",
    date: "2024/09/01",
    thumbnail: "works/work3/3.jpg",
    title: "Lorem ipsum 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat.",
    directory: "work3"
  },
  {
    id: "01928eec-30be-76d0-a4ec-84a2b7d37f41",
    date: "2024/10/01",
    thumbnail: "works/work4/4.jpg",
    title: "Lorem ipsum 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat.",
    directory: "work4"
  }
]