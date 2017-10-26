import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Countdown from '../src/Countdown'

test('Countdown component', (t) => {
  setupJsdom()
  let OPTIONS = { endDate: '10/26/2018 02:33 AM', prefix: 'until my birthday!' }

  const wrapper = mount( <Countdown options={OPTIONS} /> )
  console.log(wrapper.props())
  t.pass(
    expect(wrapper.props().options).toEqual(OPTIONS)
  )

  t.end()
});
