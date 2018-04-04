import * as _ from 'lodash'

// Load .env settings into process.env
// Will fail silently if no .env file present.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// Load our own defaults which will grab from process.env
import { defaultConf } from './env/default'

function getConf() {
  // Only try this if we're not on Production
  if (process.env.NODE_ENV !== 'production') {
    // Load environment-specific settings
    let localConf = {}

    try {
      // The environment file might not exist
      localConf = require(`./env/${defaultConf.env}`)
      localConf = localConf || {}
    } catch (err) {
      localConf = {}
    }

    // merge the conf files
    // localConf will override defaults
    return _.merge({}, defaultConf, localConf)
  } else {
    return defaultConf
  }
}

export const conf = getConf()
