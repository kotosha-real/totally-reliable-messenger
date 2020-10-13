export const options = {
  user: {
    avatar: 'https://via.placeholder.com/150',
    login: 'Mark',
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
        title: 'Display name',
        name: 'display_name',
        value: 'Johnny69',
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
      }
    ],
    online: true,
    lastOnline: ''
  },
  settings: [
    {
      active: true,
      title: 'Settings',
      icon: 'cog'
    },
    {
      active: false,
      title: 'Night mode',
      icon: 'moon'
    }
  ]
}
