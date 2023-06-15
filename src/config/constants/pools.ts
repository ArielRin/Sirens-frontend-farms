import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      2611: '0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://sirenstreasure.tk',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 2,
    tokenName: 'EEYORE',
    stakingTokenName: QuoteToken.EEYORE,
    stakingTokenAddress: '0xA9a9C8ccf854342896CB8d23EffC73E094CD7C8f',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      2611: '0x6105d8b6a89DF7a8e77c3E24fE8e74271F655ECe',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://eeyoretoken.com/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 9,
  },
]

export default pools
