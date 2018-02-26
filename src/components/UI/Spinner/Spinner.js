import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.Spinner}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
);

export default spinner;