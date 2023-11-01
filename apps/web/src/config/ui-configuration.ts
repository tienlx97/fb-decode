/* eslint-disable camelcase */
// export type SubMenuItem = {
// 	icon?: {
// 		uri: string
// 	}
// 	key: string
// 	path: string
// 	title: string
// 	type: string
// }

export type SubMenu = {
  activeOnPaths: string[]
  children: SubMenu[]
  key: string
  path?: string
  title?: string
  subtitle?: string
  type: string
  icon?: {
    uri: string
  }
  extraKeys?: any
  default_bookmark_count?: number
}

export const uiConfiguration = {
  company: {
    name: 'Chi Thanh',
  },
  mainMenu: [
    {
      activeOnPaths: [
        '/home/*',
        '/home/key_updates/*',
        '/home/knowledge/*',
        '/home/orgsearch/*',
        '/home/saved/*',
        '/home/notes/*',
        '/home/org/*',
      ],
      children: [
        {
          icon: {
            uri: 'assets/menu/home/feed.png',
          },
          key: 'feed',
          path: '/home',
          title: 'Posts',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/key_updates.png',
          },
          key: 'key_updates',
          path: '/home/key_updates',
          title: 'Key updates',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/knowledge.png',
          },
          key: 'knowledge',
          path: '/home/knowledge',
          title: 'Knowledge library',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/orgsearch.png',
          },
          key: 'orgsearch',
          path: '/home/orgsearch',
          title: 'Directory',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/saved.png',
          },
          key: 'saved',
          path: '/home/saved',
          title: 'Saved',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/notes.png',
          },
          key: 'notes',
          path: '/home/notes',
          title: 'Notes',
          type: 'menu',
        },
        {
          icon: {
            uri: 'assets/menu/home/org.png',
          },
          key: 'org',
          path: '/home/org',
          title: 'Org chart',
          type: 'menu',
        },
      ],
      key: 'home',
      path: '/home',
      title: 'Home',
      type: 'menu',
      default_bookmark_count: 6,
    },
    {
      activeOnPaths: [
        '/knowledge/*',
        '/knowledge/categories/*',
        '/knowledge/collections/*',
      ],
      key: 'knowledge',
      path: '/knowledge',
      title: 'Knowledge Library',
      type: 'menu',
      children: [
        {
          icon: {
            uri: '',
          },
          key: 'home',
          path: '/knowledge',
          title: 'Home',
          type: 'menu',
        },
        {
          icon: {
            uri: '',
          },
          key: 'categories',
          path: '/knowledge/categories',
          title: 'Categories',
          type: 'menu',
        },
        {
          icon: {
            uri: '',
          },
          key: 'collections',
          path: '/knowledge/collections',
          title: 'Collections',
          type: 'menu',
        },
      ],
    },
  ] as SubMenu[],
}

export const defaultRoute = {
  home: 'feed',
  knowledge: 'home',
}
