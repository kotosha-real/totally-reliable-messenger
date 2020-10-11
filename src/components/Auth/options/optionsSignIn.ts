import { TYPE } from '../../../constants/index'

export const options = {
  type: TYPE.LOGIN,
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
