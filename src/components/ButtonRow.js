import React from 'react';
import './style.css';

const ButtonRow = ({items}) => {
    return (
        <div>
            {items.map((item) => {
                return ( 
                <button onClick={() => item.onClick(item.value)} key={item.value}>
                    {item.value}
                </button>
                );
            })}
        </div>
    );
};

export default ButtonRow;