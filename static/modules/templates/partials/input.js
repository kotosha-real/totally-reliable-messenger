/**
 * Base input @partial
 * @param {string} type
 * @param {string} title
 * @param {string} placeholder
 * @param {array} classList
 * @param {object} validation
 * @param {boolean} label
 */
Handlebars.registerPartial(
  'input',
  `
    <div class="input-field">
      <input
        type="{{#if type }}{{ type }}{{else}}text{{/if}}"
        id="{{#if title }}{{ getCamelCaseId title }}{{/if}}"
        name="{{#if title }}{{ getCamelCaseId title }}{{/if}}"
        placeholder="{{#if placeholder }}{{ placeholder }}{{/if}}"
        class="input {{#if classList }}{{ stringifyClassList classList }}{{/if}}"
        {{#if validation}}
          {{#with validation }}
            data-v-validate
            data-v-{{this.type}}="{{this.value}}"
            data-v-match="{{#if this.match }}#{{ getCamelCaseId this.match }}{{/if}}"
            data-v-message="{{#if this.message }}{{ this.message }}{{/if}}"
          {{/with}}
        {{/if}}>
      {{#if (hasLabel title label )}}
        <label for={{ getCamelCaseId title }}>{{ title }}</label>
      {{/if}}
      <div class="errors"></div>
    </div>
  `
)
