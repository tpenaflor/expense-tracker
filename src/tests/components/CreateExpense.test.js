import React from 'react'
import {shallow} from 'enzyme'
import {CreateExpense} from '../../components/CreateExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let onSubmit, history, wrapper;
beforeEach( ()=> {
    onSubmit =  jest.fn()
    history = {push:jest.fn()}
    wrapper = shallow(<CreateExpense onSubmit={onSubmit} history={history} />)
})

afterEach( () => {
    expect(wrapper).toMatchSnapshot()

})

test('test create expense page', ()=> {
    
})

test('test create expense submit', ()=> {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0])
        
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})
