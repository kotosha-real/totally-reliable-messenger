import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate'
import { passwordChangeTemplate as screen } from './template'
import { setFormValidation } from '../../utils/libs/form'
import { Router } from '../Router'
import { http } from '../http'

export class PasswordChange extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  componentWillRender () {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render () {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#passwordForm') as HTMLFormElement
      if (form) {
        const router = Router.getInstance()
        const onSubmit = (formData: FormData) => {
          // guess it needs to be done in http class but it's here for now
          const data = JSON.stringify(Object.fromEntries(formData))
          http
            .put(form.action, { data, headers: { 'content-type': 'application/json' } })
            .then(() => {
              router.go('/profile')
            })
        }
        setFormValidation(form as HTMLFormElement, onSubmit)
      }
    }
  }

  unmount () {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
