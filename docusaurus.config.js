// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TimiStudio',
  tagline: 'Documents of all products.',
  url: 'https://docs.timistudio.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'timivietnam', // Usually your GitHub org/user name.
  projectName: 'timistudio-docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/timivietnam/timistudio-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TimiStudio',
        logo: {
          alt: 'TimiStudio Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'PetLove',
                to:'/docs/petlove/introduction'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/timistudio.dev'
              },
              {
                label: 'Codecanyon',
                href: 'https://codecanyon.net/user/timistudio/portfolio'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homepage',
                href: 'https://timistudio.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/timivietnam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TimiStudio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
