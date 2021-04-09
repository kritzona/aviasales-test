import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Button from './Button'

const setupComponent = () => shallow(<Button />)

describe('Button', () => {
  let component: ShallowWrapper | null

  beforeEach(() => {
    component = setupComponent()
  })
  afterEach(() => {
    component = null
  })

  it('should render with text', () => {
    expect(
      component?.setProps({
        children: 'Кнопка',
      }),
    ).toMatchSnapshot()
  })

  it('should render without text', () => {
    expect(component).toMatchSnapshot()
  })

  describe('Button type', () => {
    it('should render with button type', () => {
      expect(
        component?.setProps({
          type: 'button',
          children: 'Кнопка',
        }),
      ).toMatchSnapshot()
    })

    it('should render with reset type', () => {
      expect(
        component?.setProps({
          type: 'reset',
          children: 'Кнопка',
        }),
      ).toMatchSnapshot()
    })

    it('should render with submit type', () => {
      expect(
        component?.setProps({
          type: 'submit',
          children: 'Кнопка',
        }),
      ).toMatchSnapshot()
    })
  })

  describe('Button event', () => {
    it('should render with onClick event', () => {
      expect(
        component?.setProps({
          type: 'button',
          children: 'Кнопка',
          onClick: () => {},
        }),
      ).toMatchSnapshot()
    })
  })
})
