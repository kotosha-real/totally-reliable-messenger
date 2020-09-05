export const errorTemplate = `
  <div class="messenger container">
    <div class="messenger__inner">
      <div class="messenger__verbose">
        <div class="verbose__block">
          <div class="verbose__headline">{{ error.code }}</div>
          <div class="verbose__text">{{ error.message }}</div>
          <div class="verbose__text">
            {{> button (createObject value = 'Go home' href = '#' id = 'buttonErrorBack' classList = (createArray 'btn' 'btn_common' 'btn_accent' 'btn_inline')) }}
          </div>
        </div>
      </div>
    </div>
  </div>
`
