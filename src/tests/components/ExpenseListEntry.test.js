import React from 'react'
import {shallow} from 'enzyme'

import ExpenseListEntry from '../../components/ExpenseEntry'
import expenses from '../fixtures/expenses'


test('test expense list entry', ()=>{
    const wrapper = shallow(<ExpenseListEntry {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})
