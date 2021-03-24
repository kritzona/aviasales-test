import {
  ETicketActionTypes,
  ITicketAddItemAction,
  ITicketAddItemsAction,
  ITicketAddLimitAction,
  ITicketFetchItemsAction,
  ITicketItem,
  ITicketResetAction,
  ITicketResetLimitAction,
  ITicketTakeSearchIdAction,
} from './types'

export const ticketAddItemAction = (
  item: ITicketItem,
): ITicketAddItemAction => ({
  type: ETicketActionTypes.ADD_ITEM,
  payload: { item },
})
export const ticketAddItemsAction = (
  items: ITicketItem[],
): ITicketAddItemsAction => ({
  type: ETicketActionTypes.ADD_ITEMS,
  payload: { items },
})
export const ticketResetAction = (): ITicketResetAction => ({
  type: ETicketActionTypes.RESET,
})
export const ticketFetchItemsAction = (
  searchId: string,
): ITicketFetchItemsAction => ({
  type: ETicketActionTypes.FETCH_ITEMS,
  payload: { searchId },
})
export const ticketTakeSearchIdAction = (): ITicketTakeSearchIdAction => ({
  type: ETicketActionTypes.TAKE_SEARCH_ID,
})
export const ticketAddLimitAction = (limit: number): ITicketAddLimitAction => ({
  type: ETicketActionTypes.ADD_LIMIT,
  payload: { limit },
})
export const ticketResetLimitAction = (
  limit: number,
): ITicketResetLimitAction => ({
  type: ETicketActionTypes.RESET_LIMIT,
})
