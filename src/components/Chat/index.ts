import AbstractComponent from '../AbstractComponent.js'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate.js'
import { chatTemplate as screen } from './template.js'
import { setFormValidation } from '../../utils/libs/form.js'

export default class Chat extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  init() {}

  componentDidMount() {}

  componentDidUpdate() {}

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
