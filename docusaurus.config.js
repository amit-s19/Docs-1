// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Konnect',
  tagline: 'To improve the income of farmers in Odisha',
  url: 'https://konnect-docs-six.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Konnect-Agri', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Konnect-Agri/Docs/tree/master/',
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
        title: 'Konnect-Agri',
        logo: {
          alt: 'Konnect Stack',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Documentation',
          },*/
          {
            href: 'https://github.com/Konnect-Agri/Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Konnect',
                href: "https://www.samagragovernance.in/project/konnect/"
              },
              {
                label: 'Konnect-Agri Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/samagra-transforming-governance/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/samagragovernance/?hl=en',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCfkXErS-f87xUQkmSKSC8bg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Konnect-Agri',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Samagra Development Associates Pvt. Ltd`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
