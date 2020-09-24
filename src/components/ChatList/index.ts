import AbstractComponent from '../AbstractComponent.js'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate.js'
import { chatTemplate as screen } from './template.js'

Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('screen', screen)

export default class ChatList extends AbstractComponent {
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

  render() {}

  unmount() {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
