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
import { IFilterItem } from '../../molecules/Filter/Filter'

interface IProps {
  ticketLimit: number
  ticketTotalCount: number
  ticketItems: ITicketItem[]
  onAddLimit?: () => void
  onSortChange?: (id: string | number) => void
  onFilterChange?: (checkedIdList: (string | number)[]) => void
}

const MainContent = (props: IProps) => {
  const initialTabItems: ITabItem[] = [
    { id: 'cheap', value: 'Самый дешевый', checked: true },
    { id: 'fast', value: 'Самый быстрый', checked: false },
    { id: 'optimal', value: 'Оптимальный', checked: false },
  ]
  const initialFilterItems: IFilterItem[] = [
    { id: 'wo-stop', value: 'Без пересадок', checked: false },
    { id: 'one-stop', value: '1 пересадка', checked: false },
    { id: 'two-stops', value: '2 пересадки', checked: false },
    { id: 'three-stops', value: '3 пересадки', checked: false },
  ]

  const handleAddLimitButtonClick = () =>
    props.onAddLimit ? props.onAddLimit() : null
  const handleSortChange = (id: string | number) =>
    props.onSortChange ? props.onSortChange(id) : null
  const handleFilterChange = (checkedIdList: (string | number)[]) =>
    props.onFilterChange ? props.onFilterChange(checkedIdList) : null

  return (
    <MainContentStyled>
      <Wrapper>
        <Row gutter={true}>
          <Column size={4} phabletSize={12} mobileSize={12}>
            <Sidebar
              filterItems={initialFilterItems}
              onFilterChange={(checkedIdList) =>
                handleFilterChange(checkedIdList)
              }
            />
          </Column>
          <Column size={8} phabletSize={12} mobileSize={12}>
            <Row gutter={true}>
              <Column size={12}>
                <Tabs
                  items={initialTabItems}
                  onChange={(id) => handleSortChange(id)}
                />
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
