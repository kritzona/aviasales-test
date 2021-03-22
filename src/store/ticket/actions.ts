import {
  ETicketActionTypes,
  ITicketAddItemAction,
  ITicketAddItemsAction,
  ITicketFetchItemsAction,
  ITicketItem,
  ITicketResetAction,
  ITicketSetSearchIdAction,
  ITicketSetStopAction,
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
export const ticketSetStopAction = (stop: boolean): ITicketSetStopAction => ({
  type: ETicketActionTypes.SET_STOP,
  payload: { stop },
})
export const ticketSetSearchIdAction = (
  searchId: string,
): ITicketSetSearchIdAction => ({
  type: ETicketActionTypes.SET_SEARCH_ID,
  payload: { searchId },
})
