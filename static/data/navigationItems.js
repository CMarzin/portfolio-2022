export default [
  {
    name: 'Home',
    submenu: false,
    url: '/'
  },
  {
    name: 'Projects',
    submenu: true,
    url: '',
    sublevel: [
      {
        name: 'Orange',
        url: '/projects/Orange'
      },
      {
        name: 'YSF',
        url: '/projects/ysf'
      },
      {
        name: 'Allegro Musique',
        url: '/projects/allegro-musique'
      },
    ]
  },
  {
    name: 'About',
    submenu: false,
    url: '/about'
  },
  {
    name: 'Archives',
    submenu: true,
    url: '',
    sublevel: [
      {
        name: 'Portofolio 2018',
        url: '/archives/portfolio-2018'
      },
      {
        name: 'Portofolio 2017',
        url: '/archives/portfolio-2017'
      },
      {
        name: 'Fidget Cube',
        url: '/archives/fidget-cube'
      },
    ]
  },
]