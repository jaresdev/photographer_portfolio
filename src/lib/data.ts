export interface Album {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export   interface RecentWork {
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
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  },
  {
    image: "/banner_tmp.png",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mattis nisi. <strong>Phasellus et leo ullamcorper, maximus arcu in</strong>, tincidunt ipsum. Aliquam interdum vehicula lectus eget congue. Donec porta justo eget libero ultrices pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vitae diam sem. Duis quis leo eget tellus ornare rutrum sit amet vitae arcu. Duis vehicula tortor sed mi egestas volutpat."
  }
]