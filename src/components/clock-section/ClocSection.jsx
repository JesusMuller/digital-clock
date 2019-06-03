import React from 'react';
import Clock from '../clock';
import { clockSection } from './ClockSection.less';

const ClockSection = () => (
    <section className={clockSection}>
        <Clock />
    </section>
);

export default ClockSection;
