import { AbstractComponent } from '../AbstractComponent'
import { setFormValidation } from '../../utils/libs/form'

export class Auth extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  render() {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#authForm')
      if (form) setFormValidation(form as HTMLFormElement)
    }
  }

  unmount() {}
}
