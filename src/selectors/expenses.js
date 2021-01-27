
import moment from 'moment'

export const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {

    return expenses.filter(({desc, createAt})=> {
        const createMoment = moment(createAt)
        // const startMatch = typeof startDate !== 'number' || createAt >= startDate
        // const endMatch = typeof endDate !== 'number' || createAt <= endDate
        const startMatch = startDate ? startDate.isSameOrBefore(createMoment, 'day'): true
        const endMatch = endDate ? endDate.isSameOrAfter(createMoment, 'day'): true
        const textMatch = desc.toLowerCase().includes(text.toLowerCase())
        
        return startMatch && endMatch && textMatch
    }).sort((a, b)=>{
        if (sortBy === 'date') return a.createAt - b.createAt
        if (sortBy === 'amount') return a.amount - b.amount
    });
}

export const getTotalExpenses = (expenses) => expenses.reduce((total, {amount}) => total += amount, 0)

export default getVisibleExpenses