import React from 'react';
import './calc.css';

const Screen = (props) => {
    return (
        <input type="text" placeholder={props.prompt} readOnly className='screen' />
    );
};

export default Screen;