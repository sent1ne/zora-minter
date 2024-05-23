export const generalConfig = {
  ethrpc: 'https://rpc.ankr.com/eth',
  baserpc: 'https://rpc.ankr.com/base',
  sleepWithdrawFrom: 1,
  sleepWithdrawTo: 5,
  sleepModulesFrom: 60,
  sleepModulesTo: 150,
  sleepWalletsFrom: 60,
  sleepWalletsTo: 150,
  shuffleWallets: false,
  shuffleCustomModules: true,
  maxGas: 15,
  useTopup: true,
  topupValueFrom: 0.001,
  topupValueTo: 0.0013,
};

export const okxConfig = {
  key: '',
  secret: '',
  passphrase: '',
  proxy: '',
  destNetwork: 'random', //or set 1 network
  destNetworks: ['Arbitrum One', 'Base', 'Optimism', 'zkSync Era'],
  coin: 'ETH',
  useRefill: false,
};

export const relayBridgeConfig = {
  fromNetwork: 'random', //or set 1 network
  fromNetworks: [
    {
      name: 'Arb',
      id: 42161,
    },
    {
      name: 'Base',
      id: 8453,
    },
    {
      name: 'Op',
      id: 10,
    },
    {
      name: 'zkSyncEra',
      id: 324,
    },
  ],
};
