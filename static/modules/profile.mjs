import { appTemplate } from './templates/app.tmpl.js'
import { sidebarTemplate as sidebar } from './templates/sidebar-settings.tmpl.js'
import { profileTemplate as screen } from './templates/profile.tmpl.js'
import { render } from '../../utils/mydash/render.js'

Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('screen', screen)

const options = {
  user: {
    avatar: 'https://via.placeholder.com/150',
    login: 'Mark',
    data: [
      {
        title: 'Логин',
        value: 'Mark'
      },
      {
        title: 'email',
        value: 'mark@gmail.com'
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
