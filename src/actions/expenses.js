
// import {v1} from 'uuid'
import db from '../firebase/firebase'

export const addExpensee = (expense) => ({
    type:"ADD_EXPENSE",
    expense
})

export const addExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {desc='', note='',amount=0, createAt=0} = expenseData
        const expense = {desc, note, amount, createAt}

        return db.ref('expenses').push(expense).then((snap) => {
            dispatch(addExpensee({id:snap.key, ...expense}))
        })
    }
}

export const removeExpensee = (id) => ({
    type:"REMOVE_EXPENSE",
    expense : {
        id
    }
})

export const removeExpense = (id) => {
    return (dispatch) => {
        
        return db.ref(`expenses/${id}`).remove().then(() =>{
            dispatch(removeExpensee(id))
        })
    }
}

export const editExpensee = (id, update) => ({
    type:"EDIT_EXPENSE",
    id,
    update
})

export const editExpense = (id, update) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`).update(update).then(() =>{
            dispatch(editExpensee(id, {update}))
        })
    }
}