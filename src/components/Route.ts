import AbstractComponent from './AbstractComponent.js'

export default class Route {
  _pathname: string
  _component: AbstractComponent

  constructor(pathname: string, component: AbstractComponent) {
    this._pathname = pathname
    this._component = component
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave(): void {
    // Jest made
    this._component.eventBus.emit(this._component._events.FLOW_CWU)
  }

  match(pathname: string): boolean {
    return pathname === this._pathname
  }

  render(): void {
    // me cry
    this._component.eventBus.emit(this._component._events.FLOW_CWR)
  }
}
