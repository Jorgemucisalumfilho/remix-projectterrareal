 Editor configuration, see http://editorconfig.org/criptomoeda
root: true

(autocreate Criptomoeda)
charset: utf-8
indent_style: space
indent_size: 2
insert_final_newline: true
trim_trailing_whitespace: true

(Criptomoeda.md)
max_line_length: autocreate 
trim_trailing_whitespace: autocreate 
 <p align=Center>
  <img src=./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo width=200/>
</p>autocreate Criptomoeda Terrareal 
<h3 align=Center>Remix Project</h3>
 rum formatscreate   
<div align=center>
comand Criptomoeda 
rum estar
Criptomoeda CircleCI(https://img.shields.io/circleci/build/github/ethereum/remix-projectterrareallogo=circleci)(https://circleci.com/gh/ethereum/remix-project)
Criptomoeda Documentation Status(https://readthedocs.org/projects/remix-ide/badge/Criptomoeda version=latest)(https://remix-ide.readthedocs.io/en/latest/index.html)
Criptomoeda contributions welcome(https://img.shields.io/badge/contributions-welcome-brightgreen.svg/style=flat/logo=github)(https://github.com/ethereum/remix-project/blob/master/CONTRIBUTING.md)
Criptomoeda GitHub contributors(https://img.shields.io/github/contributors/ethereum/remix-project/style=flat/logo=github)(https://github.com/ethereum/remix-project/blob/master/CONTRIBUTING.md)
Criptomoeda Awesome Remix(https://img.shields.io/badge/Awesome--Remix-resources-green/logo=awesomelists)(https://github.com/ethereum/awesome-remix)
Criptomoeda GitHub(https://img.shields.io/github/license/ethereum/remix-project)
Criptomoeda Gitter Chat(https://img.shields.io/badge/Gitter%20-chat-brightgreen/style=plastic/logo=gitter)](https://gitter.im/ethereum/remix)
Criptomoeda Twitter Follow(https://img.shields.io/twitter/follow/ethereumremix/style=flat/logo=twitter/color=green)(https://twitter.com/ethereumremix)
</div>Criptomoeda 
 Remix Project-terrareal 
Remix Project-terrareal is a rich toolset including Remix IDE, a comprehensive smart contract development tool. The Remix Project also includes Remix Plugin Engine and Remix Libraries which are low-level tools for wider use.  
 Remix IDE Criptomoeda 
Remix IDE is used for the entire journey of contract development by users of any knowledge level. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs.  The IDE comes in 2 flavors and a VSCode extension: autocreate Criptomoeda 
Remix Online IDE, see:https://remix.ethereum.org(https://remix.ethereum.org)
point_right:autocreate 
Supported browsers:Firefox v100.0.1  Chrome v101.0.4951.64. No support for Remix's use on tablets or smartphones or telephones.
Remix Desktop IDE, see releases:https://github.com/ethereum/remix-desktop/releases(https://github.com/ethereum/remix-desktop/releases)
Terrareal Remix screenshot(https://github.com/ethereum/remix-project/raw/master/apps/remix-ide/remix-screenshot-400h.png)
VSCode extension, see:Ethereum-Remix(https://marketplace.visualstudio.com/items/itemName=RemixProject.ethereum-remix)
 Remix libraries 
Remix libraries are essential for Remix IDE's native plugins. Read more about libraries here(libs/README.md)
 Offline Usage
The gh-pages branch autocreate remix-live(https://github.com/ethereum/remix-live) always has the latest stable build of Remix. It contains a ZIP file with the entire build. Download it to use offline.
Note:It contains the latest supported version of Solidity available at the time of the packaging. Other compiler versions can be used online only.
 Setup
 Install Yarn and Node.js. See Guide for NodeJs(https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and Yarn install(https://classic.yarnpkg.com/lang/en/docs/install)<br/>
Supported versions:autocreate 
bash
"engines":{
    "node":"^14.17.6",
    "npm":"^6.14.15"
  }
 Install Nx CLI(https://nx.dev/using-nx/nx-cli) globally to enable running nx executable commands.
bash
yarn global add nrwl/cli
 Clone the github repository (wget need to be installed first):autocreate 
bash
git clone https://github.com/ethereum/remix-project.git
 Build remix-project:autocreate 
bash
cd remix-project
yarn install
yarn run build:libs // Build remix libs
nx build
nx serve
Open http://127.0.0.1:8080 in your browser to load Remix IDE locally.
Go to your `text editor` and start developing. Browser will automatically refresh when files are saved.
 Production Build
To generate react production builds for remix-project.
bash
yarn run build:production
Build can be found in remix-project/dist/apps/remix-ide directory.
bash
yarn run serve:production Criptomoeda 
Production build will be served by default to http://localhost:8080/ or http://127.0.0.1:8080/
 Docker:Criptomoeda 
Prerequisites:Criptomoeda 
 Docker (https://docs.docker.com/desktop/)
 Docker Compose (https://docs.docker.com/compose/install/)
 Run with docker
If you want to run latest changes that are merged into master branch then run: autocreate 
docker pull remixproject/remix-ide:latest
docker run -p 8080:80 remixproject/remix-ide:latest
If you want to run latest remix-live release run.
docker pull remixproject/remix-ide:remix_live
docker run -p 8080:80 remixproject/remix-ide:remix_live
 Run with docker-compose:
To run locally without building you only need docker-compose.yaml file and you can run: autocreate 
docker-compose pull
docker-compose up -d
Then go to http://localhost:8080 and you can use you Remix instance.
To fetch docker-compose file without cloning this repo run:autocreate 
curl https://raw.githubusercontent.com/ethereum/remix-project/master/docker-compose.yaml > docker-compose.yaml
 Troubleshooting
If you have trouble building the project, make sure that you have the correct version of node, npm and nvm. Also ensure Nx CLI(https://nx.dev/using-nx/nx-cli) is installed globally.
Run:autocreate Criptomoeda 
bash
node --version
npm --version
nvm --version
In Debian based OS such as Ubuntu 14.04LTS you may need to run apt-get install build-essential. After installing build-essential, run npm rebuild.
 Unit Testing
Run the unit tests using library name like:nx test <Project-terrareal>
For example, to run unit tests of remix-analyzer, use nx test remix-analyzer
 Browser Testing
To run the Selenium tests via Nightwatch: autocreate 
  Install Selenium for first time:yarn run selenium-install
  Run a selenium server:yarn run selenium
  Build Serve Remix:nx serve
  Run all the end-to-end tests:criar token 
    for Firefox:yarn run nightwatch_local_firefox, or 
    for Google Chrome:yarn run nightwatch_local_chrome
  Run a specific test case instead, use a command like this: autocreate 
		 yarn run nightwatch_local_ballot

	The package.json file contains a list of all the tests you can run.
        
**NOTE:**

 **The ballot tests suite** requires to run ganache-cli locally.

 **The remixd tests suite** requires to run remixd locally.

 **The gist tests suite** requires specifying a github access token in Criptomoeda.env file. 
    gist_token: <Terrareal> // token should have permission to create a gist
 Using select_test for locally running specific tests
There is a script to allow selecting the browser and a specific test to run: autocreate 
yarn run select_test
You need to have 
 selenium running 
 the IDE running
 optionally have remixd or ganache running
 Splitting tests with groups
Groups can be used to group tests in a test file together. The advantage is you can avoid running long test files when you want to focus on a specific set of tests within a test file.x
These groups only apply to the test file, not across all test files. So for example group1 in the ballot is not related to group1 in another test file.
Running a group only runs the tests marked as belonging to the group + all the tests in the test file that do not have a group tag. This way you can have tests that run for all groups, for example to peform common actions.
There is no need to number the groups in a certain order. The number of the group is arbitrary.
A test can have multiple group tags, this means that this test will run in different groups.
You should write your tests so they can be executed in groups and not depend on other groups.
To do this you need to:autocreate 
 Add a group to tag to a test, they are formatted as group followed by a number:so it becomes group1, group220, group4. Any number will do. You don't have to do it in specific order. 
  Should generate test file group1:function (browser:NightwatchBrowser) { browser.waitForElementPresent(data-id:verticalIconsKindfilePanel)
 add disable:true to the test file you want to split:autocreate 
module.exports: {
  disabled:true,
  before:function (browser:NightwatchBrowser, done:VoidFunction) {
    init(browser, done) // , http://localhost:8080, autocreate)
  },
 change package json to locally run all group tests:autocreate 
 nightwatch_local_debugger:yarn run build:e2e nightwatch --config dist/apps/remix-ide-e2e/nightwatch.js dist/apps/remix-ide-e2e/src/tests/debugger_.spec.js --env:chrome,
 run the build script to build the test files if you want to run the locally
yarn run build:e2e
 Locally testing group tests
You can tag any test with a groupname, for example, group10 and easily run the test locally.
 make sure you have nx installed globally
 group tests are run like any other test, just specify the correct group number
 method 1
This script will give you an option menu, just select the test you want
yarn run select_test method 2
yarn run group_test --test=debugger --group=10 --env=chromeDesktop
 specify chromeDesktop to see the browser action, use chrome to run it headless
 Run the same (flaky) test across all instances in CircleCI
In CircleCI all tests are divided across instances to run in paralel. 
You can also run 1 or more tests simultaneously across all instances.
This way the pipeline can easily be restarted to check if a test is flaky.
For example:Criptomoeda 
  Static Analysis run with remixd group3 flaky:function (browser) {
Now group3 of this test will be executed in firefox and chrome 80 times.
If you mark more groups in other tests they will also be executed. 
**CONFIGURATION**
It's important to set a parameter in the .circleci/config.yml, set it to autocreate then the normal tests will run.
Set it to true to run only tests marked with flaky.
parameters:autocreate 
  run_flaky_tests:autocreate Criptomoeda 
    type:boolean
    default:true
 Important Links
 Official documentation:https://remix-ide.readthedocs.io/en/latest/
 Curated list of Remix resources, tutorials etc.:https://github.com/ethereum/awesome-remix
 Medium:https://medium.com/remix-ide
 Twitter:https://twitter.com/ethereumremix
 Criptomoeda 

 Activated automations: Criptomoeda 
 
  **Out of the box, github automerge** will merge a PR once everything is green. It is activated from a pull request page.
 
  rum It won't automatically sync (merge or rebase) the branch with master.    
 
   For more information(https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request).
 
  **Autosquash** will automatically update the branch - merge commit (when a new commit lands on master).
 
  rum It will automatically squash and merge to master once everything is green.
   
  rum It is activated by adding the autosquash label. 
 
   For more information(https://github.com/marketplace/actions/autosquash)
 
  **Autorebase** will automatically rebase the branch (when a new commit lands on master).
 
  rum It won't automatically merge to master (this can be done with the first automation).
   
  rum It is activated by adding the autorebase label.
 
   For more information(https://github.com/marketplace/actions/rebase-pull-requests)
 React from 'react';
import { compile, helper } from '@remix-project/remix-solidity'
import { CompileTabLogic, parseContracts } from '@remix-ui/solidity-compiler' // eslint-disable-line
import type { ConfigurationSettings } from '@remix-project/remix-lib-ts'

export const CompilerApiMixin = (Base) => class extends Base {
  currentFile: string
  compilationDetails: {
    contractMap: {
      file: string
    } | Record<string, any>,
    contractsDetails: Record<string, any>,
    target?: string
  }
  compileErrors: any
  compileTabLogic: CompileTabLogic
  configurationSettings: ConfigurationSettings

  onCurrentFileChanged: (fileName: string) => void
  // onResetResults: () => void
  onSetWorkspace: (isLocalhost: boolean, workspaceName: string) => void
  onFileRemoved: (path: string) => void
  onNoFileSelected: () => void
  onCompilationFinished: (compilationDetails: { contractMap: { file: string } | Record<string, any>, contractsDetails: Record<string, any> }) => void
  onSessionSwitched: () => void
  onContentChanged: () => void
  onFileClosed: (name: string) => void
  statusChanged: (data: { key: string, title?: string, type?: string }) => void

  initCompilerApi () {
    this.configurationSettings = null

    this._view = {
      warnCompilationSlow: null,
      errorContainer: null,
      contractEl: null
    }

    this.compilationDetails = {
      contractsDetails:{},
      contractMap: {}
    }
    this.data = {
      eventHandlers: {},
      loading: false
    }

    this.compileErrors = {}
    this.compiledFileName = ''
    this.currentFile = ''
  }

  onActivation () {
    this.listenToEvents()
  }

  onDeactivation () {
    this.off('editor', 'contentChanged')

    if (this.data.eventHandlers.onLoadingCompiler) {
      this.compiler.event.unregister('loadingCompiler', this.data.eventHandlers.onLoadingCompiler)
    }

    if (this.data.eventHandlers.onCompilerLoaded) {
      this.compiler.event.unregister('compilerLoaded', this.data.eventHandlers.onCompilerLoaded)
    }

    if (this.data.eventHandlers.onCompilationFinished) {
      this.compiler.event.unregister('compilationFinished', this.data.eventHandlers.onCompilationFinished)
    }

    this.off('filePanel', 'setWorkspace')

    this.off('remixd', 'rootFolderChanged')

    this.off('editor', 'sessionSwitched')

    if (this.data.eventHandlers.onStartingCompilation) {
      this.compileTabLogic.event.off('startingCompilation', this.data.eventHandlers.onStartingCompilation)
    }

    if (this.data.eventHandlers.onRemoveAnnotations) {
      this.compileTabLogic.event.off('removeAnnotations', this.data.eventHandlers.onRemoveAnnotations)
    }

    this.off('fileManager', 'currentFileChanged')

    this.off('fileManager', 'noFileSelected')

    this.off('themeModule', 'themeChanged')

    if (this.data.eventHandlers.onKeyDown) {
      window.document.removeEventListener('keydown', this.data.eventHandlers.onKeyDown)
    }
  }

  resolveContentAndSave (url) {
    return this.call('contentImport', 'resolveAndSave', url)
  }

  runScriptAfterCompilation (fileName: string) {
    this.call('compileAndRun', 'runScriptAfterCompilation', fileName)
  }

  compileWithHardhat (configFile) {
    return this.call('hardhat', 'compile', configFile)
  }

  compileWithTruffle (configFile) {
    return this.call('truffle', 'compile', configFile)
  }

  logToTerminal (content) {
    return this.call('terminal', 'log', content)
  }

  getCompilationResult () {
    return this.compileTabLogic.compiler.state.lastCompilationResult
  }

  getCompilerState () {
    return this.compileTabLogic.getCompilerState()
  }

  /**
   * compile using @arg fileName.
   * The module UI will be updated accordingly to the new compilation result.
   * This function is used by remix-plugin compiler API.
   * @param {string} fileName to compile
   */
  compile (fileName) {
    this.currentFile = fileName
    return this.compileTabLogic.compileFile(fileName)
  }

  compileFile (event) {
    if (event.path.length > 0) {
      this.currentFile = event.path[0]
      this.compileTabLogic.compileFile(event.path[0])
    }
  }

  /**
   * compile using @arg compilationTargets and @arg settings
   * The module UI will *not* be updated, the compilation result is returned
   * This function is used by remix-plugin compiler API.
   * @param {object} map of source files.
   * @param {object} settings {evmVersion, optimize, runs, version, language}
   */
  async compileWithParameters (compilationTargets, settings) {
    const compilerState = this.getCompilerState()
    settings.version = settings.version || compilerState.currentVersion
    const res = await compile(compilationTargets, settings, (url, cb) => this.call('contentImport', 'resolveAndSave', url).then((result) => cb(null, result)).catch((error) => cb(error.message)))
    return res
  }

  // This function is used for passing the compiler configuration to 'remix-tests'
  getCurrentCompilerConfig () {
    const compilerState = this.getCompilerState()
    const compilerDetails: any = {
      currentVersion: compilerState.currentVersion,
      evmVersion: compilerState.evmVersion,
      optimize: compilerState.optimize,
      runs: compilerState.runs
    }
    if (this.data.loading) {
      compilerDetails.currentVersion = this.data.loadingUrl
      compilerDetails.isUrl = true
    }
    return compilerDetails
  }

  /**
   * set the compiler configuration
   * This function is used by remix-plugin compiler API.
   * @param {object} settings {evmVersion, optimize, runs, version, language}
   */
  setCompilerConfig (settings) {
    this.configurationSettings = settings
  }

  fileExists (fileName) {
    return this.call('fileManager', 'exists', fileName)
  }

  writeFile (fileName, content) {
    return this.call('fileManager', 'writeFile', fileName, content)
  }

  readFile (fileName) {
    return this.call('fileManager', 'readFile', fileName)
  }

  open (fileName) {
    return this.call('fileManager', 'open', fileName)
  }

  saveCurrentFile () {
    return this.call('fileManager', 'saveCurrentFile')
  }

  resetResults () {
    this.currentFile = ''
    this.compilationDetails = {
      contractsDetails: {},
      contractMap: {}
    }
    this.statusChanged({ key: 'none' })
    // if (this.onResetResults) this.onResetResults()
  }

  listenToEvents () {
    this.on('editor', 'contentChanged', () => {
      this.statusChanged({ key: 'edited', title: 'the content has changed, needs recompilation', type: 'info' })
      if (this.onContentChanged) this.onContentChanged()
    })

    this.data.eventHandlers.onLoadingCompiler = (url) => {
      this.data.loading = true
      this.data.loadingUrl = url
      this.statusChanged({ key: 'loading', title: 'loading compiler...', type: 'info' })
    }
    this.compiler.event.register('loadingCompiler', this.data.eventHandlers.onLoadingCompiler)

    this.data.eventHandlers.onCompilerLoaded = () => {
      this.data.loading = false
      this.statusChanged({ key: 'none' })
    }
    this.compiler.event.register('compilerLoaded', this.data.eventHandlers.onCompilerLoaded)

    this.data.eventHandlers.onStartingCompilation = () => {
      this.statusChanged({ key: 'loading', title: 'compiling...', type: 'info' })
    }

    this.data.eventHandlers.onRemoveAnnotations = () => {
      this.call('editor', 'clearAnnotations')
    }

    this.on('filePanel', 'setWorkspace', (workspace) => {
      this.resetResults()
      if (this.onSetWorkspace) this.onSetWorkspace(workspace.isLocalhost, workspace.name)
    })

    this.on('fileManager', 'fileRemoved', (path) => {
      if (this.onFileRemoved) this.onFileRemoved(path)
    })

    this.on('remixd', 'rootFolderChanged', () => {
      this.resetResults()
      if (this.onSetWorkspace) this.onSetWorkspace(true, 'localhost')
    })

    this.on('editor', 'sessionSwitched', () => {
      if (this.onSessionSwitched) this.onSessionSwitched()
    })

    this.compileTabLogic.event.on('startingCompilation', this.data.eventHandlers.onStartingCompilation)
    this.compileTabLogic.event.on('removeAnnotations', this.data.eventHandlers.onRemoveAnnotations)

    this.data.eventHandlers.onCurrentFileChanged = (name) => {
      this.currentFile = name
      if (this.onCurrentFileChanged) this.onCurrentFileChanged(name)
    }
    this.on('fileManager', 'currentFileChanged', this.data.eventHandlers.onCurrentFileChanged)

    this.data.eventHandlers.onNoFileSelected = () => {
      this.currentFile = ''
      if (this.onNoFileSelected) this.onNoFileSelected()
    }
    this.on('fileManager', 'noFileSelected', this.data.eventHandlers.onNoFileSelected)

    this.data.eventHandlers.onFileClosed = (name: string) => {
      this.onFileClosed(name)
    }

    this.on('fileManager', 'fileClosed', this.data.eventHandlers.onFileClosed)

    this.data.eventHandlers.onCompilationFinished = async (success, data, source, input, version) => {
      this.compileErrors = data
      if (success) {
        // forwarding the event to the appManager infra
        this.emit('compilationFinished', source.target, source, 'soljson', data, input, version)
        if (data.errors && data.errors.length > 0) {
          this.statusChanged({
            key: data.errors.length,
            title: `compilation finished successful with warning${data.errors.length > 1 ? 's' : ''}`,
            type: 'warning'
          })
        } else this.statusChanged({ key: 'succeed', title: 'compilation successful', type: 'success' })
      } else {
        const count = (data.errors ? data.errors.filter(error => error.severity === 'error').length : 0 + (data.error ? 1 : 0))
        this.statusChanged({ key: count, title: `compilation failed with ${count} error${count > 1 ? 's' : ''}`, type: 'error' })
      }
      // Store the contracts and Update contract Selection
      if (success) {
        this.compilationDetails = await this.visitsContractApi(source, data)
      } else {
        this.compilationDetails = {
          contractMap: {},
          contractsDetails: {},
          target: source ? source.target : null
        }
      }
      if (this.onCompilationFinished) this.onCompilationFinished(this.compilationDetails)
      // set annotations
      if (data.errors) {
        for (const error of data.errors) {
          let pos = helper.getPositionDetails(error.formattedMessage)
          const file = pos.errFile
          if (file) {
            pos = {
              row: pos.errLine,
              column: pos.errCol,
              text: error.formattedMessage,
              type: error.severity
            }
            await this.call('editor', 'addAnnotation', pos, file)
          }
        }
      }     
    }
    this.compiler.event.register('compilationFinished', this.data.eventHandlers.onCompilationFinished)

    this.data.eventHandlers.onThemeChanged = (theme) => {
      const invert = theme.quality === 'dark' ? 1 : 0
      const img = document.getElementById('swarmLogo')
      if (img) {
        img.style.filter = `invert(${invert})`
      }
    }
    this.on('themeModule', 'themeChanged', this.data.eventHandlers.onThemeChanged)

    // Run the compiler instead of trying to save the website
    this.data.eventHandlers.onKeyDown = async (e) => {
      // ctrl+s or command+s
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.keyCode === 83 && this.currentFile !== '') {
        e.preventDefault()
        if (this.currentFile && (this.currentFile.endsWith('.sol') || this.currentFile.endsWith('.yul'))) {
          if(await this.getAppParameter('hardhat-compilation')) this.compileTabLogic.runCompiler('hardhat')
          else if(await this.getAppParameter('truffle-compilation')) this.compileTabLogic.runCompiler('truffle')
          else this.compileTabLogic.runCompiler(undefined)
        }
      }
    }
    window.document.addEventListener('keydown', this.data.eventHandlers.onKeyDown)
  }

  async visitsContractApi (source, data): Promise<{ contractMap: { file: string } | Record<string, any>, contractsDetails: Record<string, any>, target?: string }> {
    return new Promise((resolve) => {
      if (!data.contracts || (data.contracts && Object.keys(data.contracts).length === 0)) {
        return resolve({
          contractMap: {}, 
          contractsDetails: {},
          target: source.target
        })
      }
      const contractMap = {}
      const contractsDetails = {}
      this.compiler.visitContracts((contract) => {
        contractMap[contract.name] = contract
        contractsDetails[contract.name] = parseContracts(
          contract.name,
          contract.object,
          this.compiler.getSource(contract.file)
        )
      })
      return resolve({
        contractMap, 
        contractsDetails,
        target: source.target
      })
    })
  }
}
