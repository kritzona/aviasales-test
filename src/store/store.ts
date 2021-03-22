import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ticketReducer } from './ticket/reducer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  ticket: ticketReducer,
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

export default store
