import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarChatTemplate'
import { chatTemplate as screen } from './template'
import { http } from '../http'
import { Router } from '../Router'
import { setFormValidation } from '../../utils/libs/form'

function getChatId (): number {
  return +document.location.search.slice(1).replace(/\D/g, '')
}

async function removeUserFromChat (evt: Event): Promise<void> {
  const target = evt.target as HTMLElement
  const btnUser = target.closest('.chat-users__user-remove') as HTMLElement

  if (!btnUser) return

  const userId = btnUser.dataset.id
  const chatId = getChatId()
  const data = JSON.stringify({
    users: [+userId!],
    chatId: chatId
  })

  btnUser.closest('.chat-users__user')!.remove() // to prevent global render we destroy one tiny user

  await http.delete('https://ya-praktikum.tech/api/v2/chats/users', {
    data,
    headers: { 'content-type': 'application/json' }
  })

  await http.get(`https://ya-praktikum.tech/api/v2/chats/${chatId}/users`).catch(() => {
    // when we delete last user there is no chat anymore, so this endpoint returns 400
    const router = Router.getInstance()
    router.go('/')
  })
}

export class Chat extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  async componentDidMount () {
    const options: Record<string, any> = {}
    const id = getChatId()

    await http.get('https://ya-praktikum.tech/api/v2/chats').then((res) => {
      const chats = JSON.parse(res.response)
      options.chats = chats.map((chat: Record<string, any>) => {
        const isActiveChat = chat.id === +id
        if (isActiveChat) options.activeChat = chat
        return Object.assign(chat, { active: isActiveChat })
      })
    })

    await http.get(`https://ya-praktikum.tech/api/v2/chats/${id}/users`).then((res) => {
      const users = JSON.parse(res.response)
      options.users = users
      console.log(users)
      this.setOptions(options)
    })
  }

  componentWillRender () {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render () {
    const { _element } = this

    if (_element) {
      const formWrite = _element.querySelector('#writingAreaForm')
      if (formWrite) setFormValidation(formWrite as HTMLFormElement, () => {})

      const formAdd = _element.querySelector('#addUserForm') as HTMLFormElement
      if (formAdd) {
        const onSubmit = async (formData: FormData) => {
          const chatId = getChatId()
          const user = Object.fromEntries(formData)
          const data = JSON.stringify({ users: [+user.userId], chatId })

          await http.put(formAdd.action, { data, headers: { 'content-type': 'application/json' } })

          await http.get(`https://ya-praktikum.tech/api/v2/chats/${chatId}/users`).then((res) => {
            const users = JSON.parse(res.response)
            this.setOptions({ users })
          })
        }
        setFormValidation(formAdd as HTMLFormElement, onSubmit)
      }
    }

    document.addEventListener('click', removeUserFromChat)
  }

  unmount () {
    document.removeEventListener('click', removeUserFromChat)
    Handlebars.unregisterPartial('sidebar')
    Handlebars.unregisterPartial('screen')
  }
}
