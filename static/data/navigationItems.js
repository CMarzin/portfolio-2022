export default [
  {
    name: 'Home',
    submenu: false,
    url: '/'
  },
  {
    name: 'About',
    submenu: false,
    url: 'about'
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