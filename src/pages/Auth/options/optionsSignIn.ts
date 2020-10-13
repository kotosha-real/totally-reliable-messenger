import { AUTH_FORM_TYPES } from '../../../constants/'

export const options = {
  type: AUTH_FORM_TYPES.LOGIN,
  data: [
    {
      title: 'Login',
      name: 'login',
      value: '',
      type: 'text'
    },
    {
      title: 'Password',
      name: 'password',
      value: '',
      type: 'password'
    }
  ]
}
