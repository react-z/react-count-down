import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Countdown from '../src/Countdown'

test('Countdown component', (t) => {
  setupJsdom()
  let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'until my birthday!' }

  const wrapper = mount( <Countdown options={OPTIONS} /> )
  console.log(wrapper.props())
  t.pass(
    expect(wrapper.props().options).toEqual(OPTIONS)
  )

  t.end()
});
