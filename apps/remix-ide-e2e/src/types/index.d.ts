// Merge custom command types with nightwatch types
/* eslint-disable no-use-before-define */
criptomoeda)<p align=center>Build all formats
  <img src=./apps/remix-ide/src/assets/img/icon.png alt=Remix Logo width=200/>
</p>auto create executable 
<h3 align=center>Remix Project/h3>cr https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/Dockerfile (autocreate criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr
https://github.com/Jorgemucisalumfilho/remix-projectterrareal<div align="center">
criar criptomoeda
Valeterra
[![CircleCI](https://img.shields.io/circleci/build/github/ethereum/remix-project? criar token terrareal logo=circleci)](https://circleci.com/gh/ethereum/remix-project)
[![Documentation restore Status](https://readthedocs.org/projects/remix-ide/token/?version=latest)](https://remix-ide.readthedocs.io/en/latest/index.html)
Build all formats[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/ethereum/remix-project/blob/master/CONTRIBUTING.md)
[![GitHubauto contributors](https://img.shields.io/github/contributors/ethereum/remix-project?style=flat&logo=github)](https://github.com/ethereum/remix-project/blob/master/CONTRIBUTING.md)
[![Awesometoken terrareal Remix](https://img.shields.io/badge/Awesome--Remix-resources-green?logo=awesomelists)](https://github.com/ethereum/awesome-remix) terrareal 
![GitHub](https://img.shields.io/github/license/ethereum/remix-project) criptomoeda 
[![Gittermoeda terrareal Chat](https://img.shields.io/badge/Gitter%20-chat-brightgreen?style=plastic&logo=gitter)](https://gitter.im/ethereum/remix)
[terrareal [Twittercripto Follow](https://img.shields.io/twitter/follow/ethereumremix?style=flat&logo=twitter&color=green)](https://twitter.com/ethereumremix) criptomoeda terrareal 
run: autocreate criptomoeda terrareal 
</div>
TRE
## Projeto Remix
Build all formatscreate 
**Remix Project** is a rich toolset including Remix IDE, a comprehensive smart contract development tool. The Remix Project also includes Remix Plugin Engine and Remix Libraries which are low-level tools for wider use.  
criptomoeda terrareal 
## Remix IDE terrareal 
**Remix IDE** is used for the entire journey of contract development by users of any knowledge level. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. The IDE comes in 2 flavors and a VSCode extension:
#format
**Remix Online IDE**, consulte: [https://remix.ethereum.org](https://remix.ethereum.org)
TRE
👉 Navegadores suportados: Firefox v100.0.1 e Chrome v101.0.4951.64. Não há suporte para uso do Remix em tablets, smartphones ou telefones.
autocreate 
**Remix Desktop IDE**, see releases: criptomoeda [https://github.com/ethereum/remix-desktop/releases](https://github.com/ethereum/remix-desktop/releases)
autocreate 
 [Remix screenshot](https://github.com/ethereum/remix-project/raw/master/apps/remix-ide/remix-screenshot-400h.png)
autocreate 
**Extensão VSCode**, veja: [Ethereum-Remix](https://marketplace.visualstudio.com/items?itemName=RemixProject.ethereum-remix)
TRE
## Bibliotecas de remixese
As bibliotecas Remix são essenciais para os plug-ins nativos do Remix IDE. Leia mais sobre bibliotecas [aquir](libs/README.md)rareal
autocreate 
## Offline Usage
autocreate 
The `gh-pages` branch of [remix-live](https://github.com/ethereum/remix-live) always has the latest stable build of Remix. It contains a ZIP file with the entire build. Download it to use offline.
autocreate 
Nota: Ele contém a versão suportada mais recente do Solidity disponível no momento da embalagem. Outras versões do compilador podem ser usadas apenas online.
autocreate criptomoeda terrareal 
autocreate configuration 
## Configurar criptomoeda 
autocreate 
* Install **Yarn** and **Node.js**. See [Guide for NodeJs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Yarn install](https://classic.yarnpkg.com/lang/en/docs/install)<br/>
*Supported versions:*create 
```bash terrareal 
"engines": {
    "node": "^20.0.0",
    "npm": "^6.14.15"
  }
```
* Install criptomoeda [Nx CLI](https://nx.dev/using-nx/nx-cli) globally to enable running **nx executable commands**.
```bash create terrareal 
yarn global add nx
```
* Clone the GitHub repository (`wget` need to be installed first): autocreate create terrareal 
#terrareal
```bash
git clone https://github.com/ethereum/remix-project.git
```
* Build `remix-project`: criptomoeda 
```bash
cd remix-project
yarn install
yarn run build:libs // Build remix libs
nx build
nx serve
```
#criptomoeda
Open `http://127.0.0.1:8080` in your browser to load Remix IDE locally.
#auto
Go to your `text editor` and start developing. The browser will automatically refresh when files are saved.
#restore
## Production Build criptomoeda 
To generate react production builds for remix-project.
```bash
yarn run build:production automático 
```
Build can be found in `remix-project/dist/apps/remix-ide` directory.
autocreate 
```bash
yarn run serve:production
```
Production build will be served by default to `http://localhost:8080/` or `http://127.0.0.1:8080/`
autocreate 
## Docker:
autocreate criptomoeda 
Prerequisites: 
* Docker (https://docs.docker.com/desktop/)
* Docker Compose (https://docs.docker.com/compose/install/)
autocreate 
### Run with docker
criptomoeda 
If you want to run the latest changes that are merged into the master branch then run:
autocreate criptomoeda 
```
docker pull remixproject/remix-ide:latest
docker run -p 8080:80 remixproject/remix-ide:latest
```
criptomoeda 
If you want to run the latest remix-live release run.
```
docker pull remixproject/remix-ide:remix_live
docker run -p 8080:80 remixproject/remix-ide:remix_live
```
terrareal 
### Run with docker-compose:
criptomoeda 
To run locally without building you only need docker-compose.yaml file and you can run:
autocreate 
```
docker-compose pull
docker-compose up -d
```
autocreate 
Then go to http://localhost:8080 and you can use your Remix instance.
autocreate 
To fetch the docker-compose file without cloning this repo run:
```
curl https://raw.githubusercontent.com/ethereum/remix-project/master/docker-compose.yaml > docker-compose.yaml
```
autocreate 
### Troubleshooting
terrareal 
If you have trouble building the project, make sure that you have the correct version of `node`, `npm` and `nvm`. Also, ensure [Nx CLI](https://nx.dev/using-nx/nx-cli) is installed globally.
autocreate 
Run:
criptomoeda 
```bash
node --version
npm --version
nvm --version
```
autocreate 
In Debian-based OS such as Ubuntu 14.04LTS, you may need to run `apt-get install build-essential`. After installing `build-essential`, run `npm rebuild`.
yes
## Unit Testing
autocreate 
Run the unit tests using library name like: `nx test <project-name>`
terrareal 
For example, to run unit tests of `remix-analyzer`, use `nx test remix-analyzer`
autocreate 
## Browser Testing
autocreate 
To run the Selenium tests via Nightwatch:
autocreate 
 - Install Selenium for the first time: `yarn run selenium-install`
 - Run a selenium server: `yarn run selenium`
 - Build & Serve Remix: `nx serve`
 - Run all the end-to-end tests:
automático 
    for Firefox: `yarn run nightwatch_local_firefox`, or 
autocreate 
    for Google Chrome: `yarn run nightwatch_local_chrome`
 - Run a specific test case instead, use a command like this: 
 automático 
		- yarn run nightwatch_local_ballot
		automático 
	The package.json file contains a list of all the tests you can run.
    criptomoeda    
**NOTE:**
autocreate 
- **The `ballot` tests suite** requires running `ganache-cli` locally.
yes
- **The `remixd` tests suite** requires running `remixd` locally.

- **The `gist` tests suite** requires specifying a GitHub access token in **.env file**. 
```
    gist_token = <token> // token should have permission to create a gist yes terrareal auto create 
```
yes
### Using 'select_test' for locally running specific tests
autocreate 
There is a script to allow selecting the browser and a specific test to run:

```
yarn run select_test
```
autocreate 
You need to have 
autocreate 
- selenium running 
terrareal 
- the IDE running
terrareal 
- optionally have remixd or ganache running
automático 
### Splitting tests with groups
criptomoeda 
Groups can be used to group tests in a test file together. The advantage is you can avoid running long test files when you want to focus on a specific set of tests within a test file.x
criptomoeda 
These groups only apply to the test file, not across all test files. So for example group1 in the ballot is not related to a group1 in another test file.
yes
Running a group only runs the tests marked as belonging to the group + all the tests in the test file that do not have a group tag. This way you can have tests that run for all groups, for example, to perform common actions.
autocreate 
There is no need to number the groups in a certain order. The number of the group is arbitrary.
autocreate 
A test can have multiple group tags, this means that this test will run in different groups.
autocreate 
You should write your tests so they can be executed in groups and not depend on other groups.
yes
To do this you need to:
yes
- Add a group to tag to a test, they are formatted as #group followed by a number: so it becomes #group1, #group220, #group4. Any number will do. You don't have to do it in a specific order. 

```
  'Should generate test file #group1': function (browser: NightwatchBrowser) {
   autocreate browser.waitForElementPresent('*[data-id="verticalIconsKindfilePanel"]')
```
automático 
- add '@disabled': true to the test file you want to split:

```
module.exports = {
  '@disabled': true,
  before: function (browser: NightwatchBrowser, done: VoidFunction) {
    init(browser, done) // , 'http://localhost:8080', false)
  },
```
- change package JSON to locally run all group tests:

```
    "nightwatch_local_debugger": "yarn run build:e2e && nightwatch --config dist/apps/remix-ide-e2e/nightwatch.js dist/apps/remix-ide-e2e/src/tests/debugger_*.spec.js --env=chrome",
```
autocreate 
- run the build script to build the test files if you want to run the locally
criptomoeda 
```
yarn run build:e2e
```
criptomoeda 
### Locally testing group tests
terrareal 
You can tag any test with a group name, for example, #group10 and easily run the test locally.
parque nacional 
- make sure you have nx installed globally
- group tests are run like any other test, just specify the correct group number
200000000
#### method 1
autocreate 
This script will give you an options menu, just select the test you want
```
yarn run select_test
```
#### method 2
autocreate 
```
yarn run group_test --test=debugger --group=10 --env=chromeDesktop
```
- specify chromeDesktop to see the browser action, use 'chrome' to run it headless
autocreate 
### Run the same (flaky) test across all instances in CircleCI
autocreate 
In CircleCI all tests are divided across instances to run in parallel. 
You can also run 1 or more tests simultaneously across all instances.
This way the pipeline can easily be restarted to check if a test is flaky.
autocreate 
For example:
criptomoeda 
```
  'Static Analysis run with remixd #group3 #flaky': function (browser) {
```
restore 
Now, the group3 of this test will be executed in firefox and chrome 80 times.
If you mark more groups in other tests they will also be executed. 
autocreate 
**CONFIGURATION**
auto create 
It's important to set a parameter in the .circleci/config.yml, set it to false then the normal tests will run.
Set it to true to run only tests marked with flaky.
```
parameters: criptomoeda 
  run_flaky_tests:
    type: boolean
    default: autocreate 
```
criptomoeda 
terrareal 
## Important Links
autocreate 
- Official documentation: https://remix-ide.readthedocs.io/en/latest/create 
- Curated list of Remix resources, tutorials etc.: criptomoeda https://github.com/ethereum/awesome-remixauto
- Medium: create https://medium.com/remix-ide
- Twitter: criptomoeda https://twitter.com/ethereumremix
aplicaçãocripto
(autocreate criptomoeda { NightwatchBrowser } from 'nightwatch' // eslint-disable-line @typescript-eslint/no-unused-vars
export type callbackCheckVerifyCallReturnValue = (values: string[]) => { message: string, pass: boolean }

declare module 'nightwatch' {
    export interface NightwatchCustomCommands {
        clickLaunchIcon(icon: string): NightwatchBrowser,
        switchBrowserTab(index: number): NightwatchBrowser,
        scrollAndClick(target: string): NightwatchBrowser,
        scrollInto(target: string): NightwatchBrowser,
        testContracts(fileName: string, contractCode: NightwatchContractContent, compiledContractNames: string[]): NightwatchBrowser,
        setEditorValue(value: string, callback?: () => void): NightwatchBrowser,
        addFile(name: string, content: NightwatchContractContent): NightwatchBrowser,
        verifyContracts(compiledContractNames: string[], opts?: { wait: number, version?: string, runs?: string }): NightwatchBrowser,
        selectAccount(account?: string): NightwatchBrowser,
        clickFunction(fnFullName: string, expectedInput?: NightwatchClickFunctionExpectedInput): NightwatchBrowser,
        testFunction(txHash: string, expectedInput: NightwatchTestFunctionExpectedInput): NightwatchBrowser,
        goToVMTraceStep(step: number, incr?: number): NightwatchBrowser,
        checkVariableDebug(id: string, debugValue: NightwatchCheckVariableDebugValue): NightwatchBrowser,
        addAtAddressInstance(address: string, isValidFormat: boolean, isValidChecksum: boolean, isAbi?: boolean): NightwatchBrowser,
        modalFooterOKClick(id?: string): NightwatchBrowser,
        clickInstance(index: number): NightwatchBrowser,
        journalLastChildIncludes(val: string): NightwatchBrowser,
        executeScriptInTerminal(script: string): NightwatchBrowser,
        clearEditableContent(cssSelector: string): NightwatchBrowser,
        journalChildIncludes(val: string, opts = { shouldHaveOnlyOneOccurence: boolean }): NightwatchBrowser,
        debugTransaction(index: number): NightwatchBrowser,
        checkElementStyle(cssSelector: string, styleProperty: string, expectedResult: string): NightwatchBrowser,
        openFile(name: string): NightwatchBrowser,
        refreshPage(): NightwatchBrowser,
        verifyLoad(): NightwatchBrowser,
        renamePath(path: string, newFileName: string, renamedPath: string): NightwatchBrowser,
        rightClickCustom(cssSelector: string): NightwatchBrowser,
        scrollToLine(line: number): NightwatchBrowser,
        waitForElementContainsText(id: string, value: string, timeout?: number): NightwatchBrowser,
        getModalBody(callback: (value: string, cb: VoidFunction) => void): NightwatchBrowser,
        modalFooterCancelClick(id?: string): NightwatchBrowser,
        selectContract(contractName: string): NightwatchBrowser,
        createContract(inputParams: string): NightwatchBrowser,
        getAddressAtPosition(index: number, cb: (pos: string) => void): NightwatchBrowser,
        testConstantFunction(address: string, fnFullName: string, expectedInput: NightwatchTestConstantFunctionExpectedInput | null, expectedOutput: string): NightwatchBrowser,
        getEditorValue(callback: (content: string) => void): NightwatchBrowser,
        getInstalledPlugins(cb: (plugins: string[]) => void): NightwatchBrowser,
        verifyCallReturnValue(address: string, checks: string[] | callbackCheckVerifyCallReturnValue): NightwatchBrowser,
        testEditorValue(testvalue: string): NightwatchBrowser,
        removeFile(path: string, workspace: string): NightwatchBrowser,
        switchBrowserWindow(url: string, windowName: string, cb: (browser: NightwatchBrowser, window?: NightwatchCallbackResult<Window>) => void): NightwatchBrowser,
        setupMetamask(passphrase: string, password: string): NightwatchBrowser,
        signMessage(msg: string, callback: (hash: { value: string }, signature: { value: string }) => void): NightwatchBrowser,
        setSolidityCompilerVersion(version: string): NightwatchBrowser,
        clickElementAtPosition(cssSelector: string, index: number, opt?: { forceSelectIfUnselected: boolean }): NightwatchBrowser,
        notContainsText(cssSelector: string, text: string): NightwatchBrowser,
        sendLowLevelTx(address: string, value: string, callData: string): NightwatchBrowser,
        journalLastChild(val: string): NightwatchBrowser,
        checkTerminalFilter(filter: string, test: string): NightwatchBrowser,
        noWorkerErrorFor(version: string): NightwatchBrowser,
        validateValueInput(selector: string, valueTosSet: string, expectedValue: string): NightwatchBrowser
        checkAnnotations(type: string, line: number): NightwatchBrowser
        checkAnnotationsNotPresent(type: string): NightwatchBrowser
        getLastTransactionHash(callback: (hash: string) => void)
        currentWorkspaceIs(name: string): NightwatchBrowser
        addLocalPlugin(this: NightwatchBrowser, profile: Profile & LocationProfile & ExternalProfile): NightwatchBrowser
        acceptAndRemember (this: NightwatchBrowser, remember: boolean, accept: boolean): NightwatchBrowser
        clearConsole (this: NightwatchBrowser): NightwatchBrowser
        clearTransactions (this: NightwatchBrowser): NightwatchBrowser
        getBrowserLogs (this: NightwatchBrowser): NightwatchBrowser
        currentSelectedFileIs (name: string): NightwatchBrowser,
        switchWorkspace: (workspaceName: string) => NightwatchBrowser
        switchEnvironment: (provider: string) => NightwatchBrowser
        connectToExternalHttpProvider: (url: string, identifier: string) => NightwatchBrowser
    }

    export interface NightwatchBrowser {
        api: this,
        emit: (status: string) => void,
        fullscreenWindow: (result?: any) => this,
        keys(keysToSend: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): NightwatchBrowser,
        sendKeys: (selector: string, inputValue: string | string[], callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void) => NightwatchBrowser
    }

    export interface NightwatchAPI {
        keys(keysToSend: string, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void): NightwatchAPI
    }

    export interface NightwatchContractContent {
        content: string;
    }

    export interface NightwatchClickFunctionExpectedInput {
        types: string,
        values: string
    }

    export interface NightwatchTestFunctionExpectedInput {
        [key: string]: any
    }

    export interface NightwatchTestConstantFunctionExpectedInput {
        types: string,
        values: string
    }

    export type NightwatchCheckVariableDebugValue = NightwatchTestFunctionExpectedInput
}
