// Simple About Us Schema
export default {
  name: 'aboutUsSimple',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'We Are The Best Travel Market'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
      description: 'Write your content here. To create multiple paragraphs, press Enter twice between paragraphs.',
      validation: Rule => Rule.required().min(10).max(1000)
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
      title: 'headline'
    }
  }
}
