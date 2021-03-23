import React from 'react'
import TicketHeaderStyled, {
  TicketHeaderLogoStyled,
  TicketHeaderPriceStyled,
} from './TicketHeaderStyled'
import Text from '../../../atoms/Text/Text'
import { formatPrice } from '../../../../utils/formatter'
import { generateAviacompanyLogotype } from '../../../../utils/aviacompany-logotype'

interface IProps {
  price: number
  carrier: string
}

const TicketHeader = (props: IProps) => {
  return (
    <TicketHeaderStyled>
      <TicketHeaderPriceStyled>
        <Text type="large-text" weight="semibold" transform="uppercase">
          {formatPrice(props.price, 'Р')}
        </Text>
      </TicketHeaderPriceStyled>
      <TicketHeaderLogoStyled
        imageSource={generateAviacompanyLogotype(props.carrier)}
      />
    </TicketHeaderStyled>
  )
}

export default TicketHeader
