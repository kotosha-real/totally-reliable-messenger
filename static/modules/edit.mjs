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
