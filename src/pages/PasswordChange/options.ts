export const options = {
  user: {
    data: [
      {
        title: 'Current password',
        name: 'oldPassword',
        value: '123456',
        type: 'password'
      },
      {
        title: 'New password',
        name: 'newPassword',
        value: '123456',
        type: 'password',
        validation: {
          type: 'pattern',
          value: /.{6,}/,
          message: 'Must contain at least 6 characters and match Password field'
        }
      }
    ]
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
