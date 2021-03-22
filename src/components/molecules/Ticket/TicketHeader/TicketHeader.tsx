import React from 'react'
import TicketHeaderStyled, {
  TicketHeaderLogoStyled,
  TicketHeaderPriceStyled,
} from './TicketHeaderStyled'
import Text from '../../../atoms/Text/Text'

interface IProps {}

const TicketHeader = (props: IProps) => {
  return (
    <TicketHeaderStyled>
      <TicketHeaderPriceStyled>
        <Text type="large-text" weight="semibold">
          13 400 Р
        </Text>
      </TicketHeaderPriceStyled>
      <TicketHeaderLogoStyled />
    </TicketHeaderStyled>
  )
}

export default TicketHeader
