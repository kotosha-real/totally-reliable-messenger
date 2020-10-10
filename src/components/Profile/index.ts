import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate'
import { profileTemplate as screen } from './template'

export class Profile extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  componentWillRender () {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render () {}

  unmount () {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
