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
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [{ type: 'hero' }, { type: 'about' }],
    },
  ],
}
