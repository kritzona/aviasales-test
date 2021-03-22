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
          <Text type="normal-text" transform="uppercase">
            Самый дешевый
          </Text>
        </TabItem>
      </TabItemWrapperStyled>

      <TabItemWrapperStyled>
        <TabItem>
          <Text type="normal-text" transform="uppercase">
            Самый быстрый
          </Text>
        </TabItem>
      </TabItemWrapperStyled>

      <TabItemWrapperStyled>
        <TabItem>
          <Text type="normal-text" transform="uppercase">
            Оптимальный
          </Text>
        </TabItem>
      </TabItemWrapperStyled>
    </TabsStyled>
  )
}

export default Tabs
