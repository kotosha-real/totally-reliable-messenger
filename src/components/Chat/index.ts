import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate'
import { chatTemplate as screen } from './template'
import { setFormValidation } from '../../utils/libs/form'

export class Chat extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  componentWillRender() {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render() {
    const form = document.querySelector('#writingAreaForm')
    if (form) setFormValidation(form as HTMLFormElement)
  }

  unmount() {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
