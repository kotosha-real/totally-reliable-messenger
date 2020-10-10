import { AbstractComponent } from './AbstractComponent'
import { Route } from './Route'

export class Router {
  static __instance: Router | undefined

  _currentRoute: Route | null

  routes: Route[]
  history: History

  private constructor () {
    this._currentRoute = null

    this.routes = []
    this.history = window.history
  }

  public static getInstance (): Router {
    if (!Router.__instance) {
      Router.__instance = new Router()
    }

    return Router.__instance
  }

  use (pathname: string, block: AbstractComponent, root: string): Router {
    const route = new Route(pathname, block, root)
    this.routes.push(route)
    return this
  }

  start (): void {
    window.onpopstate = (event: PopStateEvent) => {
      const __window__ = event.currentTarget as Window
      this._onRoute(__window__.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute (pathname: string): void {
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

  go (pathname: string): void {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back (): void {
    this.history.back()
  }

  forward (): void {
    this.history.forward()
  }

  getRoute (pathname: string): Route | undefined {
    // call use('/404', Component) last to get it work correctly
    return this.routes.find((route) => route.match(pathname) || route.match('/404'))
  }
}
