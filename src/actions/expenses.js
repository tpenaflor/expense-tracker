
import {v1} from 'uuid'

export const addExpense = ({desc='', note='',amount=0, createAt=0} = {}) => ({
    type:"ADD_EXPENSE",
    expense : {
        id: v1(),
        desc,
        note,
        amount,
        createAt
    }
})

export const removeExpense = (id) => ({
    type:"REMOVE_EXPENSE",
    expense : {
        id
    }
})

export const editExpense = (id, update) => ({
    type:"EDIT_EXPENSE",
    id,
    update
})