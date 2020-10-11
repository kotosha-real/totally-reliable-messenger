import { AbstractComponent } from './AbstractComponent'

export class Route {
  _pathname: string
  _component: AbstractComponent
  _root: string
  requiredAuth: boolean

  constructor(pathname: string, component: AbstractComponent, root: string, requiredAuth: boolean) {
    /**
     * root переехал сюда из конструктора в соответствии с комментом:
     * «Не очень понятно почему роутер внутри себя содержит целиком рут ноду, судя по коду в компонентах мы прямо из роутера добавляем/удаляем html элементы, это не то, чем должен заниматься роутер, не его зона ответственности.»
     * В теории спринта было реализовано похожим образом (кроме того, что селектор задавался в конструкторе роутера), только рендер был из роута через вспомогательную функцию.
     * Рендер я оставил через компонент, прокидывая туда root.
     */
    this._pathname = pathname
    this._component = component
    this._root = root

    this.requiredAuth = requiredAuth
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave(): void {
    this._component.eventBus.emit(this._component._events.FLOW_CWU)
  }

  match(pathname: string): boolean {
    return pathname === this._pathname
  }

  render(): void {
    // call mount hook listeners to retrieve data before render if needed
    this._component.eventBus.emit(this._component._events.FLOW_CDM)
  }
}
