import { EventBus } from './EventBus'
import { compile } from '../utils/mydash/compile'
import { isEqual } from '../utils/mydash/isEqual'

export class AbstractComponent {
  _events: Record<string, any>
  _template: string
  _element: HTMLElement | null

  options: Record<string, any>
  eventBus: EventBus

  constructor(template: string, options = {}) {
    // instead of static to please Jest :c
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
    this.eventBus.emit(this._events.INIT)
  }

  get element(): HTMLElement | null {
    return this._element
  }

  set element(el) {
    this._element = el
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(this._events.INIT, this._init.bind(this))
    eventBus.on(this._events.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(this._events.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(this._events.FLOW_CWR, this._componentWillRender.bind(this))
    eventBus.on(this._events.FLOW_RENDER, this._render.bind(this))
    eventBus.on(this._events.FLOW_CWU, this._unmount.bind(this))
  }

  _init(): void {
    this.eventBus.emit(this._events.FLOW_CDM)
  }

  _componentDidMount(): void {
    /**
     * Q: Почему 2 одинаковых метода, один из которых (приватный) вызывает публичный? это странно выглядит, для чего приватный?
     * A: Для консистентности. Есть приватные методы, которые так или иначе имеют некоторую логику. Они здесь была, но оказалсь выпилена и потенциально может быть реализована снова.
     *    Изнутри приватные методы вызывают публичные, которые можно переопределить в каждом компоненте, расширяющем абстрактный, то есть, по сути публичные методы являются хуками.
     */
    this.componentDidMount()
  }

  componentDidMount(): void {}

  _componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>): void {
    const equal = isEqual(oldProps, newProps)

    if (!equal) {
      this.componentDidUpdate()
      this.setOptions(newProps)
      this.eventBus.emit(this._events.FLOW_CWR)
    }
  }

  componentDidUpdate(): void {}

  _componentWillRender(root: string): void {
    this.componentWillRender()
    this.eventBus.emit(this._events.FLOW_RENDER, root)
  }

  componentWillRender(): void {}

  _render(root: string): void {
    let rootEl: Node | null =
      this._element && this._element.parentNode
        ? this._element.parentNode
        : document.querySelector(root)

    if (!rootEl) return

    if (this._element) rootEl.removeChild(this._element as Node) // re-render case

    this._element = compile(this._template, this.options)
    rootEl.appendChild(this._element as Node)

    this.render()
  }

  render(): void {}

  _unmount(): void {
    if (this._element) {
      const { parentNode } = this._element

      if (!parentNode) return

      parentNode.removeChild(this._element as Node)
      this._element = null
    }

    this.unmount()
  }

  unmount(): void {}

  _proxyOptions(options: Record<string, any>): Record<string, any> {
    const self = this

    return new Proxy(options, {
      set(target, prop, value) {
        let oldTarget = Object.assign({}, target)
        let newTarget = Object.assign({}, target, { [prop]: value })
        self.eventBus.emit(self._events.FLOW_CDU, oldTarget, newTarget)
        return true
      },

      deleteProperty() {
        throw new Error('Get lost.')
      }
    })
  }

  setOptions(options: Record<string, any>): void {
    if (!options) {
      return
    }

    // this.options = Object.assing(this.options, options)
    this.options = this._proxyOptions(options) // not so pretty but I got myself in infinite loop with previous solution
  }
}
