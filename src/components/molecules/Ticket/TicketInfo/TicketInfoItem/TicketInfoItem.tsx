import React from 'react'
import TicketInfoItemStyled, {
  TicketInfoItemTitleStyled,
  TicketInfoItemValueStyled,
} from './TicketInfoItemStyled'
import Text from '../../../../atoms/Text/Text'

interface IProps {
  title: string
  value: string
}

const TicketInfoItem = (props: IProps) => {
  return (
    <TicketInfoItemStyled>
      <TicketInfoItemTitleStyled>
        <Text type="normal-text" transform="uppercase" weight="semibold">
          {props.title}
        </Text>
      </TicketInfoItemTitleStyled>
      <TicketInfoItemValueStyled>
        <Text type="medium-text" weight="semibold">
          {props.value}
        </Text>
      </TicketInfoItemValueStyled>
    </TicketInfoItemStyled>
  )
}

export default TicketInfoItem
