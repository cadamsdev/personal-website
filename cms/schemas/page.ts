export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [{ type: 'hero' }],
    },
  ],
}
