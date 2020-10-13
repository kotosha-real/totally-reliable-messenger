import { http } from '../api/http'

export const getChats = (): Promise<XMLHttpRequest> => http.get('chats')

export const getChatUsers = (chatId: string | number): Promise<XMLHttpRequest> =>
  http.get(`chats/${chatId}/users`)

export const createChat = (data: string): Promise<XMLHttpRequest> =>
  http.post('chats', { data, headers: { 'content-type': 'application/json' } })

export const addUserToChat = (data: string): Promise<XMLHttpRequest> =>
  http.put('chats/users', { data, headers: { 'content-type': 'application/json' } })

export const deleteUserFromChat = (data: string): Promise<XMLHttpRequest> =>
  http.delete('chats/users', { data, headers: { 'content-type': 'application/json' } })
