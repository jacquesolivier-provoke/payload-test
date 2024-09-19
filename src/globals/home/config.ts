import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'

const HomePage: GlobalConfig = {
  access: {
    read: anyone,
    update: authenticated,
  },
  slug: 'home',
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'media',
          required: true,
          admin: {
            description: 'Upload the main image or video for the hero section.',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'title',
          required: true,
          admin: {
            description: 'Enter the main heading for the hero section.',
          },
        },
        {
          name: 'body',
          type: 'text',
          label: 'body',
          admin: {
            description: 'Add the descriptive text content for the hero section.',
          },
        },
        {
          name: 'ctas',
          type: 'array',
          label: 'Buttons',
          maxRows: 2, // Limit to 2 CTAs
          fields: [
            {
              name: 'link',
              type: 'text',
              maxLength: 30,
              required: true,
              admin: {
                description: 'Enter the destination URL for this CTA.',
              },
            },
            {
              name: 'buttonText',
              type: 'text',
              required: true,
              admin: {
                description: 'Enter the text that will be displayed on the button.',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}

export default HomePage
