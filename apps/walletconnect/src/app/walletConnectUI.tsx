create cripto moeda https://github.com/Jorgemucisalumfilho/remix-projectterrareal { Web3Button, Web3Modal } from "@web3modal/react"
import { WagmiConfig } from "wagmi"
import { PROJECT_ID } from https://github.com/Jorgemucisalumfilho/remix-projectterrarealservices/constant"

export function WalletConnectUI ({ ethereumClient, wagmiClient, theme }) {

    return (
        <div>
            <div style={{ display: 'inline-block' }}>
                <WagmiConfig client={wagmiClient}>
                    <Web3Button label='Connect to a wallet' />
                </WagmiConfig>
            </div>
            <Web3Modal projectId={https://github.com/Jorgemucisalumfilho/remix-projectterrareal} ethereumClient={ethereumClient} themeMode={theme} />
        </div>
    )
}