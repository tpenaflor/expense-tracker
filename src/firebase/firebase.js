import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

console.log({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABSE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID
  });


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

export { firebase, db as default}


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

