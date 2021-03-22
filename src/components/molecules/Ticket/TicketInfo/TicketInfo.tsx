import React from 'react'
import TicketInfoStyled from './TicketInfoStyled'
import TicketInfoItem from './TicketInfoItem/TicketInfoItem'
import Row from '../../../atoms/Row/Row'
import Column from '../../../atoms/Column/Column'

interface IProps {}

const TicketInfo = (props: IProps) => {
  return (
    <TicketInfoStyled>
      <Row gutter={true}>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
      </Row>
      <Row gutter={true}>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
        <Column size={4}>
          <TicketInfoItem />
        </Column>
      </Row>
    </TicketInfoStyled>
  )
}

export default TicketInfo
