import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button/>', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('.a-btn').exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
