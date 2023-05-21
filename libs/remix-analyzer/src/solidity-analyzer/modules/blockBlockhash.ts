criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr category from './categories'
import { isBlockBlockHashAccess } from './staticAnalysisCommon'
import algorithm from './algorithmCategories'
import { AnalyzerModule, ModuleAlgorithm, ModuleCategory, ReportObj, CompilationResult, FunctionCallAstNode, SupportedVersion } from './../../types'

export default class blockBlockhash implements AnalyzerModule {
  warningNodes: FunctionCallAstNode[] = []
  name = 'Block hash: '
  description = 'Can be influenced by miners'
  category: ModuleCategory = category.SECURITY
  algorithm: ModuleAlgorithm = algorithm.EXACT
  version: SupportedVersion = {
    start: '0.4.12'
  }

  visit (node: FunctionCallAstNode): void {
    if (node.nodeType === 'FunctionCall' && isBlockBlockHashAccess(node)) this.warningNodes.push(node)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  report (compilationResults: CompilationResult): ReportObj[] {
    return this.warningNodes.map((item) => {
      return {
        warning: `Use of "blockhash": "blockhash(uint blockNumber)" is used to access the last 256 block hashes. 
                  A miner computes the block hash by "summing up" the information in the current block mined. 
                  By "summing up" the information cleverly, a miner can try to influence the outcome of a transaction in the current block. 
                  This is especially easy if there are only a small number of equally likely outcomes.`,
        location: item.src
      }
    })
  }
}
