const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      // { text: "Hardhat Network", link: "/hardhat-network/" },
      { text: "Plugins", link: "/plugins/" },
      { text: "Tutorial", link: "/tutorial/" },
    ],
    lastUpdated: true,
    repo: "nomiclabs/hardhat",
    docsDir: "docs",
    docsBranch: "website",
    editLinkText: "Help us improve this page!",
    editLinks: true,
    sidebarDepth: 1,
    displayAllHeaders: true,
    sidebar: {
      "/tutorial/": [
        {
          title: "Tutorial",
          collapsable: false,
          depth: 1,
          children: [
            ["", "1. Overview", 1],
            [
              "setting-up-the-environment.md",
              "2. Setting up the environment",
              0,
            ],
            [
              "creating-a-new-hardhat-project.md",
              "3. Creating a new Hardhat project",
              0,
            ],
            [
              "writing-and-compiling-contracts.md",
              "4. Writing and compiling contracts",
              0,
            ],
            ["testing-contracts.md", "5. Testing contracts", 0],
            [
              "debugging-with-hardhat-network.md",
              "6. Debugging with Hardhat Network",
              0,
            ],
            [
              "deploying-to-a-live-network.md",
              "7. Deploying to a live network",
              0,
            ],
            [
              "hackathon-boilerplate-project.md",
              "8. Hackathon Boilerplate Project",
              0,
            ],
            ["final-thoughts.md", "9. Final thoughts", 0],
          ],
        },
      ],
      "/": [
        ["/getting-started/", "Getting Started", 1],
        ["/config/", "Configuration", 0],
        ["/hardhat-network/", "Hardhat Network", 0],
        {
          title: "Guides",
          url: "/guides/",
          collapsable: false,
          depth: 1,
          children: [
            ["/guides/migrate-from-buidler.md", "Migrating from Buidler", 0],
            ["/guides/project-setup.md", "Setting up a project", 0],
            ["/guides/compile-contracts.md", "Compiling your contracts", 0],
            ["/guides/waffle-testing.md", "Testing with ethers.js & Waffle", 0],
            ["/guides/truffle-testing.md", "Testing with Web3.js & Truffle", 0],
            ["/guides/truffle-migration.md", "Migrating from Truffle", 0],
            ["/guides/deploying.md", "Deploying your contracts", 0],
            ["/guides/scripts.md", "Writing scripts", 0],
            ["/guides/mainnet-forking.md", "Mainnet forking", 0],
            ["/guides/hardhat-console.md", "Using the Hardhat console", 0],
            ["/guides/create-task.md", "Creating a task", 0],
            ["/guides/ganache-tests.md", "Running tests with Ganache", 0],
            ["/guides/vscode-tests.md", "Running tests on VS Code", 0],
            ["/guides/typescript.md", "TypeScript support", 0],
          ],
        },
        {
          title: "Advanced",
          collapsable: false,
          children: [
            [
              "/advanced/hardhat-runtime-environment.html",
              "Hardhat Runtime Environment (HRE)",
              0,
            ],
            ["/advanced/building-plugins.html", "Building plugins", 0],
            [
              "/advanced/migrating-buidler-plugin.html",
              "Migrating a Buidler plugin",
              0,
            ],
          ],
        },
      ],
    },
    algolia: {
      apiKey: '70d2567dd1257c8a53bbb823a0085f02',
      indexName: 'hardhat'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
