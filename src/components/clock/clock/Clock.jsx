import React from 'react';
import { clock } from './clock.less';
import ClockItem from '../clock-item';

const Clock = () => (
    <div className={clock}>
        <ClockItem />
    </div>
);

export default Clock;
