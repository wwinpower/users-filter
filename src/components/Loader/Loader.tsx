import React from 'react';
import classes from './Loader.module.scss';

function Loader() {
    return (
        <div className={classes['boxes']}>
            <div className={classes['box']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['box']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['box']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes['box']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;