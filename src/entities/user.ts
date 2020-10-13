import { http } from '../api/http'

export const getProfileInfo = (): Promise<XMLHttpRequest> => http.get('auth/user')

export const signin = (data: string): Promise<XMLHttpRequest> =>
  http.post('auth/signin', { data, headers: { 'content-type': 'application/json' } })

export const signup = (data: string): Promise<XMLHttpRequest> =>
  http.post('auth/signup', { data, headers: { 'content-type': 'application/json' } })

export const logout = (): Promise<XMLHttpRequest> => http.post('auth/logout')

export const changeAvatar = (data: FormData): Promise<XMLHttpRequest> =>
  http.put('user/profile/avatar', { data })

export const updateProfileInfo = (data: string): Promise<XMLHttpRequest> =>
  http.put('user/profile', { data, headers: { 'content-type': 'application/json' } })

export const updatePasword = (data: string): Promise<XMLHttpRequest> =>
  http.put('user/password', { data, headers: { 'content-type': 'application/json' } })
