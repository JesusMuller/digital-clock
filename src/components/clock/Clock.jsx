import React from 'react';
import { CLOCK_NUMBERS } from '../../constants';
import { clock, middlePoint } from './clock.less';
import ClockHour from '../clock-hour';
import ClockHandleContainer from '../clock-handle-container';

const Clock = () => (
    <div className={clock}>
        {CLOCK_NUMBERS ?
            CLOCK_NUMBERS.map(number =>
                <ClockHour key={`item${number}`}
                    content={number}
                />) :
            null
        }
        <span className={middlePoint}>.</span>
        <ClockHandleContainer />
    </div>
);

export default Clock;
