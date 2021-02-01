module.exports = {
  title: 'Modern Zulu Hotel',
  tagline: 'Ultima Online Zulu Hotel using ModernUO Engine',
  url: 'https://zuluhotel.com.au',
  baseUrl: '/modernzhdocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZuluHotelAustralia', // Usually your GitHub org/user name.
  projectName: 'modernzhdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Zulu Hotel',
      logo: {
        alt: 'Zulu Hotel Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ZuluHotelAustralia/modernzhdocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Folder Structure',
              to: 'docs/folder-structure/',
            },
            {
              label: 'World Setup',
              to: 'docs/world-setup/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/P6ufsVAcAr',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ZuluHotelAustralia/zuluhotel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zulu Hotel Australia. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ZuluHotelAustralia/modernzhdocs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ZuluHotelAustralia/modernzhdocs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
