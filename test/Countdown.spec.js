import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Countdown from '../src/Countdown'

test('Countdown component', (t) => {
  let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'until my birthday!' }

  const wrapper = mount( <Countdown options={OPTIONS} /> )
  console.log(wrapper.props())
  t.pass(
    expect(wrapper.props().options).toEqual(OPTIONS)
  )

  t.end()
});
