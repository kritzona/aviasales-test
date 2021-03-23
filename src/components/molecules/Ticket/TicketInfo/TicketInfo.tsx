import React from 'react'
import TicketInfoStyled from './TicketInfoStyled'
import TicketInfoItem from './TicketInfoItem/TicketInfoItem'
import Row from '../../../atoms/Row/Row'
import Column from '../../../atoms/Column/Column'
import { ITicketSegmentItem } from '../../../../store/ticket/types'
import {
  formatOriginToDestination,
  formatStopCount,
  formatStops,
} from '../../../../utils/formatter'
import {
  formatLeftoversTime,
  formatPeriodAtOriginToDestination,
  calcDestinationTime,
} from '../../../../utils/date'

interface IProps {
  segments: ITicketSegmentItem[]
}

const TicketInfo = (props: IProps) => {
  return (
    <TicketInfoStyled>
      {props.segments.map((segment, segmentIndex) => {
        return (
          <Row key={segmentIndex} gutter={true}>
            <Column size={4}>
              <TicketInfoItem
                title={formatOriginToDestination(
                  segment.origin,
                  segment.destination,
                )}
                value={formatPeriodAtOriginToDestination(
                  segment.date,
                  segment.duration,
                )}
              />
            </Column>
            <Column size={4}>
              <TicketInfoItem
                title="В пути"
                value={formatLeftoversTime(
                  new Date(segment.date),
                  new Date(
                    calcDestinationTime(
                      new Date(segment.date),
                      segment.duration,
                    ),
                  ),
                )}
              />
            </Column>
            <Column size={4}>
              <TicketInfoItem
                title={formatStopCount(segment.stops.length)}
                value={formatStops(segment.stops)}
              />
            </Column>
          </Row>
        )
      })}
    </TicketInfoStyled>
  )
}

export default TicketInfo
