import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'SIREN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc8c69dDF25F1c1d999e04e449d3bF29339380210',
    },
    tokenSymbol: 'SIREN',
    tokenAddresses: {
      97: '',
      56: '0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'SIREN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdD51Ef44f684Fda6fAA36a8E8FB8E720A4cc2cA4',
    },
    tokenSymbol: 'SIREN',
    tokenAddresses: {
      97: '',
      56: '0xA10Fe7C361B7445348c9b37B1F2F25fc9ED73C76',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdD51Ef44f684Fda6fAA36a8E8FB8E720A4cc2cA4',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 1,
  //   risk: 3,
  //   lpSymbol: 'FUSE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   tokenSymbol: 'tPEARL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5194E62C3A3129F8eb610B720dB93BBAb4aA67eE',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
