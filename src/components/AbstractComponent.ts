import EventBus from './EventBus.js'
import { compile } from '../utils/mydash/compile.js'
import { isEqual } from '../utils/mydash/isEqual.js'
import Router from './Router.js'

export default class AbstractComponent {
  _events: Record<string, any>
  _template: string
  _element: HTMLElement | null

  options: Record<string, any>
  eventBus: EventBus
  router: Router

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
    this.router = new Router()

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

  _componentWillRender(): void {
    this.componentWillRender()
    this.eventBus.emit(this._events.FLOW_RENDER)
  }

  componentWillRender(): void {}

  _render(): void {
    const { root } = this.router
    if (!root) return

    if (root && this._element && root.firstChild === this._element)
      root.removeChild(this._element as Node) // re-render case

    this._element = compile(this._template, this.options)
    root.appendChild(this._element as Node)

    this.render()
  }

  render(): void {}

  _unmount(): void {
    const { root } = this.router
    if (!root) return

    root.removeChild(this._element as Node)
    this._element = null

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
