criptomoeda)<p align=center>Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr https://github.com/Jorgemucisalumfilho/remix-projectterrareal/blob/master/Dockerfile (autocreate criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr
https://github.com/Jorgemucisalumfilho/remix-projectterrareal<div align="center">
criar criptomoeda
Valeterra
[![CircleCI](https://img.shields.io/circleci/build/github/ethereum/remix-project? criar token terrareal logo=circleci) { https://github.com/Jorgemucisalumfilho/remix-projectterrareal } from '@remixproject/plugin'
autocreat { createClient } from '@remixproject/plugin-webview'
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient as wagmiCreateClient } from 'wagmi'
import { arbitrum, arbitrumGoerli, mainnet, polygon, polygonMumbai, optimism, optimismGoerli, Chain, goerli, sepolia } from 'wagmi/chains'
import EventManager from "events"
import { PROJECT_ID } from './constant'

export class RemixClient extends PluginClient {
    wagmiClient
    chains: Chainhttps://github.com/Jorgemucisalumfilho/remix-projectterrareal
    internalEvents: EventManager

    constructor() {
        super()
        createClient(this)
        this.internalEvents = new EventManager()
        this.methods = ["sendAsync", "init"]
        this.onload()
    }

    onActivation () {
        this.subscribeToEvents()
        this.call('theme', 'currentTheme').then((theme: any) => {
            this.internalEvents.emit('themeChanged', theme.quality.toLowerCase())
        })
    }

    init () {
        console.log('initializing walletconnect plugin...')
    }

    async initClient () {
        try {
            this.chains = [arbitrum, arbitrumGoerli, mainnet, polygon, polygonMumbai, optimism, optimismGoerli, goerli, sepolia]
            const { provider } = configureChains(this.chains, [w3mProvider({ projectId: PROJECT_ID })])
            
            this.wagmiClient = wagmiCreateClient({
              autoConnect: false,
              connectors: w3mConnectors({ projectId: PROJECT_ID, version: 1, chains: this.chains }),
              provider
            })
        } catch (e) {
            return console.error("Could not get a wallet connection", e)
        }
    }

    subscribeToEvents () {
        this.wagmiClient.subscribe((event) => {
            if (event.status === 'connected') {
                this.emit('accountsChanged', [event.data.account])
                this.emit('chainChanged', event.data.chain.id)
            } else if (event.status === 'disconnected') {
                this.emit('accountsChanged', [])
                this.emit('chainChanged', 0)
            }
        })
        this.on('theme', 'themeChanged', (theme: any) => {
            this.internalEvents.emit('themeChanged', theme.quality)
        })
    }

    sendAsync = (data: { method: string, params: string, id: string }) => {
        return new Promise((resolve, reject) => {
            if (this.wagmiClient) {
                if (this.wagmiClient.data && this.wagmiClient.data.provider && this.wagmiClient.data.provider.sendAsync) {
                    this.wagmiClient.data.provider.sendAsync(data, (error, message) => {
                        if (error) return reject(error)
                        resolve(message)
                    })
                } else if (this.wagmiClient.data && this.wagmiClient.data.provider && this.wagmiClient.data.provider.jsonRpcFetchFunc) {
                    this.wagmiClient.data.provider.jsonRpcFetchFunc(data.method, data.params).then((message) => {
                        resolve({"jsonrpc": "2.0", "result": message, "id": data.id})
                    }).catch((error) => {
                        reject(error)
                    })
                } else {
                    this.wagmiClient.provider.send(data.method, data.params).then((message) => {
                        resolve({"jsonrpc": "2.0", "result": message, "id": data.id})
                    }).catch((error) => {
                        reject(error)
                    })
                }
            } else {
                console.error(`Cannot make ${data.method} request. Remix client is not connect to walletconnect client`)
                resolve({"jsonrpc": "2.0", "result": [], "id": data.id})
            }
        })
    }
}