// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sejm-stats',
  tagline: 'Dokumentacja projektu Sejm-stats',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sejm-stats.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'michalskibinski109', // Usually your GitHub org/user name.
  projectName: 'sejm-stats-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/michalskibinski109/sejm-stats-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/michalskibinski109/sejm-stats-docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sejm-stats',
        logo: {
          alt: 'Sejm-stats Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'O projekcie',
          },
          {
            href: 'https://github.com/michalskibinski109/sejm-stats-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentacja',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social media',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@sejm-stats/featured',
              },
             
              {
                label: 'Patronite',
                href: 'https://patronite.pl/sejm-stats',
              },
            ],
          },
          {
            title: 'Kontakt',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/zH2J3z5Wbf',
              },
              {
                label: 'mail',
                href: 'mailto:mskibinski109@gmail.com',
              },
            ],
          },
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Michał Skibiński. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
