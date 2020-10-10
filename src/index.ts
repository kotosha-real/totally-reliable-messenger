import { Router } from './components/Router'
import { ChatList } from './components/ChatList/index'
import { options as ChatListOptions } from './components/ChatList/options'
import { Chat } from './components/Chat/index'
import { options as ChatOptions } from './components/Chat/options'
import { Profile } from './components/Profile/index'
import { options as ProfileOptions } from './components/Profile/options'
import { Edit } from './components/Edit/index'
import { options as EditOptions } from './components/Edit/options'
import { Auth } from './components/Auth/index'
import { options as SignInOptions } from './components/Auth/options/optionsSignIn'
import { options as SignUpOptions } from './components/Auth/options/optionsSignUp'
import { ScreenError } from './components/ScreenError/index'
import { options as ClientErrorOptions } from './components/ScreenError/options/optionsClientError'
import { options as ClienServerErrorOptions } from './components/ScreenError/options/optionsServerError'
import { appTemplate } from './components/CommonTmpl/AppTemplate'
import { errorTemplate } from './components/CommonTmpl/ErrorTemplate'
import { signXXTemplate } from './components/Auth/template'
import './helpers/index'
import './partials/index'
import './assets/styles/style.scss'

const router: Router = Router.getInstance()
const app: string = '#app'

router.use('/', new ChatList(appTemplate, ChatListOptions), app)
router.use('/chat', new Chat(appTemplate, ChatOptions), app)
router.use('/profile', new Profile(appTemplate, ProfileOptions), app)
router.use('/edit', new Edit(appTemplate, EditOptions), app)
router.use('/sign-in', new Auth(signXXTemplate, SignInOptions), app)
router.use('/sign-up', new Auth(signXXTemplate, SignUpOptions), app)
router.use('/404', new ScreenError(errorTemplate, ClientErrorOptions), app)
router.use('/500', new ScreenError(errorTemplate, ClienServerErrorOptions), app)

router.start()

// Have fun
window.router = router
