module.exports = {
  base: '/luke-blog/',
  title: '假使空樽饮月',
  description: '咸鱼就要翻身了',
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
    type: 'blog',
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
    startYear: '2020',
    valineConfig: {
      appId: 'B52rPGbUt5Jmv6zXmyoydSjo-gzGzoHsz', // your appId
      appKey: 'IpckCb14C92IepmkJOv1ciu0' // your appKey
    },
    vssueConfig: {
      platform: 'github',
      owner: 'zlu1123',
      repo: 'luke-blog',
      clientId: '212b3313a3ea76d7a104',
      clientSecret: 'fc20e2a7065158b39e623aec8b8cfdda84ac64ac'
    },
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '能够成家吗',
            artist: '咖啡少年',
            url: 'https://assets.smallsunnyfox.com/music/1.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
          },
          {
            name: '江南地铁站4号出口',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  }
}
