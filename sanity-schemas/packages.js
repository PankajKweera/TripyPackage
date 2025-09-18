export default {
  name: 'packages',
  title: 'Travel Packages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Package Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100),
      placeholder: 'e.g., Island Hopping Paradise'
    },
    {
      name: 'description',
      title: 'Package Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(10).max(300),
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      name: 'dates',
      title: 'Travel Dates',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: 'e.g., 24 - 28 July'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: Rule => Rule.required(),
      placeholder: 'e.g., 4 day 3 Night'
    },
    {
      name: 'image',
      title: 'Package Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'isFeatured',
      title: 'Featured Package',
      type: 'boolean',
      description: 'Check this to make it the main featured package (left side)',
      initialValue: false
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'dates',
      media: 'image'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        subtitle: subtitle,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' }
      ]
    }
  ]
}
