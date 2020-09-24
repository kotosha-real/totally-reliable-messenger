/**
 * IMPORTANT NOTE
 *
 * Since @tsc does not serve file extensions I should use them in src files' imports
 * But Jest does not like it when there are extensions in imports
 * So I write extensions to make it work
 * Tests are fine, believe me ;)
 */

import Router from '../src/components/Router'
import Route from '../src/components/Route'

const router = new Router('#app')

jest.mock('../src/components/Route', () => {
  return function (pathname) {
    this.pathname = pathname
    this.match = (pathname) => this.pathname === pathname
    this.render = jest.fn()
  }
})
jest.mock('../src/components/AbstractComponent', () => {})

describe('Router module', () => {
  beforeEach(() => {
    router.routes = []
  })

  describe('use()', () => {
    test('add route', () => {
      const route = new Route('/')
      router.use('/', route)
      const res = router.routes.find((r) => r.pathname === route.pathname)
      expect(res).not.toBeNull()
    })

    test('return Router instance', () => {
      const route = new Route('/')
      const res = router.use('/', route)
      expect(res).toBe(Router.__instance)
    })
  })

  describe('start()', () => {
    const vm = {
      _onRoute: jest.fn()
    }

    test('call _onRoute()', () => {
      router.start.bind(vm)()
      expect(vm._onRoute).toHaveBeenCalled()
    })

    test('return Router instance', () => {
      const route = new Route('/')
      const res = router.use('/', route)
      expect(res).toBe(Router.__instance)
    })
  })

  describe('_onRoute()', () => {
    test('with incorrect route', () => {
      const res = router._onRoute('/oops')
      expect(res).toBeUndefined()
    })

    test('with correct route', () => {
      const route = new Route('/')
      router.use('/', route)
      router._onRoute('/')
      // thx Jest for this beautiful hack
      expect(JSON.parse(JSON.stringify(router._currentRoute))).toEqual(
        JSON.parse(JSON.stringify(route))
      )
    })
  })

  describe('go()', () => {
    test('call pushState() and _onRoute()', () => {
      const vm = {
        history: { pushState: jest.fn() },
        _onRoute: jest.fn()
      }
      router.go.bind(vm)('/oops')
      expect(vm.history.pushState).toHaveBeenCalledWith({}, '', '/oops')
      expect(vm._onRoute).toHaveBeenCalledWith('/oops')
    })
  })

  describe('back()', () => {
    test('call history.back()', () => {
      const vm = {
        history: { back: jest.fn() }
      }
      router.back.bind(vm)()
      expect(vm.history.back).toHaveBeenCalled()
    })
  })

  describe('forward()', () => {
    test('call history.forward()', () => {
      const vm = {
        history: { forward: jest.fn() }
      }
      router.forward.bind(vm)()
      expect(vm.history.forward).toHaveBeenCalled()
    })
  })

  describe('getRoute()', () => {
    test('return 404 route when passed route does not exist', () => {
      const routeChat = new Route('/chat')
      const routeErr = new Route('/404')
      router.use('/chat', routeChat)
      router.use('/404', routeErr)

      const res = router.getRoute('/oops')
      expect(JSON.parse(JSON.stringify(res))).toEqual(JSON.parse(JSON.stringify(routeErr)))
    })

    test('return correct route', () => {
      const routeChat = new Route('/chat')
      const routeErr = new Route('/404')
      router.use('/chat', routeChat)
      router.use('/404', routeErr)

      const res = router.getRoute('/chat')
      expect(JSON.parse(JSON.stringify(res))).toEqual(JSON.parse(JSON.stringify(routeChat)))
    })
  })
})
