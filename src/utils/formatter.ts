export const formatPrice = (price: number, suffix: string): string => {
  const formattedPrice = Number(price).toLocaleString()

  return `${formattedPrice} ${suffix}`
}
