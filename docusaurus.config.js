module.exports = {
  title: 'Modern UO',
  tagline: 'Ultima Online Server Emulator for the modern era!',
  url: 'https://modernuo.com',
  baseUrl: '/modernuodocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ModernUO', // Usually your GitHub org/user name.
  projectName: 'modernuodocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ModernUO',
      logo: {
        alt: 'ModernUO Logo',
        src: 'img/muologo.svg',
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
          href: 'https://github.com/modernuo/modernuodocs',
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
              href: 'https://discord.gg/eWDwhqU5',
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
              href: 'https://github.com/modernuo/ModernUO',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ModernUO. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/modernuo/modernuodocs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/modernuo/modernuodocs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
