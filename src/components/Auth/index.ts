import AbstractComponent from '../AbstractComponent.js'
import { setFormValidation } from '../../utils/libs/form.js'

export default class ErrorScreen extends AbstractComponent {
  constructor(template: string, options: Record<string, any>) {
    super(template, options)
  }

  init() {}

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillRender() {}

  render() {
    const { _element } = this

    if (_element) {
      const form = _element.querySelector('#writingAreaForm')
      if (form) setFormValidation(form as HTMLFormElement)
    }
  }

  unmount() {}
}
