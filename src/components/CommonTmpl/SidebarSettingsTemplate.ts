export const sidebarTemplate = `
  <div class="zone_app zone_app_top app_flex">
    <div class="ham">
      {{> button (createObject icon = 'arrow-left' id = 'buttonBack' classList = (createArray 'btn_app') route =  '') }}
    </div>
    <div class="user">
      <form action="#" id="statusForm">
        <div class="input__field">
          <input
            type="text"
            id="statusInput"
            placeholder="Type your status"
            class="input input_flat"
          />
        </div>
      </form>
      <img src="{{ user.avatar }}" alt="{{ user.login }}" class="chat-item__avatar" />
    </div>
  </div>
  <div class="settings-wrapper">
    <ul class="settings">
      {{#each settings }}
      <li class="settings__item{{#if this.active }} settings__item_active{{/if}}">
        <button class="setting">
          <span class="setting__icon"><i class="fas fa-{{ this.icon }}"></i></span>
          <span class="setting__text">{{ this.title }}</span>
        </button>
      </li>
      {{/each}}
    </ul>
  </div>
`
