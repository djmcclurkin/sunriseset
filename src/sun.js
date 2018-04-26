import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import SolarCalc from 'solar-calc';

export default class extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            lat: 49.19,
            lon: 16.60,
            locName: 'Brno'
        };
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    componentWillMount() {
        this.handleDayClick(new Date());
    }

    handleDayClick(date) {
        const calc = new SolarCalc(date, this.state.lat, this.state.lon);

        this.setState({
            date,
            sunrise: calc.sunrise,
            sunset: calc.sunset
        });
        console.log(date);
    }

    render() {
        return(
            <div>
                <DayPicker
                    selectedDays={this.state.date}
                    onDayClick={this.handleDayClick}
                />
                <div>{String(this.state.sunrise)}</div>
                <div>{String(this.state.sunset)}</div>
            </div>
        );
    }
}
