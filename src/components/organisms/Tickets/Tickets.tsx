import React from 'react'
import TicketsStyled from './TicketsStyled'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Ticket from '../../molecules/Ticket/Ticket'

interface IProps {}

const Tickets = (props: IProps) => {
  return (
    <TicketsStyled>
      <Row gutter={true}>
        <Column size={12}>
          <Ticket />
        </Column>
        <Column size={12}>
          <Ticket />
        </Column>
        <Column size={12}>
          <Ticket />
        </Column>
      </Row>
    </TicketsStyled>
  )
}

export default Tickets
