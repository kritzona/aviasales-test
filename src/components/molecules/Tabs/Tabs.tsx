import React, { useState } from 'react'
import TabsStyled, { TabItemWrapperStyled } from './TabsStyled'
import TabItem from './TabItem/TabItem'
import Text from '../../atoms/Text/Text'

export interface ITabItem {
  id: string | number
  value: string
  checked: boolean
}

interface IProps {
  items: ITabItem[]
}

const Tabs = (props: IProps) => {
  const [localItems, setLocalItems] = useState(props.items)

  const checkItem = (id: string | number) => {
    setLocalItems(
      localItems.map((item) => {
        item.checked = false
        if (item.id === id) item.checked = true

        return item
      }),
    )
  }

  return (
    <TabsStyled>
      {localItems.map((item) => {
        return (
          <TabItemWrapperStyled
            key={item.id}
            onClick={() => checkItem(item.id)}
          >
            <TabItem checked={item.checked}>
              <Text type="normal-text" transform="uppercase" weight="semibold">
                {item.value}
              </Text>
            </TabItem>
          </TabItemWrapperStyled>
        )
      })}
    </TabsStyled>
  )
}

export default Tabs
