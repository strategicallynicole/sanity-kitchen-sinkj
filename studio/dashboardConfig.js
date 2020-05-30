export default {
  widgets: [
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
                  buildHookId: '5ed2c5617ee67edd64bfdde1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinkj-studio',
                  apiId: 'd88f2a2c-605a-469e-83bd-0d609540e892'
                },
                {
                  buildHookId: '5ed2c56102b149fb67b589f0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinkj',
                  apiId: 'eafa13b4-b855-4d58-8216-d548744fdc3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strategicallynicole/sanity-kitchen-sinkj',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinkj.netlify.app', category: 'apps'}
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
