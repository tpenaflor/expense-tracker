import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let props, wrapper;
beforeEach( ()=> {
    props = {
        editExpense : jest.fn(),
        removeExpense :  jest.fn(),
        history :{push:jest.fn()},
        expense : expenses[0]
    }

    wrapper = shallow(<EditExpensePage {...props} />)
})

afterEach( () => {
    expect(wrapper).toMatchSnapshot()
})

test('test edit expense page', ()=> {
    
})

test('test edit expense submit', ()=> {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0])
        
    expect(props.editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(props.history.push).toHaveBeenLastCalledWith('/')
})

test('test remove expense', ()=> {
    wrapper.find('button').simulate('click')
        
    expect(props.removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
    expect(props.history.push).toHaveBeenLastCalledWith('/')
})
