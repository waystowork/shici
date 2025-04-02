export const headerConfig = {
  links: [
    {
      text: '首页',
      href: '/',
    },
    {
      text: '唐诗',
      href: '/collections/1',
    },
    {
      text: '宋词',
      href: '/collections/2',
    },
    {
      text: '元曲',
      href: '/collections/109',
    },
    {
      text: '诗经',
      href: '/collections/12',
    },
    {
      text: '给孩子的诗',
      href: '/collections/3',
    },
    {
      text: '诗集',
      href: '/collections',
    },
    // {
    //   text: '诗词 + AI',
    //   href: '/ai',
    // },
    // {
    //   text: '每日一诗 🔥',
    //   href: '/today',
    // }, 
    {
      text: '诗词',
      links: [
        {
          text: '按朝代检索 🔥',
          href: '/dynasties',
        },
        {
          text: '所有诗人',
          href: '/authors',
        },
        {
          text: '所有诗词',
          href: '/works',
        },
      ],
    },
  ],
  actions: [
    // {
    //   text: 'Search',
    //   href: '/search',
    //   target: '_self',
    // }
  ],
};