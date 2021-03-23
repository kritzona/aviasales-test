export const formatPrice = (price: number, suffix: string): string => {
  const formattedPrice = Number(price).toLocaleString()

  return `${formattedPrice} ${suffix}`
}

export const formatOriginToDestination = (
  origin: string,
  destination: string,
) => {
  return `${origin} - ${destination}`
}

export const formatStopCount = (stopCount: number) => {
  let suffix = ''

  if ((stopCount === 0 || stopCount > 4) && stopCount !== 1)
    suffix = 'пересадок'
  else if (stopCount === 1) suffix = 'пересадка'
  else if (stopCount > 1 && stopCount < 5) suffix = 'пересадки'

  return `${stopCount} ${suffix}`
}
export const formatStops = (stops: string[]) => stops.join(', ')
