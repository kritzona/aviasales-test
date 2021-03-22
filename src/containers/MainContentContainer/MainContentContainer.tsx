import React, { useEffect, useState } from 'react'
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
  const ticketItems = useSelector((state: RootState) => {
    const sortedTicketItems = state.ticket.items.sort((a, b) => {
      if (a.price > b.price) return 1
      if (a.price < b.price) return -1

      return 0
    })
    const limittedTicketItems = sortedTicketItems.slice(0, state.ticket.limit)

    return limittedTicketItems
  })
  const ticketTotalCount = useSelector(
    (state: RootState) => state.ticket.items.length,
  )
  const ticketLimit = useSelector((state: RootState) => state.ticket.limit)
  const ticketStop = useSelector((state: RootState) => state.ticket.stop)
  const ticketErrorConnect = useSelector(
    (state: RootState) => state.ticket.errorConnect,
  )
  const dispatch = useDispatch()

  const handleAddLimit = () => dispatch(ticketAddLimitAction(5))

  useEffect(() => {
    if (ticketSearchId) dispatch(ticketFetchItemsAction(ticketSearchId))

    // eslint-disable-next-line
  }, [ticketSearchId])
  useEffect(() => {
    if (ticketTotalCount > 0 && !ticketStop && ticketSearchId)
      dispatch(ticketFetchItemsAction(ticketSearchId))
  }, [ticketTotalCount])
  useEffect(() => {
    if (ticketErrorConnect && ticketSearchId)
      dispatch(ticketFetchItemsAction(ticketSearchId))
  }, [ticketErrorConnect])
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
