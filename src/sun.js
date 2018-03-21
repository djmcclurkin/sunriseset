import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = {};
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(date) {
        this.setState({
            date
        });
        console.log(date);
    }

    render() {
        return(
            <div>
                <DayPicker
                    selectedDays={this.state.day}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}
