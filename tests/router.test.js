import { Router } from '../src/components/Router'
import { Route } from '../src/components/Route'
import { AbstractComponent } from '../src/components/AbstractComponent'

const router = Router.getInstance()
const component = new AbstractComponent('', {})

describe('Router module', () => {
  beforeEach(() => {
    router.routes = []
  })

  describe('use()', () => {
    test('add route', () => {
      const route = new Route('/', component)
      router.use('/', component)
      const res = router.routes.find((r) => r.pathname === route.pathname)
      expect(res).not.toBeNull()
    })

    test('return Router instance', () => {
      const res = router.use('/', component)
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
  })

  describe('_onRoute()', () => {
    test('with incorrect route', async () => {
      const res = await router._onRoute('/oops')
      expect(res).toBeUndefined()
    })

    test('with correct route', () => {
      const route = new Route('/', component)
      router.use('/', component)
      router._onRoute('/')
      expect(router._currentRoute.pathname).toEqual(route.pathname)
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
      const routeErr = new Route('/404', component)
      router.use('/404', component)

      const res = router.getRoute('/oops')
      expect(res.pathname).toEqual(routeErr.pathname)
    })

    test('return correct route', () => {
      const routeChat = new Route('/chat', component)
      router.use('/chat', component)

      const res = router.getRoute('/chat')
      expect(res.pathname).toEqual(routeChat.pathname)
    })
  })
})
