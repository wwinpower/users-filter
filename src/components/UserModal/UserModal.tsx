import classes from './UserModal.module.css';
import Button from '../Button/Button';
import React from 'react';

interface Props {
    street: string,
    company: string,
    close(): void
}

const UserModal = ({ street, company, close }: Props) => {
    return (
        <div className={classes['modal']}>
            <div className={classes['modal__body']}>
                <div className={classes['modal__about']}>
                    <figure>
                        <img src="https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg" alt="" />
                    </figure>
                    <div className={classes['modal__content']}>
                        <p>
                            <span>Company</span> <br />
                            <b>{company}</b>
                        </p>
                        <p>
                            <span>Street</span> <br />
                            <b>{street}</b>
                        </p>
                    </div>
                </div>
                <Button onClick={close}> Close </Button>
            </div>
        </div>
    );
};

export default UserModal;