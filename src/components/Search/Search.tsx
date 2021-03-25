import React from 'react';
import classNames from 'classnames';
import classes from './Search.module.scss';
import Button from "../Button/Button";

interface Props {
    onClick: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    search: string
}

const Search = ({onClick, onChange, search}: Props) => {

    const cx = classNames(classes['search-form__button'], 'btn');

    return (
        <div className={classes['search-form']}>
            <input type='text' onChange={onChange} value={search} className={classes['search-form__input']}/>
            <Button className={cx} onClick={onClick} active={search.length > 0}>Reset</Button>
        </div>
    );
};

export default Search;
