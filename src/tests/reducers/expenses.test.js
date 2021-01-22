
import expenseReducer from '../../reducers/expenses'

test('default test', ()=>{
    const result = expenseReducer(undefined, {type:'11'})

    expect(result).toEqual([])
})

test('test add expense', ()=>{
    const result = expenseReducer([{}], {type:'ADD_EXPENSE', expense:{}})

    expect(result).toEqual([{},{}])
})

test('test remove expense', ()=>{
    const result = expenseReducer([{id:123},{id:456}], {type:'REMOVE_EXPENSE', expense:{id:123}})

    expect(result).toEqual([{id:456}])
})

test('test edit expense', ()=>{
    const result = expenseReducer([{id:123},{id:456}], {type:'EDIT_EXPENSE', id:123, update:{note:"new note"}})

    expect(result).toEqual([{id:123, note:"new note"},{id:456}])
})