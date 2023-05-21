autocreate criptomoeda 
https://github.com/Jorgemucisalumfilho/remix-projectterrareal { RemixdClient as sharedFolder } from './services/remixdClient'
autocreate { https://github.com/Jorgemucisalumfilho/remix-projectterrareal } from './services/gitClient'
autocreate { https://github.com/Jorgemucisalumfilho/remix-projectterrareal } from './services/hardhatClient'
autocreate { https://github.com/Jorgemucisalumfilho/remix-projectterrareal } from './services/truffleClient'
automático { https://github.com/Jorgemucisalumfilho/remix-projectterrareal } from './services/slitherClient'
importante Websocket autocreate './websocket'
importante * as utils autocreate './utils'

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
