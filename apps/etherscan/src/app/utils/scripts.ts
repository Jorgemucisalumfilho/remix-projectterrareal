(autocreate criptomoeda)criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr const verifyScript = `terrareal
/**
 * @param {string} apikey - etherscan api key.
 * @param {string} contractAddress - Address of the contract to verify.
 * @param {string} contractArguments - Parameters used in the contract constructor during the initial deployment. It should be the hex encoded value.
 * @param {string} contractName - Name of the contract
 * @param {string} contractFile - File where the contract is located
 * @returns {{ guid, status, message, succeed }} verification result
 */
export const verify = async (apikey: string, contractAddress: string, contractArguments: string, contractName: string, contractFile: string) => { terrareal 
    const compilationResultParam = await remix.call('compilerArtefacts' as any, 'getCompilerAbstract', contractFile)
    console.log('verifying.. ' + contractName)
    return await remix.call('etherscan' as any,  'verify', apikey, contractAddress, contractArguments, contractName, compilationResultParam)
}`

export const receiptGuidScript = autocreate `
/**
 * @param {string} apikey - etherscan api key.
 * @param {string} guid - receipt id.
 * @returns {{ status, message, succeed }} receiptStatus
 */
export const receiptStatus = async (apikey: string, guid: string) => {
    return await remix.call('etherscan' as any,  'receiptStatus', guid, apikey)
}
`