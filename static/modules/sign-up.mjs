import { signXXTemplate } from './templates/sign-xx.tmpl.js'
import { render } from '../../utils/mydash/render.js'
import { TYPE } from './constants/index.js'
import { setFormValidation } from '../../utils/form.js'

const options = {
  type: TYPE.REG,
  data: [
    {
      title: 'Login',
      value: 'Mark',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        message: 'Must contain at least 6 characters'
      }
    },
    {
      title: 'Email',
      value: 'mark@gmail.com',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /\S+@\S+\.\S+/,
        message: 'Must match e-mail pattern'
      }
    },
    {
      title: 'Password',
      value: '123456',
      type: 'password',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        match: 'Confirm password',
        message: 'Must contain at least 6 characters and match Confirm password field'
      }
    },
    {
      title: 'Confirm password',
      value: '123456',
      type: 'password',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        match: 'Password',
        message: 'Must contain at least 6 characters and match Password field'
      }
    }
  ]
}

render(signXXTemplate, options, '#app')

const form = document.querySelector('#signUpForm')
setFormValidation(form)
