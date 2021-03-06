import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'


test('test expense list', ()=>{
    const wrapper = shallow(<ExpenseList all={{expenses:expenses}} expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})


test('test expense list empty', ()=>{
    const wrapper = shallow(<ExpenseList all={{expenses:[]}} expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})