Handlebars.registerPartial(
  'input',
  `
    <input
      type="{{#if type }}{{ type }}{{else}}text{{/if}}"
      id="{{#if title }}{{ getCamelCaseId title }}{{/if}}"
      name="{{#if title }}{{ getCamelCaseId title }}{{/if}}"
      placeholder="{{#if placeholder }}{{ placeholder }}{{/if}}"
      class="input {{#if classList }}{{ stringifyClassList classList }}{{/if}}"
      {{#if validations}}
        data-v-validate
      {{/if}}
      {{#each validations }}
        data-v-{{this.validation}}="{{this.value}}"
        data-v-match="{{#if this.match }}#{{ getCamelCaseId this.match}}{{/if}}"
      {{/each}}>
    {{#if (hasLabel title label )}}
      <label for={{ getCamelCaseId title }}>{{ title }}</label>
    {{/if}}
  `
)
// TODO: maybe use helper @getCamelCaseId in partial context define instead of doing it twice here
