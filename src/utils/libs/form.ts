import { IFormElement } from '../../interfaces/IFormElement.js'

/**
 * Toggles @el invalid class .input_invalid depending on @valid param and prints @message error to @messageEl block (if both are present)
 * @param {element} el
 * @param {boolean} valid
 */
function toggleError(el: IFormElement, valid: boolean): void {
  const { v } = el
  el.classList[valid ? 'remove' : 'add']('input_invalid')
  el.classList[valid ? 'add' : 'remove']('input_valid')
  if (v && v.message && v.messageEl) v.messageEl.textContent = !valid ? v.message : ''
}

/**
 * Calls @toggleError to handle @el and @match (if @match is present) validation
 * @param {element} el
 * @param {boolean} valid
 * @param {element} match
 */
function handleValidity(el: IFormElement, valid: boolean, match: IFormElement): void {
  toggleError(el, valid)
  if (match) toggleError(match, valid)
}

/**
 * Creates regex out of passed @el and tests its value then calls @handleValidity to set correct @el and @match visual state
 * Returns true if @el value is valid or no @el is present
 * @param {element} el
 * @returns {boolean}
 */
function validate(el: IFormElement): boolean {
  if (!el || !el.v || !el.v.validate) return true

  const { value, v } = el

  const regex = new RegExp(v.pattern)
  const match = v.match
  const valid = match ? regex.test(value) && value === match.value : regex.test(value)

  handleValidity(el, valid, match)

  return valid
}

/**
 * Returns true if custom validation on every form element is passed
 * @failFast param defines whether whole form will be checked or check will fail on first invalid field
 * @param {NodeList} elements
 * @param {boolean} failFast
 * @returns {boolean}
 */
function validateForm(elements: NodeListOf<IFormElement>, failFast = true): boolean {
  let valid = true

  // @elements is a @NodeList so no some() or smth pal :c
  for (const el of elements) {
    valid = validate(el)

    if (!valid && failFast) return valid
  }

  return valid
}

/**
 * Prints @form data in console
 * @param {element} evt
 */
function printFormData(form: HTMLFormElement): void {
  const formData = new FormData(form)
  let obj: Record<string, any> = {}

  for (const [key, value] of formData.entries()) {
    obj[key] = value
  }

  console.log(obj)
}

/**
 * Toggles label of form field (lifted when filled or focused, default otherwise)
 * @param {element} el
 */
function toggleLabel(el: IFormElement): void {
  const { value, nextElementSibling: label } = el

  if (label && label.tagName === 'LABEL' && !value) label.classList.toggle('label_lifted')
}

/**
 * Writes @v prop to passed el to use for validation
 * @param {element} el
 * @param {element} form
 */
function createValidationContext(el: IFormElement, form: HTMLFormElement): void {
  const { vPattern, vMatch, vMessage } = el.dataset

  el.v = {
    validate: true,
    pattern: vPattern && vPattern.slice(1, vPattern.length - 1),
    match: vMatch ? form.querySelector(vMatch) : null,
    message: vMessage,
    messageEl: el.parentNode && el.parentNode.querySelector('.errors')
  }
}

/**
 * Calls @toggleLabel on @el focus
 * @param {event} evt
 */
function onFocus(evt: Event): void {
  const el: IFormElement = evt.target as IFormElement
  toggleLabel(el)
}

/**
 * Calls @toggleLabel and @validate on @el blur
 * @param {event} evt
 */
function onBlur(evt: Event): void {
  const el: IFormElement = evt.target as IFormElement

  toggleLabel(el)
  validate(el)
}

/**
 * Calls @validateForm if @validate equals to true. Calls @printFormData if validation is passed or skipped
 * @param {event} evt
 * @param {HTMLCollection} elements
 * @param {boolean} validate
 */
function onSubmit(evt: Event, elements: NodeListOf<IFormElement>, validate: boolean): void {
  evt.preventDefault()

  const { target: form } = evt

  if (validate) {
    const valid = validateForm(elements)

    if (valid) printFormData(form as HTMLFormElement)
  } else printFormData(form as HTMLFormElement)
}

/**
 * Sets validation to all @form fields and binds @onSubmit on submit event
 * @param {element} form
 */
export function setFormValidation(form: HTMLFormElement): void {
  const elements: NodeListOf<IFormElement> = form.querySelectorAll('.input')
  let validate: boolean = false

  elements.forEach((el) => {
    if (el.dataset.vValidate !== undefined) {
      createValidationContext(el, form)
      validate = true
    }

    el.addEventListener('focus', onFocus)
    el.addEventListener('blur', onBlur)
  })

  form.addEventListener('submit', (evt: Event) => {
    onSubmit(evt, elements, validate)
  })
}
