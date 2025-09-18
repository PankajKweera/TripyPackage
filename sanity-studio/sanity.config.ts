import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// Import your schemas
import aboutUsSimple from '../sanity-schemas/aboutUsSimple.js'
import packages from '../sanity-schemas/packages.js'

export default defineConfig({
  name: 'tripy-package',
  title: 'Tripy Package CMS',
  
  projectId: '7r6jmo50',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  schema: {
    types: [
      aboutUsSimple,
      packages
    ]
  },
  
  // Studio configuration for production
  basePath: '/studio',
  api: {
    projectId: '7r6jmo50',
    dataset: 'production'
  }
})