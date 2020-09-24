export const profileTemplate = `
  <div class="settings-window">
    <div class="settings-window__container">
      <div class="settings-user__block">
        <div class="settings-user__avatar">
          <img src="{{ user.avatar }}" alt="{{ user.login }}">
        </div>
      </div>
      <div class="settings-user__block settings-user__block_small">
        {{#each user.data }}
          <div class="settings-user__field">
            <div class="settings-user__key">{{ this.title }}</div>
            <div class="settings-user__value">{{ this.value }}</div>
          </div>
        {{/each}}
      </div>
      <div class="settings-user__block settings-user__block_small">
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Edit data' id = 'buttonEditData' classList = (createArray 'btn_common') route =  'edit') }}
          </div>
        </div>
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Log out' id = 'buttonLogOut' classList = (createArray 'btn_danger') route =  'sign-in') }}
          </div>
        </div>
      </div>
      <div class="settings-user__block">
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Delete account' id = 'buttonDeleteAccount' classList = (createArray 'btn_flat' 'btn_flat_danger') route =  'sign-up') }}
          </div>
        </div>
      </div>
    </div>
  </div>
`
