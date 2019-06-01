import React from 'react';
import { clock } from './clock.less';
import ClockItem from '../clock-item';
import { numbers } from '../../constants';

const Clock = () => (
    <div className={clock}>
        {numbers ?
            numbers.map(number =>
                <ClockItem key={`item${number}`}
                    content={number}
                />) :
            null
        }
    </div>
);

export default Clock;
