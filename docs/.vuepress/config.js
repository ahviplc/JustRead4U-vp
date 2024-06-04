const { resolve } = require('path')

module.exports = {
  base: '/JustRead4U-vp/',
  port: '8099', //端口号
  locales: {
    '/': {
      lang: 'en-US',
      title: 'JustRead4U-vp English',
      description: 'Just Read for me.'
    },
    '/zh/docs/': {
      lang: 'zh-CN',
      title: 'JustRead4U-vp 中文',
      description: '为自己而读.'
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: 'English',
        sidebar: [
          '/'
        ]
      },
      '/zh/docs/': {
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: [
          ['/zh/docs/a-1备战面试', '备战面试'],
          ['/zh/docs/b-1面试题总结-Java基础', '面试题总结-Java基础'],
          ['/zh/docs/d-1Docker常用命令速查手册和部署环境', 'Docker常用命令速查手册和部署环境'],
          ['/zh/docs/d-2使用docker compose快速的一键安装超多开发中间件', '使用docker compose快速的一键安装超多开发中间件']
        ],
        nav: [
          { text: 'how-to-use-docsify', link: '/zh/docs/x-1how-to-use-docsify' },
        ]
      }
    },
    repo: 'ahviplc/JustRead4U-vp',
    docsDir: 'docs',
    editLinks: true,
    sidebar: 'auto'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@as': resolve(__dirname, './assets'),
        '@imgs': resolve(__dirname, './assets/images')
      }
    }
  }
}
