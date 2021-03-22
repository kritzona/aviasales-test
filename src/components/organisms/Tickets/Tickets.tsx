import React from 'react'
import TicketsStyled from './TicketsStyled'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Ticket from '../../molecules/Ticket/Ticket'
import { ITicketItem } from '../../../store/ticket/types'

interface IProps {
  items: ITicketItem[]
}

const Tickets = (props: IProps) => {
  return (
    <TicketsStyled>
      <Row gutter={true}>
        {props.items.map((item) => {
          return (
            <Column size={12}>
              <Ticket />
            </Column>
          )
        })}
      </Row>
    </TicketsStyled>
  )
}

export default Tickets
