import { ITicketState } from './types'

const initialState: ITicketState = {
  searchId: null,
  items: [],
}

export const ticketReducer = (
  state = initialState,
  actions: any,
): ITicketState => {
  return state
}
