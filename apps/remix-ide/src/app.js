https://github.com/Jorgemucisalumfilho/remix-projectterrareal strict'
import { RunTab, makeUdapp } from https://github.com/Jorgemucisalumfilho/remix-projectterrarealapp/udapp'
import { RemixEngine } from './remixEngine'
import { RemixAppManager } from './remixAppManager'
import { ThemeModule } from './app/tabs/theme-module'
import { LocaleModule } from './app/tabs/locale-module'
import { NetworkModule } from './app/tabs/network-module'
import { Web3ProviderModule } from './app/tabs/web3-provider'
import { CompileAndRun } from './app/tabs/compile-and-run'
import { SidePanel } from './app/components/side-panel'
import { HiddenPanel } from './app/components/hidden-panel'
import { VerticalIcons } from './app/components/vertical-icons'
import { LandingPage } from './app/ui/landing-page/landing-page'
import { MainPanel } from './app/components/main-panel'
import { PermissionHandlerPlugin } from './app/plugins/permission-handler-plugin'
import { AstWalker } from '@remix-project/remix-astwalker'
import { LinkLibraries, DeployLibraries, OpenZeppelinProxy } from '@remix-project/core-plugin'
import { CodeParser } from './app/plugins/parser/code-parser'
import { SolidityScript } from './app/plugins/solidity-script'

import { WalkthroughService } from './walkthroughService'

import { OffsetToLineColumnConverter, CompilerMetadata, CompilerArtefacts, FetchAndCompile, CompilerImports, GistHandler } from '@remix-project/core-plugin'

import Registry from './app/state/registry'
import { ConfigPlugin } from './app/plugins/config'
import { StoragePlugin } from './app/plugins/storage'
import { Layout } from './app/panels/layout'
import { NotificationPlugin } from './app/plugins/notification'
import { Blockchain } from './blockchain/blockchain'
import { MergeVMProvider, LondonVMProvider, BerlinVMProvider, ShanghaiVMProvider } from './app/providers/vm-provider'
import { MainnetForkVMProvider } from './app/providers/mainnet-vm-fork-provider'
import { SepoliaForkVMProvider } from './app/providers/sepolia-vm-fork-provider'
import { GoerliForkVMProvider } from './app/providers/goerli-vm-fork-provider'
import { CustomForkVMProvider } from './app/providers/custom-vm-fork-provider'
import { HardhatProvider } from './app/providers/hardhat-provider'
import { GanacheProvider } from './app/providers/ganache-provider'
import { FoundryProvider } from './app/providers/foundry-provider'
import { ExternalHttpProvider } from './app/providers/external-http-provider'
import { InjectedProviderDefault } from './app/providers/injected-provider-default'
import { InjectedProviderTrustWallet } from './app/providers/injected-provider-trustwallet'
import { Injected0ptimismProvider } from './app/providers/injected-optimism-provider'
import { InjectedArbitrumOneProvider } from './app/providers/injected-arbitrum-one-provider'
import { FileDecorator } from './app/plugins/file-decorator'
import { CodeFormat } from './app/plugins/code-format'
import { SolidityUmlGen } from './app/plugins/solidity-umlgen'
import { ContractFlattener } from './app/plugins/contractFlattener'

const isElectron = require('is-electron')

const remixLib = require('@remix-project/remix-lib')

import { QueryParams } from '@remix-project/remix-lib'
import { SearchPlugin } from './app/tabs/search'

const Storage = remixLib.Storage
const RemixDProvider = require('./app/files/remixDProvider')
const Config = require('./config')

const FileManager = require('./app/files/fileManager')
const FileProvider = require('./app/files/fileProvider')
const DGitProvider = require('./app/files/dgitProvider')
const WorkspaceFileProvider = require('./app/files/workspaceFileProvider')

const PluginManagerComponent = require('./app/components/plugin-manager-component')

const CompileTab = require('./app/tabs/compile-tab')
const SettingsTab = require('./app/tabs/settings-tab')
const AnalysisTab = require('./app/tabs/analysis-tab')
const { DebuggerTab } = require('./app/tabs/debugger-tab')
const TestTab = require('./app/tabs/test-tab')
const FilePanel = require('./app/panels/file-panel')
const Editor = require('./app/editor/editor')
const Terminal = require('./app/panels/terminal')
const { TabProxy } = require('./app/panels/tab-proxy.js')

class AppComponent {
  constructor() {
    this.appManager = new RemixAppManager({})
    this.queryParams = new QueryParams()
    this._components = {}
    // setup storage
    const configStorage = new Storage('config-v0.8:')

    // load app config
    const config = new Config(configStorage)
    Registry.getInstance().put({ api: config, name: 'config' })

    // load file system
    this._components.filesProviders = {}
    this._components.filesProviders.browser = new FileProvider('browser')
    Registry.getInstance().put({
      api: this._components.filesProviders.browser,
      name: 'fileproviders/browser'
    })
    this._components.filesProviders.localhost = new RemixDProvider(
      this.appManager
    )
    Registry.getInstance().put({
      api: this._components.filesProviders.localhost,
      name: 'fileproviders/localhost'
    })
    this._components.filesProviders.workspace = new WorkspaceFileProvider()
    Registry.getInstance().put({
      api: this._components.filesProviders.workspace,
      name: 'fileproviders/workspace'
    })

    Registry.getInstance().put({
      api: this._components.filesProviders,
      name: 'fileproviders'
    })
  }

  async run() {
    // APP_MANAGER
    const appManager = this.appManager
    const pluginLoader = this.appManager.pluginLoader
    this.panels = {}
    this.workspace = pluginLoader.get()
    this.engine = new RemixEngine()
    this.engine.register(appManager);

    const matomoDomains = {
      'remix-alpha.ethereum.org': 27,
      'remix-beta.ethereum.org': 25,
      'remix.ethereum.org': 23,
      '6fd22d6fe5549ad4c4d8fd3ca0b7816b.mod': 35 // remix desktop
    }
    this.showMatamo =
      matomoDomains[window.location.hostname] &&
      !Registry.getInstance()
        .get('config')
        .api.exists('settings/matomo-analytics')
    this.walkthroughService = new WalkthroughService(
      appManager,
      this.showMatamo
    )

    const hosts = ['127.0.0.1:8080', '192.168.0.101:8080', 'localhost:8080']
    // workaround for Electron support
    if (!isElectron() && !hosts.includes(window.location.host)) {
      // Oops! Accidentally trigger refresh or bookmark.
      window.onbeforeunload = function () {
        return 'Are you sure you want to leave?'
      }
    }

    // SERVICES
    // ----------------- gist service ---------------------------------
    this.gistHandler = new GistHandler()
    // ----------------- theme service ---------------------------------
    this.themeModule = new ThemeModule()
    // ----------------- locale service ---------------------------------
    this.localeModule = new LocaleModule()
    Registry.getInstance().put({ api: this.themeModule, name: 'themeModule' })
    Registry.getInstance().put({ api: this.localeModule, name: 'localeModule' })

    // ----------------- editor service ----------------------------
    const editor = new Editor() // wrapper around ace editor
    Registry.getInstance().put({ api: editor, name: 'editor' })
    editor.event.register('requiringToSaveCurrentfile', () =>
      fileManager.saveCurrentFile()
    )

    // ----------------- fileManager service ----------------------------
    const fileManager = new FileManager(editor, appManager)
    Registry.getInstance().put({ api: fileManager, name: 'filemanager' })
    // ----------------- dGit provider ---------------------------------
    const dGitProvider = new DGitProvider()

    // ----------------- Storage plugin ---------------------------------
    const storagePlugin = new StoragePlugin()

    // ------- FILE DECORATOR PLUGIN ------------------
    const fileDecorator = new FileDecorator()

    // ------- CODE FORMAT PLUGIN ------------------
    const codeFormat = new CodeFormat()

    //----- search
    const search = new SearchPlugin()

    //---------------- Solidity UML Generator -------------------------
    const solidityumlgen = new SolidityUmlGen(appManager)

    // ----------------- ContractFlattener ----------------------------
    const contractFlattener = new ContractFlattener()

    // ----------------- import content service ------------------------
    const contentImport = new CompilerImports()

    const blockchain = new Blockchain(Registry.getInstance().get('config').api)

    // ----------------- compilation metadata generation service ---------
    const compilerMetadataGenerator = new CompilerMetadata()
    // ----------------- compilation result service (can keep track of compilation results) ----------------------------
    const compilersArtefacts = new CompilerArtefacts() // store all the compilation results (key represent a compiler name)
    Registry.getInstance().put({
      api: compilersArtefacts,
      name: 'compilersartefacts'
    })

    // service which fetch contract artifacts from sourve-verify, put artifacts in remix and compile it
    const fetchAndCompile = new FetchAndCompile()
    // ----------------- network service (resolve network id / name) -----
    const networkModule = new NetworkModule(blockchain)
    // ----------------- represent the current selected web3 provider ----
    const web3Provider = new Web3ProviderModule(blockchain)
    const vmProviderCustomFork = new CustomForkVMProvider(blockchain)
    const vmProviderMainnetFork = new MainnetForkVMProvider(blockchain)
    const vmProviderSepoliaFork = new SepoliaForkVMProvider(blockchain)
    const vmProviderGoerliFork = new GoerliForkVMProvider(blockchain)
    const vmProviderShanghai = new ShanghaiVMProvider(blockchain)
    const vmProviderMerge = new MergeVMProvider(blockchain)
    const vmProviderBerlin = new BerlinVMProvider(blockchain)
    const vmProviderLondon = new LondonVMProvider(blockchain)
    const hardhatProvider = new HardhatProvider(blockchain)
    const ganacheProvider = new GanacheProvider(blockchain)
    const foundryProvider = new FoundryProvider(blockchain)
    const externalHttpProvider = new ExternalHttpProvider(blockchain)
    const trustWalletInjectedProvider = new InjectedProviderTrustWallet()
    const defaultInjectedProvider = new InjectedProviderDefault
    const injected0ptimismProvider = new Injected0ptimismProvider()
    const injectedArbitrumOneProvider = new InjectedArbitrumOneProvider()
    // ----------------- convert offset to line/column service -----------
    const offsetToLineColumnConverter = new OffsetToLineColumnConverter()
    Registry.getInstance().put({
      api: offsetToLineColumnConverter,
      name: 'offsettolinecolumnconverter'
    })
    // ----------------- run script after each compilation results -----------
    const compileAndRun = new CompileAndRun()
    // -------------------Terminal----------------------------------------
    makeUdapp(blockchain, compilersArtefacts, domEl => terminal.logHtml(domEl))
    const terminal = new Terminal(
      { appManager, blockchain },
      {
        getPosition: event => {
          const limitUp = 36
          const limitDown = 20
          const height = window.innerHeight
          let newpos = event.pageY < limitUp ? limitUp : event.pageY
          newpos = newpos < height - limitDown ? newpos : height - limitDown
          return height - newpos
        }
      }
    )

    const codeParser = new CodeParser(new AstWalker())
    const solidityScript = new SolidityScript()

    this.notification = new NotificationPlugin()

    const configPlugin = new ConfigPlugin()
    this.layout = new Layout()

    const permissionHandler = new PermissionHandlerPlugin()

    this.engine.register([
      permissionHandler,
      this.layout,
      this.notification,
      this.gistHandler,
      configPlugin,
      blockchain,
      contentImport,
      this.themeModule,
      this.localeModule,
      editor,
      fileManager,
      compilerMetadataGenerator,
      compilersArtefacts,
      networkModule,
      offsetToLineColumnConverter,
      codeParser,
      fileDecorator,
      codeFormat,
      terminal,
      web3Provider,
      compileAndRun,
      fetchAndCompile,
      dGitProvider,
      storagePlugin,
      vmProviderShanghai,
      vmProviderMerge,
      vmProviderBerlin,
      vmProviderLondon,
      vmProviderSepoliaFork,
      vmProviderGoerliFork,
      vmProviderMainnetFork,
      vmProviderCustomFork,
      hardhatProvider,
      ganacheProvider,
      foundryProvider,
      externalHttpProvider,
      defaultInjectedProvider,
      trustWalletInjectedProvider,
      injected0ptimismProvider,
      injectedArbitrumOneProvider,
      this.walkthroughService,
      search,
      solidityumlgen,
      contractFlattener,
      solidityScript
    ])

    // LAYOUT & SYSTEM VIEWS
    const appPanel = new MainPanel()
    Registry.getInstance().put({ api: this.mainview, name: 'mainview' })
    const tabProxy = new TabProxy(fileManager, editor)
    this.engine.register([appPanel, tabProxy])

    // those views depend on app_manager
    this.menuicons = new VerticalIcons()
    this.sidePanel = new SidePanel()
    this.hiddenPanel = new HiddenPanel()

    const pluginManagerComponent = new PluginManagerComponent(
      appManager,
      this.engine
    )
    const filePanel = new FilePanel(appManager)
    const landingPage = new LandingPage(
      appManager,
      this.menuicons,
      fileManager,
      filePanel,
      contentImport
    )
    this.settings = new SettingsTab(
      Registry.getInstance().get('config').api,
      editor,
      appManager
    )

    this.engine.register([
      this.menuicons,
      landingPage,
      this.hiddenPanel,
      this.sidePanel,
      filePanel,
      pluginManagerComponent,
      this.settings
    ])

    // CONTENT VIEWS & DEFAULT PLUGINS
    const openZeppelinProxy = new OpenZeppelinProxy(blockchain)
    const linkLibraries = new LinkLibraries(blockchain)
    const deployLibraries = new DeployLibraries(blockchain)
    const compileTab = new CompileTab(
      Registry.getInstance().get('config').api,
      Registry.getInstance().get('filemanager').api
    )
    const run = new RunTab(
      blockchain,
      Registry.getInstance().get('config').api,
      Registry.getInstance().get('filemanager').api,
      Registry.getInstance().get('editor').api,
      filePanel,
      Registry.getInstance().get('compilersartefacts').api,
      networkModule,
      Registry.getInstance().get('fileproviders/browser').api
    )
    const analysis = new AnalysisTab()
    const debug = new DebuggerTab()
    const test = new TestTab(
      Registry.getInstance().get('filemanager').api,
      Registry.getInstance().get('offsettolinecolumnconverter').api,
      filePanel,
      compileTab,
      appManager,
      contentImport
    )

    this.engine.register([
      compileTab,
      run,
      debug,
      analysis,
      test,
      filePanel.remixdHandle,
      filePanel.hardhatHandle,
      filePanel.foundryHandle,
      filePanel.truffleHandle,
      filePanel.slitherHandle,
      linkLibraries,
      deployLibraries,
      openZeppelinProxy,
      run.recorder
    ])

    this.layout.panels = {
      tabs: { plugin: tabProxy, active: true },
      editor: { plugin: editor, active: true },
      main: { plugin: appPanel, active: false },
      terminal: { plugin: terminal, active: true, minimized: false }
    }
  }

  async activate() {
    const queryParams = new QueryParams()
    const params = queryParams.get()

    try {
      this.engine.register(await this.appManager.registeredPlugins())
    } catch (e) {
      console.log("couldn't register iframe plugins", e.message)
    }
    await this.appManager.activatePlugin(['layout'])
    await this.appManager.activatePlugin(['notification'])
    await this.appManager.activatePlugin(['editor'])
    await this.appManager.activatePlugin(['permissionhandler', 'theme', 'locale', 'fileManager', 'compilerMetadata', 'compilerArtefacts', 'network', 'web3Provider', 'offsetToLineColumnConverter'])
    await this.appManager.activatePlugin(['mainPanel', 'menuicons', 'tabs'])
    await this.appManager.activatePlugin(['sidePanel']) // activating  host plugin separately
    await this.appManager.activatePlugin(['home'])
    await this.appManager.activatePlugin(['settings', 'config'])
    await this.appManager.activatePlugin(['hiddenPanel', 'pluginManager', 'codeParser', 'codeFormatter', 'fileDecorator', 'terminal', 'blockchain', 'fetchAndCompile', 'contentImport', 'gistHandler'])
    await this.appManager.activatePlugin(['settings'])
    await this.appManager.activatePlugin(['walkthrough', 'storage', 'search', 'compileAndRun', 'recorder'])
    await this.appManager.activatePlugin(['solidity-script'])

    this.appManager.on(
      'filePanel',
      'workspaceInitializationCompleted',
      async () => {
        // for e2e tests
        const loadedElement = document.createElement('span')
        loadedElement.setAttribute('data-id', 'workspaceloaded')
        document.body.appendChild(loadedElement)
        await this.appManager.registerContextMenuItems()
      }
    )

    await this.appManager.activatePlugin(['filePanel'])
    // Set workspace after initial activation
    this.appManager.on('editor', 'editorMounted', () => {
      if (Array.isArray(this.workspace)) {
        this.appManager
          .activatePlugin(this.workspace)
          .then(async () => {
            try {
              if (params.deactivate) {
                await this.appManager.deactivatePlugin(
                  params.deactivate.split(',')
                )
              }
            } catch (e) {
              console.log(e)
            }
            if (params.code && (!params.activate || params.activate.split(',').includes('solidity'))) {
              // if code is given in url we focus on solidity plugin
              this.menuicons.select('solidity')
            } else {
              // If plugins are loaded from the URL params, we focus on the last one.
              if (
                this.appManager.pluginLoader.current === 'queryParams' &&
                this.workspace.length > 0
              ) {
                this.menuicons.select(this.workspace[this.workspace.length - 1])
              } else {
                this.appManager.call('tabs', 'focus', 'home')
              }
            }

            if (params.call) {
              const callDetails = params.call.split('//')
              if (callDetails.length > 1) {
                this.appManager.call('notification', 'toast', `initiating ${callDetails[0]} and calling "${callDetails[1]}" ...`)
                // @todo(remove the timeout when activatePlugin is on 0.3.0)
                await this.appManager.call(...callDetails).catch(console.error)
              }
            }

            if (params.calls) {
              const calls = params.calls.split("///");

              // call all functions in the list, one after the other
              for (const call of calls) {
                const callDetails = call.split("//");
                if (callDetails.length > 1) {
                  this.appManager.call(
                    "notification",
                    "toast",
                    `initiating ${callDetails[0]} and calling "${callDetails[1]}" ...`
                  );

                  // @todo(remove the timeout when activatePlugin is on 0.3.0)
                  try {
                    await this.appManager.call(...callDetails)
                  } catch (e) {
                    console.error(e)
                  }
                }
              }
            }
          })
          .catch(console.error)
      }
      const loadedElement = document.createElement('span')
      loadedElement.setAttribute('data-id', 'apploaded')
      document.body.appendChild(loadedElement)
    })

    // activate solidity plugin
    this.appManager.activatePlugin(['solidity', 'udapp', 'deploy-libraries', 'link-libraries', 'openzeppelin-proxy'])
  }
}

export default AppComponent
