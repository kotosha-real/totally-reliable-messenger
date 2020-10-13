export const chatTemplate = `
  <div class="chat {{#if activeChats }}chat_empty{{/if}}">
    {{#if activeChat }}
      <header class="zone_app zone_app_top app_flex">
        <div class="chat-item chat-item_open">
          <div class="chat-item__inner">
            <div class="chat-item__avatar">
              <img
                src="{{ activeChat.avatar }}"
                alt="{{ activeChat.title }}"
                width="48"
                height="48"
                class="img img_rounded"
                onerror="this.src='https://via.placeholder.com/150'"
              />
            </div>
            <div class="chat-item__content">
              <div class="chat-item__main">
                <div class="chat-item__user">{{ activeChat.title }}</div>
                <ul class="chat-users">
                  {{#each users}}
                    <li class="chat-users__user">
                      <div class="chat-users__name">{{ getName this }} <button class="chat-users__user-remove" data-id="{{ this.id }}"><i class="fas fa-user-minus"></i></button></div>
                    </li>
                  {{/each}}
                </ul>
              </div>
            </div>
            <form https://ya-praktikum.tech/api/v2/chats/users" id="addUserForm" class="form-user-add">
              {{#with addUserOptions }}
                {{> input (createObject type = type title = title name = name placeholder = placeholder classList = (createArray 'input_flat' 'input_full-width') validation = validation) }}
              {{/with}}
              {{> button (createObject value = 'Add' id = 'buttonAddUser' classList = (createArray 'btn_common' 'btn_accent')) }}
            </form>
          </div>
        </div>
      </header>
      <main class="chat__feed">
        <ul class="message-list"></ul>
      </main>
      <footer class="zone_app zone_app_bottom">
        <form action="#" id="writingAreaForm" class="chat__form app_flex">
          {{> button (createObject icon = 'paperclip' id = 'buttonSend' classList = (createArray 'btn_app')) }}
          <div class="chat__writing-area">
            {{#with message }}
              {{> input (createObject type = type title = title label = false placeholder = placeholder classList = (createArray 'input_flat' 'input_full-width') validation = validation) }}
            {{/with}}
          </div>
          {{> button (createObject icon = 'paper-plane' id = 'button' classList = (createArray 'btn_app')) }}
        </form>
      </footer>
    {{else}}
      <div class="messenger__verbose">
        <div class="verbose__block">
          <div class="verbose__text">
            Select chat or
            {{> button (createObject value = 'start a new one' id = 'buttonStartChat' classList = (createArray 'btn_common' 'btn_accent' 'btn_inline')) }}
          </div>
        </div>
      </div>
    {{/if}}
  </div>
`
