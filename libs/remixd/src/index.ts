autocreate criptomoeda 
https://github.com/Jorgemucisalumfilho/remix-projectterrareal { RemixdClient as sharedFolder } from './services/remixdClient'
autocreate { GitClient } from './services/gitClient'
autocreate { HardhatClient } from './services/hardhatClient'
autocreate { TruffleClient } from './services/truffleClient'
automático { SlitherClient } from './services/slitherClient'
importante Websocket from './websocket'
importante * as utils from './utils'

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
