import React, { Component, Fragment } from 'react';
import moment from 'moment';
import ClockHandle from './clock-handle';

class ClockHandleContainer extends Component {
    constructor() {
        super();
        this.updateHandles = this.updateHandles.bind(this);
        this.state = {
            hoursHandleDegrees: this.getHoursDegrees(),
            minutesHandleDegrees: this.getMinutesDegrees(),
            secondsHandleDegrees: this.getSecondsDegrees()
        };
    }

    componentWillMount() {
        this.secondsInterval = setInterval(this.updateHandles, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.secondsInterval);
    }

    updateHandles() {
        this.setState({
            hoursHandleDegrees: this.getHoursDegrees(),
            minutesHandleDegrees: this.getMinutesDegrees(),
            secondsHandleDegrees: this.getSecondsDegrees()
        });
    }

    getHoursDegrees() {
        return moment().hours() * 30 + moment().minutes() / 2;
    }

    getMinutesDegrees() {
        return moment().minutes() * 6;
    }

    getSecondsDegrees() {
        return moment().seconds() * 6;
    }

    render() {
        return (
            <Fragment>
                <ClockHandle degrees={this.state.hoursHandleDegrees}
                    width="0.5"
                    height="35"
                    paddingTop="110">
                    <span />
                </ClockHandle>
                <ClockHandle degrees={this.state.minutesHandleDegrees}
                    width="0.3"
                    height="42"
                    paddingTop="60">
                    <span />
                </ClockHandle>
                <ClockHandle degrees={this.state.secondsHandleDegrees}
                    width="0.2"
                    height="48"
                    paddingTop="10">
                    <span />
                </ClockHandle>
            </Fragment>
        );
    }
};

export default ClockHandleContainer;
