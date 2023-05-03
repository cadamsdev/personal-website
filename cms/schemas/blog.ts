export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
    {
      name: 'dateCreated',
      type: 'date',
      title: 'Date Created',
    },
    {
      name: 'dateUpdated',
      type: 'datetime',
      title: 'Date Updated',
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Content',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
