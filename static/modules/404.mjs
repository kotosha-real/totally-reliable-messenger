import { errorTemplate } from './templates/error.tmpl.js'
import { render } from '../../utils/mydash/render.js'

const options = {
  error: {
    code: 404,
    message: 'This is the messenger dude honestly. How the heck did you wind up here?'
  }
}

render(errorTemplate, options, '#app')
