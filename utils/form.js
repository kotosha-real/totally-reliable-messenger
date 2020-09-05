/**
 * Returns true if custom validation is passed
 * @param {event} evt
 * @returns {boolean}
 */
function validate({ target: el }) {
  if (!el.v || !el.v.validate) return true

  const { value, v } = el
  let valid = true

  const regex = new RegExp(v.pattern)
  const match = v.match

  if (!regex.test(value) || (match && value !== match.value)) {
    valid = false
  }

  if (!valid) {
    el.classList.add('input_invalid')

    if (match) match.classList.add('input_invalid')
  } else {
    el.classList.remove('input_invalid')

    if (match) match.classList.remove('input_invalid')
  }

  return valid
}

/**
 * Returns true if custom validation on every form element is passed
 * @param {*} evt
 * @returns {boolean}
 */
function validateForm(elements) {
  let valid = true

  elements.forEach((el) => {
    const elValid = validate({ target: el })
    valid = valid === true ? elValid : false
  })

  return valid
}

/**
 * Prints @form data in console
 * @param {element} evt
 */
function printFormData(form) {
  const formData = new FormData(form)
  let obj = {}

  for (const [key, value] of formData.entries()) {
    obj[key] = value
  }

  console.log(obj)
}

/**
 * Toggles label of form field (lifted when filled or focused, default otherwise)
 * @param {element} el
 */
function toggleLabel(el) {
  const { value, nextElementSibling: label } = el

  if (label && label.tagName === 'LABEL' && !value) label.classList.toggle('label_lifted')
}

/**
 * Writes @v prop to passed el to use for validation
 * @param {element} el
 * @param {element} form
 */
function createValidationContext(el, form) {
  const { vPattern, vMatch } = el.dataset

  el.v = {
    validate: true,
    pattern: vPattern.slice(1, vPattern.length - 1),
    match: vMatch ? form.querySelector(vMatch) : null
  }
}

/**
 * Calls @toggleLabel on @el focus
 * @param {event} evt
 */
function onFocus({ target: el }) {
  toggleLabel(el)
}

/**
 * Calls @toggleLabel and @validate on @el blur
 * @param {event} evt
 */
function onBlur(evt) {
  const { target: el } = evt

  toggleLabel(el)
  validate(evt)
}

/**
 * Calls @validateForm if @validate equals to true. Calls @printFormData if validation is passed or skipped
 * @param {event} evt
 * @param {HTMLCollection} elements
 * @param {boolean} validate
 */
function onSubmit(evt, elements, validate) {
  evt.preventDefault()

  const { target: form } = evt

  if (validate) {
    const valid = validateForm(elements)

    if (valid) printFormData(form)
  } else printFormData(form)
}

/**
 * Sets validation to all @form fields and binds @onSubmit on submit event
 * @param {element} form
 */
export function setFormValidation(form) {
  const elements = form.querySelectorAll('.input')
  let validate = false

  elements.forEach((el) => {
    if (el.dataset.vValidate !== undefined) {
      createValidationContext(el, form)
      validate = true
    }

    el.addEventListener('focus', onFocus)
    el.addEventListener('blur', onBlur)
  })

  form.addEventListener('submit', (evt) => {
    onSubmit(evt, elements, validate)
  })
}
