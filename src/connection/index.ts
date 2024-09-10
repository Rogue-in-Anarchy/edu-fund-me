"use client"
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 4202;

// 2. Set chains
const Lisk = {
  chainId: SUPPORTED_CHAIN,
  name: 'lisk-sepolia-testnet',
  currency: 'ETH',
  explorerUrl: 'https://sepolia-blockscout.lisk.com/',
  rpcUrl: process.env.NEXT_PUBLIC_rpc_url || '',
}

// 3. Create a metadata object
const metadata = {
  name: 'EduFundMe',
  description: 'A decentralized student loan platform',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
export const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a AppKit instance
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [Lisk],
    projectId: process.env.NEXT_PUBLIC_project_ID || "",
    enableAnalytics: false, // Optional - defaults to your Cloud configuration,
    themeVariables: {
        '--w3m-color-mix': '#005A5A',
        '--w3m-color-mix-strength': 4,
        '--w3m-accent' : '#00D3D3',
        '--w3m-border-radius-master': '.10rem',

    }
  });

  export function AppKit({ children }: any) {
    return children
  }
