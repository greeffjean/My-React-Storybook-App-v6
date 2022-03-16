import * as React from 'react';
import './Input.css';

type TProps = {
    name: string,
    placeHolder: string,
    type: string,
    className: string,
    required: boolean,
    label: string
}

const Input: React.FC<TProps> = ({name,  placeHolder, type, className, required, label }) => {
    return (
        <div>
            <div><label className={`label ${className}`} htmlFor={name}>{label}</label></div>
            <div><input id={name} name={name} className={`input ${className}`} type={type} placeholder={placeHolder} required={required} /></div>
        </div>)
}

export default Input