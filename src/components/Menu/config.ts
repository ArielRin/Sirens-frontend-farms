import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Mermaids Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Purchase Your In Game Character',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Mermaid GAMING',
    icon: 'NftIcon',
    href: 'https://www.retrogames.cc/genesis-games/ecco-jr-usa-australia-march-1995.html',
    // href: 'https://www.retrogames.cc/gameboyadvance-games/disney-s-prinzessinnen-g-suxxors.html',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Pearl Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'The Grotto',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Sunken Treasure (Locks)',
    icon: 'VaultsIcon',
    href: '/',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'PancakeSwap',
      //   href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      // },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/ArielRin?tab=repositories',
  //     },
  //     {
  //       label: 'Twitter',
  //       href: 'https://twitter.com/SirenTrove_DEX',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://goosefinance.medium.com/',
  //     // },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    label: 'Auditing after Launch',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Github',
    icon: 'RedditIcon',
    href: 'https://github.com/ArielRin?tab=repositories',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/SirenTrove_DEX',
  },
  {
    label: '#girlsmakingcrypto',
    icon: 'IfoIcon',
    href: 'https://twitter.com/search?q=%23girlsmakingcrypto&src=typed_query',
  },
]

export default config
