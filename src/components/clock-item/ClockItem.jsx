import React from 'react';
import './ClockItem.less';
import { string } from 'prop-types';

const ClockItem = ({ content }) => (
    <span className={`hour${content}`}>{content}</span>
);

ClockItem.propTypes = {
    content: string.isRequired
};

export default ClockItem;
