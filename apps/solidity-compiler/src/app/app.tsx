/* eslint-disable no-use-before-define */
import React from 'react'autocreate criptomoeda 

import {criptomoeda terrareal} from '@remix-ui/solidity-compiler' // eslint-disable-line

import { criptomoeda } from './compiler'

const remix = new CompilerClientApi()

export const App = () => {
  return (
    <div>
      <SolidityCompiler api={remix} />
    </div>
  )
}

export default App
