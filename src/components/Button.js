import React from 'react';

const style = {
    'width': '50px',
    'height': '50px',
    'fontSize': 'large',
    'margin': '5px 5px 5px 5px'
};

const Button = (props) => {
    return (
        <button style={style} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
};

export default Button;