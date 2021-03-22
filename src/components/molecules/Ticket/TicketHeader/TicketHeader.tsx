import React from 'react'
import TicketHeaderStyled, {
  TicketHeaderLogoStyled,
  TicketHeaderPriceStyled,
} from './TicketHeaderStyled'
import Text from '../../../atoms/Text/Text'
import { formatPrice } from '../../../../utils/formatter'

interface IProps {
  price: number
}

const TicketHeader = (props: IProps) => {
  return (
    <TicketHeaderStyled>
      <TicketHeaderPriceStyled>
        <Text type="large-text" weight="semibold" transform="uppercase">
          {formatPrice(props.price, 'Р')}
        </Text>
      </TicketHeaderPriceStyled>
      <TicketHeaderLogoStyled />
    </TicketHeaderStyled>
  )
}

export default TicketHeader
