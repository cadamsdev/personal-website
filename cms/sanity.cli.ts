import {defineCliConfig} from 'sanity/cli'
import { sanityDataset, sanityProjectId } from './settings'

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  },
  
})
