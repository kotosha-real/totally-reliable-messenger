import { convert } from '../../utils/mydash/convert'
import { AbstractComponent } from '../AbstractComponent'
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate'
import { Router } from '../../components/Router'
import { profileTemplate as screen } from './template'
import { setFormValidation } from '../../utils/libs/form'
import { getProfileInfo, logout, changeAvatar } from '../../entities/user'

function processUserData (res: XMLHttpRequest, component: Profile) {
  const options = JSON.parse(res.response)
  options.avatar = `https://ya-praktikum.tech${options.avatar}`
  const convertedOptions = { user: { data: convert(options) } }
  // this is not the best approach 'cause we duplicate render hook if options did not change
  // could not find something better though
  // will be glad to hear some advise on this one
  component.setOptions(convertedOptions)
}

export class Profile extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  async componentDidMount () {
    await getProfileInfo().then((res) => {
      processUserData(res, this)
    })
  }

  componentWillRender () {
    Handlebars.registerPartial('sidebar', sidebar)
    Handlebars.registerPartial('screen', screen)
  }

  render () {
    const { _element } = this

    if (_element) {
      const logoutBtn = _element.querySelector('#buttonLogOut')
      if (logoutBtn) {
        const router = Router.getInstance()
        logoutBtn.addEventListener('click', () => {
          logout().then(() => {
            router.go('/sign-in')
          })
        })
      }

      const form = _element.querySelector('#avatarForm') as HTMLFormElement
      if (form) {
        const onSubmit = (formData: FormData) => {
          changeAvatar(formData)
            .then((res) => {
              processUserData(res, this)
            })
            .catch(() => {})
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
