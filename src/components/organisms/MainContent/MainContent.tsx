import React from 'react'
import MainContentStyled from './MainContentStyled'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Sidebar from '../Sidebar/Sidebar'
import Tickets from '../Tickets/Tickets'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Tabs from '../../molecules/Tabs/Tabs'
import Button from '../../atoms/Button/Button'
import { ITicketItem } from '../../../store/ticket/types'

interface IProps {
  ticketItems: ITicketItem[]
}

const MainContent = (props: IProps) => {
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
                <Tabs />
              </Column>
              <Column size={12}>
                <Tickets />
              </Column>
              <Column size={12}>
                <Button>Показать еще 5 билетов!</Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Wrapper>
    </MainContentStyled>
  )
}

export default MainContent
