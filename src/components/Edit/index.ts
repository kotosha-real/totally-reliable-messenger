import AbstractComponent from '../AbstractComponent.js'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate.js'
import { editTemplate as screen } from './template.js'
import { setFormValidation } from '../../utils/libs/form.js'

export default class Profile extends AbstractComponent {
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
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#writingAreaForm')
      if (form) setFormValidation(form as HTMLFormElement)
    }
  }

  unmount() {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
