import React from 'react';
import classes from './Search.module.scss';

import Button from "../Button/Button";

interface Props {
    onClick:()=>void,
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    search:string
}


const Search = ({onClick, onChange, search}:Props) => {

    return (
        <div className={classes['Search']}>
            <input type='text' onChange={onChange} value={search}/>
            <Button className={'btn'} onClick={onClick} active={search.length > 0}>Reset</Button>
        </div>
    );
};

export default Search;
