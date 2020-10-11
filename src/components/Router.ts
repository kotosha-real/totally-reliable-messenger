import { AbstractComponent } from './AbstractComponent'
import { Route } from './Route'
import { http } from './http'

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

  use (pathname: string, block: AbstractComponent, root: string, requiredAuth: boolean): Router {
    const route = new Route(pathname, block, root, requiredAuth)
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

  async _onRoute (pathname: string): Promise<void> {
    const route = this.getRoute(pathname)

    if (!route) {
      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    // route guard for not logged in users
    if (route.requiredAuth) {
      let isAuthorized = false
      await http
        .get('https://ya-praktikum.tech/api/v2/auth/user')
        .then(() => {
          isAuthorized = true
        })
        .catch(() => {
          this.go('/sign-in')
        })

      if (!isAuthorized) return
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
    const path = pathname.split('?')[0]
    // call use('/404', Component) last to get it work correctly
    return this.routes.find((route) => route.match(path) || route.match('/404'))
  }
}
