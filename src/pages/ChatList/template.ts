export const chatTemplate = `
  <div class="chat {{#if activeChats }}chat_empty{{/if}}">
    {{#if activeChat }}
      {{#with activeChat}}
        <header class="zone_app zone_app_top app_flex">
          <div class="chat-item chat-item_open">
            <div class="chat-item__inner">
              <div class="chat-item__avatar">
                <img
                  src="https://via.placeholder.com/150"
                  alt="{{ peer.avatar }}"
                  width="48"
                  height="48"
                  class="img img_rounded"
                />
              </div>
              <div class="chat-item__content">
                <div class="chat-item__main">
                  <div class="chat-item__user">{{ peer.name }}</div>
                  {{#unless peer.online }}
                  <div class="chat-item__message">
                    was here {{ peer.lastOnline }}
                  </div>
                  {{/unless}}
                </div>
              </div>
            </div>
          </div>
          {{> button (createObject icon = 'ellipsis-v' id = 'buttonSend' classList = (createArray 'btn_app')) }}
        </header>
        <main class="chat__feed">
          <ul class="message-list">
            {{#each messages}}
            <li class="message-list__item {{#if this.received}}message-list__item_received{{else}}message-list__item_sent{{/if}}">
              <div class="message">
                <div class="message__text">{{this.message}}</div>
                <div class="message__date">{{this.date}}</div>
              </div>
            </li>
            {{/each}}
          </ul>
        </main>
      {{/with}}
      <footer class="zone_app zone_app_bottom">
        <form action="#" id="writingAreaForm" class="chat__form app_flex">
          {{> button (createObject icon = 'paperclip' id = 'buttonSend' classList = (createArray 'btn_app')) }}
          <div class="chat__writing-area">
            {{#with message }}
              {{> input (createObject type = type title = title label = false placeholder = placeholder classList = (createArray 'input_flat' 'input_full-width') validation = validation) }}
            {{/with}}
          </div>
          {{> button (createObject icon = 'paper-plane' id = 'buttonSend' classList = (createArray 'btn_app')) }}
        </form>
      </footer>
    {{else}}
      <div class="messenger__verbose">
        <div class="verbose__block">
          <div class="verbose__text">
            Select chat or
            {{> button (createObject value = 'start a new one' id = 'buttonCreateChat' classList = (createArray 'btn_common' 'btn_accent' 'btn_inline')) }}
          </div>
          <form action="#" id="createChatForm" class="form-chat">
            {{#with createOptions }}
              {{> input (createObject type = type title = title name = name label = true classList = (createArray 'input_common' 'input_full-width') validation = validation) }}
            {{/with}}
            {{> button (createObject value = 'Create chat' id = 'buttonCreateChat' classList = (createArray 'btn_common' 'btn_accent')) }}
          </form>
        </div>
      </div>
    {{/if}}
  </div>
`
