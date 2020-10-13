export const options = {
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
  ],
  avatar: {
    title: 'Avatar',
    name: 'avatar',
    type: 'file',
    validation: {
      type: 'fileType',
      value: /image/,
      message: 'Must be image'
    }
  }
}
