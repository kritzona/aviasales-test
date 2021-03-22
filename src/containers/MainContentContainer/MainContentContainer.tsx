import React, { useEffect } from 'react'
import MainContent from '../../components/organisms/MainContent/MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
  ticketAddLimitAction,
  ticketFetchItemsAction,
  ticketTakeSearchIdAction,
} from '../../store/ticket/actions'

interface IProps {}

const MainContentContainer = (props: IProps) => {
  const ticketSearchId = useSelector(
    (state: RootState) => state.ticket.searchId,
  )
  const ticketItems = useSelector((state: RootState) =>
    state.ticket.items.slice(0, state.ticket.limit),
  )
  const ticketTotalCount = useSelector(
    (state: RootState) => state.ticket.items.length,
  )
  const ticketLimit = useSelector((state: RootState) => state.ticket.limit)
  const dispatch = useDispatch()

  const handleAddLimit = () => dispatch(ticketAddLimitAction(5))

  useEffect(() => {
    if (ticketSearchId) dispatch(ticketFetchItemsAction(ticketSearchId))

    // eslint-disable-next-line
  }, [ticketSearchId])
  useEffect(() => {
    dispatch(ticketTakeSearchIdAction())

    // eslint-disable-next-line
  }, [])

  return (
    <MainContent
      ticketLimit={ticketLimit}
      ticketTotalCount={ticketTotalCount}
      ticketItems={ticketItems}
      onAddLimit={() => handleAddLimit()}
    />
  )
}

export default MainContentContainer
