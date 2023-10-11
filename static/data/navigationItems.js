export default [
  {
    name: 'Home',
    submenu: false,
    url: '/'
  },
  {
    name: 'Projects',
    submenu: false,
    url: 'projects'
  },
  {
    name: 'Language',
    submenu: true,
    url: '',
    sublevel: [
      {
        langSwitcher: true,
        name: 'French',
        url: 'fr'
      },
      {
        langSwitcher: true,
        name: 'English',
        url: 'en'
      },
    ]
  }
]