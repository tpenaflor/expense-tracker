import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expense from '../fixtures/expenses'
import moment from 'moment'

import {SingleDatePicker} from 'react-dates'

test('test expense list', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('test render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()

    wrapper.find('button').simulate('click', {preventDefault:()=>{}})
    expect(wrapper.state('errorState').length).toBeGreaterThan(0)

    expect(wrapper).toMatchSnapshot()
} )


test('test change desc on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    
    const val = "new desc"
    wrapper.find('input').at(0).simulate('change', {target:{value: val}})

    expect(wrapper.state('desc')).toBe(val)
} )

test('test change amount valid on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    
    const val = "12312.12"
    wrapper.find('input').at(1).simulate('change', {target:{value: val}})

    expect(wrapper.state('amount')).toBe(val)
} )


test('test change amount invalid on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    
    const val = "invalid value"
    wrapper.find('input').at(1).simulate('change', {target:{value: val}})

    expect(wrapper.state('amount')).toBe('')
} )

test('should call onSubmit in valid submission', ()=>{
    const mySpy = jest.fn()
    const wrapper = shallow(<ExpenseForm {...expense[0]} onSubmit={mySpy}/>)

    wrapper.find('button').simulate('click', {preventDefault:()=>{}})
    
    expect(wrapper.state('errorState')).toBe('')
    expect(mySpy).toHaveBeenLastCalledWith({
        desc : expense[0].desc,
        amount : expense[0].amount,
        note : expense[0].note,
        createAt : expense[0].createAt.valueOf()
    })

})

test('test dateChange', ()=>{
    const now = moment(0);
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find(SingleDatePicker).prop('onDateChange')(now)

    expect(wrapper.state("createAt")).toBe(now)
})