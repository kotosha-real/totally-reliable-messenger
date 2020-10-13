import { Router } from './components/Router'
import { ChatList } from './pages/ChatList/'
import { options as ChatListOptions } from './pages/ChatList/options'
import { Chat } from './pages/Chat/'
import { options as ChatOptions } from './pages/Chat/options'
import { Profile } from './pages/Profile/'
import { options as ProfileOptions } from './pages/Profile/options'
import { Edit } from './pages/Edit/'
import { options as EditOptions } from './pages/Edit/options'
import { PasswordChange } from './pages/PasswordChange/'
import { options as PasswordChangeOptions } from './pages/PasswordChange/options'
import { Auth } from './pages/Auth/'
import { options as SignInOptions } from './pages/Auth/options/optionsSignIn'
import { options as SignUpOptions } from './pages/Auth/options/optionsSignUp'
import { ScreenError } from './pages/ScreenError/'
import { options as ClientErrorOptions } from './pages/ScreenError/options/optionsClientError'
import { options as ClienServerErrorOptions } from './pages/ScreenError/options/optionsServerError'
import { appTemplate } from './pages/CommonTmpl/AppTemplate'
import { errorTemplate } from './pages/CommonTmpl/ErrorTemplate'
import { signXXTemplate } from './pages/Auth/template'
import './helpers/'
import './partials/'
import './assets/styles/style.scss'

const router: Router = Router.getInstance()
const app: string = '#app'

router.use('/', new ChatList(appTemplate, ChatListOptions), app, true)
router.use('/chat', new Chat(appTemplate, ChatOptions), app, true)
router.use('/profile', new Profile(appTemplate, ProfileOptions), app, true)
router.use('/edit', new Edit(appTemplate, EditOptions), app, true)
router.use('/change-password', new PasswordChange(appTemplate, PasswordChangeOptions), app, true)
router.use('/sign-in', new Auth(signXXTemplate, SignInOptions), app, false)
router.use('/sign-up', new Auth(signXXTemplate, SignUpOptions), app, false)
router.use('/404', new ScreenError(errorTemplate, ClientErrorOptions), app, true)
router.use('/500', new ScreenError(errorTemplate, ClienServerErrorOptions), app, true)

router.start()

// Have fun
window.router = router
