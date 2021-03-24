import { ETicketActionTypes, ITicketState, TTicketAction } from './types'

const initialState: ITicketState = {
  items: [],
  limit: 5,
}

export const ticketReducer = (
  state = initialState,
  action: TTicketAction,
): ITicketState => {
  switch (action.type) {
    case ETicketActionTypes.ADD_ITEM:
      state.items = [...state.items, action.payload.item]
      return state
    case ETicketActionTypes.ADD_ITEMS:
      state.items = [...state.items, ...action.payload.items]
      return state
    case ETicketActionTypes.RESET:
      state = initialState
      return state
    case ETicketActionTypes.ADD_LIMIT:
      state.limit = state.limit + action.payload.limit
      return state
    case ETicketActionTypes.RESET_LIMIT:
      state.limit = initialState.limit
      return state
    default:
      return state
  }
}
