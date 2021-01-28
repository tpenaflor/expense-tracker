import {firebase, googleAuth} from '../firebase/firebase'

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuth)
    }
}

export const signOut = () => {
    return () => {
        console.log('to logout')
        return firebase.auth().signOut()
    }
}

export const setUser = (uid) => ({
    type:"SET_USER",
    uid
})

export const removeUser = () => ({
    type:"REMOVE_USER"
})