import React from 'react';
import { clock, middlePoint } from './clock.less';
import ClockItem from '../../clock-item';
import { CLOCK_NUMBERS } from '../../../constants';

const Clock = () => (
    <div className={clock}>
        {CLOCK_NUMBERS ?
            CLOCK_NUMBERS.map(number =>
                <ClockItem key={`item${number}`}
                    content={number}
                />) :
            null
        }
        <span className={middlePoint}>.</span>
    </div>
);

export default Clock;
