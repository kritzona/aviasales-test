import React from 'react'
import TabsStyled, { TabItemWrapperStyled } from './TabsStyled'
import TabItem from './TabItem/TabItem'
import Text from '../../atoms/Text/Text'

interface IProps {}

const Tabs = (props: IProps) => {
  return (
    <TabsStyled>
      <TabItemWrapperStyled>
        <TabItem>
          <Text type="normal-text" transform="uppercase" weight="semibold">
            Самый дешевый
          </Text>
        </TabItem>
      </TabItemWrapperStyled>

      <TabItemWrapperStyled>
        <TabItem>
          <Text type="normal-text" transform="uppercase" weight="semibold">
            Самый быстрый
          </Text>
        </TabItem>
      </TabItemWrapperStyled>

      <TabItemWrapperStyled>
        <TabItem>
          <Text type="normal-text" transform="uppercase" weight="semibold">
            Оптимальный
          </Text>
        </TabItem>
      </TabItemWrapperStyled>
    </TabsStyled>
  )
}

export default Tabs
