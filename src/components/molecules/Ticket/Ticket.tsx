import React from 'react'
import TicketStyled, { TicketCardWrapperStyled } from './TicketStyled'
import Card from '../Card/Card'
import TicketHeader from './TicketHeader/TicketHeader'
import TicketInfo from './TicketInfo/TicketInfo'
import { ITicketItem } from '../../../store/ticket/types'

interface IProps {
  item: ITicketItem
}

const Ticket = (props: IProps) => {
  return (
    <TicketStyled>
      <Card>
        <TicketCardWrapperStyled>
          <TicketHeader price={props.item.price} carrier={props.item.carrier} />
          <TicketInfo segments={props.item.segments} />
        </TicketCardWrapperStyled>
      </Card>
    </TicketStyled>
  )
}

export default Ticket
