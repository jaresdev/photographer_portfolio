export interface Album {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export   interface RecentWork {
  id: string,
  title: string,
  subtitle?: string,
  content: string,
  image: string
}

export const albums: Album[] = [
  {
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/Sydney.jpg"
  },
  {
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/Sydney.jpg"
  },
  {
    title: "Sydney Opera House",
    subtitle: "Sydney",
    description: `
      Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
          Lorem ipsum dolor amet, consectetur adipiscing elit. Sed est, tellus faucibus mi amet, metus. A tempus at odio quisque nec non eget varius commodo aliquet tincidunt.
    `,
    image: "/Sydney.jpg"
  }
]

export const recentWorks: RecentWork[] = [
  {
    id: "01928eeb-583f-723f-845c-c083e81449fc",
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    id: "01928eeb-f267-79ef-b8a1-ff748cc7cd1d",
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    id: "01928eec-1782-7f3a-8b6f-ae60b7523080",
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    id: "01928eec-30be-76d0-a4ec-84a2b7d37f41",
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  }
]