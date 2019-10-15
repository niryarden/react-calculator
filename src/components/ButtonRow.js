import React from 'react';
import Button from './Button';

const ButtonRow = (props) => {
    return (
        props.items.map((item) => {
            return <Button value={item.value} onClick={item.onClick} key={item.value} />;
        })
    );
};

export default ButtonRow;