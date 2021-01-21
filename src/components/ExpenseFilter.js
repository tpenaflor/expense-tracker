import React from 'react'
import {connect} from 'react-redux'

import moment from 'moment'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import { setTextFilter, sortByDate, sortByAmount , setEndDate, setStartDate} from '../actions/filters'


class ExpenseFilter extends React.Component {
    state = {
        startDate : null,
        endDate : null,
        focusedInput : null
    }
    
    componentDidUpdate ({filters}) {
        // console.log('old',prevState)
        console.log('changes',this.state)
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate })

        if (startDate && endDate)
        {
            this.props.dispatch(setEndDate(endDate))
            this.props.dispatch(setStartDate(startDate))
        }
        
        if (!startDate && !endDate)
        {
            this.props.dispatch(setEndDate(null))
            this.props.dispatch(setStartDate(null))
        }
        // console.log(this.setState)
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e)=>(
                    props.dispatch(setTextFilter(e.target.value))
                )}/>
                <label>Sort By:</label>
                <select id='filterBy' value={this.props.filters.sortBy} onChange={(e)=>{
                if (e.target.value === 'amount') return this.props.dispatch(sortByAmount())
                this.props.dispatch(sortByDate())
                    
                }}>
                    <option value='amount'>Amount</option>
                    <option value='date'>Date</option>    
                </select>
                <DateRangePicker 
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange = {() => false}
                    showClearDates={true}

                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                />
            </div>
        )

    }
}

const mapStateToProp = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProp)(ExpenseFilter)