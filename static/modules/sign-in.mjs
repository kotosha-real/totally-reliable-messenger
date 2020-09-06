import { signXXTemplate } from './templates/sign-xx.tmpl.js'
import { render } from '../../utils/mydash/render.js'
import { TYPE } from './constants/index.js'
import { setFormValidation } from '../../utils/form.js'

const options = {
  type: TYPE.LOGIN,
  data: [
    {
      title: 'Login',
      value: '',
      type: 'text'
    },
    {
      title: 'Password',
      value: '',
      type: 'password'
    }
  ]
}

render(signXXTemplate, options, '#app')

const form = document.querySelector('#signInForm')
setFormValidation(form)
