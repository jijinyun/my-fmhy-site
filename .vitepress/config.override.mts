// .vitepress/config.override.mts (添加到.gitignore)
export default {
  sitemap: {
    hostname: 'https://www.toolpie.cn', // 你的实际域名
  },
  themeConfig: {
    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/jijinyun' // 你的实际GitHub链接
      }
    ],
    editLink: {
      pattern: "https://github.com/jijinyun/my-fmhy-site/edit/main/:path",
    }
  }
}