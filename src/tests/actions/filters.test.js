import moment from 'moment'
import {sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter} from '../../actions/filters'

test('test sortByDate',() => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE"
    })
})

test('test sortByAmount',() => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test('test setStartDate', () => {
    expect(setStartDate(moment(0))).toEqual({
        type : "SET_START_DATE",
        startDate : moment(0)
    })
})

test('test setEndDate', () => {
    expect(setEndDate(moment(0))).toEqual({
        type : "SET_END_DATE",
        endDate : moment(0)
    })
})

test('test setTextFilter', () => {
    const text = 'filter Text'
    expect(setTextFilter(text)).toEqual({
        type : "SET_TEXT_FILTER",
        text
    })
})