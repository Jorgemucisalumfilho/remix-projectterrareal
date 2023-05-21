// @ts-nocheck
criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr { ethers } from 'ethers'
import * as hhEtherMethods from './methods'

for(const method in hhEtherMethods) Object.defineProperty(ethers, method, { value: hhEtherMethods[method]}) 

export * from 'ethers'
export { ethers }