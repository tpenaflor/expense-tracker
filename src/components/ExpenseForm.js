import React from 'react'
import moment from 'moment'

import {SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'

class ExpenseForm extends React.Component {
    state = {
        desc: this.props.desc ? this.props.desc : '',
        note: this.props.note ? this.props.note : '',
        amount: this.props.amount ? (this.props.amount/100).toFixed(2).toString() : '',
        createAt: this.props.createAt ? moment(this.props.createAt) : moment(),
        calFocus : false,
        errorState : ''
    }

    onDescChange = (e) => {
        const desc = e.target.value
        this.setState(()=> ({desc}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(()=> ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            return this.setState(()=> ({amount}))
        
    }

    onDateChange = (createAt) => {
        if (createAt)
            this.setState(()=>({createAt}))
    }

    onFocusChange = ({focused : calFocus}) => {
        this.setState(()=>({calFocus}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.desc || !this.state.amount){
            this.setState(()=>({errorState : 'missing desc or amount'}))
        }
        else {
            this.setState(()=>({errorState : ''}))
            this.props.onSubmit({
                desc : this.state.desc,
                note : this.state.note,
                amount : parseFloat(this.state.amount, 10) * 100,
                createAt : this.state.createAt.valueOf()
            })
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text' 
                        value={this.state.desc} 
                        onChange={this.onDescChange}
                        placeholder='description' 
                        autoFocus />
                    <input 
                        value = {this.state.amount}
                        onChange={this.onAmountChange}
                        type='text' 
                        placeholder='amount' />
                    <SingleDatePicker 
                        date = {this.state.createAt}
                        onDateChange  = {this.onDateChange}
                        focused = {this.state.calFocus}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=> false}
                    />
                    <textarea 
                        value={this.state.note} 
                        onChange={this.onNoteChange}
                        placeholder='add note here (optional)'></textarea>
                    <button onClick={this.onSubmit}>Submit</button>
                    {this.state.errorState && <p>{this.state.errorState}</p>}
                </form>
            </div>
        )
    }
}

export default ExpenseForm