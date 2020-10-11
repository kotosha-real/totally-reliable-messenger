import { convertSnakeCase } from './convertSnakeCase'

export const convert = (obj: Record<string, any>): Record<string, any>[] => {
  const res: Record<string, any>[] = []

  for (const [key, value] of Object.entries(obj)) {
    const tmp: Record<string, any> = {}
    tmp.title = convertSnakeCase(key)
    tmp.value = value
    res.push(tmp)
  }

  return res
}
