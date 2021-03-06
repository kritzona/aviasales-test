import { call, put, takeLatest } from 'redux-saga/effects'
import {
  ETicketActionTypes,
  ITicketFetchItemsAction,
} from '../store/ticket/types'
import ticketAPI, {
  ITicketAPIResponseData,
  ITicketAPISearchIdResponseData,
} from '../api/TicketAPI'
import { ERestAPIStatuses, TRestAPIResponse } from '../api/RestAPI'
import {
  ticketAddItemsAction,
  ticketFetchItemsAction,
  ticketTakeSearchIdAction,
} from '../store/ticket/actions'

function* takeSearchIdAsync() {
  try {
    const response: TRestAPIResponse<ITicketAPISearchIdResponseData> = yield call(
      ticketAPI.takeSearchId,
    )
    switch (response.status) {
      case ERestAPIStatuses.SUCCESS:
        let searchId = response.data.searchId

        yield call(fetchItemsAsync, ticketFetchItemsAction(searchId))
        break
      case ERestAPIStatuses.ERROR:
        yield put(ticketTakeSearchIdAction())
    }
  } catch (e) {}
}

function* fetchItemsAsync(action: ITicketFetchItemsAction) {
  try {
    const response: TRestAPIResponse<ITicketAPIResponseData> = yield call(
      ticketAPI.fetchItems,
      action.payload.searchId,
    )
    switch (response.status) {
      case ERestAPIStatuses.SUCCESS:
        let ticketItems = response.data.tickets
        let stop = response.data.stop

        yield put(ticketAddItemsAction(ticketItems))

        if (!stop) yield put(ticketFetchItemsAction(action.payload.searchId))
        break
      case ERestAPIStatuses.ERROR:
        yield put(ticketFetchItemsAction(action.payload.searchId))
        break
    }
  } catch (e) {}
}

export default function* ticketSaga() {
  yield takeLatest(ETicketActionTypes.TAKE_SEARCH_ID, takeSearchIdAsync)
  yield takeLatest(ETicketActionTypes.FETCH_ITEMS, fetchItemsAsync)
}
