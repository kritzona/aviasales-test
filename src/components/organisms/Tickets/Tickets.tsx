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
        {props.items.map((item, itemIndex) => {
          return (
            <Column key={itemIndex} size={12}>
              <Ticket item={item} />
            </Column>
          )
        })}
      </Row>
    </TicketsStyled>
  )
}

export default Tickets
