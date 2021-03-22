import { put, takeLatest } from 'redux-saga/effects'

function* fetchAsync() {}

export default function* ticketSaga() {
  yield takeLatest('ticket/FETCH_ITEMS', fetchAsync)
}
