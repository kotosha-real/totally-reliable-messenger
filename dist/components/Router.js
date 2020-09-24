import Route from './Route.js';
export default class Router {
    constructor(root) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.root = document.querySelector(root);
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block);
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = ((event) => {
            let __window__ = event.currentTarget;
            this._onRoute(__window__.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        // call use('/404', Component) last to get it work correctly
        return this.routes.find((route) => route.match(pathname) || route.match('/404'));
    }
}
