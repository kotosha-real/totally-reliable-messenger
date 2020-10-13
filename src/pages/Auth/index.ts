import { AbstractComponent } from '../AbstractComponent'
import { setFormValidation } from '../../utils/libs/form'
import { Router } from '../../components/Router'
import { signin, signup } from '../../entities/user'

export class Auth extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  render () {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#authForm') as HTMLFormElement
      if (form) {
        const signActions: Record<string, Function> = { signin, signup }
        const router = Router.getInstance()
        const onSubmit = (formData: FormData) => {
          const data = JSON.stringify(Object.fromEntries(formData))
          const action: string = form.dataset.type!
          const errorBlock = action === 'signin' ? form.querySelector('.login-error') : null

          signActions[action](data)
            .then(() => {
              router.go('/')
            })
            .catch(() => {
              if (errorBlock) errorBlock.classList.add('login-error_visible')
            })
        }
        setFormValidation(form as HTMLFormElement, onSubmit)
      }
    }
  }

  unmount () {}
}
