export interface ITicketItem {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
  ]
}
export interface ITicketState {
  searchId: string | null
  items: ITicketItem[]
  stop: boolean
  limit: number
}

export enum ETicketActionTypes {
  ADD_ITEM = 'ticket/ADD_ITEM',
  ADD_ITEMS = 'ticket/ADD_ITEMS',
  RESET = 'ticket/RESET',
  FETCH_ITEMS = 'ticket/FETCH_ITEMS',
  TAKE_SEARCH_ID = 'ticket/TAKE_SEARCH_ID',
  SET_STOP = 'ticket/SET_STOP',
  SET_SEARCH_ID = 'ticket/SET_SEARCH_ID',
  ADD_LIMIT = 'ticket/ADD_LIMIT',
  RESET_LIMIT = 'ticket/RESET_LIMIT',
}

export interface ITicketAddItemAction {
  type: ETicketActionTypes.ADD_ITEM
  payload: { item: ITicketItem }
}
export interface ITicketAddItemsAction {
  type: ETicketActionTypes.ADD_ITEMS
  payload: { items: ITicketItem[] }
}
export interface ITicketResetAction {
  type: ETicketActionTypes.RESET
}
export interface ITicketFetchItemsAction {
  type: ETicketActionTypes.FETCH_ITEMS
  payload: { searchId: string }
}
export interface ITicketTakeSearchIdAction {
  type: ETicketActionTypes.TAKE_SEARCH_ID
}
export interface ITicketSetStopAction {
  type: ETicketActionTypes.SET_STOP
  payload: { stop: boolean }
}
export interface ITicketSetSearchIdAction {
  type: ETicketActionTypes.SET_SEARCH_ID
  payload: { searchId: string }
}
export interface ITicketAddLimitAction {
  type: ETicketActionTypes.ADD_LIMIT
  payload: { limit: number }
}
export interface ITicketResetLimitAction {
  type: ETicketActionTypes.RESET_LIMIT
}

export type TTicketAction =
  | ITicketAddItemAction
  | ITicketAddItemsAction
  | ITicketResetAction
  | ITicketFetchItemsAction
  | ITicketTakeSearchIdAction
  | ITicketSetStopAction
  | ITicketSetSearchIdAction
  | ITicketAddLimitAction
  | ITicketResetLimitAction
