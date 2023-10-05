export default [
  {
    name: 'Home',
    submenu: false,
    url: '/'
  },
  {
    name: 'Project',
    submenu: false,
    url: 'project'
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