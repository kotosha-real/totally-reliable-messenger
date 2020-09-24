export const sidebarTemplate = `
  <header class="zone_app zone_app_top app_flex">
    <div class="ham">
      {{> button (createObject icon = 'bars' id = 'buttonMenu' classList = (createArray 'btn_app') route =  'profile') }}
    </div>
    <div class="search">
      <form id="chatSearchForm" action="#">
        {{> input (createObject type = 'text' title = 'chatSearchInput' placeholder = 'Search' label = false classList = (createArray 'input_flat' 'input_full-width') validation = false) }}
      </form>
    </div>
  </header>
  <section class="chat-list-wrapper">
    <ul class="chat-list">
      {{#each chats}}
      <li class="chat-list__item {{#if this.active }}chat-list__item_active{{/if}}">
        <button class="chat-item" onclick="router.go(&quot;/chat&quot;)">
          <div class="chat-item__inner">
            <div class="chat-item__avatar">
              <img
                src="{{ this.peer.avatar }}"
                alt="Beautiful person"
                width="48"
                height="48"
                class="img img_rounded"
              />
            </div>
            <div class="chat-item__content">
              <div class="chat-item__main">
                <div class="chat-item__user">{{ this.peer.name }}</div>
                <div class="chat-item__message">{{ this.lastMessage.message }}</div>
              </div>
              <div class="chat-item__info">
                <div class="chat-item__date">{{ this.lastMessage.date }}</div>
                {{#if this.unread }}
                <div class="chat-item__unread">{{ this.unread }}</div>
                {{/if}}
              </div>
            </div>
          </div>
        </button>
      </li>
      {{/each}}
    </ul>
  </section>
`;
