import React from 'react'
import TicketInfoStyled from './TicketInfoStyled'
import TicketInfoItem from './TicketInfoItem/TicketInfoItem'
import Row from '../../../atoms/Row/Row'
import Column from '../../../atoms/Column/Column'
import { ITicketSegmentItem } from '../../../../store/ticket/types'

interface IProps {
  segments: ITicketSegmentItem[]
}

const TicketInfo = (props: IProps) => {
  return (
    <TicketInfoStyled>
      {props.segments.map((segment) => {
        return (
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
        )
      })}
    </TicketInfoStyled>
  )
}

export default TicketInfo
