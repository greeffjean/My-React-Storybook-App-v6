import * as React from 'react';
import './Button.css';

type TProps = {
    title: string;
    event: () => void;
    type: string;
    size: string;
    disabled? : boolean;
}

const Button: React.FC<TProps> = ({ title, event, type, size, disabled }) => {
    return (<>
        <button disabled={disabled} className={`button ${type} ${size}`} onClick={() => event()}>
            {title}
        </button>
    </>);
}

export default Button;