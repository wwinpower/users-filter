import React from 'react';
import classes from './UserCard.module.css';
import classNames from 'classnames';
import Button from '../../Button/Button';

interface Props {
    user: {
        id: number,
        name: string,
        username: string,
        email: string,
        street: string,
        companyName: string
    },
    open: (value: number) => void,
    removeUser: (value: number) => void,
}


const UserCard = ({user: {id, name, username, email}, open, removeUser}: Props) => {

    const iconClasses = classNames('fas', 'fa-times', classes['card__remove']);

    const createMarkup = (html: any) => {
        return {__html: html}
    }

    return (
        <>
            <article className={classes.card}>
                <i className={iconClasses} onClick={() => removeUser(id)}/>
                <small dangerouslySetInnerHTML={createMarkup(username)}/>
                <figure>
                    <img
                        className={classes['card__photo']}
                        src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                        alt={username}
                    />
                </figure>
                <div className={classes['card__content']}>
                    <h2 className={classes['card__name']}>
                        <b dangerouslySetInnerHTML={createMarkup(name)}/>
                    </h2>
                    <p className={classes['card__email']}>
                        <a href={email} dangerouslySetInnerHTML={createMarkup(email)}/>
                    </p>
                    <Button className={'btn'} onClick={() => open(id)}> More </Button>
                </div>
            </article>
        </>
    );
};

export default UserCard;