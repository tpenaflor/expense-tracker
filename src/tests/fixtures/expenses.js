import moment from 'moment'

export default [
    {
        id: "1",
        desc : "tea",
        note : "tea note",
        amount : 5000,
        createAt : moment(0)
    },
    {
        id: "2",
        desc : "coffee",
        note : "coffee note",
        amount : 2500000,
        createAt : moment(0).subtract(1, "month")
    },
    {
        id: "3",
        desc : "milk",
        note : "milk note",
        amount : 25000,
        createAt : moment(0).add(1, "month")
    }
]