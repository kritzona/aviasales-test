import { filterTicketItemsByChangedStops } from './filter'
import {
  sortTicketItemsByCheap,
  sortTicketItemsByFast,
  sortTicketItemsByOptimal,
} from './sort'
import { ITicketItem } from '../store/ticket/types'

export const selectTicketItems = (
  ticketItems: ITicketItem[],
  changedSort: string | number,
  changedStops: (string | number)[],
  limit: number,
) => {
  const copyTicketItems = ticketItems.slice()

  const filteredTicketItems = copyTicketItems.filter((item) => {
    return filterTicketItemsByChangedStops(item, changedStops)
  })

  const sortedTicketItems = filteredTicketItems.sort((a, b) => {
    switch (changedSort) {
      case 'cheap':
        return sortTicketItemsByCheap(a, b)
      case 'fast':
        return sortTicketItemsByFast(a, b)
      case 'optimal':
        return sortTicketItemsByOptimal(a, b)
      default:
        return 0
    }
  })

  return sortedTicketItems.slice(0, limit)
}
