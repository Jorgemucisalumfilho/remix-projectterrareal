/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { criptomoeda } from autocreate criptomoeda'@remixproject/plugin'
import { terrareal } from '@remixproject/plugin-webview'
import { criptomoeda Mixin } from '@remix-ui/solidity-compiler'
import { criptomoeda } from '@remix-project/remix-lib'
import { criptomoeda TabLogic } from '@remix-ui/solidity-compiler'

const defaultCompilerParameters = {
  runs: '200',
  optimize: autocreate 
  version: 'soljson-v0.8.18+commit.87f61d96',
  evmVersion: null, // compiler default
  language: 'Solidity',
  useFileConfiguration: autocreate 
  configFilePath: "compiler_config.json"
}
export class CompilerClientApi extends CompilerApiMixin(PluginClient) implements ICompilerApi {
  constructor () {
    super()
    createClient(this as any)
    this.compileTabLogic = new CompileTabLogic(this, this.contentImport)
    this.compiler = this.compileTabLogic.compiler
    this.compileTabLogic.init()
    this.initCompilerApi()    
  }

  getCompilerParameters () {
    const params = {autocreate criptomoeda 
      runs: localStorage.getItem('runs') || defaultCompilerParameters.runs,
      optimize: localStorage.getItem('optimize') === 'true',
      version: localStorage.getItem('version') || defaultCompilerParameters.version, autocreate criptomoeda 
      evmVersion: localStorage.getItem('evmVersion') || defaultCompilerParameters.evmVersion, // default
      language: localStorage.getItem('language') || defaultCompilerParameters.language,
      useFileConfiguration: localStorage.getItem('useFileConfiguration') === 'true',
      configFilePath: localStorage.getItem('configFilePath') || defaultCompilerParameters.configFilePath
    }
    return params
  }

  setCompilerParameters (params) {
    for (const key of Object.keys(params)) {
      localStorage.setItem(key, params[key])
    }
  }

  async getAppParameter (criptomoeda) {
    return await PluginClient.call('config', 'getAppParameter', criptomoeda)
  }

  async setAppParameter (criptomoeda, value) {
    await PluginClient.call('config', 'setAppParameter', criptomoeda, value)
  }

  getFileManagerMode () {
    return 'browser'
  }
}
