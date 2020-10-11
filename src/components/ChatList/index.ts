import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate'
import { chatTemplate as screen } from './template'
import { http } from '../http'
import { Router } from '../Router'
import { setFormValidation } from '../../utils/libs/form'

Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('screen', screen)

export class ChatList extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  async componentDidMount () {
    await http.get('https://ya-praktikum.tech/api/v2/chats').then((res) => {
      const chats = JSON.parse(res.response)
      this.setOptions({ chats })
    })
  }

  render () {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#createChatForm') as HTMLFormElement
      if (form) {
        const router = Router.getInstance()
        const onSubmit = (formData: FormData) => {
          // guess it needs to be done in http class but it's here for now
          const data = JSON.stringify(Object.fromEntries(formData))
          http
            .post(form.action, { data, headers: { 'content-type': 'application/json' } })
            .then(() => {
              router.go('/')
            })
        }
        setFormValidation(form as HTMLFormElement, onSubmit)
      }

      const btnCreateChat = _element.querySelector('#buttonCreateChat')
      if (btnCreateChat) {
        btnCreateChat.addEventListener('click', (evt) => {
          const btn = evt.target as Element
          const parent = btn.parentElement
          const formCreateChat = _element.querySelector('#createChatForm')
          parent!.classList.add('hidden')
          formCreateChat!.classList.add('form-chat_active')
        })
      }
    }
  }

  componentWillRender () {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  unmount () {
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
