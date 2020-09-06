/**
 * Creates and returns array out of passed params
 * Possible signatures:
 *  1. range(end) — @start equals to 0, @step equals to 1, @isRight equals to false
 *  2. range(start, end) — @step equals to 1, @isRight equals to false
 *  3. range(start, end, step) — @isRight equals to false
 *  4. range(start, end, step, isRight) — everything works as expected
 * @param {...number} args
 * @returns {array}
 */
export const range = function (...args) {
  const index = args.findIndex((arg) => typeof arg === 'boolean')
  const isRight = index !== -1 ? args.splice(index, 1) : false

  args = args.filter((arg) => arg !== undefined)

  const start = args.length > 1 ? args[0] : 0
  const end = args.length > 1 ? args[1] : args[0] ? args[0] : 0
  let step = args.length === 3 ? args[2] : 1

  if (end < start) step *= -1

  const length = Number(((Math.abs(end) - start) / (Math.abs(step) || 1)).toFixed())
  const arr = new Array(length)

  for (let i = 0; i < length; i++) {
    const multiplier = isRight ? length - i - 1 : i
    arr[i] = start + multiplier * step
  }

  return arr
}
