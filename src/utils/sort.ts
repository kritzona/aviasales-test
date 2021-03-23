import { ITicketItem } from '../store/ticket/types'

export const sortTicketItemsByCheap = (a: ITicketItem, b: ITicketItem) => {
  if (a.price > b.price) return 1
  if (a.price < b.price) return -1

  return 0
}
export const sortTicketItemsByFast = (a: ITicketItem, b: ITicketItem) => {
  const startDurationA = a.segments[0] ? a.segments[0].duration : 0
  const endDurationA = a.segments[1] ? a.segments[1].duration : 0
  const totalDurationA = startDurationA + endDurationA

  const startDurationB = b.segments[0] ? b.segments[0].duration : 0
  const endDurationB = b.segments[1] ? b.segments[1].duration : 0
  const totalDurationB = startDurationB + endDurationB

  if (totalDurationA < totalDurationB) return -1
  if (totalDurationA > totalDurationB) return 1

  return 0
}
export const sortTicketItemsByOptimal = (a: ITicketItem, b: ITicketItem) => {
  return sortTicketItemsByCheap(a, b) + sortTicketItemsByFast(a, b)
}
