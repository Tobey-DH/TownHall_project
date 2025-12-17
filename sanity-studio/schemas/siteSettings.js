export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Organization Name',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text'
        }
      ]
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'discord',
          title: 'Discord',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings'
      }
    }
  }
}
