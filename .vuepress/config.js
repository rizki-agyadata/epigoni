module.exports = {
    title: 'Epigoni',
    description: 'Epigoni Documentation Site',
    head: [
      ['link', { rel: 'icon', href: '/images/Epigoni.png' }]
    ],
    themeConfig: { 
      repo: 'rizki-agyadata/epigoni',
      repoLabel: 'Contribute!',
      editLinks: true,
      editLinkText: 'Help us improve this page!',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' }
      ],
      sidebar: {
        '/guide/': [
          '',
          'arsitektur'
        ],
        // fallback
        '/': [
          ''          
        ]
      }        
    }
    
  }