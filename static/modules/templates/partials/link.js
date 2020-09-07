/**
 * Base link @partial
 * @param {string} id
 * @param {array} classList
 * @param {value} value
 */
Handlebars.registerPartial(
  'link',
  `
    <a href="{{ href }}" id="{{#if id }}{{ getCamelCaseId id }}{{/if}}" class="btn {{#if classList }}{{ stringifyClassList classList }}{{/if}}">
      {{#if value }}
        {{ value }}
      {{/if}}
    </a>
  `
)
