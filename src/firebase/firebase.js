import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7dRaWa2nzNNp-dSWt5eGtFF2ks8mhYWI",
    authDomain: "expenses-ac0f3.firebaseapp.com",
    databaseURL: "https://expenses-ac0f3-default-rtdb.firebaseio.com",
    projectId: "expenses-ac0f3",
    storageBucket: "expenses-ac0f3.appspot.com",
    messagingSenderId: "446433936369",
    appId: "1:446433936369:web:489bf98c8af13fda8bba50",
    measurementId: "G-6RD0LKC2PM"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.database()
const googleAuth = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuth, db as default}


// db.ref('expenses').once('value').then((snap)=>{
//     const expenses = []
//     snap.forEach((expense) => {expenses.push(
//         {
//             id: expense.key,
//             ...expense.val()
//         })})


//     console.log(expenses)
// })

// db.ref('localtion').once('value').then((snap) => {
//     console.log(snap.val())
// }).catch((e)=> console.log(`err ${e}`))

// db.ref().set(
//     {
//         name : "My sNames",   
//         age : 30     ,
//         localtion : {
//             city:"pasig",
//             country:"ph"
//         }
//     }
// ).then((data) => console.log(`success ${data}`))
// .catch((e) => console.log(`failed ${e}`))

// db.ref().update({
//     name : "mike",
//     address : "secret",
//     age : 30
// })

