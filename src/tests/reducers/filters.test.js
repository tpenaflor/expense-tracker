
import filtersReducer from '../../reducers/filters'
import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
}

test('default test', ()=>{
    const result = filtersReducer(undefined,{type:'a'})

    expect(result).toEqual(filtersReducerDefaultState)
})

test('test sort by date', ()=>{
    const result = filtersReducer({...filtersReducerDefaultState, sortBy:'amount'},{type:'SORT_BY_DATE'})

    expect(result).toEqual(filtersReducerDefaultState)
})

test('test sort by amount', ()=>{
    const result = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})

    expect(result).toEqual({...filtersReducerDefaultState, sortBy:'amount'})
})

test('test filter by text', ()=>{
    const result = filtersReducer(undefined,{type:'SET_TEXT_FILTER', text:"filter text"})

    expect(result).toEqual({...filtersReducerDefaultState, text:'filter text'})
})


test('test filter by start date', ()=>{
    const result = filtersReducer(undefined,{type:'SET_START_DATE', startDate:moment(0)} )

    expect(result).toEqual({...filtersReducerDefaultState, startDate:moment(0)})
})

test('test filter by end date', ()=>{
    const result = filtersReducer(undefined,{type:'SET_END_DATE', endDate:moment(0)} )

    expect(result).toEqual({...filtersReducerDefaultState, endDate:moment(0)})
})
// const filtersReducer = (state = filtersReducerDefaultState, {type, text, startDate, endDate}) => {
//     switch (type) {
//         case 'SET_TEXT_FILTER' :
//             return {...state, ...{text}}
//         case 'SORT_BY_DATE' :
//             return {...state, ...{sortBy:"date"}}
//         case 'SORT_BY_AMOUNT' :
//             return {...state, ...{sortBy:"amount"}}
//         case 'SET_START_DATE' :
//             return {...state, ...{startDate}}
//         case 'SET_END_DATE' :
//             return {...state, ...{endDate}}
//         default:
//             return state
//     }
// }

// export default filtersReducer