module.exports = {
    title: 'Epigoni',
    description: 'Epigoni Documentation Site',
    head: [
      ['link', { rel: 'icon', href: '/images/Epigoni.png' }]
    ],
    themeConfig: {      
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' }
      ],
      sidebar: [
        '/',
        '/guide/'
      ]        
    }
    
  }