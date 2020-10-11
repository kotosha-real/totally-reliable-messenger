/**
 * Base button @partial
 * @param {string} id
 * @param {array} classList
 * @param {string} icon
 * @param {value} value
 */
Handlebars.registerPartial(
  'button',
  `
    <button id="{{#if id }}{{ id }}{{/if}}" class="btn {{#if classList }}{{ stringifyClassList classList }}{{/if}}" {{#if (hasRoute route) }}onclick="router.go(&quot;/{{ route }}&quot;)"{{/if}}">
      {{#if icon }}
        <i class="fas fa-{{ icon }}" aria-hidden="true"></i>
      {{/if}}
      {{#if value }}
        {{ value }}
      {{/if}}
    </button>
  `
)
