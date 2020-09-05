import { errorTemplate } from './templates/error.tmpl.js'
import { render } from '../../utils/mydash/render.js'

const options = {
  error: {
    code: 500,
    message: 'What did you do?'
  }
}

render(errorTemplate, options, '#app')
