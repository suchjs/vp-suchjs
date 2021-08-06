const { path } = require('@vuepress/utils');
const head = [
  ['script', {
    src: 'https://cdn.jsdelivr.net/gh/suchjs/such@master/dist/such.min.js'
  }]
];
module.exports = {
  base: '/vp-suchjs/',
  lang: 'zh-CN',
  title: 'Suchjs文档',
  description: 'Suchjs目标是成为一个易扩展、声明式的强大数据模拟库',
  locales: {
    '/': {
      lang: 'zh-CN',
      // 头部
      head,
    },
    '/en/': {
      lang: 'en-US',
      title: 'Suchjs document',
      description: 'Suchjs aim to be an extendedale, declaretive mocking library, written in typescript',
      // 头部
      head,
    },
  },
  themeConfig: {
    logo: './logo.png',
    // 文档仓库
    docsRepo: 'suchjs/vp-suchjs',
    lastUpdated: false,
    lastUpdatedText: '最后更新于',
    contributorsText: '提交者',
    editLinkText: '编辑此页',
    docsDir: '/',
    // 仓库
    repo: 'suchjs/such',
    repoLabel: 'Github',
    // 多语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        // 头部
        head,
        // 侧边栏
        sidebar: [
          '/',
          '/installation.md',
          {
            text: '内置类型',
            link: '/types/README.md',
            children: [
              '/types/string.md',
              '/types/number.md',
              '/types/date.md',
              '/types/regexp.md',
              '/types/increment.md',
              '/types/ref.md',
              '/types/dict.md',
              '/types/cascader.md',
              '/types/template.md'
            ]
          },
          '/extTypes.md',
          '/field.md',
          '/api.md',
          '/playground.md'
        ],
      },
      '/en/': {
        // 语言配置
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        // 侧边栏
        sidebar: [
          '/en/',
          '/en/installation.md',
          {
            text: 'Builtin types',
            link: '/en/types/README.md',
            children: [
              '/en/types/string.md',
              '/en/types/number.md',
              '/en/types/date.md',
              '/en/types/regexp.md',
              '/en/types/increment.md',
              '/en/types/ref.md',
              '/en/types/dict.md',
              '/en/types/cascader.md',
              '/en/types/template.md'
            ]
          },
          '/en/extTypes.md',
          '/en/field.md',
          '/en/api.md',
          '/en/playground.md'
        ],
        // 英文下的配置
        lastUpdated: false,
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
        editLinkText: 'Edit this page',
      },
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
        components: {
          Playground: path.resolve(__dirname, './components/playground.vue')
        }
      },
    ],
  ],
}
