export const options = {
  chats: [],
  createOptions: {
    title: 'Chat name',
    name: 'title',
    type: 'text',
    validation: {
      type: 'pattern',
      value: /.{6,}/,
      message: 'Must contain at least 6 characters'
    }
  }
}
