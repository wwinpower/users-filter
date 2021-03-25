import React from 'react';
import classes from './Loader.module.scss';

function Loader() {
    return (
        <div className={classes['loader']}>
            <div className={classes['loader__element']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['loader__element']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['loader__element']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['loader__element']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;