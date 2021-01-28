
const authReducer = (state = {uid:undefined} , {type, uid}) => {
    switch (type) {
        case 'SET_USER' :
            return uid
        case 'REMOVE_USER' :
            return {uid: undefined}
        default:
            return state
    }
}

export default authReducer
