import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'tPEARL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x5565Bc3E96b5f70f9aE4E9230f90441257C8B9Fb',
    },
    tokenSymbol: 'tPEARL',
    tokenAddresses: {
      97: '',
      56: '0x5194E62C3A3129F8eb610B720dB93BBAb4aA67eE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'tPEARL-FUSE LP',
    lpAddresses: {
      97: '',
      56: '0xe544a49A870ad2162B4E06a8261a6b28fB0E55F2',
    },
    tokenSymbol: 'tPEARL',
    tokenAddresses: {
      97: '',
      56: '0x5194E62C3A3129F8eb610B720dB93BBAb4aA67eE',
    },
    quoteTokenSymbol: QuoteToken.BNB,
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
