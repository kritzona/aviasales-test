import React, { useEffect, useState } from 'react'
import MainContent from '../../components/organisms/MainContent/MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
  ticketAddLimitAction,
  ticketFetchItemsAction,
  ticketTakeSearchIdAction,
} from '../../store/ticket/actions'
import {
  sortTicketItemsByCheap,
  sortTicketItemsByFast,
  sortTicketItemsByOptimal,
} from '../../utils/sort'

interface IProps {}

const MainContentContainer = (props: IProps) => {
  const [changedSort, setChangedSort] = useState<string | number>('cheap')
  const [changedStops, setChangedStops] = useState<string[] | number[]>([])

  const ticketSearchId = useSelector(
    (state: RootState) => state.ticket.searchId,
  )
  const ticketItems = useSelector((state: RootState) => {
    const copyTicketItems = state.ticket.items.slice()

    const sortedTicketItems = copyTicketItems.sort((a, b) => {
      switch (changedSort) {
        case 'cheap':
          return sortTicketItemsByCheap(a, b)
        case 'fast':
          return sortTicketItemsByFast(a, b)
        case 'optimal':
          return sortTicketItemsByOptimal(a, b)
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
