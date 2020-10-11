import { capitalizeFirstLetter } from './capitalizeFirstLetter'

export const convertSnakeCase = (str: string): string => {
  return capitalizeFirstLetter(str.replace(/_/g, ' '))
}
