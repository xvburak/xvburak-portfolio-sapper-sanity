export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61af5855f3867fc42c3f9766',
                  title: 'Sanity Studio',
                  name: 'xvburak-portfolio-sapper-sanity-studio',
                  apiId: 'f49e2429-b08b-4cc2-abcd-ad64fc77c95d'
                },
                {
                  buildHookId: '61af5856584557c5c4a9cae4',
                  title: 'Blog Website',
                  name: 'xvburak-portfolio-sapper-sanity',
                  apiId: '6e59e938-0264-4833-af32-11f854e0c4de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xvburak/xvburak-portfolio-sapper-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://xvburak-portfolio-sapper-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
