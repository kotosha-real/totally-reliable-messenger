import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate'
import { editTemplate as screen } from './template'
import { setFormValidation } from '../../utils/libs/form'
import { Router } from '../../components/Router'
import { updateProfileInfo } from '../../entities/user'

export class Edit extends AbstractComponent {
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
      const form = _element.querySelector('#editForm') as HTMLFormElement
      if (form) {
        const router = Router.getInstance()
        const onSubmit = (formData: FormData) => {
          const data = JSON.stringify(Object.fromEntries(formData))
          updateProfileInfo(data)
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
