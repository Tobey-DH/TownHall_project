export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'locationType',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          {title: 'In-Person', value: 'in-person'},
          {title: 'Online', value: 'online'},
          {title: 'Hybrid', value: 'hybrid'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [{type: 'string'}],
      description: 'What attendees will learn from this event'
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      description: 'Maximum number of attendees'
    },
    {
      name: 'recording',
      title: 'Recording URL',
      type: 'url',
      description: 'Link to event recording (if available)'
    },
    {
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Display this event prominently on homepage'
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      location: 'location'
    },
    prepare({title, date, location}) {
      return {
        title: title,
        subtitle: `${new Date(date).toLocaleDateString()} - ${location}`
      }
    }
  },
  orderings: [
    {
      title: 'Event Date, New',
      name: 'eventDateDesc',
      by: [
        {field: 'eventDate', direction: 'desc'}
      ]
    },
    {
      title: 'Event Date, Old',
      name: 'eventDateAsc',
      by: [
        {field: 'eventDate', direction: 'asc'}
      ]
    }
  ]
}
