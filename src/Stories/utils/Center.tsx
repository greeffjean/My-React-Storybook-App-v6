import * as React from 'react';

type TProps = {
    children: React.Component[]
}

const Center: React.FC<TProps> = ({ children }) => {
    return (
        <div style={{width: "100vw", display: "flex", justifyContent: "center"}}>
            {children}
        </div>
    )
}

export default Center