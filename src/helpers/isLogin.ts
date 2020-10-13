import { AUTH_FORM_TYPES } from '../constants/'

/**
 * Returns true if passed value equals to TYPE.LOGIN
 */
Handlebars.registerHelper('isLogin', function (value: string): boolean {
  return value === AUTH_FORM_TYPES.LOGIN
})
