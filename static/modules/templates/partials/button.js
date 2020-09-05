Handlebars.registerPartial(
  'button',
  `
    <{{#if href }}a href="{{ href }}"{{else}}button{{/if}} id="{{#if id }}{{ getCamelCaseId id }}{{/if}}" class="btn {{#if classList }}{{ stringifyClassList classList }}{{/if}}">
      {{#if icon }}
        <i class="fas fa-{{ icon }}" aria-hidden="true"></i>
      {{/if}}
      {{#if value }}
        {{ value }}
      {{/if}}
    </{{#if href }}a"{{else}}button{{/if}}>
  `
)
