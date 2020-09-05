import { signXXTemplate } from './templates/sign-xx.tmpl.js'
import { render } from '../../utils/mydash/render.js'
import { TYPE } from './constants/index.js'
import { setFormValidation } from '../../utils/form.js'

const options = {
  type: TYPE.REG,
  data: [
    {
      title: 'Login',
      value: '',
      type: 'text',
      validations: [
        {
          validation: 'pattern',
          value: /.{6,}/
        }
      ]
    },
    {
      title: 'Email',
      value: '',
      type: 'text',
      validations: [
        {
          validation: 'pattern',
          value: /\S+@\S+\.\S+/
        }
      ]
    },
    {
      title: 'Password',
      value: '',
      type: 'password',
      validations: [
        {
          validation: 'pattern',
          value: /.{6,}/,
          match: 'Confirm password'
        }
      ]
    },
    {
      title: 'Confirm password',
      value: '',
      type: 'password',
      validations: [
        {
          validation: 'pattern',
          value: /.{6,}/,
          match: 'Password'
        }
      ]
    }
  ]
}

render(signXXTemplate, options, '#app')

const form = document.querySelector('#signUpForm')
setFormValidation(form)
