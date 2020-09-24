/**
 * IMPORTANT NOTE
 *
 * Since @tsc does not serve file extensions I should use them in src files' imports
 * But Jest does not like it when there are extensions in imports
 * So I write extensions to make it work
 * Tests are fine, believe me ;)
 */

import AbstractComponent from '../src/components/AbstractComponent'

const component = new AbstractComponent('', {})

describe('component module', () => {
  test('element getter', () => {
    expect(component.element).toBeNull()
  })

  test('element setter', () => {
    const div = document.createElement('div')
    component.element = div
    expect(component.element).toEqual(div)
  })

  describe('_registerEvents()', () => {
    test('subscribe on events', () => {
      component._registerEvents(component.eventBus)
      expect(component.eventBus.listeners.length).toBe(component._events.length)
    })
  })

  describe('_init()', () => {
    test('emit FLOW_CDM', () => {
      const vm = {
        _events: {
          FLOW_CDM: component._events.FLOW_CDM
        },
        eventBus: {
          emit: jest.fn()
        }
      }

      component._init.bind(vm)()
      expect(vm.eventBus.emit).toHaveBeenCalledWith(component._events.FLOW_CDM)
    })
  })

  describe('_componentDidMount()', () => {
    test('call componentDidMount()', () => {
      const vm = {
        componentDidMount: jest.fn()
      }

      component._componentDidMount.bind(vm)()
      expect(vm.componentDidMount).toHaveBeenCalled()
    })
  })

  describe('_componentDidUpdate()', () => {
    const vm = {
      _events: {
        FLOW_CWR: component._events.FLOW_CWR
      },
      eventBus: {
        emit: jest.fn()
      },
      componentDidUpdate: jest.fn(),
      setOptions: jest.fn()
    }

    test('do not emit FLOW_CWR', () => {
      component._componentDidUpdate.bind(vm)({ a: 1 }, { a: 1 })
      expect(vm.componentDidUpdate).not.toHaveBeenCalled()
      expect(vm.eventBus.emit).not.toHaveBeenCalled()
    })

    test('emit FLOW_CWR', () => {
      component._componentDidUpdate.bind(vm)({ a: 1 }, { a: 2 })
      expect(vm.componentDidUpdate).toHaveBeenCalled()
      expect(vm.eventBus.emit).toHaveBeenCalledWith(component._events.FLOW_CWR)
    })
  })

  describe('_componentWillRender()', () => {
    test('call componentWillRender()', () => {
      const vm = {
        _events: {
          FLOW_CWR: component._events.FLOW_CWR
        },
        eventBus: {
          emit: jest.fn()
        },
        componentWillRender: jest.fn()
      }

      component._componentWillRender.bind(vm)()
      expect(vm.componentWillRender).toHaveBeenCalled()
    })
  })

  describe('_render()', () => {
    test('fail fast without root', () => {
      const vm = {
        _template: '',
        _element: null,
        options: {},
        router: {
          root: null
        },
        render: jest.fn()
      }

      component._render.bind(vm)()
      expect(vm._element).toBeNull()
      expect(vm.render).not.toHaveBeenCalled()
    })
    test('render _element and call render()', () => {
      const element = document.createElement('div')
      const root = document.createElement('div')
      document.body.appendChild(root)

      const vm = {
        _template: '',
        _element: null,
        options: {},
        router: {
          root: root
        },
        render: jest.fn()
      }

      component._render.bind(vm)()
      expect(vm._element).toEqual(element)
      expect(vm.render).toHaveBeenCalled()
    })

    test('correct re-render handling', () => {
      const element = document.createElement('div')
      const root = element
      document.body.appendChild(root)

      const vm = {
        _template: '',
        _element: null,
        options: {},
        router: {
          root: root
        },
        render: jest.fn()
      }

      component._render.bind(vm)()
      expect(vm.render).toHaveBeenCalled()
      expect(vm.router.root.childNodes.length).toBe(1)
    })
  })

  describe('_unmount()', () => {
    test('remove _element and call unmount()', () => {
      const element = document.createElement('div')
      const root = document.createElement('div')
      document.body.appendChild(root)
      root.appendChild(element)

      const vm = {
        _element: element,
        router: {
          root: root
        },
        unmount: jest.fn()
      }

      component._unmount.bind(vm)()
      expect(vm._element).toBeNull()
      expect(vm.unmount).toHaveBeenCalled()
    })
  })
})
