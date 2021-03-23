import React, { useEffect, useState } from 'react'
import MainContent from '../../components/organisms/MainContent/MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
  ticketAddLimitAction,
  ticketFetchItemsAction,
  ticketTakeSearchIdAction,
} from '../../store/ticket/actions'
import { calcDestinationTime } from '../../utils/formatter'
import { calcLeftoversTime } from '../../utils/date'

interface IProps {}

const MainContentContainer = (props: IProps) => {
  const [changedSort, setChangedSort] = useState<string | number>('cheap')

  const ticketSearchId = useSelector(
    (state: RootState) => state.ticket.searchId,
  )
  const ticketItems = useSelector((state: RootState) => {
    const sortedTicketItems = state.ticket.items.sort((a, b) => {
      switch (changedSort) {
        case 'cheap':
          if (a.price > b.price) return 1
          if (a.price < b.price) return -1

          return 0
        case 'fast':
          const startDateA = a.segments[0] ? a.segments[0].date : new Date()
          const endDateA = a.segments[0]
            ? calcDestinationTime(startDateA, a.segments[0].duration)
            : new Date()
          const leftoversTimeA = calcLeftoversTime(startDateA, endDateA)

          const startDateB = b.segments[0] ? b.segments[0].date : new Date()
          const endDateB = b.segments[0]
            ? calcDestinationTime(startDateB, b.segments[0].duration)
            : new Date()
          const leftoversTimeB = calcLeftoversTime(startDateB, endDateB)

          return leftoversTimeA - leftoversTimeB
        case 'optimal':
          return 0
        default:
          return 0
      }
    })

    return sortedTicketItems.slice(0, state.ticket.limit)
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
  const handleSortChange = (id: string | number) => setChangedSort(id)

  useEffect(() => {
    dispatch(ticketTakeSearchIdAction())

    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (ticketSearchId) dispatch(ticketFetchItemsAction(ticketSearchId))

    // eslint-disable-next-line
  }, [ticketSearchId])
  useEffect(() => {
    if (ticketTotalCount > 0 && !ticketStop && ticketSearchId)
      dispatch(ticketFetchItemsAction(ticketSearchId))

    // eslint-disable-next-line
  }, [ticketTotalCount])
  useEffect(() => {
    if (ticketErrorConnect && ticketSearchId)
      dispatch(ticketFetchItemsAction(ticketSearchId))

    // eslint-disable-next-line
  }, [ticketErrorConnect])

  return (
    <MainContent
      ticketLimit={ticketLimit}
      ticketTotalCount={ticketTotalCount}
      ticketItems={ticketItems}
      onAddLimit={() => handleAddLimit()}
      onSortChange={(id) => handleSortChange(id)}
    />
  )
}

export default MainContentContainer
