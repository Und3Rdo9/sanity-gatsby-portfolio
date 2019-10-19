export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5daaf6d64a0a586a416ea437',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z8awb3cx',
                  apiId: 'dc23662d-5508-4606-9741-237169b5fb56'
                },
                {
                  buildHookId: '5daaf6d637ec7a185a73ffea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hee15f57',
                  apiId: 'addbd327-3953-4f1f-a55c-0e4bb348265d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Und3Rdo9/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hee15f57.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
