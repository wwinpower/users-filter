import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement | 'onClick' | 'value' | 'children' | 'className' | 'active'> {
    children?: React.ReactNode;
    className: string,

    onClick(value: any): void;

    active: boolean,
}

const Button = ({children, className, onClick, active, ...attr}: Props) => {
    const classes = classNames(styles.btn, className, active ? styles.active : null);

    return (
        <button className={classes} onClick={onClick} {...attr}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: 'More',
    className: 'btn',
    active: false
};

export default Button;

