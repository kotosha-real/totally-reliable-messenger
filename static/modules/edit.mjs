import { appTemplate } from './templates/app.tmpl.js'
import { sidebarTemplate as sidebar } from './templates/sidebar-settings.tmpl.js'
import { editTemplate as screen } from './templates/edit.tmpl.js'
import { render } from '../../utils/mydash/render.js'
import { setFormValidation } from '../../utils/form.js'

Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('screen', screen)

const options = {
  user: {
    avatar: 'https://via.placeholder.com/150',
    login: 'Mark',
    data: [
      {
        title: 'Login',
        value: 'Mark',
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
        value: 'mark@gmail.com',
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
        value: '123456',
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
        value: '123456',
        type: 'password',
        validations: [
          {
            validation: 'pattern',
            value: /.{6,}/,
            match: 'Password'
          }
        ]
      }
    ],
    online: true,
    lastOnline: ''
  },
  settings: [
    {
      active: true,
      title: 'Settings',
      icon: 'cog'
    },
    {
      active: false,
      title: 'Night mode',
      icon: 'moon'
    }
  ]
}

render(appTemplate, options, '#app')

const form = document.querySelector('#editForm')
setFormValidation(form)
