import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'
import { sanityDataset, sanityProjectId } from './settings'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
