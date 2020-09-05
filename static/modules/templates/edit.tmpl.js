export const editTemplate = `
  <div class="settings-window">
    <div class="settings-window__container">
      <div class="settings-user__block">
        <div class="settings-user__avatar">
          <img src="{{ user.avatar }}" alt="Username" />
        </div>
      </div>
      <div class="settings-user__block settings-user__block_small">
        <form action="#" id="editForm">
          <fieldset class="fieldset">
            {{#each user.data }}
              <div class="input-field">
                {{> input (createObject type = this.type title = this.title label = true classList = (createArray 'input_common' 'input_full-width') validations = this.validations) }}
              </div>
            {{/each}}
          </fieldset>
          <fieldset class="fieldset">
            <div class="input-field">
              {{> button (createObject value = 'Save changes' id = 'buttonSaveChanges' classList = (createArray 'btn_flat' 'btn_flat_common' 'btn_full-width')) }}
            </div>
            <div class="input-field input-field_centered">
              {{> button (createObject value = 'Back' href = '#' id = 'buttonEditBack' classList = (createArray 'btn_accent')) }}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
`
