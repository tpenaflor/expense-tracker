
import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test('expenses should have different ids', () => {
    const exp1 = addExpense({desc:'exp1', note:'exp1 note', amount:350})
    const exp2 = addExpense({desc:'exp2', note:'exp2 note', amount:350})

    expect(exp1.expense.id).not.toBe(exp2.id)
})

test('remove expense action', () => {
    const res = {type:"REMOVE_EXPENSE", expense:{id:"myId"}}
    expect(removeExpense("myId")).toEqual(res)
})

// export const addExpense = ({desc='', note='',amount=0, createAt=0} = {}) => ({
//     type:"ADD_EXPENSE",
//     expense : {
//         id: v1(),
//         desc,
//         note,
//         amount,
//         createAt
//     }
// })

// export const removeExpense = (id) => ({
//     type:"REMOVE_EXPENSE",
//     expense : {
//         id
//     }
// })

// export const editExpense = (id, update) => ({
//     type:"EDIT_EXPENSE",
//     id,
//     update
// })