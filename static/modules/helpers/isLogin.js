import { TYPE } from '../constants/index.js'

/**
 * Returns true if passed value equals to TYPE.LOGIN
 */
Handlebars.registerHelper('isLogin', function (value) {
  return value === TYPE.LOGIN
})
