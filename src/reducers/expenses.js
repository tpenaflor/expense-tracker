

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, {type, expense, id, update}) => {
    switch (type) {
        case 'ADD_EXPENSE' :
            return [...state, expense]
        case 'REMOVE_EXPENSE' :
            return state.filter(({id})=> id !== expense.id)
        case 'EDIT_EXPENSE' :
            return state.map((entry) => {
                if (entry.id === id){
                    return {...entry, ...update}
                }
                return entry
            })
        default:
            return state
    }
}

export default expensesReducer