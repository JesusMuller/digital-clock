import React from 'react';
import ClockContainer from '../clock';
import { clockSection } from './ClockSection.less';

const ClockSection = () => (
    <section className={clockSection}>
        <ClockContainer />
    </section>
);

export default ClockSection;
