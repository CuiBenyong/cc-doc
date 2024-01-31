import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://cdn.jsdelivr.net/gh/CuiBenyong/resources@main/react-dnd-logo.png'],
  autoAlias: false,
  themeConfig: {
    name: 'React DnD',
    logo: 'https://cdn.jsdelivr.net/gh/CuiBenyong/resources@main/react-dnd-logo.png',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/CuiBenyong/react-dnd-cn'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by <a href="https://github.com/CuiBenyong/react-dnd-cn" target="_blank" nofollow>react-dnd 中文版</a>'
  },
  theme: {
    '@c-primary': '#4078c0',
  },
  publicPath: '/',
  analytics: {
    // TODO 替换为新的的 Google Analytics 代码
    // ga_v2: '',
  },
  sitemap: {
    hostname: 'https://react-dnd.cuiby.top',
  },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    // {
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9981755609549541',
    //   async: true,
    //   crossorigin: 'anonymous',
    // },
  ],
});
