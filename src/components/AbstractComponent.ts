import { EventBus } from './EventBus'
import { compile } from '../utils/mydash/compile'
import { isEqual } from '../utils/mydash/isEqual'

export class AbstractComponent {
  _events: Record<string, any>
  _template: string
  _element: HTMLElement | null

  options: Record<string, any>
  eventBus: EventBus

  constructor (template: string, options = {}) {
    this._events = {
      INIT: 'init',
      FLOW_CDM: 'flow:component-did-mount',
      FLOW_CDU: 'flow:component-did-update',
      FLOW_CWR: 'flow:component-will-render',
      FLOW_RENDER: 'flow:render',
      FLOW_CWU: 'flow:component-will-unmount'
    }
    this._template = template
    this._element = null

    this.options = options
    this.options = this._proxyOptions(this.options)
    this.eventBus = new EventBus()

    this._registerEvents(this.eventBus)
  }

  get element (): HTMLElement | null {
    return this._element
  }

  set element (el) {
    this._element = el
  }

  _registerEvents (eventBus: EventBus): void {
    eventBus.on(this._events.INIT, this._init.bind(this))
    eventBus.on(this._events.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(this._events.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(this._events.FLOW_CWR, this._componentWillRender.bind(this))
    eventBus.on(this._events.FLOW_RENDER, this._render.bind(this))
    eventBus.on(this._events.FLOW_CWU, this._unmount.bind(this))
  }

  _init (): void {
    this.init()
    this.eventBus.emit(this._events.FLOW_CDM)
  }

  init (): void {}

  _componentDidMount (): void {
    // wait for the data and then emit render
    this.componentDidMount().then(() => {
      this.eventBus.emit(this._events.FLOW_CWR)
    })
    /**
     * Q: Почему 2 одинаковых метода, один из которых (приватный) вызывает публичный? это странно выглядит, для чего приватный?
     * A: Для консистентности. Есть приватные методы, которые так или иначе имеют некоторую логику. Она здесь была, но оказалась выпилена и потенциально может быть реализована снова.
     *    Изнутри приватные методы вызывают публичные, которые можно переопределить в каждом компоненте, расширяющем абстрактный, то есть, по сути публичные методы являются хуками.
     */
  }

  // async function used to retrieve some data before component render
  // data setter have to be implemented in child components
  async componentDidMount (): Promise<void> {}

  _componentDidUpdate (oldProps: Record<string, any>, newProps: Record<string, any>): void {
    const equal = isEqual(oldProps, newProps)

    if (!equal) {
      this.componentDidUpdate()
      this.eventBus.emit(this._events.FLOW_CWR)
    }
  }

  componentDidUpdate (): void {}

  _componentWillRender (root: string): void {
    this.componentWillRender()
    this.eventBus.emit(this._events.FLOW_RENDER, root)
  }

  componentWillRender (): void {}

  _render (root = '#app'): void {
    const rootEl: Node | null =
      this._element && this._element.parentNode
        ? this._element.parentNode
        : document.querySelector(root)

    if (!rootEl) return

    if (this._element) rootEl.removeChild(this._element as Node) // re-render case

    this._element = compile(this._template, this.options)
    rootEl.appendChild(this._element as Node)

    this.render()
  }

  render (): void {}

  _unmount (): void {
    if (this._element) {
      const { parentNode } = this._element

      if (!parentNode) return

      parentNode.removeChild(this._element as Node)
      this._element = null
    }

    this.unmount()
  }

  unmount (): void {}

  _proxyOptions (options: Record<string, any>): Record<string, any> {
    const self = this

    return new Proxy(options, {
      set (target, prop, value) {
        const oldTarget = Object.assign({}, target)
        const newTarget = Object.assign({}, target, { [prop]: value })
        target[String(prop)] = value
        self.eventBus.emit(self._events.FLOW_CDU, oldTarget, newTarget)
        return true
      },

      deleteProperty () {
        throw new Error('Get lost.')
      }
    })
  }

  setOptions (options: Record<string, any>): void {
    if (!options) {
      return
    }

    this.options = Object.assign(this.options, options)
  }
}
