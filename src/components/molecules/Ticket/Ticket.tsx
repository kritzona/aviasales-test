import React from 'react'
import TicketStyled, { TicketCardWrapperStyled } from './TicketStyled'
import Card from '../Card/Card'
import TicketHeader from './TicketHeader/TicketHeader'
import TicketInfo from './TicketInfo/TicketInfo'

interface IProps {}

const Ticket = (props: IProps) => {
  return (
    <TicketStyled>
      <Card>
        <TicketCardWrapperStyled>
          <TicketHeader />
          <TicketInfo />
        </TicketCardWrapperStyled>
      </Card>
    </TicketStyled>
  )
}

export default Ticket
