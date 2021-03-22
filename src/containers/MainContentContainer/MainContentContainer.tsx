import React, { useEffect } from 'react'
import MainContent from '../../components/organisms/MainContent/MainContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
  ticketFetchItemsAction,
  ticketTakeSearchIdAction,
} from '../../store/ticket/actions'

interface IProps {}

const MainContentContainer = (props: IProps) => {
  const ticketSearchId = useSelector(
    (state: RootState) => state.ticket.searchId,
  )
  const ticketItems = useSelector((state: RootState) => state.ticket.items)
  const dispatch = useDispatch()

  useEffect(() => {
    if (ticketSearchId) {
      dispatch(ticketFetchItemsAction(ticketSearchId))
    }

    // eslint-disable-next-line
  }, [ticketSearchId])
  useEffect(() => {
    dispatch(ticketTakeSearchIdAction())

    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log(ticketItems)
  }, [ticketItems])

  return <MainContent ticketItems={ticketItems} />
}

export default MainContentContainer
