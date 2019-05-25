/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Countdown from '../Countdown'

test('Countdown renders the correct elements and props', () => {
  const OPTIONS = {
    endDate: '03/01/2020 10:55 AM',
    prefix: 'until my birthday!',
    cb: jest.fn(),
  }

  const wrapper = shallow(
    <Countdown options={OPTIONS} />
  )

  expect(wrapper.instance().props.options).toEqual(OPTIONS)

  expect(wrapper.find('span').length).toEqual(2)

  expect(
    wrapper
      .find('span')
      .first()
      .text()
  ).toContain('days')

  expect(
    wrapper
      .find('span')
      .last()
      .text()
  ).toContain('until my birthday!')

  setTimeout(() => {
    expect(wrapper.instance().props.options.cb).toBeCalled();
  }, 0)

  // console.log(wrapper.debug())
})
