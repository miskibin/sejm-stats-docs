// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sejm Stats",
  tagline: "Szczegółowa analiza danych sejomwych",
  favicon: "img/logo.png",

  // Set your production url here
  url: "https://sejm-stats.example.com",
  baseUrl: "/sejm-stats-docs/",

  // Update these with your own GitHub org/user and repo name if you plan to use GH Pages
  organizationName: "michalskibinski109", // Replace `ymichalskibinski109` with your GitHub username.
  projectName: "sejm-stats-docs", // Replace `sejm-stats` with your repository name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/michalskibinski109/sejm-stats-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/sejm-stats-social-card.jpg",
    navbar: {
      title: "Sejm Stats",
      logo: {
        alt: "Sejm Stats Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "O projekcie",
        },
        {
          href: "https://github.com/michalskibinski109/sejm-stats",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Documentation",
      //     items: [
      //       {
      //         label: "Get Started",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "POC Repo",
      //         href: "https://github.com/ymichalskibinski109/sejm-stats",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Michał Skibiński. `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
