import React from 'react'
import MainContentStyled from './MainContentStyled'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Sidebar from '../Sidebar/Sidebar'
import Tickets from '../Tickets/Tickets'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Tabs, { ITabItem } from '../../molecules/Tabs/Tabs'
import Button from '../../atoms/Button/Button'
import { ITicketItem } from '../../../store/ticket/types'

interface IProps {
  ticketLimit: number
  ticketTotalCount: number
  ticketItems: ITicketItem[]
  onAddLimit?: () => void
}

const MainContent = (props: IProps) => {
  const initialTabItems: ITabItem[] = [
    { id: 'cheap', value: 'Самый дешевый', checked: true },
    { id: 'fast', value: 'Самый быстрый', checked: false },
    { id: 'optimal', value: 'Оптимальный', checked: false },
  ]
  const handleAddLimitButtonClick = () =>
    props.onAddLimit ? props.onAddLimit() : null

  return (
    <MainContentStyled>
      <Wrapper>
        <Row gutter={true}>
          <Column size={4}>
            <Sidebar />
          </Column>
          <Column size={8}>
            <Row gutter={true}>
              <Column size={12}>
                <Tabs items={initialTabItems} />
              </Column>
              <Column size={12}>
                <Tickets items={props.ticketItems} />
              </Column>
              {props.ticketTotalCount > 5 &&
                props.ticketTotalCount - (props.ticketLimit + 5) > 0 && (
                  <Column size={12}>
                    <Button onClick={() => handleAddLimitButtonClick()}>
                      Показать еще 5 билетов!
                    </Button>
                  </Column>
                )}
            </Row>
          </Column>
        </Row>
      </Wrapper>
    </MainContentStyled>
  )
}

export default MainContent
