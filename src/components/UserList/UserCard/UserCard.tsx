import React from 'react';
import classes from "./UserCard.module.css";
import Button from "../../Button/Button";

interface Props {
    user:{
        id: number,
        name: string,
        username: string,
        email: string,
        street: string,
        companyName: string
    },
    open:(value:number)=>void
}


const UserCard = ({user:{id, name, username, email}, open}:Props) => {

    const createMarkup = (html: any) => {
        return {__html: html}
    }

    return (
        <>
            <article className={classes.Card}>
                <small dangerouslySetInnerHTML={createMarkup(username)}/>
                <figure>
                    <img className={classes['Card__photo']}
                         src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                         alt={username}/>
                </figure>
                <div className={classes['Card__content']}>
                    <h2 className={classes['Card__content__name']}><b dangerouslySetInnerHTML={createMarkup(name)}/>
                    </h2>
                    <p className={classes['Card__content__email']}><a href={email}
                                                                      dangerouslySetInnerHTML={createMarkup(email)}/>
                    </p>

                    <Button className={'btn'} onClick={() => open(id)}> More </Button>
                </div>
            </article>
        </>
    );
};

export default UserCard;