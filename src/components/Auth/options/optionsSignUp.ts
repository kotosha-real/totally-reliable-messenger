import { TYPE } from '../../../constants/index'

export const options = {
  type: TYPE.REG,
  data: [
    {
      title: 'First name',
      name: 'first_name',
      value: 'Mark',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        message: 'Must contain at least 6 characters'
      }
    },
    {
      title: 'Second name',
      name: 'second_name',
      value: 'Mark',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        message: 'Must contain at least 6 characters'
      }
    },
    {
      title: 'Login',
      name: 'login',
      value: 'mark@gmail.com',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        message: 'Must contain at least 6 characters'
      }
    },
    {
      title: 'Email',
      name: 'email',
      value: 'mark@gmail.com',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /\S+@\S+\.\S+/,
        message: 'Must match e-mail pattern'
      }
    },
    {
      title: 'Phone',
      name: 'phone',
      value: '8 123 456 78 90',
      type: 'text',
      validation: {
        type: 'pattern',
        value: /\d+/,
        message: 'Must be digits'
      }
    },
    {
      title: 'Password',
      name: 'password',
      value: '123456',
      type: 'password',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        match: 'Confirm password',
        message: 'Must contain at least 6 characters and match Confirm password field'
      }
    },
    {
      title: 'Confirm password',
      value: '123456',
      type: 'password',
      validation: {
        type: 'pattern',
        value: /.{6,}/,
        match: 'Password',
        message: 'Must contain at least 6 characters and match Password field'
      }
    }
  ]
}
