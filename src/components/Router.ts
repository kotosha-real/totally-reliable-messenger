import AbstractComponent from './AbstractComponent.js'
import Route from './Route.js'

export default class Router {
  static __instance: Router | undefined

  root!: HTMLElement | null
  routes!: Route[]
  history!: History

  _currentRoute!: Route | null

  constructor(root?: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.root = document.querySelector(root!)
    this.routes = []
    this.history = window.history
    this._currentRoute = null

    Router.__instance = this
  }

  use(pathname: string, block: AbstractComponent): Router {
    const route = new Route(pathname, block)
    this.routes.push(route)
    return this
  }

  start(): void {
    window.onpopstate = ((event: PopStateEvent) => {
      let __window__ = event.currentTarget as Window
      this._onRoute(__window__.location.pathname)
    }).bind(this)

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname)

    if (!route) {
      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back(): void {
    this.history.back()
  }

  forward(): void {
    this.history.forward()
  }

  getRoute(pathname: string): Route | undefined {
    // call use('/404', Component) last to get it work correctly
    return this.routes.find((route) => route.match(pathname) || route.match('/404'))
  }
}
