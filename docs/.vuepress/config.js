module.exports = {
  lang: 'zh-CN',
  title: 'suchjs使用文档',
  description: 'suchjs目标是成为一个易扩展、声明式的强大mock库，基于typescript编写',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US'
    },
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // 仓库
    repo: 'suchjs/such',
    repoLabel: 'Github',
    // 多语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
      },
    },
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
          '/types/id.md',
          '/types/ref.md',
        ]
      },
      '/extTypes.md',
      '/field.md',
      '/api.md'
    ],
    head: [
      ['script', {
        src: 'https://cdn.jsdelivr.net/gh/suchjs/such@master/dist/such.min.js'
      }]
    ],
    // 插件
    plugins: [
    ]
  },
}
