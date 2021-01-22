
import moment from 'moment'
import getVisibleExpenses from '../../selectors/expenses'
import dummyExpenses from '../fixtures/expenses'

test("filter by date", ()=>{
    const filter = {
        text: "",
        sortBy : "date",
        startDate : undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(dummyExpenses, filter)
    expect(result).toEqual([dummyExpenses[1], dummyExpenses[0], dummyExpenses[2]])
})

test("filter by amount", ()=>{
    const filter = {
        text: "",
        sortBy : "amount",
        startDate : undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(dummyExpenses, filter)
    expect(result).toEqual([dummyExpenses[0], dummyExpenses[2], dummyExpenses[1]])
})


test("filter e", ()=>{
    const filter = {
        text: "e",
        sortBy : "date",
        startDate : undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(dummyExpenses, filter)
    expect(result).toEqual([dummyExpenses[1], dummyExpenses[0]])
})

test("filter startDate", ()=>{
    const filter = {
        text: "e",
        sortBy : "date",
        startDate : moment(0),
        endDate: undefined
    }

    const result = getVisibleExpenses(dummyExpenses, filter)
    expect(result).toEqual([dummyExpenses[0]])
})