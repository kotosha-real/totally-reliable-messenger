export const profileTemplate = `
  <div class="settings-window">
    <div class="settings-window__container">
      <div class="settings-user__block">
        <div class="settings-user__avatar">
          <img src="{{ getAvatar user.data }}" alt="{{ user.data.login }}" onerror="this.src='https://via.placeholder.com/150'">
        </div>
        <form action="https://ya-praktikum.tech/api/v2/user/profile/avatar" id="avatarForm" enctype="multipart/form-data">
          {{#with avatar }}
            {{> input (createObject type = type title = title name = name label = true classList = (createArray 'input_common' 'input_full-width' 'input_file') validation = validation) }}
          {{/with}}
          {{> button (createObject value = 'Save avatar' id = 'buttonSaveAvatar' classList = (createArray 'btn_common')) }}
        </form>
      </div>
      <div class="settings-user__block settings-user__block_small">
        {{#each user.data }}
          {{#if (isRegularData this.title) }}
            <div class="settings-user__field">
              <div class="settings-user__key">{{ this.title }}</div>
              <div class="settings-user__value">{{ this.value }}</div>
            </div>
          {{/if}}
        {{/each}}
      </div>
      <div class="settings-user__block settings-user__block_small">
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Edit data' id = 'buttonEditData' classList = (createArray 'btn_common') route = 'edit') }}
          </div>
        </div>
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Change password' id = 'buttonChangePassword' classList = (createArray 'btn_common') route = 'change-password') }}
          </div>
        </div>
        <div class="settings-user__field">
          <div class="settings-user__key">
            {{> button (createObject value = 'Log out' id = 'buttonLogOut' classList = (createArray 'btn_danger')) }}
          </div>
        </div>
      </div>
    </div>
  </div>
`
