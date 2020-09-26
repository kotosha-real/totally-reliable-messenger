import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate'
import { chatTemplate as screen } from './template'

Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('screen', screen)

export class ChatList extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  componentWillRender() {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  unmount() {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
