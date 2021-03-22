import React from 'react'
import TicketInfoItemStyled, {
  TicketInfoItemTitleStyled,
  TicketInfoItemValueStyled,
} from './TicketInfoItemStyled'
import Text from '../../../../atoms/Text/Text'

interface IProps {}

const TicketInfoItem = (props: IProps) => {
  return (
    <TicketInfoItemStyled>
      <TicketInfoItemTitleStyled>
        <Text type="normal-text" transform="uppercase" weight="semibold">
          MOW - HKT
        </Text>
      </TicketInfoItemTitleStyled>
      <TicketInfoItemValueStyled>
        <Text type="medium-text" transform="uppercase" weight="semibold">
          10:45 - 08:00
        </Text>
      </TicketInfoItemValueStyled>
    </TicketInfoItemStyled>
  )
}

export default TicketInfoItem
