import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate'
import { editTemplate as screen } from './template'
import { setFormValidation } from '../../utils/libs/form'

export class Edit extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  componentWillRender() {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render() {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#editForm')
      if (form) setFormValidation(form as HTMLFormElement)
    }
  }

  unmount() {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
