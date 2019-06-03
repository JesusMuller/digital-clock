import React from 'react';
import './ClockHour.less';
import { number } from 'prop-types';

const ClockHour = ({ content }) => (
    <span className={`hour${content}`}>{content}</span>
);

ClockHour.propTypes = {
    content: number.isRequired
};

export default ClockHour;
