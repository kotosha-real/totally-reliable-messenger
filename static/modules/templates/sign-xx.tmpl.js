export const signXXTemplate = `
  <div class="login">
    <div class="login__headline">Get on board</div>
    <div class="login__tabs">
      <button id="loginTab" class="btn btn_tab {{#if (isLogin type) }}btn_tab_active{{/if}}">Sign in</button>
      <button id="regTab" class="btn btn_tab {{#unless (isLogin type) }}btn_tab_active{{/unless}}">Sign up</button>
    </div>
    <div class="login__inner">
      {{#if (isLogin type) }}
        <form action="#" id="signInForm">
          <fieldset class="fieldset">
            {{#each data }}
              <div class="input-field">
                {{> input (createObject type = this.type title = this.title label = true classList = (createArray 'input_common' 'input_full-width') validations = this.validations) }}
              </div>
            {{/each}}
          </fieldset>
          <fieldset class="fieldset">
            <div class="input-field">
              {{> button (createObject value = 'Sign in' id = 'buttonSignIn' classList = (createArray 'btn_flat' 'btn_flat_common' 'btn_full-width')) }}
            </div>
            <div class="input-field input-field_centered">
              {{> button (createObject value = 'Forgot?' href = '#' id = 'buttonForgotPassword' classList = (createArray 'btn_common' 'btn_accent' 'btn_inline-width')) }}
            </div>
          </fieldset>
        </form>
      {{else}}
        <form action="#" id="signUpForm">
          <fieldset class="fieldset">
            {{#each data }}
            <div class="input-field">
              {{> input (createObject type = this.type title = this.title label = true classList = (createArray 'input_common' 'input_full-width') validations = this.validations) }}
            </div>
            {{/each}}
          </fieldset>
          <fieldset class="fieldset">
            <div class="input-field">
              {{> button (createObject value = 'Sign up' id = 'buttonSignUp' classList = (createArray 'btn_flat' 'btn_flat_common' 'btn_full-width')) }}
            </div>
          </fieldset>
        </form>
      {{/if}}
    </div>
  </div>
`
