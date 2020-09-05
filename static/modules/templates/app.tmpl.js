export const appTemplate = `
  <div class="messenger container">
    <div class="messenger__inner">
      <aside class="sidebar">
        {{> sidebar this }}
      </aside>
      <div class="screen">
        {{> screen this }}
      </div>
    </div>
  </div>
`
