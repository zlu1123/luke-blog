module.exports = {
  base: '/luke-blog/',
  title: 'Luke的博客',
  description: '欢迎大家来看我的博客',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/luke_logo.png'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '联系我',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/zlu1123',
            icon: 'reco-github'
          },
          {
            text: '简书',
            link: 'https://github.com/zlu1123/1',
            icon: 'reco-jianshu'
          },
          {
            text: 'CSDN',
            link: 'https://github.com/zlu1123/2',
            icon: 'reco-csdn'
          }
        ]
      }
    ],
    // type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/luke_logo.png',
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    author: 'lukeZhang',
    authorAvatar: '/luke_logo.png',
    record: 'xxxx',
    startYear: '2020'
  },
  markdown: {
    lineNumbers: true
  }
}
