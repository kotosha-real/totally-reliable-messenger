export default class Route {
    constructor(pathname, component) {
        this._pathname = pathname;
        this._component = component;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        // Jest made
        this._component.eventBus.emit(this._component._events.FLOW_CWU);
    }
    match(pathname) {
        return pathname === this._pathname;
    }
    render() {
        // me cry
        this._component.eventBus.emit(this._component._events.FLOW_CWR);
    }
}
