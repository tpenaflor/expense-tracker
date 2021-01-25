import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseFilter} from '../../components/ExpenseFilter'
import {DateRangePicker} from 'react-dates'

import moment from 'moment'
import {filtersReducerDefaultState} from '../../reducers/filters'

let props, wrapper;
beforeEach( ()=> {
    props = {
        sortByDate : jest.fn(),
        sortByAmount : jest.fn(),
        setTextFilter :  jest.fn(),
        setEndDate :  jest.fn(),
        setStartDate :  jest.fn(),
        history :{push:jest.fn()},
        filters : filtersReducerDefaultState
    }

    wrapper = shallow(<ExpenseFilter {...props} />)
})

afterEach( () => {
    expect(wrapper).toMatchSnapshot()
})

test('test filter expense page', ()=> {
    
})

test('test filter by text expense submit', ()=> {
    const inputText = "my input"
    wrapper.find('input').simulate('change', {target:{value: inputText}})
        
    expect(props.setTextFilter).toHaveBeenLastCalledWith(inputText)
})

test('test filter by date expense submit', ()=> {
    const filter = "date"
    wrapper.find('select').simulate('change', {target:{value: filter}})
        
    expect(props.sortByDate).toHaveBeenCalled()
})

test('test filter by amount expense submit', ()=> {
    const filter = "amount"
    wrapper.find('select').simulate('change', {target:{value: filter}})
        
    expect(props.sortByAmount).toHaveBeenCalled()
})


test('test valid date ranges change', ()=> {
    const startDate = moment(0)
    const endDate = moment(1)

    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate})
    
    expect(wrapper.state('startDate')).toBe(startDate)
    expect(wrapper.state('endDate')).toBe(endDate)
    expect(props.setEndDate).toHaveBeenLastCalledWith(endDate)
    expect(props.setStartDate).toHaveBeenLastCalledWith(startDate)
})


