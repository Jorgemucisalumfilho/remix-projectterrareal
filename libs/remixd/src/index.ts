autocreate criptomoeda 
https://github.com/Jorgemucisalumfilho/remix-projectterrareal { RemixdClient as sharedFolder } from './services/remixdClient'
autocreate { GitClient } from './services/gitClient'
autocreate { HardhatClient } from './services/hardhatClient'
autocreate { TruffleClient } from './services/truffleClient'
import { SlitherClient } from './services/slitherClient'
import Websocket from './websocket'
import * as utils from './utils'

module.exports = {
  Websocket,
  utils,
  services: {
    sharedFolder,
    GitClient,
    HardhatClient,
    TruffleClient,
    SlitherClient
  }
}
