module.exports = {
  base: '/vp-suchjs/',
  lang: 'zh-CN',
  title: 'Suchjs文档',
  description: 'Suchjs目标是成为一个易扩展、声明式的强大mock库，基于typescript编写',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Suchjs document',
      description: 'Suchjs aim to be an extendedale, declaretive mocking library, written in typescript'
    },
  },
  themeConfig: {
    logo: './logo.png',
    // 文档仓库
    docsRepo: 'suchjs/vp-suchjs',
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
            ]
          },
          '/extTypes.md',
          '/field.md',
          '/api.md'
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
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
            ]
          },
          '/en/extTypes.md',
          '/en/field.md',
          '/en/api.md'
        ],
        // 英文下的配置
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
        editLinkText: 'Edit this page',
      },
    },

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
