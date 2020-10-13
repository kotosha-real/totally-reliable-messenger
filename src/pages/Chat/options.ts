export const options = {
  chats: [],
  activeChat: {},
  users: [],
  message: {
    title: 'Message',
    name: 'message',
    value: '',
    type: 'text',
    placeholder: 'Write your message here',
    validation: {
      type: 'pattern',
      value: /\S+/
    }
  },
  addUserOptions: {
    title: 'Add user',
    name: 'userId',
    value: '',
    type: 'text',
    placeholder: 'Type id to add user',
    validation: {
      type: 'pattern',
      value: /\d+/,
      message: 'Must be only digits'
    }
  }
}
