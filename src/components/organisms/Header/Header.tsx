import React from 'react'
import HeaderStyled, { HeaderLogotypeStyled } from './HeaderStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Logotype from '../../atoms/Logotype/Logotype'

interface IProps {}

const Header = (props: IProps) => {
  return (
    <HeaderStyled>
      <Wrapper paddingY={true}>
        <HeaderLogotypeStyled>
          <Logotype />
        </HeaderLogotypeStyled>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
