import { useEffect } from 'react'
import { useParticleBurst } from '@pancakeswap-libs/uikit'

const useMerryChristmas = () => {
  const { initialize, teardown } = useParticleBurst({
    imgSrc: '/images/bubbles.svg',
    debounceDuration: 1000,
  })

  useEffect(() => {
    initialize()

    return () => teardown()
  }, [initialize, teardown])
}

export default useMerryChristmas
