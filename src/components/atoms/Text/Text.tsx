import React from 'react'
import { LargeText, MediumText, NormalText } from './TextStyled'

type TTextType = 'large-text' | 'medium-text' | 'normal-text'

interface IProps {
  type: TTextType
  weight?: 'regular' | 'semibold' | 'bold'
  transform?: 'uppercase' | 'lowercase'
  children?: React.ReactNode
}

const Text = (props: IProps) => {
  return (
    <React.Fragment>
      {props.type === 'large-text' && (
        <LargeText weight={props.weight} transform={props.transform}>
          {props.children}
        </LargeText>
      )}
      {props.type === 'medium-text' && (
        <MediumText weight={props.weight} transform={props.transform}>
          {props.children}
        </MediumText>
      )}
      {props.type === 'normal-text' && (
        <NormalText weight={props.weight} transform={props.transform}>
          {props.children}
        </NormalText>
      )}
    </React.Fragment>
  )
}

export default Text
