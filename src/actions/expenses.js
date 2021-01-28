
// import {v1} from 'uuid'
import db from '../firebase/firebase'

export const addExpensee = (expense) => ({
    type:"ADD_EXPENSE",
    expense
})

export const addExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        const {desc='', note='',amount=0, createAt=0} = expenseData
        const expense = {desc, note, amount, createAt}

        return db.ref(`expenses/${uid}`).push(expense).then((snap) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return db.ref(`expenses/${uid}/${id}`).remove().then(() =>{
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        return db.ref(`expenses/${uid}/${id}`).update(update).then(() =>{
            dispatch(editExpensee(id, update))
        })
    }
}

export const setExpensess = (expenses) => ({
    type : 'SET_EXPENSES',
    expenses
})

export const setExpenses = (uid) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        let expenses = []
        return db.ref(`expenses/${uid}`).once('value').then((snap) =>{
            snap.forEach((expense) => {
                expenses.push({id:expense.key, ...expense.val()})
            });

            dispatch(setExpensess(expenses))
        })
    }
}