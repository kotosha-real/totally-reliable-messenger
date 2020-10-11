import { AbstractComponent } from '../AbstractComponent'
import { setFormValidation } from '../../utils/libs/form'
import { http } from '../http'
import { Router } from '../Router'

export class Auth extends AbstractComponent {
  constructor (template: string, options: Record<string, any>) {
    super(template, options)
  }

  render () {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#authForm') as HTMLFormElement
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
    }
  }

  unmount () {}
}
