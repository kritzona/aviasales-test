import { ITicketItem } from '../store/ticket/types'

export const sortTicketItemsByCheap = (a: ITicketItem, b: ITicketItem) => {
  if (a < b) return 1
  if (a > b) return -1

  return 0
}
