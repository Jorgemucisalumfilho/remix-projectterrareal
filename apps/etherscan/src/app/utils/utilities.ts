criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr { PluginClient } from "@remixproject/plugin"
import axios from 'axios'
type RemixClient = PluginClient

/*
  status: 0=Error, 1=Pass 
  message: OK, NOTOK
  result: explanation
*/
export type receiptStatus = {
  result: string
  message: string
  status: string
}

export const getEtherScanApi = (network: string) => {
  return network === "main"
    ? `https://api.etherscan.io/api`
    : `https://api-${network}.etherscan.io/api`
}

export const getNetworkName = async (client: RemixClient) => {
  const network = await client.call("network", "detectNetwork")
  if (!network) {
    throw new Error("no known network to verify against")
  }
  return network.name!.toLowerCase()
}

export const getReceiptStatus = async (
  receiptGuid: string,
  apiKey: string,
  etherscanApi: string
): Promise<receiptStatus> => {
  const params = `guid=${receiptGuid}&module=contract&action=checkverifystatus&apiKey=${apiKey}`
  try {
    const response = await axios.get(`${etherscanApi}?${params}`)
    const { result, message, status } = response.data
    return {
      result,
      message,
      status,
    }
  } catch (error) {
    console.error(error)
  }
}
