import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as expenseActions from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('add expense action', () => {
    const exp1 = expenseActions.addExpensee(expenses[0])

    expect(exp1).toEqual({
        type:'ADD_EXPENSE',
        expense : expenses[0]
    })
})

test('test remove expense', () => {
    const res = {type:"REMOVE_EXPENSE", expense:{id:"myId"}}
    expect(expenseActions.removeExpensee("myId")).toEqual(res)
})

test('test add edit and remove expense with database', (done)=> {
    const store = createMockStore({});
    const expenseData = {
        desc : "rice",
        amount : 500,
        note : 'this is a note',
        createAt : 900
    }

    let id = undefined
    store.dispatch(expenseActions.addExpense(expenseData)).then(()=>{
        const act = store.getActions()
        id = act[0].expense.id

        expect(act[0]).toEqual({
            type:'ADD_EXPENSE',
            expense :{
                id,
                ...expenseData
            }
        })

        return store.dispatch(expenseActions.removeExpense(id))
    }).then(()=>{
        done()
    })
})