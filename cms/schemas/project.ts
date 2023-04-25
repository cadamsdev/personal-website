export default {
  name: 'project',
  type: 'document',
  title: 'Project',
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
      name: 'order',
      type: 'number',
      title: 'Sort Order',
    },
    {
      name: 'previewImage',
      type: 'image',
      title: 'Preview Image',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
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
  orderings: [
    {
      title: 'Sort Order',
      name: 'projectOrderDesc',
      by: [{field: 'order', direction: 'desc'}],
    },
  ],
}
