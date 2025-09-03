// .vitepress/config.mts
export default {
  // 基础路径，根目录就是 '/'
  base: '/',
  // 网站的语言
  lang: 'zh-CN',
  // 网站的标题
  title: '工具派',
  // 网站的描述
  description: '一份由社区驱动，专注于收录优质、合法、高效中文工具与资源的导航指南。',

  // 主题配置
  themeConfig: {
    // 网站logo
    logo: '/logo.png', 

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/categories' },
      { text: '更新日志', link: '/posts' },
      { text: '投稿指南', link: '/contributing' },
      { text: '关于本站', link: '/about' }
    ],

    // 社交链接图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jijinyun' }
    ],

    // 侧边栏导航
    sidebar: {
      '/categories/': [
        {
          text: '资源分类',
          items: [
            { text: '🛡️ 网络安全', link: '/categories/security' },
            { text: '🤖 人工智能', link: '/categories/ai' },
            { text: '🎬 影音娱乐', link: '/categories/media' },
            { text: '🎮 游戏世界', link: '/categories/gaming' },
            { text: '📚 学习阅读', link: '/categories/learning' },
            { text: '📁 下载存储', link: '/categories/download' },
            { text: '🛠️ 开发工具', link: '/categories/development' },
            { text: '🎨 设计素材', link: '/categories/design' },
            { text: '💼 效率办公', link: '/categories/productivity' },
            { text: '📱 移动应用', link: '/categories/mobile' },
            { text: '🌍 生活便民', link: '/categories/life' },
            { text: '⁉️ 未分类', link: '/categories/misc' }
          ]
        }
      ],
      '/posts/': [
        {
          text: '更新日志',
          items: [
            { text: '2024年09月', link: '/posts/2024-09' },
            { text: '2024年08月', link: '/posts/2024-08' }
          ]
        }
      ]
    },

    // 底部版权信息
    footer: {
      message: "Made with ❤️ by 工具派",
      copyright: "Copyright © 2024 工具派 - 一个由社区驱动，专注于收录免费优质、合法、高效工具与资源的导航指南<br/>网站由VitePress驱动"
    },

    // 开启右侧的大纲导航
    outline: 'deep',

    // 编辑链接
    editLink: {
      pattern: "https://github.com/jijinyun/my-fmhy-site/edit/main/:path",
      text: "在 GitHub 上编辑此页"
    },

    // 最后更新时间戳
    lastUpdated: true,

    // 搜索功能配置
    search: {
      provider: 'local'
    }
  }
}