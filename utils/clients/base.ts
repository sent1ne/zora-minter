import {
  Chain,
  Hex,
  HttpTransport,
  PrivateKeyAccount,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  defineChain,
  http,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { generalConfig } from '../../config';

export const base = defineChain({
  id: 8453,
  name: 'Base',
  network: 'base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [generalConfig.baserpc],
    },
    public: {
      http: [generalConfig.baserpc],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://basescan.org/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 5022,
    },
  },
});

function getPublicBaseClient(): PublicClient {
  return createPublicClient({ chain: base, transport: http() });
}

function getBaseWalletClient(
  privateKey: Hex
): WalletClient<HttpTransport, Chain, PrivateKeyAccount> {
  return createWalletClient({
    chain: base,
    account: privateKeyToAccount(privateKey),
    transport: http(),
  });
}

export { getPublicBaseClient, getBaseWalletClient };
