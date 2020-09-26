import { TYPE } from '../constants/index'

/**
 * Returns true if passed value equals to TYPE.LOGIN
 */
Handlebars.registerHelper('isLogin', function (value: string): boolean {
  return value === TYPE.LOGIN
})
